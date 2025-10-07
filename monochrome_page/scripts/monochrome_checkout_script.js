
document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-items');
  const emptyTitle = document.querySelector('.empty-state .empty-title');


  const iconMap = {
    landline: '../assets/icons/phone-office.png',
    mobile: '../assets/icons/mobile_button.png',
    internet: '../assets/icons/router-wifi.png',
    tv: '../assets/icons/tv.png'
  };



  let cart = [];
  try { cart = JSON.parse(localStorage.getItem('cartItems')) || []; } catch { cart = []; }

  if (cart.length === 0) {
    if (emptyTitle) emptyTitle.style.display = '';



    const sumMonthly = document.getElementById('sum-monthly');
    if (sumMonthly) sumMonthly.textContent = '-';
    return;
  }
  if (emptyTitle) emptyTitle.style.display = 'none';


  cartContainer.innerHTML = '';
  cart.forEach((plan) => {
    const iconSrc = iconMap[plan.type] || '../assets/icons/box.png';

    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <div class="cart-item-inner">
        <div class="item-media">
          <div class="dev-icon">
            <img src="${iconSrc}" alt="icon">
          </div>
        </div>

        <div class="item-body">
          <h3>${plan.name}</h3>
        </div>

        <div class="item-pills">
          <div class="pill">
            <span class="label">Τέλη</span>
            <span class="value">-</span>
          </div>
          <div class="pill">
            <span class="label">Εφάπαξ Χρέωση</span>
            <span class="value">-</span>
          </div>
          <div class="pill is-accent">
            <span class="label">Μηνιαίο Πάγιο</span>
            <span class="value">${plan.priceText || '-'}</span>
          </div>
        </div>

        <div class="item-close">
          <button class="remove-item" data-id="${plan.id}" aria-label="Remove item">
            <img src="../assets/icons/cross.png" alt="X" style="width:16px;height:16px;opacity:.9">
          </button>
        </div>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });


  const totalMonthly = cart.reduce((sum, p) => sum + (p.priceValue || 0), 0);
  const sumMonthlyEl = document.getElementById('sum-monthly');
  if (sumMonthlyEl) {

    sumMonthlyEl.textContent = totalMonthly.toFixed(2).replace('.', ',') + '€';
  }
  const amountInput = document.getElementById('amount-input');
  if (amountInput) amountInput.value = totalMonthly.toFixed(2);

  // remove item
  cartContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.remove-item');
    if (!btn) return;

    const id = btn.getAttribute('data-id');
    const newCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(newCart));
    location.reload();
  });
});

function emptyCart() {
  localStorage.removeItem('cartItems');

  const cartContainer = document.getElementById('cart-items');
  if (cartContainer) cartContainer.innerHTML = '';

  const emptyTitle = document.querySelector('.empty-state .empty-title');
  if (emptyTitle) emptyTitle.style.display = '';

  const idsToReset = ['sum-fees', 'sum-once', 'sum-monthly'];
  idsToReset.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '-';
  });

  const amountInput = document.getElementById('amount-input');
  if (amountInput) amountInput.value = '0.00';
}