function encontrarMaiorNumero() {
    var numero1 = prompt("Digite o primeiro número:");
    var numero2 = prompt("Digite o segundo número:");
    var numero3 = prompt("Digite o terceiro número:");

    var maiorNumero = numero1;
    if (numero2 > maiorNumero) {
        maiorNumero = numero2;
    }
    if (numero3 > maiorNumero) {
        maiorNumero = numero3;
    }

    alert("O maior número é: " + maiorNumero);

    var mensagem = "O maior número é: " + maiorNumero;
    exibirMensagem(mensagem);
}

function exibirMensagem(mensagem) {
    var alertBox = document.createElement("div");
    alertBox.className = "alert";
    alertBox.textContent = mensagem;

    var body = document.querySelector("body");
    body.appendChild(alertBox);

    setTimeout(function() {
        alertBox.style.display = "none";
    }, 3000);
}