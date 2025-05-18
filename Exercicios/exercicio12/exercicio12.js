function calcularTabuada(){
  const tabuada = Number(document.getElementById("tabuada").value);
  const resultadoTabuada = document.getElementById("resultadoTabuada");

  if(tabuada <= 0 || tabuada > 10){
    resultadoTabuada.textContent = "Entrada inválida. Digite um valor de 1 à 10.";
    return
  }

  let calculo = [];
  for(let i = 0; i <= 10; i++){
    calculo.push(`${tabuada} x ${i} = `, tabuada * i, "\n");
  }
  resultadoTabuada.textContent = `Tabuada de ${tabuada}: \n${calculo.join("")}`
}