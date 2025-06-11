// Variaveis usadas no programa
function sortear (){
    let quantidade = parseInt(document.getElementById('quantidade').value);   
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

   //Funçao de criar numero aleatorio pega por meio de pesquisa
function obterNumeroAleatorio (min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


    // Repetir a funçao a quantidade de vezes escolhidas pelo usuario
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate); 

        // Enquanto o numero estiver ja registrado no array ele repete a funçao de gerar numero aleatorio
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    aleterarStatusBotao ();
    
}

function aleterarStatusBotao () {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else {botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }

}

function reiniciar() {
    document.getElementById('ate').value = "";
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum até agora.</label>`;
    aleterarStatusBotao();
}