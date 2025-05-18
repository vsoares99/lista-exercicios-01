function classificarTriangulo() {
  const ladoA = Number(document.getElementById("ladoA").value);
  const ladoB = Number(document.getElementById("ladoB").value);
  const ladoC = Number(document.getElementById("ladoC").value);
  const resultadoTriangulo = document.getElementById("resultadoTriangulo");

  let classificacao = "";

  if (!ladoA || !ladoB || !ladoC) {
    resultadoTriangulo.textContent = "Preencha todos os lados para verificar o triângulo.";
    return;
  }


  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
      classificacao = "Triângulo eqüilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      classificacao = "Triângulo isósceles";
    } else {
      classificacao = "Triângulo escaleno";
    }

    resultadoTriangulo.textContent = classificacao;
  } else {
    resultadoTriangulo.textContent = "Os valores fornecidos não formam um triângulo.";
  }
}