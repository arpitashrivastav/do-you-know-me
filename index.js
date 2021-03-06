var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Arpita",
    score: 5,
    name: "Abhishek",
    score: 4
  }
]

// array of objects
var questions = [
  {
    question: "What do I like, tea or coffee? ",
    answer: "coffee"
  },
  {
    question: "Which city do I live in? ",
    answer: "Mumbai"
  },
  {
    question: "Currently I am studying for which degree? ",
    answer: "Physiotherapy"
  },
  {
    question: "Which is my favourite brand?",
    answer: "Zara"
  },
  {
    question: "Which is my favourite place?",
    answer: "Mumbai"
  }
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Arpita?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


