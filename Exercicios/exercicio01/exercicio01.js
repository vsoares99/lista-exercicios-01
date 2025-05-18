function verificarPar(){
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    const num = parseInt(numero);

    if (num % 2 === 0){
        resultado.textContent = `${num} é par`;
    } else{
        resultado.textContent = `${num} é ímpar`;
    }
}