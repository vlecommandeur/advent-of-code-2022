const { input } = require("./input");

const calculateFullyContainedPairs = () => {
  let fullyContainedPairs = 0;

  input.forEach((pairs) => {
    const first = pairs[0];
    const second = pairs[1];
    const third = pairs[2];
    const fourth = pairs[3];

    ((first <= third && second >= fourth) ||
      (first >= third && second <= fourth)) &&
      fullyContainedPairs++;
  });

  return fullyContainedPairs;
};

const calculateOverlappingPairs = () => {
  let overlappingPairs = 0;

  input.forEach((pairs) => {
    const first = pairs[0];
    const second = pairs[1];
    const third = pairs[2];
    const fourth = pairs[3];

    ((third >= first && third <= second) ||
      (first >= third && first <= fourth)) &&
      overlappingPairs++;
  });

  return overlappingPairs;
};

console.log("Fully contained pairs: ", calculateFullyContainedPairs());
console.log("Overlapping pairs: ", calculateOverlappingPairs());
