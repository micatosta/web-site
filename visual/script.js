
const meusCards = document.querySelectorAll('.meu-card');

function mostrarCards() {
  const alturaTela = window.innerHeight;
  meusCards.forEach(card => {
    const distancia = card.getBoundingClientRect().top;
    if (distancia < alturaTela - 100) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrarCards);
mostrarCards();