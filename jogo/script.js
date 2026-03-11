const cases = [
  {
    story:
      "Um rio próximo à cidade apresentou grande mortandade de peixes. A água ficou escura e testes apontaram presença de metais pesados.",
    clues: [
      "O pH da água sofreu alteração após contato com resíduos.",
      "Foram encontrados metais pesados na amostra coletada.",
      "Objetos corroídos e restos de pilhas foram encontrados próximos ao local.",
      "A contaminação pode causar danos graves a organismos aquáticos."
    ],
    answer: "baterias",
    solution: "coleta_baterias",
    explanation:
      "Correto. O principal poluente foi o descarte incorreto de baterias, que libera metais pesados no ambiente. A solução é a coleta especial e a reciclagem dos metais."
  },
  {
    story:
      "Em uma lagoa urbana foram encontrados pequenos fragmentos coloridos flutuando na água e no trato digestivo de peixes.",
    clues: [
      "Fragmentos sólidos muito pequenos foram encontrados na água.",
      "O material demora muito tempo para se decompor.",
      "Esses resíduos são derivados de polímeros.",
      "O descarte incorreto de embalagens contribui para esse problema."
    ],
    answer: "plastico",
    solution: "reciclagem_plastico",
    explanation:
      "Correto. O caso envolve resíduos plásticos e microplásticos. A solução adequada é a separação correta e a reciclagem do plástico."
  },
  {
    story:
      "Uma área próxima a uma fábrica apresentou água com uma camada escura e brilhante na superfície, impedindo a entrada de luz.",
    clues: [
      "Foi observada uma película oleosa sobre a água.",
      "A troca gasosa no ambiente foi prejudicada.",
      "A substância tem origem industrial.",
      "A contaminação afeta a fauna e a flora aquática."
    ],
    answer: "oleo",
    solution: "tratamento_oleo",
    explanation:
      "Correto. O poluente é o óleo industrial. O tratamento e a contenção do óleo são necessários para reduzir os impactos ambientais."
  },
  {
    story:
      "Moradores relataram forte odor em um córrego, além de coloração alterada e espuma em vários pontos do percurso.",
    clues: [
      "A água apresenta alteração química visível.",
      "Foram detectadas substâncias contaminantes dissolvidas.",
      "Há risco de desequilíbrio ambiental e proliferação de microrganismos.",
      "A origem provável está em descarte inadequado de resíduos líquidos."
    ],
    answer: "esgoto",
    solution: "tratamento_esgoto",
    explanation:
      "Correto. O caso está relacionado ao esgoto químico. O procedimento adequado é o tratamento químico antes do descarte no ambiente."
  }
];

let currentCase = {};
let revealedClues = [];
let score = 0;

const storyElement = document.getElementById("story");
const clueList = document.getElementById("clueList");
const resultMessage = document.getElementById("resultMessage");
const scoreElement = document.getElementById("score");
const clueBtn = document.getElementById("clueBtn");
const solveBtn = document.getElementById("solveBtn");
const restartBtn = document.getElementById("restartBtn");
const pollutantSelect = document.getElementById("pollutant");
const solutionSelect = document.getElementById("solution");

function startGame() {
  const randomIndex = Math.floor(Math.random() * cases.length);
  currentCase = cases[randomIndex];
  revealedClues = [];
  score = 0;

  storyElement.textContent = currentCase.story;
  clueList.innerHTML = "";
  resultMessage.textContent = "Colete pistas para começar a investigação.";
  scoreElement.textContent = score;
  pollutantSelect.value = "";
  solutionSelect.value = "";
}

function collectClue() {
  if (revealedClues.length >= currentCase.clues.length) {
    resultMessage.textContent = "Todas as pistas deste caso já foram coletadas.";
    return;
  }

  const nextClue = currentCase.clues[revealedClues.length];
  revealedClues.push(nextClue);

  const li = document.createElement("li");
  li.textContent = nextClue;
  clueList.appendChild(li);

  score++;
  scoreElement.textContent = score;

  resultMessage.textContent = "Nova pista coletada. Analise as evidências com atenção.";
}

function solveCase() {
  const selectedPollutant = pollutantSelect.value;
  const selectedSolution = solutionSelect.value;

  if (!selectedPollutant || !selectedSolution) {
    resultMessage.textContent = "Selecione o poluente e a solução antes de investigar a resposta.";
    return;
  }

  if (
    selectedPollutant === currentCase.answer &&
    selectedSolution === currentCase.solution
  ) {
    resultMessage.textContent = currentCase.explanation;
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent =
      "Resposta incorreta. Continue analisando as pistas e tente novamente.";
    resultMessage.style.color = "red";
  }
}

clueBtn.addEventListener("click", collectClue);
solveBtn.addEventListener("click", solveCase);
restartBtn.addEventListener("click", startGame);

startGame();