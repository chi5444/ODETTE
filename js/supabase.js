import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://spiyiamcrwwnbmdcwoir.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwaXlpYW1jcnd3bmJtZGN3b2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NzYzNzQsImV4cCI6MjEwMzQ1MjM3NH0.2avgFv2aPopbvLLerJxOuaSSScjQKxbpDOJN6Rx0ol4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
export const ADMIN_EMAIL = 'admin@odette.com';
export const WA_NUMBER   = '21623581300';
export const FORMSUBMIT  = 'odetteshoppers@gmail.com';
