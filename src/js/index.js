const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    removerClassSelecionado();

    cartaoAtual++;

    addClassSelecionado();
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    removerClassSelecionado();

    cartaoAtual--;

    addClassSelecionado();
});
function addClassSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function removerClassSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
