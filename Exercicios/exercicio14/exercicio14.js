function calcularFatorial(){
  const fatorial = Number(document.getElementById("fatorial").value);
  const resultadoFatorial = document.getElementById("resultadoFatorial");

  let numero = 1;
  for(let i = 1; i <= fatorial; i++){
    numero *= i;
  }

  resultadoFatorial.textContent = `Fatorial de ${fatorial}: \n${numero}`;
}