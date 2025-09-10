import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@config/appConfig";

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// `persistSession`: When true (default), Supabase automatically saves
// the user's session (access and refresh tokens) to localStorage.
// This ensures the user remains logged in across page reloads.
// Set to false if you want to manage session persistence manually
// or store it elsewhere.
// export const supabaseNoPersist = createClient(supabaseUrl, supabaseAnonKey, {
// 	auth: {
// 		persistSession: false,   // don’t save recovery sessions in localStorage
// 		autoRefreshToken: false,
// 		detectSessionInUrl: true
// 	}
// });
