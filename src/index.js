import readlineSync from 'readline-sync';

const name = readlineSync.question(
  'Welcome to the Brain Games!\nMay I have your name? ',
);
console.log(`Hello, ${name}!`);

const getRandomNum = () => Math.floor(Math.random() * 50);

const wrongAnswer = (userAnswer, answer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
  );
  console.log(`Let's try again, ${name}`);
};

const startGame = (game) => {
  let score = 0;
  while (score < 3) {
    const { answer, userAnswer, roundScore } = game();

    if (!roundScore) {
      wrongAnswer(userAnswer, answer);
      break;
    } else {
      console.log('Correct!');
      score += 1;
    }
    console.log(`Congratulations, ${name}`);
  }
};
export { startGame, getRandomNum, wrongAnswer };
