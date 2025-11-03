alert("boas vindas ao jogo do número secreto!");
let nroLimite = 0;
let nroSecreto;
let acertou = false;
let nroDigitado;
let tentativas = 0;

nroLimite = Number(prompt("Informe um número para limitar a variação."));
nroSecreto = Math.floor(Math.random() * nroLimite) + 1;

while (acertou == false){
    tentativas++;
    nroDigitado = Number(prompt("Agora, tente acertar!\nEscolha um nro entre 1 e " + nroLimite));

    if (isNaN(nroDigitado)) {
        alert("Entrada inválida. Digite um nro.");
    } else {
        switch (true) {
            case (nroDigitado == nroSecreto):
                acertou = true;
                break;
            case (nroDigitado > nroSecreto):
                alert("Nro Secreto é menor que o digitado");
                break;
            case (nroDigitado < nroSecreto):
                alert("Nro Secreto é maior que o digitado");
                break;
            default:
                alert("Não deu.");
        }
    }        
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Feito! Descobriu o nro secreto ${nroSecreto}! Precisou de ${tentativas} ${palavraTentativa}.`);

