const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');

contactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});
