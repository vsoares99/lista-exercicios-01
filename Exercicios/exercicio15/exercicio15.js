function gerarFibonacci() {
  const qtd = parseInt(document.getElementById("qtdFibonacci").value);
  const resultadoFibonacci = document.getElementById("resultadoFibonacci");

  let sequencia = [];
  for (let i = 0; i < qtd; i++) {
    if (i === 0) {
      sequencia.push(0);
    } else if (i === 1) {
      sequencia.push(1);
    } else {
      sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
  }

  resultadoFibonacci.textContent = `Sequência de ${qtd} elementos: \n${sequencia.join(", ")}`;
}