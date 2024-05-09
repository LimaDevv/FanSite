// JavaScript pour le défilement doux
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Affichage des critiques au clic sur le titre d'un manga
document.querySelectorAll('.manga h3').forEach(title => {
    title.addEventListener('click', function() {
        const critique = this.nextElementSibling; // Sélectionne la critique suivant le titre
        critique.style.display = (critique.style.display === 'block') ? 'none' : 'block'; // Affiche/cache la critique
    });
});
