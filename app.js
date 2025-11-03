let listaNrosSorteados = [];
let nroLimite = 10;
let nroSecreto = gerarNroAleatorio();
let tentativas = 0;
let nroDigitado;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e ' + nroLimite;

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Escolha um número entre 1 e ' + nroLimite);

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    //quando responsiveVoice não carrega por alguma limitação ou erro, pode usar a nativa.
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2;
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function gerarNroAleatorio(){
    //    return Math.floor(Math.random() * nroLimite) + 1;
    let nroEscolhido = Math.floor(Math.random() * nroLimite) + 1;

    if (nroLimite == listaNrosSorteados.length){
        listaNrosSorteados = [];
    }

    if (listaNrosSorteados.includes(nroEscolhido)){

        return gerarNroAleatorio();
    } else {
        listaNrosSorteados.push(nroEscolhido);
        return nroEscolhido;
    }

}

function limparCampo(){
    nroDigitado = document.querySelector('input');
    nroDigitado.value = '';
}

function verificarChute() {
    //pega nro digitado e testa com o aleatorio.
    nroDigitado = document.querySelector('input').value;
    let dica;
    let palavraTentativa;
    tentativas++;
    
    if (nroDigitado == nroSecreto){
        palavraTentativa = tentativas > 1 ? ' tentativas.' : ' tentativa.';
        dica = 'PARABÉNS! Você acertou com ' + tentativas + palavraTentativa;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (nroDigitado > nroSecreto){
            dica = "Nro Secreto é menor que o digitado.";
        } else {
            dica = "Nro Secreto é maior que o digitado.";
        }
        limparCampo();
    }
    exibirTexto('p', dica);
}

function reiniciarJogo(){
    nroSecreto = gerarNroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirTexto('p', 'Escolha um número entre 1 e ' + nroLimite);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}