// SCROLL ANIMATION

const elements = document.querySelectorAll('.js-scroll');

// opacità a 0 così da non creare bug di inizializzazione
elements.forEach(element => {
  element.style.opacity = 0;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) { // attiva l'animazione
      entry.target.classList.add('scrolled');
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});

// ANIMATE.CSS ANIMATION ON OVERLAY

function animateOverlay() {
  const overlay = document.querySelector('.overlay');
  // applica la classe di animazione per far comparire l'overlay
  overlay.classList.add('animate__animated', 'animate__slideInLeft');

  // imposta un timer per rimuovere la classe di animazione dopo 2 secondi
  setTimeout(() => {
    overlay.classList.remove('animate__animated', 'animate__slideInLeft');
    // imposta un timer per eseguire un'altra animazione dopo 3 secondi
    setTimeout(() => {
      overlay.classList.add('animate__animated', 'animate__slideOutRight');
      // imposta un evento animationend per richiamare la funzione animateOverlay
      overlay.addEventListener('animationend', () => {
        overlay.classList.remove('animate__animated', 'animate__slideOutRight');
        animateOverlay();
      }, { once: true });
    }, 3000);
  }, 3000);
}

// chiamare la funzione animateOverlay per avviare il loop
animateOverlay();


