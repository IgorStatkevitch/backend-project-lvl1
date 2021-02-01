#!/usr/bin/env node
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

const brainCalc = () => {
  const a = index.getRandomNum();
  const b = index.getRandomNum();
  const operators = ['+', '-', '*'];
  const opIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[opIndex];
  const question = `What is the result of the expression?\nQuestion: ${a} ${operator} ${b}\nYour Answer: `;
  const userAnswer = readlineSync.question(question);
  let answer = 0;

  switch (opIndex) {
    case 0:
      answer = a + b;
      break;
    case 1:
      answer = a - b;
      break;
    case 2:
      answer = a * b;
      break;
    default:
      answer = 0;
  }

  return {
    answer,
    userAnswer,
    roundScore: +userAnswer === answer ? 1 : 0,
  };
};
index.startGame(brainCalc);
