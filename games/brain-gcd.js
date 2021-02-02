import readlineSync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNum from '../src/utils.js';

console.log('Find the greatest common divisor of given numbers.');

const brainGcd = () => {
  const a = getRandomNum(0, 50);
  const b = getRandomNum(0, 50);
  const userAnswer = readlineSync.question(
    `Question: ${a} ${b}\nYour answer: `,
  );

  const findDivisor = (num1, num2) => {
    let x = Math.abs(num1);
    let y = Math.abs(num2);

    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x;
  };

  const answer = findDivisor(a, b);

  return {
    answer,
    userAnswer,
    roundScore: +userAnswer === answer ? 1 : 0,
  };
};
export default () => startGame(brainGcd);
