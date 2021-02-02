import readlineSync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNum from '../src/utils.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = () => {
  const randomNum = getRandomNum(0, 50);
  const userAnswer = readlineSync.question(
    `Question: ${randomNum}\nYour answer: `,
  );
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';

  return {
    answer,
    userAnswer,
    roundScore: userAnswer.toLowerCase() === answer.toLowerCase() ? 1 : 0,
  };
};
export default () => startGame(brainEven);
