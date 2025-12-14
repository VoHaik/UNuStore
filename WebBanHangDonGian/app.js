// ===== PRODUCTS DATA =====
const products = [
    // Gấu bông
    {
        id: 1,
        name: 'Gấu Bông Nâu Đáng Yêu',
        category: 'gau',
        price: 150000,
        priceRange: '150.000đ - 250.000đ',
        description: 'Gấu bông len handmade siêu dễ thương, làm từ len milk cotton mềm mại',
        image: 'image_Product/gau/z7321985027787_5e68e258129f106b3729a166ad6f5ac5.jpg',
        images: [
            'image_Product/gau/z7321985027787_5e68e258129f106b3729a166ad6f5ac5.jpg',
            'image_Product/gau/z7321985035816_108d4da8dc10a4479c00e7f984778313.jpg',
            'image_Product/gau/z7321985039540_f3d88933018af8d017ba7119b390bebf.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (15cm)', price: 150000 },
            { name: 'Vừa (20cm)', price: 200000 },
            { name: 'Lớn (25cm)', price: 250000 }
        ],
        featured: true
    },
    {
        id: 2,
        name: 'Gấu Bông Trắng Xinh Xắn',
        category: 'gau',
        price: 180000,
        priceRange: '180.000đ - 280.000đ',
        description: 'Gấu bông trắng tinh khôi, mềm mại và dễ thương',
        image: 'image_Product/gau/z7321985052515_63c0386b1e08cdbe633d9bff7a7ad936.jpg',
        images: [
            'image_Product/gau/z7321985052515_63c0386b1e08cdbe633d9bff7a7ad936.jpg',
            'image_Product/gau/z7321985058306_9f2c64e883f2d264c41550b769e53aac.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (15cm)', price: 180000 },
            { name: 'Vừa (20cm)', price: 230000 },
            { name: 'Lớn (25cm)', price: 280000 }
        ],
        featured: false
    },
    {
        id: 3,
        name: 'Gấu Bông Nhiều Màu Sắc',
        category: 'gau',
        price: 160000,
        priceRange: '160.000đ - 260.000đ',
        description: 'Gấu bông với nhiều màu sắc rực rỡ, phù hợp làm quà tặng',
        image: 'image_Product/gau/z7321985063090_40880bb8ef02935926a2730df991da5c.jpg',
        images: [
            'image_Product/gau/z7321985063090_40880bb8ef02935926a2730df991da5c.jpg',
            'image_Product/gau/z7321985072517_8096ae882ae64dd3683ed63f44be371a.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (15cm)', price: 160000 },
            { name: 'Vừa (20cm)', price: 210000 },
            { name: 'Lớn (25cm)', price: 260000 }
        ],
        featured: true
    },
    
    // Hoa len
    {
        id: 4,
        name: 'Bó Hoa Len Lãng Mạn',
        category: 'hoalen',
        price: 250000,
        priceRange: '250.000đ - 450.000đ',
        description: 'Bó hoa len handmade đẹp mắt, không bao giờ tàn',
        image: 'image_Product/HoaLen/z7321985080420_1cec7a0016331709463b444c6d8ab6f2.jpg',
        images: [
            'image_Product/HoaLen/z7321985080420_1cec7a0016331709463b444c6d8ab6f2.jpg',
            'image_Product/HoaLen/z7321986117264_06fafbadea9150263a708da4aac84055.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (5 bông)', price: 250000 },
            { name: 'Vừa (9 bông)', price: 350000 },
            { name: 'Lớn (15 bông)', price: 450000 }
        ],
        featured: true
    },
    {
        id: 5,
        name: 'Hoa Len Pastel Nhẹ Nhàng',
        category: 'hoalen',
        price: 280000,
        priceRange: '280.000đ - 480.000đ',
        description: 'Bó hoa với tông màu pastel nhẹ nhàng, thanh lịch',
        image: 'image_Product/HoaLen/z7321986118812_0f038e24515702724d831e2c05e70c8d.jpg',
        images: [
            'image_Product/HoaLen/z7321986118812_0f038e24515702724d831e2c05e70c8d.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (5 bông)', price: 280000 },
            { name: 'Vừa (9 bông)', price: 380000 },
            { name: 'Lớn (15 bông)', price: 480000 }
        ],
        featured: false
    },
    
    // Móc khóa
    {
        id: 6,
        name: 'Móc Khóa Thú Cưng Mini',
        category: 'mockhoa',
        price: 50000,
        priceRange: '50.000đ - 80.000đ',
        description: 'Móc khóa len hình thú cưng siêu đáng yêu',
        image: 'image_Product/MocKhoa/z7321981242631_b7f43a69b134964b2acba6780fb241b8.jpg',
        images: [
            'image_Product/MocKhoa/z7321981242631_b7f43a69b134964b2acba6780fb241b8.jpg',
            'image_Product/MocKhoa/z7321981259481_ffbeef24028f0724e51f24d311cbf26c.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (5cm)', price: 50000 },
            { name: 'Vừa (7cm)', price: 65000 },
            { name: 'Lớn (10cm)', price: 80000 }
        ],
        featured: true
    },
    {
        id: 7,
        name: 'Móc Khóa Hình Trái Tim',
        category: 'mockhoa',
        price: 45000,
        priceRange: '45.000đ - 75.000đ',
        description: 'Móc khóa hình trái tim, quà tặng ý nghĩa',
        image: 'image_Product/MocKhoa/z7321981259482_237c7d6875d74d54a0e61b674c9d684f.jpg',
        images: [
            'image_Product/MocKhoa/z7321981259482_237c7d6875d74d54a0e61b674c9d684f.jpg',
            'image_Product/MocKhoa/z7321981261472_7d53c77b7b1885da623635f3d871f7ef.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (5cm)', price: 45000 },
            { name: 'Vừa (7cm)', price: 60000 },
            { name: 'Lớn (10cm)', price: 75000 }
        ],
        featured: false
    },
    {
        id: 8,
        name: 'Móc Khóa Nhiều Hình Thú',
        category: 'mockhoa',
        price: 55000,
        priceRange: '55.000đ - 85.000đ',
        description: 'Bộ móc khóa đa dạng hình thú',
        image: 'image_Product/MocKhoa/z7321981263297_9b382ca34bf3a50b9cf6977b8b214858.jpg',
        images: [
            'image_Product/MocKhoa/z7321981263297_9b382ca34bf3a50b9cf6977b8b214858.jpg',
            'image_Product/MocKhoa/z7321981275484_17a190ccd222539c8119baf4b0c6fd7b.jpg',
            'image_Product/MocKhoa/z7321981283540_780df0021e181e0813f7b6ef8625f7b9.jpg'
        ],
        sizes: [
            { name: 'Nhỏ (5cm)', price: 55000 },
            { name: 'Vừa (7cm)', price: 70000 },
            { name: 'Lớn (10cm)', price: 85000 }
        ],
        featured: true
    },
    
    // Tú lam
    {
        id: 9,
        name: 'Tú Lam Handmade Cao Cấp',
        category: 'tulam',
        price: 300000,
        priceRange: '300.000đ - 500.000đ',
        description: 'Sản phẩm tú lam handmade độc đáo',
        image: 'image_Product/TuLam/z7321996645392_9755347b582012ed09a16d6940430b39.jpg',
        images: [
            'image_Product/TuLam/z7321996645392_9755347b582012ed09a16d6940430b39.jpg',
            'image_Product/TuLam/z7321996648663_c4f5f4a7f2150a47274401d9b7fdd749.jpg'
        ],
        sizes: [
            { name: 'Nhỏ', price: 300000 },
            { name: 'Vừa', price: 400000 },
            { name: 'Lớn', price: 500000 }
        ],
        featured: false
    },
    {
        id: 10,
        name: 'Tú Lam Màu Sắc Rực Rỡ',
        category: 'tulam',
        price: 350000,
        priceRange: '350.000đ - 550.000đ',
        description: 'Tú lam với màu sắc bắt mắt',
        image: 'image_Product/TuLam/z7321996660858_457cafa744404a78e5fd5d7d4ece5454.jpg',
        images: [
            'image_Product/TuLam/z7321996660858_457cafa744404a78e5fd5d7d4ece5454.jpg'
        ],
        sizes: [
            { name: 'Nhỏ', price: 350000 },
            { name: 'Vừa', price: 450000 },
            { name: 'Lớn', price: 550000 }
        ],
        featured: true
    }
];

// ===== CART FUNCTIONS =====
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(el => {
        el.textContent = count;
    });
}

function addToCart(productId, quantity = 1, size = null, giftPackage = false) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    
    // Determine price based on size
    let selectedPrice = product.price;
    let selectedSize = size || (product.sizes ? product.sizes[0].name : 'Mặc định');
    
    if (size && product.sizes) {
        const sizeObj = product.sizes.find(s => s.name === size);
        if (sizeObj) {
            selectedPrice = sizeObj.price;
        }
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.size === selectedSize &&
        item.giftPackage === giftPackage
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: selectedPrice,
            image: product.image,
            quantity: quantity,
            size: selectedSize,
            giftPackage: giftPackage,
            category: product.category
        });
    }

    saveCart(cart);
    
    // Show toast notification
    showToast('Đã thêm vào giỏ hàng!', 'success');
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCart();
}

function updateCartItemQuantity(index, quantity) {
    if (quantity < 1) return;
    
    const cart = getCart();
    cart[index].quantity = parseInt(quantity);
    saveCart(cart);
    loadCart();
}

function clearCart() {
    if (confirm('Bạn có chắc muốn xóa tất cả sản phẩm trong giỏ hàng?')) {
        localStorage.removeItem('cart');
        updateCartCount();
        loadCart();
    }
}

// ===== FORMAT FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
    const toastEl = document.getElementById('addToCartToast');
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        const toastBody = toastEl.querySelector('.toast-body');
        const toastHeader = toastEl.querySelector('.toast-header');
        
        toastBody.textContent = message;
        
        // Change color based on type
        if (type === 'success') {
            toastHeader.className = 'toast-header bg-success text-white';
        } else if (type === 'error') {
            toastHeader.className = 'toast-header bg-danger text-white';
        }
        
        toast.show();
    }
}

// ===== HOMEPAGE FUNCTIONS =====
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featured = products.filter(p => p.featured).slice(0, 4);
    
    container.innerHTML = featured.map(product => `
        <div class="col-md-3 col-sm-6">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="text-muted small">${product.priceRange}</p>
                    <div class="d-grid gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary">
                            <i class="fas fa-eye"></i> Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== PRODUCTS PAGE FUNCTIONS =====
function loadProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category') || 'all';
    
    let filteredProducts = products;
    
    // Apply category filter
    if (categoryFilter !== 'all') {
        filteredProducts = products.filter(p => p.category === categoryFilter);
    }
    
    displayProducts(filteredProducts);
    
    // Setup event listeners
    setupProductFilters();
}

function displayProducts(productsToDisplay) {
    const container = document.getElementById('productsGrid');
    const countElement = document.getElementById('productCount');
    const noResults = document.getElementById('noResults');
    
    if (productsToDisplay.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        countElement.textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    countElement.textContent = productsToDisplay.length;
    
    container.innerHTML = productsToDisplay.map(product => `
        <div class="col-md-4 col-sm-6">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <span class="badge bg-primary mb-2">${getCategoryName(product.category)}</span>
                    <h5 class="card-title">${product.name}</h5>
                    <p class="text-muted">${product.priceRange}</p>
                    <p class="card-text small">${product.description}</p>
                    <div class="d-grid gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary">
                            <i class="fas fa-eye"></i> Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const categories = {
        'gau': 'Gấu Bông',
        'hoalen': 'Hoa Len',
        'mockhoa': 'Móc Khóa',
        'tulam': 'Tú Lam'
    };
    return categories[category] || category;
}

function setupProductFilters() {
    // Category filter
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
    
    // Price filter
    const priceFilters = document.querySelectorAll('.price-filter');
    priceFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });
    
    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
    
    // Reset button
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }
}

function filterProducts() {
    let filtered = [...products];
    
    // Category filter
    const selectedCategory = document.querySelector('.category-filter:checked');
    if (selectedCategory && selectedCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory.value);
    }
    
    // Price filter
    const selectedPrices = Array.from(document.querySelectorAll('.price-filter:checked'));
    if (selectedPrices.length > 0) {
        filtered = filtered.filter(product => {
            return selectedPrices.some(priceFilter => {
                const [min, max] = priceFilter.value.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });
        });
    }
    
    // Sort
    const sortValue = document.getElementById('sortSelect')?.value;
    if (sortValue) {
        switch(sortValue) {
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
        }
    }
    
    displayProducts(filtered);
}

function resetFilters() {
    document.getElementById('catAll').checked = true;
    document.querySelectorAll('.price-filter').forEach(f => f.checked = false);
    document.getElementById('sortSelect').value = 'default';
    filterProducts();
}

// ===== PRODUCT DETAIL PAGE =====
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update page content
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.priceRange;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('breadcrumbProduct').textContent = product.name;
    
    // Main image
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Thumbnail images
    const thumbnailContainer = document.getElementById('thumbnailImages');
    if (product.images && product.images.length > 1) {
        thumbnailContainer.innerHTML = product.images.map((img, index) => `
            <img src="${img}" alt="${product.name}" class="rounded ${index === 0 ? 'active' : ''}" 
                 onclick="changeMainImage('${img}', this)">
        `).join('');
    }
    
    // Size buttons
    const sizeContainer = document.getElementById('sizeSelection');
    if (product.sizes && product.sizes.length > 0) {
        sizeContainer.querySelector('.d-flex').innerHTML = product.sizes.map((size, index) => `
            <button class="btn btn-outline-primary size-btn ${index === 0 ? 'active' : ''}" 
                    data-size="${size.name}" data-price="${size.price}" 
                    onclick="selectSize('${size.name}', ${size.price}, this)">
                ${size.name}<br><small>${formatPrice(size.price)}</small>
            </button>
        `).join('');
    }
    
    // Initialize values
    window.currentProduct = product;
    window.selectedSize = product.sizes[0].name;
    window.selectedPrice = product.sizes[0].price;
    updateTotalPrice();
    
    // Setup event listeners
    setupProductDetailEvents(product);
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

function changeMainImage(imageSrc, thumbnail) {
    document.getElementById('mainProductImage').src = imageSrc;
    document.querySelectorAll('.thumbnail-images img').forEach(img => {
        img.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

function selectSize(sizeName, price, button) {
    window.selectedSize = sizeName;
    window.selectedPrice = price;
    
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    
    updateTotalPrice();
}

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const giftPackage = document.getElementById('giftPackage').checked;
    
    let total = window.selectedPrice * quantity;
    if (giftPackage) {
        total += 10000 * quantity;
    }
    
    document.getElementById('totalPrice').textContent = formatPrice(total);
}

function setupProductDetailEvents(product) {
    // Quantity buttons
    document.getElementById('decreaseQty')?.addEventListener('click', () => {
        const qtyInput = document.getElementById('quantity');
        const currentQty = parseInt(qtyInput.value);
        if (currentQty > 1) {
            qtyInput.value = currentQty - 1;
            updateTotalPrice();
        }
    });
    
    document.getElementById('increaseQty')?.addEventListener('click', () => {
        const qtyInput = document.getElementById('quantity');
        const currentQty = parseInt(qtyInput.value);
        if (currentQty < 99) {
            qtyInput.value = currentQty + 1;
            updateTotalPrice();
        }
    });
    
    document.getElementById('quantity')?.addEventListener('change', updateTotalPrice);
    document.getElementById('giftPackage')?.addEventListener('change', updateTotalPrice);
    
    // Add to cart button
    document.getElementById('addToCartBtn')?.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        const giftPackage = document.getElementById('giftPackage').checked;
        addToCart(product.id, quantity, window.selectedSize, giftPackage);
    });
    
    // Buy now button
    document.getElementById('buyNowBtn')?.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').value);
        const giftPackage = document.getElementById('giftPackage').checked;
        addToCart(product.id, quantity, window.selectedSize, giftPackage);
        window.location.href = 'cart.html';
    });
}

function loadRelatedProducts(category, excludeId) {
    const container = document.getElementById('relatedProducts');
    if (!container) return;
    
    const related = products
        .filter(p => p.category === category && p.id !== excludeId)
        .slice(0, 4);
    
    container.innerHTML = related.map(product => `
        <div class="col-md-3 col-sm-6">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h6 class="card-title">${product.name}</h6>
                    <p class="text-muted small">${product.priceRange}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-sm btn-primary w-100">
                        Xem chi tiết
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== CART PAGE =====
function loadCart() {
    const cart = getCart();
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';
    
    // Display cart items
    if (cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                    </div>
                    <div class="col-md-4">
                        <h6>${item.name}</h6>
                        <p class="text-muted small mb-0">Kích thước: ${item.size}</p>
                        ${item.giftPackage ? '<p class="text-success small mb-0"><i class="fas fa-gift"></i> Có đóng gói quà</p>' : ''}
                    </div>
                    <div class="col-md-2">
                        <p class="mb-0">${formatPrice(item.price)}</p>
                        ${item.giftPackage ? '<small class="text-muted">+10.000đ quà</small>' : ''}
                    </div>
                    <div class="col-md-2">
                        <input type="number" class="form-control form-control-sm quantity-input" 
                               value="${item.quantity}" min="1" max="99"
                               onchange="updateCartItemQuantity(${index}, this.value)">
                    </div>
                    <div class="col-md-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <strong>${formatPrice((item.price + (item.giftPackage ? 10000 : 0)) * item.quantity)}</strong>
                            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update summary
    updateCartSummary(cart);
    
    // Setup clear cart button
    document.getElementById('clearCartBtn')?.addEventListener('click', clearCart);
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
    
    // Update item count
    const cartItemCount = document.getElementById('cartItemCount');
    if (cartItemCount) {
        cartItemCount.textContent = cart.length;
    }
}

function updateCartSummary(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const giftFee = cart.reduce((sum, item) => sum + (item.giftPackage ? 10000 * item.quantity : 0), 0);
    const shipping = subtotal >= 200000 ? 0 : 30000;
    const total = subtotal + giftFee + shipping;
    
    const subtotalEl = document.getElementById('subtotal');
    const giftFeeEl = document.getElementById('giftPackageFee');
    const shippingEl = document.getElementById('shippingFee');
    const totalEl = document.getElementById('totalAmount');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (giftFeeEl) giftFeeEl.textContent = formatPrice(giftFee);
    if (shippingEl) {
        shippingEl.textContent = shipping === 0 ? 'Miễn phí' : formatPrice(shipping);
        shippingEl.className = shipping === 0 ? 'text-success' : '';
    }
    if (totalEl) totalEl.textContent = formatPrice(total);
}

// ===== CHECKOUT PAGE =====
function loadCheckout() {
    const cart = getCart();
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    // Display order items
    const orderItemsContainer = document.getElementById('checkoutOrderItems');
    if (orderItemsContainer) {
        orderItemsContainer.innerHTML = cart.map(item => `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="d-flex align-items-center flex-grow-1">
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;" class="rounded me-2">
                    <div class="flex-grow-1">
                        <small class="d-block">${item.name}</small>
                        <small class="text-muted">${item.size} x${item.quantity}</small>
                    </div>
                </div>
                <strong class="ms-2">${formatPrice((item.price + (item.giftPackage ? 10000 : 0)) * item.quantity)}</strong>
            </div>
        `).join('');
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const giftFee = cart.reduce((sum, item) => sum + (item.giftPackage ? 10000 * item.quantity : 0), 0);
    const shipping = subtotal >= 200000 ? 0 : 30000;
    const total = subtotal + giftFee + shipping;
    
    document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkoutGiftFee').textContent = formatPrice(giftFee);
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Miễn phí' : formatPrice(shipping);
    document.getElementById('checkoutTotal').textContent = formatPrice(total);
    
    // Setup form submission
    setupCheckoutForm();
}

function setupCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate form
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('customerName').value,
            phone: document.getElementById('customerPhone').value,
            email: document.getElementById('customerEmail').value,
            province: document.getElementById('province').value,
            district: document.getElementById('district').value,
            ward: document.getElementById('ward').value,
            address: document.getElementById('address').value,
            note: document.getElementById('orderNote').value,
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
            cart: getCart()
        };
        
        // Generate order code
        const orderCode = 'UNU' + Date.now().toString().slice(-8);
        document.getElementById('orderCode').textContent = orderCode;
        
        // Clear cart
        localStorage.removeItem('cart');
        updateCartCount();
        
        // Show success modal
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
        
        // Optional: Save order to localStorage for order history
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({
            code: orderCode,
            date: new Date().toISOString(),
            data: formData
        });
        localStorage.setItem('orders', JSON.stringify(orders));
    });
}

// ===== COUPON CODE =====
function applyCoupon() {
    const couponCode = document.getElementById('couponCode')?.value.toUpperCase();
    const couponMessage = document.getElementById('couponMessage');
    
    const validCoupons = {
        'UNUNEW': { discount: 0.1, description: 'Giảm 10% cho khách hàng mới' },
        'UNU50K': { discount: 50000, description: 'Giảm 50.000đ' },
        'FREESHIP': { discount: 'freeship', description: 'Miễn phí vận chuyển' }
    };
    
    if (validCoupons[couponCode]) {
        const coupon = validCoupons[couponCode];
        if (couponMessage) {
            couponMessage.style.display = 'block';
            couponMessage.textContent = '✓ ' + coupon.description;
        }
        // Apply discount logic here
    } else {
        if (couponMessage) {
            couponMessage.style.display = 'block';
            couponMessage.className = 'text-danger';
            couponMessage.textContent = '✗ Mã giảm giá không hợp lệ';
        }
    }
}

// Setup coupon button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('applyCouponBtn')?.addEventListener('click', applyCoupon);
});

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Initialize based on current page
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }
    
    if (document.getElementById('productsGrid')) {
        loadProducts();
    }
    
    if (document.getElementById('mainProductImage')) {
        loadProductDetail();
    }
    
    if (document.getElementById('cartItems')) {
        loadCart();
    }
    
    if (document.getElementById('checkoutForm')) {
        loadCheckout();
    }
});

// ===== SEARCH FUNCTION =====
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim()) {
        window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Handle Enter key in search
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.id === 'searchInput') {
        searchProducts();
    }
});

// ===== ADDRESS DATA FUNCTIONS =====
function populateProvinces() {
    const provinceSelect = document.getElementById('province');
    if (!provinceSelect || !window.addressData) return;
    
    provinceSelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
    Object.keys(addressData).forEach(provinceKey => {
        const option = document.createElement('option');
        option.value = provinceKey;
        option.textContent = addressData[provinceKey].name || provinceKey;
        provinceSelect.appendChild(option);
    });
}

function updateDistricts() {
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');
    
    if (!provinceSelect || !districtSelect || !wardSelect || !window.addressData) return;
    
    const selectedProvince = provinceSelect.value;
    
    // Reset district and ward
    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    districtSelect.disabled = !selectedProvince;
    wardSelect.disabled = true;
    
    const districts = addressData[selectedProvince]?.districts;

    if (selectedProvince && districts) {
        Object.keys(districts).forEach(districtKey => {
            const option = document.createElement('option');
            option.value = districtKey;
            option.textContent = districts[districtKey].name || districtKey;
            districtSelect.appendChild(option);
        });
    }
}

function updateWards() {
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');
    
    if (!provinceSelect || !districtSelect || !wardSelect || !window.addressData) return;
    
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = districtSelect.value;
    
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    wardSelect.disabled = !selectedDistrict;
    
    const wards = addressData[selectedProvince]?.districts?.[selectedDistrict]?.wards;

    if (selectedProvince && selectedDistrict && Array.isArray(wards)) {
        wards.forEach(ward => {
            const option = document.createElement('option');
            option.value = ward;
            option.textContent = ward;
            wardSelect.appendChild(option);
        });
    }
}

// Initialize address dropdowns if on checkout page
if (document.getElementById('checkoutForm')) {
    populateProvinces();
    
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    
    if (provinceSelect) {
        provinceSelect.addEventListener('change', updateDistricts);
    }
    if (districtSelect) {
        districtSelect.addEventListener('change', updateWards);
    }
}

// ===== EXPORT FUNCTIONS FOR INLINE USAGE =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.clearCart = clearCart;
window.changeMainImage = changeMainImage;
window.selectSize = selectSize;
window.searchProducts = searchProducts;
