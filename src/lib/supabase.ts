import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zmqtvkswgjjartnwanqi.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_H19HL0FgV2qNi2dJ33guEw_nM0P7Q9J'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Check if Supabase is reachable (network-level test)
let cachedReachable: boolean | null = null
let cachedAt = 0

export async function isSupabaseReachable(): Promise<boolean> {
  // Cache result for 30 seconds to avoid repeated network checks
  const now = Date.now()
  if (cachedReachable !== null && now - cachedAt < 30000) return cachedReachable

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)
    await fetch(SUPABASE_URL, { method: 'HEAD', signal: controller.signal, mode: 'no-cors' })
    clearTimeout(timeout)
    cachedReachable = true
    cachedAt = now
    return true
  } catch {
    cachedReachable = false
    cachedAt = now
    return false
  }
}

// Type for user profile stored in our public.profiles table
export interface UserProfile {
  id: string
  name: string
  email: string
  language: 'en' | 'zh' | 'es'
  created_at: string
}
