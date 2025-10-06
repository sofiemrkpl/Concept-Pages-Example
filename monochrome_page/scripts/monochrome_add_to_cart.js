
document.querySelectorAll('.card_button').forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    const card = button.closest('.packages_card');
    if (!card) return;

    const amountEl = card.querySelector('.amount');
    const amount = amountEl ? amountEl.textContent.trim() : '';

    const name = card.dataset.name || '';
    const type = card.dataset.type || '';

    const plan = { name, type, price: amount };

    localStorage.setItem('selectedPlan', JSON.stringify(plan));

    window.location.href = '../pages/monochrome_cart.html';
  });
});