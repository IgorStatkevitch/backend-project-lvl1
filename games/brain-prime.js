import readlineSync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNum from '../src/utils.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const brainPrime = () => {
  const x = getRandomNum(0, 100);
  const userAnswer = readlineSync.question(`Question: ${x}\nYour answer: `);

  const answer = isPrime(x) ? 'yes' : 'no';

  return {
    answer,
    userAnswer,
    roundScore: userAnswer.toLowerCase() === answer.toLowerCase(),
  };
};
export default () => startGame(brainPrime);
