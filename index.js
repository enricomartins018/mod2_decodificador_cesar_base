// MINHAS VARIÁVEIS: (NÃO SEI SE É UMA BOA PRÁTICA COLOCAR DESSA FORMA, JÁ DEFININDO ELAS, MAS CONFORME AINDA ESTOU ME ACOSTUMANDO COM ESSA QUANTIDADE DE CÓDIGOS, PRECISAVA ME ORIENTAR MELHOR >.> )
var selecoesCripto = document.querySelector('#selecoesCripto')
var selecoesCodDecod = document.querySelector('#selecoesCodDecod')
var selecaoCodificar = document.querySelector('#selecaoCodificar')
var selecaoDecodificar = document.querySelector('#selecaoDecodificar')
var botaoCod = document.querySelector('#botaoCod')
var botaoDeCod = document.querySelector('#botaoDeCod')
var entrada = document.querySelector('#entrada').value
var saida = document.querySelector('#saida').value

// FUNÇÃO E VARIÁVEL PARA FAZER COM QUE A DIV DO DESLOCAMENTO DESAPAREÇA SE O USUÁRIO SELECIONAR BASE64.
selecoesCripto.addEventListener('change', function (event) {
    if (selecoesCripto.value == '1') {
        deslocamento.style.display = 'flex'
    } else {
        deslocamento.style.display = 'none'
    }
});
// FUNÇÃO E VARIÁVEIS PARA QUE SE EU SELECIONAR A OPÇÃO DE DECODIFICAR, APAREÇA O BOTÃO DE DECODIFICAR MENSAGEM  LOGO EMBAIXO E VICE-VERSA.
selecoesCodDecod.addEventListener('change', function (event) {
    if (selecoesCodDecod.value == 'codificar') {
        divEnviar.innerHTML = `<input type="button" class="button1" id="botaoCod" value="Codificar Mensagem"></input>`
    } else {
        divEnviar.innerHTML = `<input type="button" class="button1" id="botaoDeCod" value="Decodificar Mensagem"></input>`
    }
});

// FUNÇÃO CODIFICAR CÉSAR E BASE
function codificarCesarBase() {
    if (selecoesCodDecod.value == '2' && codificar.checked) {
        entradaValue = entrada
        //FUNÇÃO DE CODIFICAR A BASE64 
        saida.value = btoa(entradaValue)
    } else if (selecoesCodDecod == '1' && codificar.checked) {
        codificarCesar()
    }
}