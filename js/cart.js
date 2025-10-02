const CART = JSON.parse(localStorage.getItem('anilux-cart')) || [];
function saveCart(){ localStorage.setItem('anilux-cart', JSON.stringify(CART)); }
function renderCount(){ 
  const el = document.getElementById('cart-count'); 
  if(el) el.textContent = CART.reduce((s,i)=>s+i.qty,0); 
}
renderCount();

function addItem(p){
  const exist = CART.find(x=>x.id===p.id);
  exist ? exist.qty++ : CART.push({...p, qty:1});
  saveCart(); renderCount(); alert('Added to cart!');
}
function removeItem(id){
  const idx = CART.findIndex(x=>x.id===id);
  if(idx>-1){ CART.splice(idx,1); saveCart(); renderCount(); }
}

// Render cart page
if(location.pathname.endsWith('cart.html')) {
  const section = document.getElementById('cart-items');
  function renderCart(){
    if(!CART.length) { section.innerHTML = '<p>Your cart is empty.</p>'; return; }
    section.innerHTML = CART.map(i=>`
      <div class="cart-row">
        <img src="${i.img||''}" alt="" width="50" />
        <span>${i.name}</span>
        <span>${i.size||''}</span>
        <span>$${i.price}</span>
        <span>Qty: ${i.qty}</span>
        <button onclick="removeItem('${i.id}'); location.reload();">Remove</button>
      </div>
    `).join('');
  }
  renderCart();
  document.getElementById('checkout-btn').onclick = () => {
    alert('Demo checkout! Add Stripe later for real payments.');
    localStorage.removeItem('anilux-cart');
    window.location = 'success.html';
  };
}
