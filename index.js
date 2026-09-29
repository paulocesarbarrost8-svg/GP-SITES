const whatsappNumber = "5587996385610";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => button.parentElement.classList.toggle("open"));
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('#nome')?.value.trim() || '';
    const email = contactForm.querySelector('#email')?.value.trim() || '';
    const message = contactForm.querySelector('#mensagem')?.value.trim() || '';

    if (!name || !email || !message) {
      alert('Por favor, preencha nome, email e mensagem antes de enviar.');
      return;
    }

    const whatsappText = `Olá! Meu nome é ${name}.\n ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, '_blank');
  });
}
