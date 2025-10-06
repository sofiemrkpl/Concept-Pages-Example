document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    const emptyState = document.querySelector('.empty-state h3');
    const selectedPlan = localStorage.getItem('selectedPlan');
    if (selectedPlan) {
        // Hide "empty" message
        emptyState.style.display = 'none';
        // Create a cart item
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>Πρόγραμμα: <strong>${selectedPlan}</strong></p>
            <button id="remove-item">Αφαίρεση</button>
        `;
        cartContainer.appendChild(itemDiv);
    }
    // Optional: clear from cart
    cartContainer.addEventListener('click', (e) => {
        if (e.target.id === 'remove-item') {
            localStorage.removeItem('selectedPlan');
            location.reload();
        }
    });
});