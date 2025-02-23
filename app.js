let listaNumeroSorteado = [];
let numeroLimiteSorteado = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');

}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'Número secreto é menor');
    } else{
        exibirTextoNaTela ('p', 'Número secreto é maior');
    }
        tentativa++;
        limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteSorteado  + 1);
    let quantidadeElementoLista = listaNumeroSorteado.length;
    
    if (quantidadeElementoLista == numeroLimiteSorteado){
        listaNumeroSorteado = [];
    }

    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}