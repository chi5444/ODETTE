import { supabase } from './supabase.js';

const CACHE_KEY = 'odette_products_cache';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

function getCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) { localStorage.removeItem(CACHE_KEY); return null; }
    return data;
  } catch { return null; }
}

function setCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() })); } catch {}
}

export function clearProductsCache() {
  localStorage.removeItem(CACHE_KEY);
}

/**
 * Fetch all products with optional filters.
 * Uses localStorage cache (10 min TTL) to reduce Supabase egress.
 */
export async function fetchProducts({ category, search, inStockOnly = false, sortBy = 'id' } = {}) {
  // Only cache the full unfiltered list
  const useCache = !category && !search && !inStockOnly && sortBy === 'id';

  let allData;
  if (useCache) {
    allData = getCache();
    if (!allData) {
      const { data, error } = await supabase.from('products').select('*').order('id', { ascending: true });
      if (error) { console.error('fetchProducts error:', error.message); return []; }
      allData = data || [];
      setCache(allData);
    }
  } else {
    let query = supabase.from('products').select('*');
    if (inStockOnly) query = query.eq('in_stock', true);
    if (category && category !== 'all') query = query.eq('category', category);
    if (search) query = query.ilike('title', `%${search}%`);
    switch (sortBy) {
      case 'price_asc':  query = query.order('price', { ascending: true });  break;
      case 'price_desc': query = query.order('price', { ascending: false }); break;
      case 'popular':    query = query.order('sold',  { ascending: false }); break;
      case 'newest':     query = query.order('id',    { ascending: false }); break;
      default:           query = query.order('id',    { ascending: true });
    }
    const { data, error } = await query;
    if (error) { console.error('fetchProducts error:', error.message); return []; }
    return data || [];
  }

  // Apply filters/sort in-memory on cached data
  let list = [...allData];
  if (inStockOnly) list = list.filter(p => p.in_stock);
  if (category && category !== 'all') list = list.filter(p => p.category === category);
  if (search) list = list.filter(p => p.title?.toLowerCase().includes(search.toLowerCase()));
  switch (sortBy) {
    case 'price_asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price_desc': list.sort((a,b) => b.price - a.price); break;
    case 'popular':    list.sort((a,b) => (b.sold||0) - (a.sold||0)); break;
    case 'newest':     list.sort((a,b) => b.id - a.id); break;
  }
  return list;
}

/**
 * Fetch a single product by id.
 * Tries cache first, then Supabase.
 */
export async function fetchProduct(id) {
  // Try from cache first
  const cached = getCache();
  if (cached) {
    const found = cached.find(p => String(p.id) === String(id));
    if (found) return found;
  }
  const { data, error } = await supabase
    .from('products').select('*').eq('id', id).single();
  if (error) { console.error('fetchProduct error:', error.message); return null; }
  return data;
}

/**
 * Fetch related products (from cache if available).
 */
export async function fetchRelated(product, limit = 4) {
  const cached = getCache();
  if (cached) {
    return cached
      .filter(p => p.category === product.category && p.in_stock && p.id !== product.id)
      .sort((a,b) => (b.sold||0) - (a.sold||0))
      .slice(0, limit);
  }
  const { data, error } = await supabase
    .from('products').select('*')
    .eq('category', product.category).eq('in_stock', true)
    .neq('id', product.id).order('sold', { ascending: false }).limit(limit);
  if (error) return [];
  return data || [];
}

/**
 * Return distinct categories (from cache if available).
 */
export async function fetchCategories() {
  const cached = getCache();
  if (cached) {
    const unique = [...new Set(cached.filter(p => p.in_stock).map(r => r.category).filter(Boolean))];
    return unique;
  }
  const { data, error } = await supabase.from('products').select('category').eq('in_stock', true);
  if (error) return [];
  const unique = [...new Set((data || []).map(r => r.category).filter(Boolean))];
  return unique;
}
