// Quiz Game – Runs fully in browser console

// Predefined questions and answers
const quiz = [
  { question: "how many colors are in a rainbow?", answer: "7" },
  { question: "Which programming language runs in the browser?", answer: "javascript" },
  { question: "How many days are there in a week?", answer: "7" },
  { question: "What is called the festival of colors?", answer: "holi" },
  { question: "What planet is known as the Red Planet?", answer: "mars" }
];

let score = 0; // to track points

alert("Welcome to the Quiz Game!");

// Loop through each question
for (let i = 0; i < quiz.length; i++) {
  let userAnswer = prompt(quiz[i].question);

  // Process input to avoid case/spacing mistakes
  if (userAnswer && userAnswer.toLowerCase().trim() === quiz[i].answer) {
    alert("Correct! 🎉");
    score++;
  } else {
    alert("Wrong ❌. Correct answer is: " + quiz[i].answer);
  }
}

// Final score
alert("Quiz Completed!\nYour Score: " + score + " out of " + quiz.length);

console.log("Final Score:", score);