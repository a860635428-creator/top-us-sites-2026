import { supabase } from '../lib/supabase'

export interface User {
  id: string
  name: string
  email: string
  language: 'en' | 'zh' | 'es'
}

const LOCAL_USER_KEY = 'usmle_auth_user'
const LOCAL_USERS_KEY = 'usmle_auth_users'

let currentUser: User | null = null

// ── Helpers ───────────────────────────────────────────────

function loadLocalUser(): User | null {
  try {
    const raw = localStorage.getItem(LOCAL_USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveLocalUser(user: User): void {
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user))
}

function clearLocalUser(): void {
  localStorage.removeItem(LOCAL_USER_KEY)
}

function getLocalUsers(): Record<string, { password: string; name: string; language: 'en' | 'zh' | 'es' }> {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveLocalUsers(users: Record<string, { password: string; name: string; language: 'en' | 'zh' | 'es' }>): void {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users))
}

function isNetworkError(msg: string): boolean {
  return (
    msg === 'Failed to fetch' ||
    msg.includes('fetch') ||
    msg.includes('network') ||
    msg.includes('timeout') ||
    msg.includes('abort')
  )
}

// ── Register ──────────────────────────────────────────────
export async function registerUser(
  name: string,
  email: string,
  password: string,
  language: 'en' | 'zh' | 'es'
): Promise<{ success: boolean; message: string }> {
  // Always try Supabase first
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, language } },
    })

    if (error) {
      if (error.message.includes('already registered') || error.message.includes('already exists')) {
        return { success: false, message: 'This email is already registered. Please log in instead.' }
      }
      return { success: false, message: error.message }
    }

    if (data.user && data.session) {
      currentUser = {
        id: data.user.id,
        name: data.user.user_metadata?.name || email.split('@')[0],
        email: data.user.email!,
        language: (data.user.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
      }
      return { success: true, message: 'Registration successful!' }
    }
    return { success: true, message: 'Account created! Check your inbox for a verification link, then log in.' }
  } catch (err: any) {
    const msg = err?.message || ''
    if (isNetworkError(msg)) {
      // Fallback: register in localStorage
      const users = getLocalUsers()
      if (users[email]) {
        return { success: false, message: 'This email is already registered. Please log in instead.' }
      }
      users[email] = { password, name, language }
      saveLocalUsers(users)
      const user: User = {
        id: 'local-' + email,
        name,
        email,
        language,
      }
      saveLocalUser(user)
      currentUser = user
      return {
        success: true,
        message: 'Account created in offline mode. Your data is saved locally on this browser.',
      }
    }
    return { success: false, message: msg }
  }
}

// ── Login ─────────────────────────────────────────────────
export async function verifyLogin(
  email: string,
  password: string
): Promise<{ success: boolean; message: string; user?: User }> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      if (error.message.includes('Invalid login')) {
        return { success: false, message: 'Invalid email or password.' }
      }
      if (error.message.includes('Email not confirmed')) {
        return { success: false, message: 'Please verify your email first. Check your inbox for the confirmation link.' }
      }
      return { success: false, message: error.message }
    }

    const u = data.user
    const user: User = {
      id: u.id,
      name: u.user_metadata?.name || email.split('@')[0],
      email: u.email!,
      language: (u.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
    }
    currentUser = user
    // Clear any stale local user data when Supabase login succeeds
    clearLocalUser()
    return { success: true, message: 'Login successful!', user }
  } catch (err: any) {
    const msg = err?.message || ''
    if (isNetworkError(msg)) {
      // Fallback: check localStorage
      const users = getLocalUsers()
      if (!users[email]) {
        return { success: false, message: 'Invalid email or password.' }
      }
      if (users[email].password !== password) {
        return { success: false, message: 'Invalid email or password.' }
      }
      const user: User = {
        id: 'local-' + email,
        name: users[email].name,
        email,
        language: users[email].language,
      }
      saveLocalUser(user)
      currentUser = user
      return {
        success: true,
        message: 'Signed in (offline mode). Your progress is saved locally on this browser.',
        user,
      }
    }
    return { success: false, message: msg }
  }
}

// ── Logout ────────────────────────────────────────────────
export async function clearUser(): Promise<void> {
  currentUser = null
  clearLocalUser()
  try {
    await supabase.auth.signOut()
  } catch {
    // Supabase signOut failing is fine if we're offline
  }
}

// ── Get User ──────────────────────────────────────────────
export async function getUser(): Promise<User | null> {
  // Prefer cached
  if (currentUser) return currentUser

  // Try Supabase session first
  try {
    const { data } = await supabase.auth.getSession()
    if (data.session) {
      const u = data.session.user
      const user: User = {
        id: u.id,
        name: u.user_metadata?.name || u.email?.split('@')[0] || 'User',
        email: u.email || '',
        language: (u.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
      }
      currentUser = user
      return user
    }
  } catch {
    // Supabase unreachable — fall through to localStorage
  }

  // Fall back to localStorage
  const localUser = loadLocalUser()
  if (localUser) {
    currentUser = localUser
    return localUser
  }
  return null
}

export function getCurrentUser(): User | null {
  return currentUser
}

export async function initAuth(): Promise<User | null> {
  return await getUser()
}

// ── Set User ──────────────────────────────────────────────
export function setUser(user: User): void {
  currentUser = user
  if (user) saveLocalUser(user)
}

// ── Is Logged In ──────────────────────────────────────────
export async function isLoggedIn(): Promise<boolean> {
  const user = await getUser()
  return user !== null
}

// ── Auth State Listener ───────────────────────────────────
export function onAuthChange(callback: (user: User | null) => void): () => void {
  // Check current state immediately
  getUser().then(callback)

  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    if (session) {
      const u = session.user
      const user: User = {
        id: u.id,
        name: u.user_metadata?.name || u.email?.split('@')[0] || 'User',
        email: u.email || '',
        language: (u.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
      }
      currentUser = user
      clearLocalUser() // Sync from Supabase overrides local
      callback(user)
    } else {
      // Only clear if local user isn't present (don't clobber offline session)
      const localUser = loadLocalUser()
      if (!localUser) {
        currentUser = null
        callback(null)
      }
    }
  })

  return () => data.subscription.unsubscribe()
}

// ── Password Reset ────────────────────────────────────────
export async function sendPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    })

    if (error) {
      return { success: false, message: error.message }
    }

    return { success: true, message: 'Password reset link sent! Check your inbox (and spam folder).' }
  } catch (err: any) {
    const msg = err?.message || ''
    if (isNetworkError(msg)) {
      return {
        success: false,
        message: 'Cannot connect to server. Password reset is unavailable in offline mode. Please ensure you have a stable internet connection.',
      }
    }
    return { success: false, message: msg }
  }
}

// ── Check if user is in offline mode ──────────────────────
export function isOfflineMode(): boolean {
  const user = currentUser
  if (!user) return false
  return user.id.startsWith('local-')
}

// ── Backward Compatibility ────────────────────────────────
export function getLocalUser(): { name: string; email: string } | null {
  if (currentUser) {
    return { name: currentUser.name, email: currentUser.email }
  }
  return null
}

export function clearLocalUserData(): void {
  currentUser = null
  clearLocalUser()
  try {
    localStorage.removeItem(LOCAL_USERS_KEY)
  } catch { /* ignore */ }
}
