import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zmqtvkswgjjartnwanqi.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_H19HL0FgV2qNi2dJ33guEw_nM0P7Q9J'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Type for user profile stored in our public.profiles table
export interface UserProfile {
  id: string
  name: string
  email: string
  language: 'en' | 'zh' | 'es'
  created_at: string
}
