function ordenarValores(){
  const valor1 = Number(document.getElementById("valor1").value);
  const valor2 = Number(document.getElementById("valor2").value);
  const resultadoValores = document.getElementById("resultadoValores");

  if (valor1 === valor2) {
    resultadoValores.textContent = "Os valores não podem ser iguais.";
    return;
  }

  let menor, maior;

  if (valor1 < valor2) {
    menor = valor1;
    maior = valor2;
  } else {
    menor = valor2;
    maior = valor1;
  }

  resultadoValores.textContent = `Valores em ordem crescente: ${menor}, ${maior}`;
}