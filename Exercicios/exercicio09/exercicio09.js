function contagemRegressiva(){
  const contagem = Number(document.getElementById("contagem").value);
  const resultadoContagem = document.getElementById("resultadoContagem");

  let regressao = [];
  for(let i = contagem; i > 0; i--){
    regressao.push(i)
  }
  resultadoContagem.textContent = `Contagem regressiva de ${contagem} elementos: \n${regressao.join(", ")}`
}