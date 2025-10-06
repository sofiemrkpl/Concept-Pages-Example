function getCart() {
  try { return JSON.parse(localStorage.getItem('cartItems')) || []; }
  catch { return []; }
}
function saveCart(items) {
  localStorage.setItem('cartItems', JSON.stringify(items));
}
function parseEuroToNumber(txt) {

    const clean = txt.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.');
  const n = parseFloat(clean);
  return isNaN(n) ? 0 : n;
}

document.querySelectorAll('.card_button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const card = button.closest('.packages_card');
    if (!card) return;

    const amountEl = card.querySelector('.amount');
    const priceText = amountEl ? amountEl.textContent.trim() : '-';

    const plan = {
      id: Date.now() + Math.random().toString(16).slice(2),
      name: card.dataset.name || 'Πρόγραμμα',
      type: card.dataset.type || 'generic',
      priceText,
      priceValue: parseEuroToNumber(priceText)
    };

    const cart = getCart();
    cart.push(plan);
    saveCart(cart);

   event.preventDefault(); openPopup();
  });
});
