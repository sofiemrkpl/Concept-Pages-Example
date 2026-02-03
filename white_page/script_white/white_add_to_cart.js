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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.package-cta').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const card = button.closest('.package-card');
      if (!card) return;

      const priceEl = card.querySelector('.package-price');
      const priceText = priceEl ? priceEl.textContent.trim() : '-';

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

      // show popup
      if (typeof openPopup === "function") openPopup();
    });
  });
});
