// js/auth.js — ODETTE Authentication

function isAdminEmail(email) {
  if (!email) return false;
  return email.startsWith('admin@') || email === 'admin@odette.com';
}

async function getUser() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch(e) { return null; }
}

async function isAdmin() {
  const user = await getUser();
  return user && isAdminEmail(user.email);
}

async function requireAdmin() {
  const user = await getUser();
  if (!user || !isAdminEmail(user.email)) {
    window.location.href = '../index.html'; return null;
  }
  return user;
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signUp(email, password) {
  // ⚠️ Disable "Confirm email" in Supabase Dashboard:
  // Authentication → Settings → Confirm email → OFF
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: undefined }
  });
  return { data, error };
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/';
}

async function updateAuthNav() {
  try {
    const user = await getUser();
    const authBtn   = document.getElementById('auth-btn');
    const userMenu  = document.getElementById('user-menu');
    const userEmail = document.getElementById('user-email');
    const logoutBtn = document.getElementById('logout-btn');
    if (user) {
      if (authBtn)   authBtn.style.display   = 'none';
      if (userMenu)  userMenu.style.display  = 'flex';
      if (userEmail) userEmail.textContent   = user.email.split('@')[0];
      if (logoutBtn) logoutBtn.textContent   = 'خروج';
    } else {
      if (authBtn)   authBtn.style.display   = 'flex';
      if (userMenu)  userMenu.style.display  = 'none';
    }
  } catch(e) {}
}