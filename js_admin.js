// Simple admin page, no backend — saves to localStorage for demo.
document.getElementById('add-item').onsubmit = function(e){
  e.preventDefault();
  let form = e.target;
  let name = form.name.value;
  let price = parseFloat(form.price.value);
  let size = form.size.value;
  let img = '';
  if(form.img.files[0]){
    img = URL.createObjectURL(form.img.files[0]);
  }
  let id = name.toLowerCase().replace(/\\s+/g,'-') + '-' + Date.now();
  let newProduct = {id, name, price, size, img};
  let products = JSON.parse(localStorage.getItem('anilux-products')||'[]');
  products.push(newProduct);
  localStorage.setItem('anilux-products', JSON.stringify(products));
  alert('Added! Refresh shop.html to see your item.');
  form.reset();
};