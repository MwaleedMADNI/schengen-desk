import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://znloqmhgramhgswhdmze.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'sb_publishable_ny_nRfNIvLu9N137kftBjQ_tJqK4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)