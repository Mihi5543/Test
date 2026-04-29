let scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

let costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

function displayArray(scoreFile) {
  for (let i = 0; i < scoreFile.length; i++) {
    console.log("Bubble solution #" + i + " score: " + scoreFile[i]);
  }
}

function highestTestScore(scoreFile) {
  let highestScore = 0;

  for (let i = 0; i < scoreFile.length; i++) {
    if (scoreFile[i] > highestScore) {
      highestScore = scoreFile[i];
    }
  }
  return highestScore;
}

function numberOfHighScores(scoreFile, highScore) {
  let solutionsWithHighestScore = [];

  for (let i = 0; i < scoreFile.length; i++) {
    if (scoreFile[i] == highScore) {
      solutionsWithHighestScore.push(i);
    }
  }
  return solutionsWithHighestScore;
}

function costEffectivness(scores, costs, highScore) {
  let lowestCostOfSolution = 1;
  let mostCostEffectiveSolution = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (costs[i] < lowestCostOfSolution) {
        lowestCostOfSolution = costs[i];
        mostCostEffectiveSolution = i;
      }
    }
  }
  return mostCostEffectiveSolution + 1;
}

let highScore = highestTestScore(scores);
displayArray(scores);
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highestTestScore(scores));
console.log(
  "Solutions with the highest score: " +
    numberOfHighScores(scores, highestTestScore(scores)),
);
console.log(
  "Most cost effective solution is solution #" +
    costEffectivness(scores, costs, highScore),
);
