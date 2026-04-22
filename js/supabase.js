import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://yhfxowgclcziyniodogw.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZnhvd2djbGN6aXluaW9kb2d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NTY5NzEsImV4cCI6MjA5MjQzMjk3MX0.dt7iJZg44lXyyjsP62wena9_MNWXLBTI1KtEZXtYUxA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
export const ADMIN_EMAIL = 'admin@odette.com';
export const WA_NUMBER  = '21623581300'; // WhatsApp pour commandes rapides
export const FORMSUBMIT = 'odetteshoppers@gmail.com';
