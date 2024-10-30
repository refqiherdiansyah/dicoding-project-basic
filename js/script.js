// Mendapatkan semua card
const cards = document.querySelectorAll('.card');

// Menambahkan event listener untuk setiap card
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
