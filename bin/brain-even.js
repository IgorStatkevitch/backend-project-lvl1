#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNum;
const getRandomNum = () => {
  randomNum = Math.floor(Math.random() * 50);
  return randomNum;
};
let score = 0;

function getAnswer() {
  console.log(`Question: ${getRandomNum()}`);

  const userAnswer = readlineSync.question('Answer: ');
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() !== answer.toLowerCase()) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
    );
    console.log(`Let's try again, ${name}`);
  } else {
    console.log('Correct!');
    score += 1;
    while (score < 3) {
      return getAnswer();
    }
    console.log(`Congratulations, ${name}`);
  }
  score = 0;
  return score;
}
getAnswer();
