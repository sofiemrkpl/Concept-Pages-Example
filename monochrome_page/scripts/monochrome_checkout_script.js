document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.getElementById('cart-items');
  const emptyTitle = document.querySelector('.empty-state .empty-title');
  const saved = localStorage.getItem('selectedPlan');

  if (saved) {
    const plan = JSON.parse(saved);

    if (emptyTitle) emptyTitle.style.display = 'none';

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <div class="cart-item-inner">
        <!-- left icon + label -->
        <div class="item-media">
          <div class="dev-icon">
            <img src="../assets/icons/tv.png" alt="icon">
          </div>
          <span>${plan.type ? plan.type.toUpperCase() : 'PAKETO'}</span>
        </div>

        <!-- center text -->
        <div class="item-body">
          <h3>${plan.name || 'Πρόγραμμα'}</h3>
          <p class="subtitle">
            <span class="chip">
              <img src="../assets/icons/film.png" alt="" style="width:12px;height:12px;opacity:.85">
            </span>
            Πλούσιο κινηματογραφικό περιεχόμενο
          </p>
        </div>

        <!-- right pills -->
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
            <span class="value">${plan.price || '-'}</span>
          </div>
        </div>

        <!-- close -->
        <div class="item-close">
          <button id="remove-item" aria-label="Remove item">
            <img src="../assets/icons/cross.png" alt="X" style="width:16px;height:16px;opacity:.9">
          </button>
        </div>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  }

  // emty cart
  cartContainer.addEventListener('click', (e) => {
    const btn = e.target.id === 'remove-item' ? e.target : e.target.closest('#remove-item');
    if (btn) {
      localStorage.removeItem('selectedPlan');
      location.reload();
    }
  });
});
