import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://msvbauaznbivvtnhvreq.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdmJhdWF6bmJpdnZ0bmh2cmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MTI5NzAsImV4cCI6MjA5MDk4ODk3MH0.Hznw4ocs8cguLWTauZxuguTFekhgj6yYcNestqv8LiQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
export const ADMIN_EMAIL = 'admin@odette.com';
export const WA_NUMBER  = '21623581300'; // WhatsApp pour commandes rapides
export const FORMSUBMIT = 'odetteshoppers@gmail.com';