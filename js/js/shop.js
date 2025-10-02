fetch('data/products.json').then(r=>r.json()).then(draw);

function draw(list){
  const grid = document.getElementById('product-grid');
  grid.innerHTML = list.map((p,i)=>`
    <article class="card">
      <a href="product.html?id=${p.id}">
        <img src="${p.img||'images/placeholder.png'}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
      </a>
      <button onclick='addItem(${JSON.stringify(p)})'>Quick Add</button>
    </article>`).join('');
}
