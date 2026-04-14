/* =========================================
   HAZYGRAILS — Main JavaScript
   ========================================= */

'use strict';

// ─── PRODUCT DATA ───────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    brand: 'Louis Vuitton',
    name: 'Neverfull MM Monogram',
    category: 'accessories',
    price: 720000,
    badge: 'new',
    img: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['One size'],
    desc: 'Az LV ikonikus Neverfull MM-je klasszikus Monogram Canvas anyagból, levehető pochette-tel és természetes bőr belsővel. Párizsban kézzel varrva.',
  },
  {
    id: 2,
    brand: 'Louis Vuitton',
    name: 'Speedy Bandoulière 30',
    category: 'accessories',
    price: 640000,
    badge: null,
    img: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['One size'],
    desc: 'Az LV Speedy 30 újraértelmezve levehető vállpánttal — Damier Ebene vászon, réz hardver, bőr fogantyúk.',
  },
  {
    id: 3,
    brand: 'Gucci',
    name: 'GG Marmont Matelassé Small',
    category: 'accessories',
    price: 580000,
    badge: 'sale',
    originalPrice: 720000,
    img: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['Mini', 'Small', 'Medium'],
    desc: 'Gucci Marmont steppelt matelassé bőrből, dupla G kapoccsal és arany hardverrel. Timeless statement piece.',
  },
  {
    id: 4,
    brand: 'Gucci',
    name: 'Dionysus GG Supreme',
    category: 'accessories',
    price: 490000,
    badge: null,
    img: 'https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['Small', 'Medium'],
    desc: 'Gucci Dionysus táska GG Supreme vászonból, tigerfej kapoccsal és levehető vállpánttal. Alessandro Michele ikonikus kreációja.',
  },
  {
    id: 5,
    brand: 'Dior',
    name: 'Lady Dior Lambskin Small',
    category: 'accessories',
    price: 1150000,
    badge: 'exclusive',
    img: 'https://images.pexels.com/photos/3731255/pexels-photo-3731255.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['Mini', 'Small', 'Medium'],
    desc: 'Diana hercegnő kedvenc táskája. Cannage steppelés, "D.I.O.R." charm betűk, puha báránybőr — a ház legelegánsabb darabja.',
  },
  {
    id: 6,
    brand: 'Nike × Dior',
    name: 'Air Jordan 1 High OG Dior',
    category: 'shoes',
    price: 3800000,
    badge: 'exclusive',
    img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['40', '41', '42', '43', '44', '45'],
    desc: 'A 2020-as Nike × Dior Air Jordan 1 kollaboráció — Dior Oblique mintával, szürke nappa bőrrel, mindössze 8480 pár készült.',
  },
  {
    id: 7,
    brand: 'Gucci',
    name: 'Rhyton Leather Sneaker',
    category: 'shoes',
    price: 235000,
    badge: 'sale',
    originalPrice: 310000,
    img: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    desc: 'Gucci Rhyton chunky bőr sneaker vintage Gucci felirattal a talpán. Oversize talpegység, prémium olasz bőr.',
  },
  {
    id: 8,
    brand: 'Balenciaga',
    name: 'Triple S Clear Sole',
    category: 'shoes',
    price: 295000,
    badge: 'new',
    img: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    desc: 'Balenciaga Triple S sneaker háromrétegű talpegységgel, hálós betétekkel és bőr panelekkel. Demna Gvasalia kultusz darabja.',
  },
  {
    id: 9,
    brand: 'Dior',
    name: 'B23 High-Top Oblique',
    category: 'shoes',
    price: 320000,
    badge: null,
    img: 'https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['39', '40', '41', '42', '43', '44'],
    desc: 'Dior B23 high-top sneaker Oblique monogram vászonból, bőr részletekkel és CD logós gumitalppal.',
  },
  {
    id: 10,
    brand: 'Supreme',
    name: 'Box Logo Hooded Sweatshirt',
    category: 'clothing',
    price: 195000,
    badge: 'exclusive',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    desc: 'Supreme kultikus Box Logo pulóvere prémium nehéz pamutból (12 oz). Limitált szezonális kiadás — autentikált, eredeti számlával.',
  },
  {
    id: 11,
    brand: 'Dior',
    name: 'Oblique Teddy Jacket',
    category: 'clothing',
    price: 980000,
    badge: 'new',
    img: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    desc: 'Dior Oblique monogram technikai Teddy kabát — Kim Jones keze nyoma, belül fleece bélés, kívül jacquard szövet.',
  },
  {
    id: 12,
    brand: 'Supreme',
    name: 'Leather Varsity Jacket',
    category: 'clothing',
    price: 365000,
    badge: 'sale',
    originalPrice: 480000,
    img: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: ['S', 'M', 'L', 'XL'],
    desc: 'Supreme valódi marhabőr varsity jacket gyapjú ujjakkal, csíkos szegélyekkel és hímzett logóval. Ritka, utólag beszerezett darab.',
  },
];

// ─── STATE ────────────────────────────────────────────────────────────────────

const state = {
  cart: [],
  wishlist: new Set(),
  filter: 'all',
  visibleCount: 8,
  selectedSizes: {},
};

// ─── DOM REFS ─────────────────────────────────────────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const DOM = {
  header: $('#header'),
  hamburger: $('#hamburger'),
  navLinks: $('#navLinks'),
  searchToggle: $('#searchToggle'),
  searchBar: $('#searchBar'),
  searchInput: $('#searchInput'),
  searchClose: $('#searchClose'),
  cartToggle: $('#cartToggle'),
  cartClose: $('#cartClose'),
  cartOverlay: $('#cartOverlay'),
  cartDrawer: $('#cartDrawer'),
  cartCount: $('#cartCount'),
  cartItems: $('#cartItems'),
  cartFooter: $('#cartFooter'),
  cartTotal: $('#cartTotal'),
  productsGrid: $('#productsGrid'),
  filterBtns: $$('.filter-btn'),
  loadMore: $('#loadMore'),
  modalOverlay: $('#modalOverlay'),
  modal: $('#productModal'),
  modalClose: $('#modalClose'),
  modalContent: $('#modalContent'),
  contactForm: $('#contactForm'),
  toast: $('#toast'),
};

// ─── NAV / HEADER ─────────────────────────────────────────────────────────────

function initHeader() {
  window.addEventListener('scroll', () => {
    DOM.header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  DOM.hamburger.addEventListener('click', () => {
    DOM.navLinks.classList.toggle('open');
    const spans = $$('span', DOM.hamburger);
    spans.forEach(s => s.classList.toggle('active'));
  });

  // Close mobile nav on link click
  $$('.nav__link', DOM.navLinks).forEach(link => {
    link.addEventListener('click', () => {
      DOM.navLinks.classList.remove('open');
    });
  });

  // Shop filter buttons (keep on-page filtering only on shop page)
  $$('.filter-btn[data-filter]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = el.dataset.filter;
      setFilter(filter);
      const productsSection = document.querySelector('#products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Category card clicks (homepage -> filtered shop section)
  $$('.cat-card[data-filter]').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.dataset.filter;
      if (!filter) return;
      window.location.href = `shop.html?filter=${encodeURIComponent(filter)}#products`;
    });
  });
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────

function initSearch() {
  if (DOM.searchToggle) {
    DOM.searchToggle.addEventListener('click', () => {
      DOM.searchBar.classList.toggle('open');
      if (DOM.searchBar.classList.contains('open')) {
        setTimeout(() => DOM.searchInput && DOM.searchInput.focus(), 100);
      }
    });
  }

  if (DOM.searchClose) {
    DOM.searchClose.addEventListener('click', () => {
      DOM.searchBar.classList.remove('open');
      if (DOM.searchInput) DOM.searchInput.value = '';
      renderProducts();
    });
  }

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', () => renderProducts());
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (DOM.searchBar) DOM.searchBar.classList.remove('open');
      if (DOM.searchInput) DOM.searchInput.value = '';
      closeModal();
      closeCart();
    }
  });
}

// ─── CART ─────────────────────────────────────────────────────────────────────

function openCart() {
  DOM.cartDrawer.classList.add('open');
  DOM.cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  DOM.cartDrawer.classList.remove('open');
  DOM.cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(product, size) {
  const key = `${product.id}-${size}`;
  const existing = state.cart.find(i => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ key, product, size, qty: 1 });
  }
  updateCartUI();
  showToast(`${product.brand} ${product.name} — ${t("toast_added")}`);
}

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  updateCartUI();
}

function updateCartUI() {
  const total = state.cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const count = state.cart.reduce((s, i) => s + i.qty, 0);

  // Count badge
  DOM.cartCount.textContent = count;
  DOM.cartCount.classList.toggle('visible', count > 0);

  // Items
  if (state.cart.length === 0) {
    DOM.cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <p>${t('cart_empty')}</p>
      </div>`;
    DOM.cartFooter.style.display = 'none';
  } else {
    DOM.cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item__img">
          <img src="${item.product.img}" alt="${item.product.name}" loading="lazy" />
        </div>
        <div class="cart-item__info">
          <p class="cart-item__brand">${item.product.brand}</p>
          <p class="cart-item__name">${item.product.name}</p>
          <p class="cart-item__size">Méret: ${item.size}${item.qty > 1 ? ` &times; ${item.qty}` : ''}</p>
          <div class="cart-item__bottom">
            <span class="cart-item__price">${formatPrice(item.product.price * item.qty)}</span>
            <button class="cart-item__remove" data-key="${item.key}">${t('cart_remove')}</button>
          </div>
        </div>
      </div>
    `).join('');

    // Remove buttons
    $$('.cart-item__remove', DOM.cartItems).forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
    });

    DOM.cartFooter.style.display = 'block';
    DOM.cartTotal.textContent = formatPrice(total);
  }
}

function initCart() {
  DOM.cartToggle.addEventListener('click', openCart);
  DOM.cartClose.addEventListener('click', closeCart);
  DOM.cartOverlay.addEventListener('click', closeCart);
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

function setFilter(filter) {
  state.filter = filter;
  state.visibleCount = 8;
  DOM.filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  if (DOM.productsGrid) renderProducts();
}

function getFilteredProducts() {
  const inlineInput = document.getElementById('searchInputInline');
  const query = (inlineInput ? inlineInput.value : DOM.searchInput ? DOM.searchInput.value : '').toLowerCase().trim();
  return PRODUCTS.filter(p => {
    const matchFilter =
      state.filter === 'all' ? true :
      state.filter === 'new' ? p.badge === 'new' :
      state.filter === 'sale' ? p.badge === 'sale' :
      p.category === state.filter;
    const matchSearch = !query ||
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    return matchFilter && matchSearch;
  });
}

function renderProducts() {
  if (!DOM.productsGrid) return;
  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, state.visibleCount);

  DOM.productsGrid.innerHTML = visible.map(p => productCardHTML(p)).join('');

  // Bind card events
  $$('.product-card', DOM.productsGrid).forEach(card => {
    const id = parseInt(card.dataset.id);
    const product = PRODUCTS.find(p => p.id === id);

    // Click opens modal
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-card__add') && !e.target.closest('.product-card__wish')) {
        openModal(product);
      }
    });

    // Add to cart
    const addBtn = card.querySelector('.product-card__add');
    if (addBtn) {
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = product.sizes[0];
        addToCart(product, size);
      });
    }

    // Wishlist
    const wishBtn = card.querySelector('.product-card__wish');
    if (wishBtn) {
      wishBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(id, wishBtn);
      });
      if (state.wishlist.has(id)) {
        wishBtn.classList.add('wishlisted');
      }
    }
  });

  // Load more visibility
  if (DOM.loadMore) DOM.loadMore.style.display = filtered.length > state.visibleCount ? 'inline-flex' : 'none';
}

function productCardHTML(p) {
  const badgeHTML = p.badge
    ? `<span class="product-card__badge badge--${p.badge}">${
        p.badge === 'new' ? t('badge_new') : p.badge === 'sale' ? t('badge_sale') : t('badge_excl')
      }</span>`
    : '';

  const priceHTML = p.badge === 'sale' && p.originalPrice
    ? `<span class="product-card__price product-card__price--sale">${formatPrice(p.price)}</span>
       <span class="product-card__price product-card__price--original">${formatPrice(p.originalPrice)}</span>`
    : `<span class="product-card__price">${formatPrice(p.price)}</span>`;

  const isWishlisted = state.wishlist.has(p.id);

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-card__img-wrap">
        ${badgeHTML}
        <img class="product-card__img" src="${p.img}" alt="${p.brand} ${p.name}" loading="lazy" />
        <div class="product-card__actions">
          <button class="product-card__add">${t('add_to_cart')}</button>
          <button class="product-card__wish ${isWishlisted ? 'wishlisted' : ''}" aria-label="Kívánságlista">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-card__info">
        <p class="product-card__brand">${p.brand}</p>
        <p class="product-card__name">${p.name}</p>
        <div class="product-card__prices">${priceHTML}</div>
      </div>
    </div>`;
}

function toggleWishlist(id, btn) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    btn.classList.remove('wishlisted');
    btn.querySelector('svg').setAttribute('fill', 'none');
    showToast(t('toast_wishlist_rem'));
  } else {
    state.wishlist.add(id);
    btn.classList.add('wishlisted');
    btn.querySelector('svg').setAttribute('fill', 'currentColor');
    showToast(t('toast_wishlist_add'));
  }
}

function initFilters() {
  DOM.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  if (DOM.loadMore) {
    DOM.loadMore.addEventListener('click', () => {
      state.visibleCount += 4;
      renderProducts();
    });
  }

  // Wire inline search (shop page)
  const inlineInput = document.getElementById('searchInputInline');
  if (inlineInput) {
    inlineInput.addEventListener('input', () => renderProducts());
  }

  // Apply ?filter= URL param on page load
  const urlFilter = new URLSearchParams(window.location.search).get('filter');
  if (urlFilter) setFilter(urlFilter);
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function openModal(product) {
  const priceHTML = product.badge === 'sale' && product.originalPrice
    ? `<span style="color: #e8886a">${formatPrice(product.price)}</span>
       <small style="color: var(--muted); text-decoration: line-through; font-size: 1rem; margin-left: 10px">${formatPrice(product.originalPrice)}</small>`
    : formatPrice(product.price);

  DOM.modalContent.innerHTML = `
    <img class="modal__img" src="${product.img}" alt="${product.brand} ${product.name}" />
    <div class="modal__info">
      <p class="modal__brand">${product.brand}</p>
      <h2 class="modal__name">${product.name}</h2>
      <p class="modal__price">${priceHTML}</p>
      <p class="modal__desc">${product.desc}</p>
      <div class="modal__sizes">
        <h4>Méret kiválasztása</h4>
        <div class="modal__size-grid">
          ${product.sizes.map((s, i) =>
            `<button class="size-btn${i === 0 ? ' selected' : ''}" data-size="${s}">${s}</button>`
          ).join('')}
        </div>
      </div>
      <div class="modal__cta">
        <button class="btn btn--gold btn--full modal__add-btn">Kosárba teszem</button>
        <button class="btn btn--outline btn--full">Egyedi méret / Érdeklődés</button>
      </div>
    </div>`;

  // Size selection
  let selectedSize = product.sizes[0];
  $$('.size-btn', DOM.modalContent).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.size-btn', DOM.modalContent).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  // Add to cart from modal
  $('.modal__add-btn', DOM.modalContent).addEventListener('click', () => {
    addToCart(product, selectedSize);
    closeModal();
    openCart();
  });

  DOM.modal.classList.add('open');
  DOM.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!DOM.modal) return;
  DOM.modal.classList.remove('open');
  DOM.modalOverlay.classList.remove('open');
  if (!DOM.cartDrawer.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function initModal() {
  if (!DOM.modalClose) return;
  DOM.modalClose.addEventListener('click', closeModal);
  DOM.modalOverlay.addEventListener('click', closeModal);
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function initContactForm() {
  if (!DOM.contactForm) return;

  // File upload
  const fileUpload = $('#fileUpload');
  const fileInput  = $('#images');
  const filePreview = $('#filePreview');
  let selectedFiles = [];

  function renderPreviews() {
    filePreview.innerHTML = '';
    selectedFiles.forEach((file, i) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const thumb = document.createElement('div');
        thumb.className = 'file-upload__thumb';
        thumb.innerHTML = `<img src="${e.target.result}" alt="${file.name}" />
          <button type="button" class="file-upload__thumb-remove" data-i="${i}">✕</button>`;
        filePreview.appendChild(thumb);
        thumb.querySelector('.file-upload__thumb-remove').addEventListener('click', () => {
          selectedFiles.splice(i, 1);
          renderPreviews();
        });
      };
      reader.readAsDataURL(file);
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const added = Array.from(fileInput.files);
      selectedFiles = [...selectedFiles, ...added].slice(0, 5);
      fileInput.value = '';
      renderPreviews();
    });

    // Drag & drop
    fileUpload.addEventListener('dragover', (e) => { e.preventDefault(); fileUpload.classList.add('drag-over'); });
    fileUpload.addEventListener('dragleave', () => fileUpload.classList.remove('drag-over'));
    fileUpload.addEventListener('drop', (e) => {
      e.preventDefault();
      fileUpload.classList.remove('drag-over');
      const dropped = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
      selectedFiles = [...selectedFiles, ...dropped].slice(0, 5);
      renderPreviews();
    });
  }

  DOM.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast(t('toast_sent'));
    DOM.contactForm.reset();
    selectedFiles = [];
    if (filePreview) filePreview.innerHTML = '';
  });
}

// ─── TOAST ────────────────────────────────────────────────────────────────────

let toastTimer = null;
function showToast(message) {
  DOM.toast.textContent = message;
  DOM.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => DOM.toast.classList.remove('show'), 3000);
}

// ─── UTILS ────────────────────────────────────────────────────────────────────

function formatPrice(n) {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(n);
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────────────────────

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  const animateTargets = [
    ...$$('.service-card'),
    ...$$('.contact__info'),
    ...$$('.contact__form'),
    ...$$('.value-item'),
    ...$$('.stat'),
    ...$$('.cat-card'),
  ];

  animateTargets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(el);
  });
}

// ─── SMOOTH ANCHOR SCROLLING ──────────────────────────────────────────────────

function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) + 16;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

// ─── LANGUAGE TOGGLE ──────────────────────────────────────────────────────────

function initLang() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = currentLang === 'hu' ? 'en' : 'hu';
    setLang(next);
    document.documentElement.lang = next;
    renderProducts(); // re-render badges/buttons in new lang
  });
  applyTranslations();
  updateLangBtn();
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSearch();
  initCart();
  initFilters();
  initModal();
  initContactForm();
  initScrollAnimations();
  initSmoothScroll();
  renderProducts();
  updateCartUI();
  initLang();
});
