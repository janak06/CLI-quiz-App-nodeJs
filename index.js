const readlineSync = require("readline-sync");
const chalk = require("chalk");
let yellow = chalk.bold.yellow;
let blueBright = chalk.bold.blueBright;
let green = chalk.bold.green;
let cyan = chalk.bold.cyan;
let red = chalk.bold.red;
console.log("Welcome to the Quiz");
let username = readlineSync.question(yellow("What's your Name:"));
console.log("\nHello", username, ", Let's Play the Quiz!!");
console.log(
  "************************************************************************"
);
console.log("Rules & Instructions: ");
console.log(
  "1.",
  username + ", There are 10 Questions on India and all are Compulsory."
);
console.log("2. You will get 5 points on each Right Answer.");
console.log("3. two Point will be deducted if the Answer is Wrong.");
console.log(
  "4. In MCQ based questions you have to type the Serial Number / Index Value."
);
console.log(
  "***********************************************************************"
);

var mcqList = [
  {
    array: ["Mumbai", "Hyderabad", "Guragon", "Bangalore"],
    question: 'Which City is known as "Electronic City of India"? ',
    answer: "Bangalore",
  },
  {
    array: ["Kerala", "Madras", "Bangalore", "New Delhi"],
    question: "The Indian Institute of Science is located at ",
    answer: "Bangalore",
  },
  {
    array: ["Dugong", "Blue whale", "River Dolphin", "Pygmy Killer Whale"],
    question: "What is the name of India's National Aquactic Animal: ",
    answer: "River Dolphin",
  },
  {
    array: ["New Delhi", "Hyderabad", "Amritsar", "Mumbai"],
    question:
      "The Centre for Cellular and Molecular Biology in India is situated at: ",
    answer: "Hyderabad",
  },
  {
    array: ["Delhi", "Dehradun", "Lucknow", "Gandhinagar"],
    question: "National Institute of Aeronautical Engineering is located at ",
    answer: "Delhi",
  },
  {
    array: ["T.N.Kaul", "J.R.D. Tata", "Nani Palkhivala", "Khushwant Singh"],
    question: 'Who wrote the famous book - "We the people"? ',
    answer: "Nani Palkhivala",
  },
  {
    array: ["Delhi", "Mumbai", "Chennai", "Pune"],
    question: "India's largest city by population",
    answer: "Mumbai",
  },
  {
    array: [
      "Gustave Eiffel",
      "Le Corbusier",
      "Edwin Landseer Lutyens",
      "Bonanno Pisano",
    ],
    question: "Who designed the Indian Parliament in New Delhi?",
    answer: "Edwin Landseer Lutyens",
  },
  {
    array: [
      "Victoria Terminus",
      "India Gate",
      "Elephanta Caves",
      "Gateway of India",
    ],
    question:
      "Which monument was built to commemorate the visit of King George V and Queen Mary to Bombay?",
    answer: "Gateway of India",
  },
  {
    array: ["10th April", "14th December", "14th September", "12th April"],
    question: "Hindi Divas celebrate in India on",
    answer: "14th September",
  },
];

let score = 0;

function quizMcq(question, listOfAnswers, answer) {
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, yellow(question));
  console.log("\n");
  if (listOfAnswers[userAnswer] === answer) {
    console.log(green("You are Right."));
    score = score + 5;
  } else {
    console.log(red("You are Wrong."));
    console.log("The Correct Answer is: ", blueBright(answer));
    score = score - 2;
  }

  if (score < 0) {
    console.log("Score is: ", red(score));
  } else {
    console.log("Score is: ", cyan(score));
  }
}

for (var i = 0; i < mcqList.length; i++) {
  console.log("\n");
  quizMcq(mcqList[i].question, mcqList[i].array, mcqList[i].answer);
  console.log("*******************************");
}

console.log("\n");
console.log("Congratulations,", username, "your Total Score is: ", score);
