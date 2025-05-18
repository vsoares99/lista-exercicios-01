function calcular() {
  const operacao = document.getElementById("operacao").value;
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultadoCalc = document.getElementById("resultadoCalc");

  let resultado;

  switch (operacao) {
    case "soma":
      resultado = num1 + num2;
      break;
    case "subtracao":
      resultado = num1 - num2;
      break;
    case "multiplicacao":
      resultado = num1 * num2;
      break;
    case "divisao":
      if (num2 === 0) {
        resultadoCalc.textContent = "Erro: divisão por zero!";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      resultadoCalc.textContent = "Operação inválida.";
      return;
  }
  
  resultadoCalc.textContent = `Resultado: ${resultado}`;
}