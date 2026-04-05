import { supabase, ADMIN_EMAIL } from './supabase.js';

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export function isAdmin(user) {
  return user && user.email === ADMIN_EMAIL;
}

export async function logout() {
  await supabase.auth.signOut();
  window.location.href = '/login.html';
}

export async function requireAuth(redirectTo = '/login.html') {
  const user = await getUser();
  if (!user) { window.location.href = redirectTo; return null; }
  return user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  if (!user || !isAdmin(user)) { window.location.href = '/'; return null; }
  return user;
}

// Update nav UI based on auth state
export async function updateNav() {
  const user = await getUser();
  const loginLink  = document.getElementById('navLogin');
  const logoutLink = document.getElementById('navLogout');
  const adminLink  = document.getElementById('navAdmin');
  const userInfo   = document.getElementById('navUser');

  if (user) {
    if (loginLink)  loginLink.style.display  = 'none';
    if (logoutLink) logoutLink.style.display  = 'flex';
    if (userInfo)   userInfo.textContent       = user.email.split('@')[0];
    if (adminLink && isAdmin(user)) adminLink.style.display = 'flex';
  } else {
    if (logoutLink) logoutLink.style.display  = 'none';
    if (adminLink)  adminLink.style.display   = 'none';
    if (loginLink)  loginLink.style.display   = 'flex';
  }
}