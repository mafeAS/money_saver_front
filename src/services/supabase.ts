import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://mxdtrudngnayqkkgzucq.supabase.co';
const supabaseKey = 'public-anon-key';
const supabase = createClient(supabaseUrl,supabaseKey);


//const {user, error} = await supabase.auth.signInAnonymously()