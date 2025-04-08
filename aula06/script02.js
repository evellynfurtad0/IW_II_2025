var dc1 = document.getElementById("c1");
var dc2 = document.getElementById("c2");
var dc3 = document.getElementById("c3");
var dc4 = document.getElementById("c4");
var dc5 = document.getElementById("c5");
var dc6 = document.getElementById("c6");

//em js isso se chama array (vetor)
var todos = [dc1, dc2, dc3, dc4, dc5, dc6] //parece lista em python
console.log(todos);


function muda_cor() {
    for (elemento of todos) {
        if (elemento.id == "c4") {
            elemento.style.color = "red";
        }
    }
}

// for (elemento of todos) {
// // elemento.innerHTML = "2F - BOA TARDE" //mudando todos para boa tarde
// // elemento.style.color = "red"; //alterar a cor do texto
// }