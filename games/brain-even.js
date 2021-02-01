#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

const brainEven = () => {
  const randomNum = index.getRandomNum();
  const question = `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNum}\nYour answer: `;
  const userAnswer = readlineSync.question(question);
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';

  return {
    answer,
    userAnswer,
    roundScore: userAnswer.toLowerCase() === answer.toLowerCase() ? 1 : 0,
  };
};
index.startGame(brainEven);
