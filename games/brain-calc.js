import readlineSync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNum from '../src/utils.js';

console.log('What is the result of the expression?');

const brainCalc = () => {
  const a = getRandomNum(0, 50);
  const b = getRandomNum(0, 50);
  const opIndex = getRandomNum(0, 2);
  let answer = 0;
  let task;
  switch (opIndex) {
    case 0:
      answer = a + b;
      task = `${a} + ${b}`;
      break;
    case 1:
      answer = a - b;
      task = `${a} - ${b}`;
      break;
    case 2:
      answer = a * b;
      task = `${a} * ${b}`;
      break;
    default:
      break;
  }
  const userAnswer = readlineSync.question(`Question: ${task}\nYour Answer: `);
  return { answer, userAnswer, roundScore: +userAnswer === answer ? 1 : 0 };
};
export default () => startGame(brainCalc);
