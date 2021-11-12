const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


function imc (){
    // atribuindo valor aos campos
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //validando campos
    if (nome !== '' && altura !== '' && peso !== ''){ 
        
        //calculando IMC 
        const valorIMC = (peso / (altura * altura)). toFixed(1); 

        //classificação de IMC 
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!';

        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = ' com obesidade grau I.';
        }else if (valorIMC < 40) {
            classificacao = ' com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }
     
        resultado.textContent = `${nome} seu IMC é: ${valorIMC} e você está ${classificacao}`;
    
    }else {
        resultado.textContent = 'Preencha todos os campos!'
    }   
              


}



//função para limpar campos
function Clear() {

    document.getElementById('nome').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('resultado').innerHTML = "";
}


// evento de click
calcular. addEventListener('click', imc);