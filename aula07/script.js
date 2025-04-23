// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
let titulo = document.getElementById("titulo");


// Funções para ligar e desligar a lâmpada
function ligarLampada() {
   lampada.src = "img/lampada-ligada.png";
   lampada.alt = "Lâmpada Ligada";
   titulo.innerText = "Lâmpada Ligada!";
   btnLigar.disabled = true;
   btnDesligar.disabled = false;
}
function desligarLampada() {
   lampada.src = "img/lampada-desligada.png";
   lampada.alt = "Lâmpada Desligada";
   titulo.innerText = "Lâmpada Desligada!";
   btnLigar.disabled = false;
   btnDesligar.disabled = true;
}
// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseout", desligarLampada);