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

//Função Cifra de Cesar ENCODE 
function codificarCesar() {
    var entrada = document.querySelector('#entrada').value
    var deslocCifra = document.querySelector('#deslocCifra').value
    var entradaValue = ""

    for (var i = 0; i < enterTxt.length; i++) {
        var passo = parseInt(key)
        var asciiNum = enterTxt[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var passMod = asciiNum + passo
            if (passMod > 90) {
                passMod = passMod - 26
            }
            txtValue += String.fromCharCode(passMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var passMod = asciiNum + passo
            if (passMod > 122) {
                passMod = passMod - 26
            }
            txtValue += String.fromCharCode(passMod)
        } else {
            txtValue += enterTxt[i]
        }
    }
    outTxt.value = txtValue
}


//Base64 e Cesar DECODE
function decoder() {
    var enterTxt = document.querySelector('#txt').value
    if (select.value == '2' && decode.checked) {
        //Função Base64 DECODE 
        txtValue = enterTxt
        outTxt.value = atob(txtValue)
    } else if (select.value == '3' && decode.checked) {
        decodeCesar()
    }
}
//Função Cifra de Cesar DECODE
function decodeCesar() {
    var enterTxt = document.querySelector('#txt').value
    var key = document.querySelector('#key').value
    var txtValue = ""

    for (var i = 0; i < enterTxt.length; i++) {
        var passo = parseInt(key)
        var asciiNum = enterTxt[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            var passMod = asciiNum - passo
            if (passMod < 65) {
                passMod = 26 + passMod
            }
            txtValue += String.fromCharCode(passMod)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            var passMod = asciiNum - passo
            if (passMod < 97) {
                passMod = 26 + passMod
            }
            txtValue += String.fromCharCode(passMod)
        } else {
            txtValue += enterTxt[i]
        }
    }
    outTxt.value = txtValue
}