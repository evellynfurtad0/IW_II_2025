// Seleciona os elementos
const imagem = document.getElementById("imagemAtual");
const botao01 = document.getElementById("imagem01");
const botao02 = document.getElementById("imagem02");
const botao03 = document.getElementById("imagem03");


// Funçôes que trocam a imagem
function imagem01() {
  imagem.src = "img/pato.png";
}

function imagem02() {
  imagem.src = "img/sapo.png";
}

function imagem03() {
  imagem.src = "img/macaco.png";
}

// Associa o evento de clique
botao01.addEventListener("click", imagem01);
botao02.addEventListener("click", imagem02);
botao03.addEventListener("click", imagem03);

  