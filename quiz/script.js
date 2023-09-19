document.querySelector('#finalizacao').style.display = 'none';
document.querySelector('header').style.display = 'none';
document.querySelector('.tela-principal').style.display = 'none';

function iniciarQuiz() {
    document.querySelector('.iniciar').style.display = 'none';

    setTimeout(function() {
        document.querySelector('.tela-principal').style.display = 'flex';
        document.querySelector('header').style.display = 'flex';
    }, 100);
}

// PERGUNTA
let pergunta = document.querySelector('#pergunta');
let questaoAtual = 0;
let questaoNumero = 0;
let pontuacao = 0;
let acertos = 0; // Adicione esta variável para rastrear os acertos
let erros = 0; // Adicione esta variável para rastrear os erros


// ALTERNATIVAS
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes');
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas');

const q1 = {
    numQuestao: 1,
    pergunta: "1. Qual o nome da seiva que chega ao caule da planta?",
    alternativaA: "SEIVA BRUTA",
    alternativaB: "SEIVA VERDE",
    alternativaC: "SEIVA REFINADA",
    correta: "SEIVA BRUTA",
};
const q2 = {
    numQuestao: 2,
    pergunta: "2. Qual é o principal ingrediente da fotossíntese?",
    alternativaA: "SOL",
    alternativaB: "CLOROFILA",
    alternativaC: "GLICOSE",
    correta: "SOL",
};
const q3 = {
    numQuestao: 3,
    pergunta: "3. Dentre os requisitos da fotossíntese entre eles um pigmento verde qual o nome?",
    alternativaA: "XANTOFILA",
    alternativaB: "CLOROFILA",
    alternativaC: "ERITROFILA",
    correta: "CLOROFILA",
};
const q4 = {
    numQuestao: 4,
    pergunta: "4. A redução do dióxido de carbono em carbono orgânico na fotossíntese ocorre via ciclo?",
    alternativaA: "DE CARNOT",
    alternativaB: "DE KREBS",
    alternativaC: "DE CALVIN",
    correta: "DE CALVIN", 
};
const q5 = {
    numQuestao: 5,
    pergunta: "5. Que composto é regenerado ao final do ciclo de Calvin?",
    alternativaA: " RIBULOSE 1,5 -BIFOSFATO",
    alternativaB: "CANTONA",
    alternativaC: "ERITROFILA",
    correta: "RIBULOSE 1,5 -BIFOSFATO",
};
const q6 = {
    numQuestao: 6,
    pergunta: "6. O dióxido de carbono usado no processo da fotossíntese entra no vegetal:",
    alternativaA: "PELAS RAÍZES",
    alternativaB: "PELOS ESTOMATÔS",
    alternativaC: "PELAS TRICOMAS",
    correta: "PELOS ESTOMATÔS",
};

// ARRAY DAS QUETÕES
const questoes = [q1, q2, q3, q4, q5,q6];

let total = document.querySelector('#total');

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');

function bloquearAlternativas() {
    document.querySelector('#alternativas').classList.add('bloqueado');
}

function desbloquearAlternativas() {
    document.querySelector('#alternativas').classList.remove('bloqueado');
}



function proxima() {
    if (questaoNumero < questoes.length) {
        questaoNumero++;
        mostrarQuestao(questaoNumero);
    } else {
        // O quiz acabou, você pode adicionar código aqui para mostrar o resultado final.
    }
}


function volta() {
    if (questaoAtual > -1) {
        questaoAtual--;
        mostrarQuestao(questaoAtual);
    }
}


function mostrarQuestao(questaoNumero) {
    const questao = questoes[questaoNumero];
    pergunta.textContent = questao.pergunta;
    a.textContent = questao.alternativaA;
    b.textContent = questao.alternativaB;
    c.textContent = questao.alternativaC;

    // Configurar o value das alternativas para a questão atual
    a.setAttribute('value', questao.numQuestao + 'A');
    b.setAttribute('value', questao.numQuestao + 'B');
    c.setAttribute('value', questao.numQuestao + 'C');

    // Limpar qualquer seleção anterior
    a.classList.remove('selecionado');
    b.classList.remove('selecionado');
    c.classList.remove('selecionado');

    // Desbloquear as alternativas
    desbloquearAlternativas();
}

function verificarSeAcertou(alternativa, elemento) {
    const questaoAtual = questoes[questaoNumero];
    const respostaSelecionada = alternativa.textContent;

    if (respostaSelecionada === questaoAtual.correta) {
        elemento.classList.add('correta');
        pontuacao++; // Aumenta a pontuação
    } else {
        elemento.classList.add('errado');

    }

    bloquearAlternativas();

    setTimeout(function () {
        questaoNumero++; // Avança para a próxima questão
        if (questaoNumero < questoes.length) {
            mostrarQuestao(questaoNumero);
        } else {
            mostrarResultados();
        }
    });
}



function mostrarResultados() {
    // Exibe a pontuação e o total de questões
    document.querySelector('#pontuacao').textContent = pontuacao;
    document.getElementById('totalQuestoes').textContent = questoes.length;

    // Exibe a seção de finalização
    document.getElementById('finalizacao').style.display = 'block';

    // Oculta a seção de questões
    document.querySelector('.tela-principal').style.display = 'none';
    document.querySelector('.iniciar').style.display = 'none';
}

function reiniciarQuiz() {
    // Reseta a pontuação e reinicia o quiz
    pontuacao = 0;
    questaoNumero = 0;
    mostrarQuestao(questaoNumero);

    document.getElementById('finalizacao').style.display = 'none';

    document.querySelector('.tela-principal').style.display = 'block';
}
