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
    correctAnswer: "curly brackets"
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

// time variables
let time = 75;

const timeID = document.querySelector("#timeID")

function timerCallback() {
  if (time >= 0) {
    timeID.textContent = time;
    time = time - 1;
  }
}

let timeout = setInterval(timerCallback, 1000)

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

