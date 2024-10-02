let quiz = [
  { question: 'Q1: What is HTML?', a: 'Hello To My Land', b: 'Hey Text Markup Language', c: 'HyperText Makeup Language', d: 'HyperText Markup Language', ans: 'd' },
  { question: 'Q2: What is CSS?', a: 'Cascading Style Sheet', b: 'Cascading Style Sleep', c: 'Cascading Style Sheets', d: 'Cascading Show Sheet', ans: 'a' },
  { question: 'Q3: What is HTTP?', a: 'HyperText Transfer Protocol', b: 'HyperText Transfer Protocols', c: 'HyperText Testing Protocol', d: 'HyperText Transfer Process', ans: 'a' },
  { question: 'Q4: What is JS?', a: 'JavaScript', b: 'JavaShell', c: 'JavaServer', d: 'JavaShop', ans: 'a' },
];

let elements = {
  question: document.getElementById("question"),
  options: [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4"),
  ],
  submit: document.getElementById("submit"),
  totalScore: document.getElementById("showScore"),
};

let score = 0;
let questionCount = 0;

let loadQuestion = () => {
  let currentQuestion = quiz[questionCount];
  document.getElementById("question").innerHTML = currentQuestion.question;
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`option${i}`).innerHTML = currentQuestion[Object.keys(currentQuestion)[i]];
  }
};

loadQuestion(); 

submit.addEventListener('click', () => {
  let selectedAnswer = document.querySelector('input:checked').id;
  if (selectedAnswer == quiz[questionCount].ans) score++;
  questionCount++;
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    totalScore.innerHTML = `Your total score is: ${score} <button class="btn" onclick="location.reload()">Try again?</button>`;
  }
});