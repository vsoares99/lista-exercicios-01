function classificarNota(){
    const nota = Number(document.getElementById('nota').value);
    const resultadoNota = document.getElementById('resultadoNota');

    if(nota >= 0 && nota <= 10){
        if(nota == 10){
            resultadoNota.textContent = `Pontuação perfeita! Nota ${nota}. Aprovado!`;
        }else if(nota >= 6 && nota < 10){
            resultadoNota.textContent = `Nota ${nota} é suficiente. Aprovado!`
        }else if(nota >= 3){
            resultadoNota.textContent = `Nota ${nota} é insuficiente. Recuperação!`
        }else if(nota >= 0){
            resultadoNota.textContent = `Nota ${nota} é insuficiente. Reprovado!`
        }
    }else{
        resultadoNota.textContent = `Nota ${nota} é inválida. Digite um valor entre 0 e 10`
    }
}