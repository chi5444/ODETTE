// js/products.js — ODETTE Product & Image Fetching

async function fetchProducts(filters = {}) {
  let query = supabase.from('products').select('*').eq('in_stock', true);

  if (filters.category && filters.category !== 'all') {
    if (filters.category === 'sale') {
      query = query.not('old_price', 'is', null);
    } else {
      query = query.eq('category', filters.category);
    }
  }

  if (filters.search && filters.search.trim()) {
    const s = filters.search.trim();
    query = query.or(
      `name_ar.ilike.%${s}%,name_en.ilike.%${s}%,brand.ilike.%${s}%`
    );
  }

  const { data, error } = await query.order('created_at', { ascending: false });
  if (error) { console.error('fetchProducts error:', error); return []; }
  return data || [];
}

async function fetchSiteImages() {
  const { data, error } = await supabase.from('site_images').select('*');
  if (error) { console.error('fetchSiteImages error:', error); return {}; }
  const map = {};
  (data || []).forEach(img => { map[img.key] = img.url; });
  return map;
}

async function fetchAllSiteImages() {
  const { data } = await supabase.from('site_images').select('*').order('section');
  return data || [];
}

async function updateSiteImage(key, url) {
  const { error } = await supabase
    .from('site_images')
    .update({ url, updated_at: new Date().toISOString() })
    .eq('key', key);
  return !error;
}

async function createProduct(product) {
  const { data, error } = await supabase.from('products').insert([product]).select().single();
  return { data, error };
}

async function updateProduct(id, product) {
  const { error } = await supabase.from('products').update(product).eq('id', id);
  return !error;
}

async function deleteProduct(id) {
  const { error } = await supabase.from('products').delete().eq('id', id);
  return !error;
}

async function fetchOrders() {
  const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
  return data || [];
}

async function updateOrderStatus(id, status) {
  const { error } = await supabase.from('orders').update({ status }).eq('id', id);
  return !error;
}

async function fetchBookings() {
  const { data } = await supabase.from('bookings').select('*').order('created_at', { ascending: false });
  return data || [];
}

async function updateBookingStatus(id, status) {
  const { error } = await supabase.from('bookings').update({ status }).eq('id', id);
  return !error;
}