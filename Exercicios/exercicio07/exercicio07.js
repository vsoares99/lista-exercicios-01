function calcularPreco(){
  const macas = Number(document.getElementById("macas").value);
  const resultadoPreco = document.getElementById("resultadoPreco");

  let preco = 0.0;

  if (!macas || macas <= 0) {
    resultadoPreco.textContent = "Digite a quantidade de maçãs compradas!";
    return;
  }

  if(macas >= 12){
    preco = macas * 0.25;
  }else{
    preco = macas * 0.30;
  }
  resultadoPreco.textContent = `Preço total: R$ ${preco.toFixed(2)}`;
}