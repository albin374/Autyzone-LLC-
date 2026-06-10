document.addEventListener('DOMContentLoaded', () => {
  const particlesContainer = document.getElementById('particles-container');
  
  if (particlesContainer) {
    const particleCount = 35;
    
    for (let i = 0; i < particleCount; i++) {
      createParticle(particlesContainer);
    }
  }
  
  function createParticle(container) {
    const particle = document.createElement('div');
    
    // 15% chance to be a red particle
    const isRed = Math.random() < 0.15;
    particle.className = `particle ${isRed ? 'red' : ''}`;
    
    // Randomize properties
    const size = Math.random() * 4 + 2; // 2px to 6px
    const leftPos = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 15 + 10; // 10s to 25s
    const delay = Math.random() * 10; // 0s to 10s
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${leftPos}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
  }
});
// Dropdown toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    if (dropbtn) {
      dropbtn.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('open');
      });
    }
  });
});
