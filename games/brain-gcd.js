#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

const brainGcd = () => {
  const a = index.getRandomNum();
  const b = index.getRandomNum();
  const userAnswer = readlineSync.question(
    `Find the greatest common divisor of given numbers.\nQuestion: ${a} ${b}\nYour answer: `,
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
index.startGame(brainGcd);
