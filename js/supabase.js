// js/supabase.js — ODETTE Store
const SUPABASE_URL = 'https://aujfvtilrnfixbitrllc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1amZ2dGlscm5maXhiaXRybGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDQyNDMsImV4cCI6MjA5MDc4MDI0M30.6nwkT7C-LRUqoEM3dctznVKOYvRcRW2NEyc1WPgtWms';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);