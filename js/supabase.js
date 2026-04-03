// js/supabase.js — ODETTE Store
// NOTE: using var (not const/let) so `supabase` is accessible globally
// across ALL script tags (auth.js, products.js, etc.)
var SUPABASE_URL  = 'https://aujfvtilrnfixbitrllc.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1amZ2dGlscm5maXhiaXRybGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDQyNDMsImV4cCI6MjA5MDc4MDI0M30.6nwkT7C-LRUqoEM3dctznVKOYvRcRW2NEyc1WPgtWms';
// window.supabase is the CDN lib → call createClient → reassign window.supabase to the client
var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabase; // ensure every script reaches it via window.supabase too