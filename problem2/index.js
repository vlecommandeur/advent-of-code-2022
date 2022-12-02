const { input } = require("./input");

const DRAW_SCORE = 3;
const WIN_SCORE = 6;

const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;

const calculateTotalScore = () => {
  let totalScore = 0;

  input.forEach((round) => {
    totalScore += {
      X: ROCK_SCORE,
      Y: PAPER_SCORE,
      Z: SCISSORS_SCORE,
    }[round[1]];

    if (round[1] === "X") {
      if (round[0] === "A") totalScore += DRAW_SCORE;
      if (round[0] === "C") totalScore += WIN_SCORE;
    }

    if (round[1] === "Y") {
      if (round[0] === "B") totalScore += DRAW_SCORE;
      if (round[0] === "A") totalScore += WIN_SCORE;
    }

    if (round[1] === "Z") {
      if (round[0] === "C") totalScore += DRAW_SCORE;
      if (round[0] === "B") totalScore += WIN_SCORE;
    }
  });

  return totalScore;
};

const calculatePerfectScore = () => {
  let perfectScore = 0;

  input.forEach((round) => {
    perfectScore +=
      {
        Y: DRAW_SCORE,
        Z: WIN_SCORE,
      }[round[1]] || 0;

    if (round[0] === "A") {
      if (round[1] === "X") perfectScore += SCISSORS_SCORE;
      if (round[1] === "Y") perfectScore += ROCK_SCORE;
      if (round[1] === "Z") perfectScore += PAPER_SCORE;
    }

    if (round[0] === "B") {
      if (round[1] === "X") perfectScore += ROCK_SCORE;
      if (round[1] === "Y") perfectScore += PAPER_SCORE;
      if (round[1] === "Z") perfectScore += SCISSORS_SCORE;
    }

    if (round[0] === "C") {
      if (round[1] === "X") perfectScore += PAPER_SCORE;
      if (round[1] === "Y") perfectScore += SCISSORS_SCORE;
      if (round[1] === "Z") perfectScore += ROCK_SCORE;
    }
  });

  return perfectScore;
};

console.log("Total score :", calculateTotalScore());
console.log("Perfect score :", calculatePerfectScore());
