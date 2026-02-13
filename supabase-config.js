// supabase-config.js

import { createClient } from '@supabase/supabase-js';

// Supabase URL and Anon Key for MarketX
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;