import { supabase } from '../lib/supabase'

export interface User {
  id: string
  name: string
  email: string
  language: 'en' | 'zh' | 'es'
}

let currentUser: User | null = null

// ── Register ──────────────────────────────────────────────
export async function registerUser(
  name: string,
  email: string,
  password: string,
  language: 'en' | 'zh' | 'es'
): Promise<{ success: boolean; message: string }> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, language },
      },
    })

    if (error) {
      if (error.message.includes('already registered') || error.message.includes('already exists')) {
        return { success: false, message: 'This email is already registered. Please log in instead.' }
      }
      return { success: false, message: error.message }
    }

    if (data.user && !data.session) {
      return { success: true, message: 'Account created! Check your inbox for a verification link, then log in.' }
    }

    // If auto-login (session present — email confirm turned off)
    if (data.user && data.session) {
      currentUser = {
        id: data.user.id,
        name: data.user.user_metadata?.name || email.split('@')[0],
        email: data.user.email!,
        language: (data.user.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
      }
      return { success: true, message: 'Registration successful!' }
    }

    return { success: true, message: 'Registration successful!' }
  } catch (err: any) {
    return { success: false, message: err?.message || 'Network error. Please try again.' }
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
    return { success: true, message: 'Login successful!', user }
  } catch (err: any) {
    return { success: false, message: err?.message || 'Network error. Please try again.' }
  }
}

// ── Logout ────────────────────────────────────────────────
export async function clearUser(): Promise<void> {
  currentUser = null
  await supabase.auth.signOut()
}

// ── Get User ──────────────────────────────────────────────
export async function getUser(): Promise<User | null> {
  // Prefer cached
  if (currentUser) return currentUser

  const { data } = await supabase.auth.getSession()
  if (!data.session) return null

  const u = data.session.user
  currentUser = {
    id: u.id,
    name: u.user_metadata?.name || u.email?.split('@')[0] || 'User',
    email: u.email || '',
    language: (u.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
  }
  return currentUser
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
      callback({
        id: u.id,
        name: u.user_metadata?.name || u.email?.split('@')[0] || 'User',
        email: u.email || '',
        language: (u.user_metadata?.language as 'en' | 'zh' | 'es') || 'en',
      })
    } else {
      currentUser = null
      callback(null)
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
    return { success: false, message: err?.message || 'Network error. Please try again.' }
  }
}

// ── Backward Compatibility ────────────────────────────────
export function getLocalUser(): { name: string; email: string } | null {
  if (currentUser) {
    return { name: currentUser.name, email: currentUser.email }
  }
  return null
}

export function clearLocalUser(): void {
  currentUser = null
}
