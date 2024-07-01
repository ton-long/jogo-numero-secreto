const botao = document.querySelector('#recomecar');
function verificarOValorDoChute(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor Inválido: Por favor falar apenas números.</div>                     
        `;    
        return;
    }

    if(validacaoMaiorMenorValor(numero)){
        elementoChute.innerHTML += `
            <div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}.</div>                    
        `;    
        return;
    }

    if(numero === numeroSecreto){     
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}.</h3>  
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>        
        `;   

    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;        
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function validacaoMaiorMenorValor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e)=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});

