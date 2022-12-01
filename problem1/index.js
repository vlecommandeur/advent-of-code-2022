const { input } = require("./input");

const calculateSumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const findMaxCalories = () => {
  let maxCalories = 0;

  input.forEach((arr) => {
    const calories = calculateSumArray(arr);

    if (calories > maxCalories) maxCalories = calories;
  });

  return maxCalories;
};

const findTopThreeCalories = () => {
  let topThreeCalories = [0, 0, 0];

  input.forEach((arr) => {
    const calories = calculateSumArray(arr);
    const minOfMax = topThreeCalories.reduce((acc, curr) =>
      acc < curr ? acc : curr
    );

    if (calories > minOfMax)
      topThreeCalories[topThreeCalories.indexOf(minOfMax)] = calories;
  });

  return calculateSumArray(topThreeCalories);
};

console.log("Max calories: ", findMaxCalories());
console.log("Top three calories: ", findTopThreeCalories());
