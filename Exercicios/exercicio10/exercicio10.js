function replicador(){
  const replicado = Number(document.getElementById("replicado").value);
  const resultadoReplicador = document.getElementById("resultadoReplicador");

  let sequencia = [];
  for(let i = 1; i <= 10; i++){
    sequencia.push(replicado, ` - ${i}ª vez`, "\n");
  }
  resultadoReplicador.textContent = `Elementos: \n${sequencia.join("")}`;
}