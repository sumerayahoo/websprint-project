// Optional: Add interactive hover info
const planets = document.querySelectorAll('.planet');
planets.forEach((planet, i) => {
    planet.addEventListener('mouseenter', () => {
        planet.style.boxShadow = '0 0 30px white';
    });
    planet.addEventListener('mouseleave', () => {
        planet.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)';
    });
});
