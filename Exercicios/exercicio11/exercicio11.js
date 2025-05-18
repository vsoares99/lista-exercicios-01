function somaNumeros(){
  const numero1 = Number(document.getElementById("numero1").value);
  const numero2 = Number(document.getElementById("numero2").value);
  const numero3 = Number(document.getElementById("numero3").value);
  const numero4 = Number(document.getElementById("numero4").value);
  const numero5 = Number(document.getElementById("numero5").value);
  const resultadoSomaNumeros = document.getElementById("resultadoSomaNumeros");

  let soma = 0;
  for(let i = 0; i < 5; i++){
    soma = numero1 + numero2 + numero3 + numero4 + numero5;
  }

  resultadoSomaNumeros.textContent = `Soma dos valores: ${soma}`;
}