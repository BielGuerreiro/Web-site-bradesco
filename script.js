let indiceAtual = 0;
const imagens = document.querySelectorAll(".banners img");
const botoes = document.querySelectorAll(".btn-bolinha");
const intervaloTempo = 5000;
let intervaloLoop;

function mudarSlide(novoIndice) {
  imagens[indiceAtual].classList.remove("ativo");
  botoes[indiceAtual].classList.remove("ativo");

  indiceAtual = novoIndice;

  if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  }

  imagens[indiceAtual].classList.add("ativo");
  botoes[indiceAtual].classList.add("ativo");

  reiniciarLoop();
}

function iniciarLoop() {
  intervaloLoop = setInterval(() => {
    mudarSlide(indiceAtual + 1);
  }, intervaloTempo);
}

function reiniciarLoop() {
  clearInterval(intervaloLoop);
  iniciarLoop();
}

iniciarLoop();
