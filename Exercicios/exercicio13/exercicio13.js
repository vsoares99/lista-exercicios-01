let listaNumeros = [];
function mediaAritmetica() {
    const input = document.getElementById('numeros');
    const resultadoMedia = document.getElementById('resultadoMedia');
    const numero = parseFloat(input.value);

    if (isNaN(numero)) {
        resultadoMedia.textContent = "Por favor, digite um número válido.";
        return;
    }

    if (numero === 0) {
        if (listaNumeros.length === 0) {
            resultadoMedia.textContent = "Nenhum número foi digitado antes do zero.";
            numerosDigitados.textContent = "";
            return;
        }

        const soma = listaNumeros.reduce((acc, val) => acc + val, 0);
        const media = soma / listaNumeros.length;

        resultadoMedia.textContent = `Média dos números digitados: ${media.toFixed(2)}`;
        numerosDigitados.textContent = `Números: ${listaNumeros.join(", ")}`;
        listaNumeros = [];
    } else {
        listaNumeros.push(numero);
        resultadoMedia.textContent = `Número ${numero} adicionado. Digite 0 para calcular a média.`;
        numerosDigitados.textContent = `Números até agora: ${listaNumeros.join(", ")}`;
    }

    input.value = "";
    input.focus();
}