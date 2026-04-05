const CART_KEY = 'odette_cart';

export function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
}

export function addToCart(product, qty = 1) {
  const cart = getCart();
  const ex = cart.find(i => i.id === product.id);
  if (ex) ex.qty += qty;
  else cart.push({ ...product, qty });
  saveCart(cart);
  return cart;
}

export function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  return cart;
}

export function updateQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) return removeFromCart(id);
  cart = cart.map(i => i.id === id ? { ...i, qty } : i);
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
}

export function getTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

export function getCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}