function classificarImc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoImc = document.getElementById("resultadoImc");

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        resultadoImc.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    resultadoImc.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}