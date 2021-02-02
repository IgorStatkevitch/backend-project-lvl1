import readlineSync from 'readline-sync';
import startGame from '../src/index.js';
import getRandomNum from '../src/utils.js';

console.log('What number is missing in the progression?');

const brainProgression = () => {
  const length = 10;
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);
  const missingIndex = getRandomNum(1, 10);
  let task = '';

  for (let i = 1; i <= length; i += 1) {
    if (i === missingIndex) {
      task = `${task} ..`;
    } else {
      task = `${task} ${start + step * i}`;
    }
  }
  const userAnswer = readlineSync.question(`Question: ${task}\nYour answer: `);
  const answer = start + step * missingIndex;

  return {
    answer,
    userAnswer,
    roundScore: +userAnswer === answer ? 1 : 0,
  };
};

export default () => startGame(brainProgression);
