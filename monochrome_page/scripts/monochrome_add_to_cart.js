document.querySelectorAll('.card_button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const card = button.closest('.card-footer');
        const amount = card.querySelector('.amount').textContent.trim();

        localStorage.setItem('selectedPlan', amount);

        window.location.href = '../pages/monochrome_cart.html';
    });
});