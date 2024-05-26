let SeuVotoPara = document.querySelector('.d-1-1 span');        // seleçionando o span do elemento de class 'd-1-1' e armazendo na variável 'SeuVotoPara'
let cat = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
 
function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i  = 0; i < etapa.numeros; i++) {
        if(i === 0) {
            numeroHtml += '<div class = "numero pisca"></div>';
        } else {
            numeroHtml += '<div class = "numero"></div>';
        }
    }

    SeuVotoPara.style.display ='none';
    cat.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function AtualizaInterface() {
    alert("Finalizou de digitar o voto!");
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero != null) {
        elNumero.innerHTML = n;
        numero = `${numero} ${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling != null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            AtualizaInterface();
        }
    }
}

function branco() {
    alert("Clicou em BRANCO!");
}

function corrige() {
    alert("Clicou em Corrige!");
}

function confirma() {
    alert("Clicou em CONFIRMA!");
}

comecarEtapa();