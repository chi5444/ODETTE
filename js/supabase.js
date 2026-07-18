import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://phnaknysszqokeeemsro.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBobmFrbnlzc3pxb2tlZWVtc3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0MDc3ODQsImV4cCI6MjA5OTk4Mzc4NH0.Jqg4FMzg4LCpJ4fqiPIbrhyfHgxSXuz2415JCft7i60';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
export const ADMIN_EMAIL = 'admin@odette.com';
export const WA_NUMBER   = '21623581300';
export const FORMSUBMIT  = 'odetteshoppers@gmail.com';
