// ══ Odette i18n — shared language system ══
// Usage: import { t, currentLang, setLang, applyLang } from '/js/i18n.js';

export const TRANSLATIONS = {
  fr: {
    // NAV
    search_placeholder: 'Rechercher…',
    nav_all: 'Tout voir',
    nav_bags: 'Sacs',
    home: 'Accueil',
    store: 'Boutique',
    login: 'Connexion',
    account: 'Compte',
    cart: 'Panier',
    logout: 'Déconnexion',

    // HERO
    new_collection: 'Nouvelle Collection',
    discover: 'Découvrir',

    // BEST SELLERS
    best_sellers: 'Meilleures Ventes',
    see_all: 'Voir tout →',

    // FILTER
    filter_title: 'Filtrer',
    filter_price: 'Prix (DT)',
    filter_promo: 'Promotion',
    filter_promo_lbl: 'En solde seulement',
    filter_stock: 'Disponibilité',
    filter_stock_lbl: 'En stock',

    // SORT
    sort_default: 'Trier par: Défaut',
    sort_price_asc: 'Prix: Croissant',
    sort_price_desc: 'Prix: Décroissant',
    sort_discount: 'Meilleure réduction',

    // PRODUCT
    loading: 'Chargement…',
    no_results: 'Aucun sac trouvé',
    sold: 'vendus',
    sales: 'ventes',
    satisfied: 'clientes satisfaites',
    add_cart: 'Ajouter au panier',
    add_cart_short: 'Ajouter',
    add_cart_quick: '+ Ajouter au panier',
    added: 'Ajouté au panier',
    quick_order: 'Commande rapide',
    fast_delivery: 'Livraison rapide',
    badge_new: 'Nouveau',
    badge_hot: 'Tendance',
    products_count: (n) => `${n} produit${n !== 1 ? 's' : ''}`,
    color_selected: (c) => `Couleur sélectionnée: ${c}`,

    // CART DRAWER
    cart_title: 'Mon Panier',
    cart_empty: 'Votre panier est vide',
    cart_total: 'Total',
    checkout_btn: 'Commander →',

    // CHECKOUT
    checkout_title: 'Commander',
    your_info: 'Vos coordonnées',
    full_name: 'Nom complet',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse de livraison',
    notes: 'Notes',
    notes_ph: 'Instructions spéciales…',
    payment_method: 'Méthode de paiement',
    payment_cod: 'Paiement à la livraison',
    payment_cod_sub: 'Payez en espèces à la réception',
    summary: 'Récapitulatif',
    subtotal: 'Sous-total',
    shipping: 'Livraison',
    shipping_free: 'Gratuite',
    total: 'Total',
    confirm_order: 'Confirmer la commande',
    sending: 'Envoi en cours…',
    cart_empty_msg: 'Votre panier est vide',
    cart_empty_sub: 'Ajoutez des produits avant de commander.',
    back_store: '← Retour à la boutique',
    order_confirmed: 'Commande confirmée !',
    order_thanks: 'Merci pour votre commande. Notre équipe vous contactera dans les <strong>24 heures</strong>.',
    continue_shopping: '← Continuer mes achats',
    qty: 'Qté',
    required_fields: 'Veuillez remplir tous les champs obligatoires.',

    // QUICK ORDER MODAL
    qo_title: 'Commande Rapide',
    qo_sub: 'Remplissez vos coordonnées',
    order_sent: 'Commande envoyée !',
    order_sent_msg: 'Merci ! Nous vous contacterons dans les 24h pour confirmer votre commande.',
    continue: 'Continuer →',
    send_order: 'Envoyer la commande',
    sending_short: 'Envoi…',
    order_summary_lbl: 'Récapitulatif',

    // LOGIN
    login_title: 'Connexion',
    login_welcome: 'Bienvenue dans votre espace',
    sign_in: 'Se connecter',
    create_account: 'Créer un compte',
    password: 'Mot de passe',
    confirm_password: 'Confirmer le mot de passe',
    password_ph: '••••••••',
    password_min: 'Minimum 6 caractères',
    password_repeat: 'Répétez votre mot de passe',
    sign_in_btn: 'Se connecter →',
    create_btn: 'Créer mon compte →',
    back_store_link: '← Retour à la boutique',
    wrong_credentials: 'Email ou mot de passe incorrect.',
    passwords_mismatch: 'Les mots de passe ne correspondent pas.',
    account_created: 'Compte créé ! Vous pouvez maintenant vous connecter.',
    signing_in: 'Connexion…',
    creating: 'Création…',
  },

  en: {
    // NAV
    search_placeholder: 'Search…',
    nav_all: 'All',
    nav_bags: 'Bags',
    home: 'Home',
    store: 'Shop',
    login: 'Login',
    account: 'Account',
    cart: 'Cart',
    logout: 'Logout',

    // HERO
    new_collection: 'New Collection',
    discover: 'Discover',

    // BEST SELLERS
    best_sellers: 'Best Sellers',
    see_all: 'See all →',

    // FILTER
    filter_title: 'Filter',
    filter_price: 'Price (DT)',
    filter_promo: 'Promotions',
    filter_promo_lbl: 'On sale only',
    filter_stock: 'Availability',
    filter_stock_lbl: 'In stock',

    // SORT
    sort_default: 'Sort by: Default',
    sort_price_asc: 'Price: Low to High',
    sort_price_desc: 'Price: High to Low',
    sort_discount: 'Best discount',

    // PRODUCT
    loading: 'Loading…',
    no_results: 'No bags found',
    sold: 'sold',
    sales: 'sales',
    satisfied: 'satisfied customers',
    add_cart: 'Add to cart',
    add_cart_short: 'Add',
    add_cart_quick: '+ Add to cart',
    added: 'Added to cart',
    quick_order: 'Quick order',
    fast_delivery: 'Fast delivery',
    badge_new: 'New',
    badge_hot: 'Trending',
    products_count: (n) => `${n} product${n !== 1 ? 's' : ''}`,
    color_selected: (c) => `Selected color: ${c}`,

    // CART DRAWER
    cart_title: 'My Cart',
    cart_empty: 'Your cart is empty',
    cart_total: 'Total',
    checkout_btn: 'Checkout →',

    // CHECKOUT
    checkout_title: 'Checkout',
    your_info: 'Your information',
    full_name: 'Full name',
    phone: 'Phone',
    email: 'Email',
    address: 'Delivery address',
    notes: 'Notes',
    notes_ph: 'Special instructions…',
    payment_method: 'Payment method',
    payment_cod: 'Cash on delivery',
    payment_cod_sub: 'Pay in cash upon reception',
    summary: 'Order summary',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    shipping_free: 'Free',
    total: 'Total',
    confirm_order: 'Confirm order',
    sending: 'Sending…',
    cart_empty_msg: 'Your cart is empty',
    cart_empty_sub: 'Add products before ordering.',
    back_store: '← Back to shop',
    order_confirmed: 'Order confirmed!',
    order_thanks: 'Thank you for your order. Our team will contact you within <strong>24 hours</strong>.',
    continue_shopping: '← Continue shopping',
    qty: 'Qty',
    required_fields: 'Please fill in all required fields.',

    // QUICK ORDER MODAL
    qo_title: 'Quick Order',
    qo_sub: 'Fill in your details',
    order_sent: 'Order sent!',
    order_sent_msg: 'Thank you! We will contact you within 24h to confirm your order.',
    continue: 'Continue →',
    send_order: 'Send order',
    sending_short: 'Sending…',
    order_summary_lbl: 'Order summary',

    // LOGIN
    login_title: 'Login',
    login_welcome: 'Welcome to your space',
    sign_in: 'Sign in',
    create_account: 'Create account',
    password: 'Password',
    confirm_password: 'Confirm password',
    password_ph: '••••••••',
    password_min: 'Minimum 6 characters',
    password_repeat: 'Repeat your password',
    sign_in_btn: 'Sign in →',
    create_btn: 'Create my account →',
    back_store_link: '← Back to shop',
    wrong_credentials: 'Incorrect email or password.',
    passwords_mismatch: 'Passwords do not match.',
    account_created: 'Account created! You can now sign in.',
    signing_in: 'Signing in…',
    creating: 'Creating…',
  }
};

export let currentLang = localStorage.getItem('odette_lang') || 'fr';

export function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS['fr'][key] ?? key;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('odette_lang', lang);
}

export function getLangSwitcherHTML() {
  return `
  <div class="lang-menu" style="position:relative">
    <button class="lang-btn" onclick="toggleLangMenu()" id="langBtn" style="background:none;border:none;cursor:pointer;padding:7px;color:var(--ink);font-size:11px;font-weight:800;letter-spacing:1px;display:flex;align-items:center;gap:4px;transition:opacity .2s">
      <span id="langFlag">${currentLang.toUpperCase()}</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div id="langDropdown" style="position:absolute;top:calc(100% + 6px);right:0;background:white;border:1.5px solid #f0dde3;border-radius:10px;padding:6px;min-width:130px;box-shadow:0 8px 24px rgba(0,0,0,.1);display:none;z-index:300">
      <button onclick="setLangGlobal('fr')" id="optFR" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:7px;cursor:pointer;font-size:13px;font-weight:700;color:#1f1419;border:none;background:${currentLang==='fr'?'#fdf0f3':'none'};width:100%;text-align:left">🇫🇷 Français</button>
      <button onclick="setLangGlobal('en')" id="optEN" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:7px;cursor:pointer;font-size:13px;font-weight:700;color:#1f1419;border:none;background:${currentLang==='en'?'#fdf0f3':'none'};width:100%;text-align:left">🇬🇧 English</button>
    </div>
  </div>`;
}

export function initLangSwitcher(applyFn) {
  window.toggleLangMenu = function() {
    const dd = document.getElementById('langDropdown');
    dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
  };
  window.setLangGlobal = function(lang) {
    setLang(lang);
    document.getElementById('langDropdown').style.display = 'none';
    document.getElementById('langFlag').textContent = lang.toUpperCase();
    document.getElementById('optFR').style.background = lang === 'fr' ? '#fdf0f3' : 'none';
    document.getElementById('optEN').style.background = lang === 'en' ? '#fdf0f3' : 'none';
    if (applyFn) applyFn();
  };
  document.addEventListener('click', e => {
    if (!e.target.closest('.lang-menu') && !e.target.closest('[onclick="toggleLangMenu()"]')) {
      const dd = document.getElementById('langDropdown');
      if (dd) dd.style.display = 'none';
    }
  });
}