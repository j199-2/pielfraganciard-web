const inventario = {
    pielfraganciard: { titulo: "PielFraganciaRD", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80=w=600&auto=format&fit=crop", desc: "Nuestra línea de autoría propia. Cuidado intensivo artesanal.", items: [
        { nombre: "Mascarilla de Arroz (Piel de Aelia)", tipo: "Cuidado de la Piel", desc: "Tratamiento artesanal intensivo para aclarar manchas, unificar el tono y devolver la luminosidad natural.", precio: "RD$ 650", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80=w=500&auto=format&fit=crop" }
    ]},
    lbel: { titulo: "L'Bel", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80=w=600&auto=format&fit=crop", desc: "Alta cosmética, tratamiento facial y perfumería premium.", items: [
        { nombre: "Concentré Total Rostro", tipo: "Facial", desc: "Crema global inteligente que combate los 10 signos del envejecimiento celular.", precio: "RD$ 2,500", img: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?q=80=w=500&auto=format&fit=crop" },
        { nombre: "Mon L'Bel", tipo: "Fragancia Premium", desc: "Oriental-maderoso con magnolia blanca. Mujer empoderada.", precio: "RD$ 3,500", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80=w=500&auto=format&fit=crop" },
        { nombre: "Mithyka", tipo: "Fragancia Premium", desc: "Floral imponente con tiaré y sándalo. Alta concentración.", precio: "RD$ 3,800", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80=w=500&auto=format&fit=crop" },
        { nombre: "Base Concentré Total", tipo: "Maquillaje", desc: "Base líquida que unifica el tono y actúa como suero antiedad.", precio: "RD$ 1,850", img: "https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b6?q=80=w=500&auto=format&fit=crop" }
    ]},
    esika: { titulo: "Ésika", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80=w=600&auto=format&fit=crop", desc: "Color, conexión, maquillaje profesional y fragancias intensas.", items: [
        { nombre: "Agua Micelar 5 en 1", tipo: "Skincare", desc: "Limpia, hidrata, tonifica y refresca en un solo paso.", precio: "RD$ 895", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80=w=500&auto=format&fit=crop" },
        { nombre: "Vibranza", tipo: "Fragancia Mujer", desc: "Oriental dulce con orquídea de vainilla y flor de café.", precio: "RD$ 2,950", img: "https://images.unsplash.com/photo-1547887537-6158d3c4fc5d?q=80=w=500&auto=format&fit=crop" },
        { nombre: "Máscara Mega Full Size", tipo: "Maquillaje Ojos", desc: "Rímel alargador que estimula el crecimiento natural.", precio: "RD$ 1,095", img: "https://images.unsplash.com/photo-1631214540553-ff044a3ff7d1?q=80=w=500&auto=format&fit=crop" }
    ]},
    cyzone: { titulo: "Cyzone", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80=w=600&auto=format&fit=crop", desc: "Skincare dermatológico, maquillaje, moda, accesorios y perfumes dulces.", items: [
        { nombre: "Protector Solar Facial Skin First", tipo: "Skincare", desc: "Bloqueador solar facial dermatológicamente probado. 50 ml.", precio: "RD$ 280", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80=w=500&auto=format&fit=crop" },
        { nombre: "Máscara de Pestañas Max Volume Lash Studio Look", tipo: "Ojos", desc: "Rímel que aporta volumen extremo. Tono Black.", precio: "RD$ 221", img: "https://cyzonemexico.vtexassets.com/arquivos/ids/1158656-500-auto?v=639175227853730000&width=500&height=auto&aspect=true" },
        { nombre: "Labial Líquido Mate Y3K Studio Look", tipo: "Labios", desc: "Acabado mate aterciopelado. Tono Nude.", precio: "RD$ 170", img: "https://belcorpmexico.vtexassets.com/arquivos/ids/1167000-500-auto?v=639184482055670000&width=500&height=auto&aspect=true" },
        { nombre: "Base de Maquillaje Perfect Glow", tipo: "Rostro", desc: "Base para un rostro radiante. Tono Claro.", precio: "RD$ 348", img: "https://cyzonemexico.vtexassets.com/arquivos/ids/1161204-500-auto?v=639175269337070000&width=500&height=auto&aspect=true" },
        { nombre: "Perfume De Mujer Sweet Black Iconic", tipo: "Perfume Mujer", desc: "La nueva versión icónica de Sweet Black. 50 ml.", precio: "RD$ 408", img: "https://cyzonemexico.vtexassets.com/arquivos/ids/1153681-500-auto?v=639168852220370000&width=500&height=auto&aspect=true" }
    ]},
    para_el: { titulo: "Universo para Él", img: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80=w=600&auto=format&fit=crop", desc: "Fragancias masculinas, cuidado personal y accesorios para hombre.", items: [
        { nombre: "Perfume de hombre All Black VIP", tipo: "Fragancia Hombre", desc: "Edición VIP, intensa y exclusiva. 90 ml.", precio: "RD$ 510", img: "https://cyzonemexico.vtexassets.com/arquivos/ids/1163520-500-auto?v=639175310290230000&width=500&height=auto&aspect=true" },
        { nombre: "Perfume de hombre Nitro", tipo: "Fragancia Hombre", desc: "El clásico de Cyzone. Herbal audaz y ambarado.", precio: "RD$ 442", img: "https://cyzonemexico.vtexassets.com/arquivos/ids/1156393-500-auto?v=639175193055570000&width=500&height=auto&aspect=true" }
    ]}
};
