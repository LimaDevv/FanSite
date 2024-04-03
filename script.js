// Ajout d'interactivité pour le formulaire de contact
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Envoi des données du formulaire à un serveur ou traitement local
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Réinitialisation du formulaire
    contactForm.reset();
});
