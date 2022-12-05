
// Click event
  window.addEventListener('keydown', playSound);

// Funkcija za play
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

// Funkcija za brisanje efekta tranzicije
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function removeTransition(e) {
    this.classList.remove('playing');
  };