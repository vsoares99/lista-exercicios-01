function classificarIdade(){
    const idade = document.getElementById('idade').value;
    const resultado2 = document.getElementById('resultado2');

    const num = parseInt(idade);

    if (num >= 0 && num < 12){
        resultado2.textContent = `${num} anos é criança`;
    } else if (num >= 12 && num <= 17){
        resultado2.textContent = `${num} anos é adolescente`;
    }
    else if (num >= 18 && num < 60){
        resultado2.textContent = `${num} anos é adulto`;
    }else if (num >= 60 && num <= 120){
        resultado2.textContent = `${num} anos é idoso`;
    }else{
        resultado2.textContent = `${num} é uma idade inválida`;
    }
}