// 1. Pintar las marcas en la página principal al cargar
function inicializarCatalogo() {
    const gridCategorias = document.getElementById('grid-categorias');
    let html = '';
    for (let cat in inventario) {
        html += `
            <div class="card-categoria" id="cat-${cat}" onclick="abrirMarca('${cat}')">
                <div class="cat-img-wrapper"><img src="${inventario[cat].img}" alt="${inventario[cat].titulo}"></div>
                <div class="info-categoria">
                    <svg class="cat-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    <h3>${inventario[cat].titulo}</h3>
                    <p class="cat-desc">${inventario[cat].desc}</p>
                    <span class="cat-link">Ver Productos</span>
                </div>
            </div>
        `;
    }
    gridCategorias.innerHTML = html;
}

// 2. Lógica de la Ventana Flotante (Overlay) con Subcategorías
function abrirMarca(categoria) {
    const overlay = document.getElementById('brand-overlay');
    const grid = document.getElementById('overlay-grid');
    const titulo = document.getElementById('overlay-title');
    const datos = inventario[categoria];

    titulo.innerText = datos.titulo;
    grid.innerHTML = ''; // Limpiamos el grid

    // Iteramos sobre las categorías internas de la marca
    for (let subcatName in datos.categorias) {
        let htmlSubcat = `<h3 class="subcategoria-titulo">${subcatName}</h3>`;
        htmlSubcat += `<div class="grid-productos">`; // Abrimos grid para esta subcategoría
        
        datos.categorias[subcatName].forEach(item => {
            htmlSubcat += `
                <div class="card-producto">
                    <img src="${item.img}" alt="${item.nombre}">
                    <div class="info-producto">
                        <span class="prod-tag">${item.tipo}</span>
                        <h4>${item.nombre}</h4>
                        <p>${item.desc}</p>
                        <span class="precio">${item.precio}</span>
                        <button class="btn-consultar" onclick="openChatWithText('Hola, vi el producto ${item.nombre} (${item.precio}) y quiero más información')">Consultar</button>
                    </div>
                </div>
            `;
        });
        
        htmlSubcat += `</div>`; // Cerramos grid
        grid.innerHTML += htmlSubcat;
    }

    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evita el scroll de fondo
}

function cerrarMarca() {
    document.getElementById('brand-overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el scroll
}

// 3. Lógica del Chatbot Local
let allProducts = [];
for(let cat in inventario){ 
    for(let subcat in inventario[cat].categorias){
        inventario[cat].categorias[subcat].forEach(p => allProducts.push({...p, category: cat}));
    }
}

function getLocalResponse(t) {
    const l = t.toLowerCase();
    if (l.includes('comprar') || l.includes('llevar') || l.includes('quiero') || l.includes('pedido') || l.includes('listo') || l.includes('whatsapp') || l.includes('pagar')) {
        return '¡Perfecto! Para finalizar tu compra y coordinar el pago y envío, por favor haz clic en el botón de WhatsApp. [FINALIZAR_PEDIDO]';
    }
    if (l.includes('rutina') || l.includes('skincare') || l.includes('manchas') || l.includes('granitos') || l.includes('piel de aelia')) {
        let r = `Te recomiendo el <strong>Combo Perfecto</strong>:<br>1) <strong>Agua Micelar 5 en 1</strong> para limpiar.<br>2) <strong>Mascarilla Piel D´ Aleia</strong> para aclarar y unificar el tono.<br>3) <strong>Crema Triple Acción</strong> para sellar.<br><br>Aquí te dejo la joya de la casa:`;
        let p = allProducts.find(x => x.nombre.includes("Piel de Aelia"));
        if(p) r += `<div class="chat-product-card"><img src="${p.img}"><div class="cpc-info"><h5>${p.nombre}</h5><span class="cpc-price">${p.precio}</span></div></div>`;
        return r;
    }
    if (l.includes('hombre') || l.includes('nitro') || l.includes('all black')) {
        let f = allProducts.filter(p => p.tipo.includes('Hombre')).slice(0, 2);
        let r = "Tenemos excelentes opciones para él:<br>";
        f.forEach(p => { r += `<div class="chat-product-card"><img src="${p.img}"><div class="cpc-info"><h5>${p.nombre}</h5><span class="cpc-price">${p.precio}</span></div></div>` });
        return r;
    }
    if (l.includes('perfume') || l.includes('fragancia')) {
        let f = allProducts.filter(p => p.tipo.includes('Perfume') || p.tipo.includes('Fragancia')).slice(0, 2);
        let r = "Mira estas opciones:<br>";
        f.forEach(p => { r += `<div class="chat-product-card"><img src="${p.img}"><div class="cpc-info"><h5>${p.nombre}</h5><span class="cpc-price">${p.precio}</span></div></div>` });
        return r;
    }
    return 'Puedo ayudarte a encontrar el producto ideal. Escríbeme qué necesitas, por ejemplo: "perfume para hombre", "rutina para granitos" o "Piel de Aleia".';
}

function toggleChat(f = false) {
    const c = document.getElementById('chat-box');
    if (f) { c.classList.add('active'); } else { c.classList.toggle('active'); }
}

function openChatWithText(t) {
    toggleChat(true);
    document.getElementById('chat-input').value = t;
    sendMessage();
}

function handleEnter(e) {
    if (e.key === 'Enter') sendMessage();
}

function sendMessage() {
    const i = document.getElementById('chat-input'), b = document.getElementById('chat-body'), t = i.value.trim();
    if (!t) return;
    const u = document.createElement('div');
    u.className = 'mensaje user';
    u.innerText = t;
    b.appendChild(u);
    i.value = '';
    b.scrollTop = b.scrollHeight;

    const tp = document.createElement('div');
    tp.className = 'mensaje bot typing';
    tp.innerText = 'Escribiendo...';
    b.appendChild(tp);
    b.scrollTop = b.scrollHeight;

    setTimeout(() => {
        tp.remove();
        const r = getLocalResponse(t);
        if (r.includes('[FINALIZAR_PEDIDO]')) {
            const fm = document.createElement('div');
            fm.className = 'mensaje bot';
            fm.innerHTML = r;
            b.appendChild(fm);
            const wc = document.createElement('div');
            wc.style.textAlign = 'center';
            wc.style.marginTop = '10px';
            wc.innerHTML = `<a href="https://wa.me/18097896543?text=Hola!%20Vengo%20de%20la%20web.%20Quiero%20coordinar%20mi%20pedido." target="_blank" class="wa-btn">Finalizar por WhatsApp</a>`;
            b.appendChild(wc);
        } else {
            const bm = document.createElement('div');
            bm.className = 'mensaje bot';
            bm.innerHTML = r;
            b.appendChild(bm);
        }
        b.scrollTop = b.scrollHeight;
    }, 600);
}

// Inicializar la web al cargar
window.onload = inicializarCatalogo;
