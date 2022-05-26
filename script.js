// Assignment code here
// Get references to the #generate element

// Store the questions and answers here
// hope they don't inspect this and get all the answers
const quiz = [
  {
    question: "Commonly used data types DO Not include:",
    answers: [
      "strings",
      "booleans",
      "alerts",
      "numbers"
    ],
    correctAnswer: "alerts"
  },
  {
    question: "The condition is an if / else statement is enclosed with _______.",
    answers: [
      "quotes",
      "curly brackets",
      "parenthesis",
      "square brackets"
    ],
    correctAnswer: "parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store",
    answers: [
      "number and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables",
    answers: [
      "commas",
      "curly brackets",
      "quotes",
      "parenthesis"
    ],
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "JavaScript",
      "terminal/bash",
      "for loops",
      "console.log"
    ],
    correctAnswer: "console.log"
  }
];

const questionContent = `
<div class="card">
  <div class="card-header">
    <h2 id="quiz-question"></h2>
  </div>
  <div class="card-body">
    <button id="answer-a" class="btn"></button>
    <button id="answer-b" class="btn"></button>
    <button id="answer-c" class="btn"></button>
    <button id="answer-d" class="btn"></button>
  </div>
  <div class="card-footer">
    <h2 id="quiz-status"></h2>
  </div>
</div>`;

const finalScore = `
<div class="card">
  <div class="card-header">
    <h2>All Done!</h2>
  </div>
  <div class="card-body">
    <p id="time"><p>
    <form>
      <label for="initials">Enter initials:</label>
      <input type="text" id="initials" name="initials">
      <input class="btn" type="submit" value="submit">
    </form>
  </div>
  <div class="card-footer">
    <h2 id="quiz-status"></h2>
  </div>
</div>`;

// time variables
let time = 0;

const timeID = document.querySelector("#timeID")
timeID.textContent = `Time: ${time}`;

function timerCallback() {
  if (time >= 0) {
    timeID.textContent = `Time: ${time}`;
    time = time - 1;
  }
}

const quizContainer = document.querySelector("#question-card");

document.querySelector("#start-quiz").onclick = loadQuiz;

function loadQuiz() {
  let i = 0;
  let status = "";
  time = 75;
  let timeout = setInterval(timerCallback, 1000);

  quizContainer.innerHTML = questionContent;

  const quizQuestion = document.querySelector("#quiz-question");
  const quizButtonA = document.querySelector("#answer-a");
  const quizButtonB = document.querySelector("#answer-b");
  const quizButtonC = document.querySelector("#answer-c");
  const quizButtonD = document.querySelector("#answer-d");
  const quizStatus = document.querySelector("#quiz-status");

  quizButtonA.onclick = buttonEventHandler(0);
  quizButtonB.onclick = buttonEventHandler(1);
  quizButtonC.onclick = buttonEventHandler(2);
  quizButtonD.onclick = buttonEventHandler(3);
  
  function buttonEventHandler(v) {
    return function () {
      if (quiz[i].answers[v] == quiz[i].correctAnswer) {
        status = "Correct!";
      } else {
        status = "Incorrect!"
        if ( time >= 15) {
          time -= 15;
        } else {
          time = 0;
        }
      }
      quizStatus.textContent = status
      if (i < quiz.length -1) {
        i++;
        loadQuestion();
      } else {
        clearInterval(timeout);
        quizContainer.innerHTML = finalScore;
        timeID.textContent = `Time: ${time + 1}`;
        const finalTime = document.querySelector("#time");
        const finalStatus = document.querySelector("#quiz-status");

        finalTime.textContent = `Your final score is ${time + 1}.`;
        finalStatus.textContent = status;
      }
    }
  }

  function loadQuestion() {
    quizQuestion.textContent = quiz[i].question;
    quizButtonA.textContent = quiz[i].answers[0];
    quizButtonB.textContent = quiz[i].answers[1];
    quizButtonC.textContent = quiz[i].answers[2];
    quizButtonD.textContent = quiz[i].answers[3];
  }

  loadQuestion();
};

function appendLocalStorage(initials, score) {
  const highScores = localStorage.getItem('highScores');
  let hs = [];
  if (highScores != null) {
    oldHighScores = JSON.parse(highScores);
    hs = [...oldHighScores, {initials: initials, score: score}];
  } else {
    hs = [{initials: initials, score: score}];
  }
  localStorage.setItem['highScores', JSON.stringify(hs)]
}



