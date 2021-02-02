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
    const result = [];
    for (let i = 0; i <= num1; i += 1) {
      for (let j = 0; j <= num2; j += 1) {
        if (num1 % i === 0 && num2 % j === 0 && i === j) {
          result.push(i);
        }
      }
    }
    return result.length === 0 ? 0 : result[result.length - 1];
  };

  const answer = findDivisor(a, b);

  return {
    answer,
    userAnswer,
    roundScore: +userAnswer === answer ? 1 : 0,
  };
};
export default () => startGame(brainGcd);
