// js/auth.js — ODETTE Authentication

function isAdminEmail(email) {
  if (!email) return false;
  return email.startsWith('admin@') || email === 'admin@odette.com';
}

async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

async function isAdmin() {
  const user = await getUser();
  return user && isAdminEmail(user.email);
}

async function requireAuth(redirectTo = '/login.html') {
  const user = await getUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

async function requireAdmin() {
  const user = await getUser();
  if (!user || !isAdminEmail(user.email)) {
    window.location.href = '/';
    return null;
  }
  return user;
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/';
}

// Update nav UI based on auth state
async function updateAuthNav() {
  const user = await getUser();
  const authBtn = document.getElementById('auth-btn');
  const userMenu = document.getElementById('user-menu');
  const userEmail = document.getElementById('user-email');

  if (user) {
    if (authBtn) authBtn.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';
    if (userEmail) userEmail.textContent = user.email.split('@')[0];
  } else {
    if (authBtn) authBtn.style.display = 'flex';
    if (userMenu) userMenu.style.display = 'none';
  }
}