const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(questions);
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    }
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (let i = 0; i < candidateAnswers.length; i++) {
    console.log(`\n ${i+1}.) ${questions[i]} \n Your Answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]} `);
  }

  // Compare candidate answers and collect number of correct answers
  let numCorrectAnswers = 0;
  let lowerCandidateAnswers = candidateAnswers.toString().toLowerCase().split(',');
  let lowerCorrectAnswers = correctAnswers.toString().toLowerCase().split(',');

  for (let j = 0; j < candidateAnswers.length; j++) {
    if (lowerCandidateAnswers[j] == lowerCorrectAnswers[j]) {
      numCorrectAnswers += 1;
    }
  }

  let grade = (numCorrectAnswers / questions.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.

  // Inform Candidate of pass/fail
  if (grade >= 80) {
    console.log(`\nCongratulations ${candidateName}! You have passed the quiz with a score of ${grade}, which is at least 80%!`);
  } else {
    console.log(`\nSorry ${candidateName}, you have failed the quiz with a score of ${grade}, which is less than 80%.`)
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};