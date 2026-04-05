import { supabase } from './supabase.js';

/**
 * Fetch all products with optional filters.
 * @param {Object} opts
 * @param {string}  [opts.category]   — filter by category slug
 * @param {string}  [opts.search]     — case-insensitive title search
 * @param {boolean} [opts.inStockOnly=false]
 * @param {string}  [opts.sortBy='id'] — 'id' | 'price_asc' | 'price_desc' | 'newest' | 'popular'
 * @returns {Promise<Array>}
 */
export async function fetchProducts({ category, search, inStockOnly = false, sortBy = 'id' } = {}) {
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

/**
 * Fetch a single product by id.
 * @param {number|string} id
 * @returns {Promise<Object|null>}
 */
export async function fetchProduct(id) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  if (error) { console.error('fetchProduct error:', error.message); return null; }
  return data;
}

/**
 * Fetch products that share the same category as the given product,
 * excluding the product itself. Useful for "Related products" sections.
 * @param {Object} product
 * @param {number} [limit=4]
 * @returns {Promise<Array>}
 */
export async function fetchRelated(product, limit = 4) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', product.category)
    .eq('in_stock', true)
    .neq('id', product.id)
    .order('sold', { ascending: false })
    .limit(limit);
  if (error) return [];
  return data || [];
}

/**
 * Return the distinct list of categories currently present in the table.
 * @returns {Promise<string[]>}
 */
export async function fetchCategories() {
  const { data, error } = await supabase
    .from('products')
    .select('category')
    .eq('in_stock', true);
  if (error) return [];
  const unique = [...new Set((data || []).map(r => r.category).filter(Boolean))];
  return unique;
}