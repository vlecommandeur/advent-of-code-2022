const { input } = require("./input");

const charListValuesTable = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const buildCharList = (str) => {
  const charList = [];

  [...str].forEach((char) => !charList.includes(char) && charList.push(char));

  return charList;
};

const calculateSumOfPriorities = () => {
  let sumOfPriorities = 0;

  input.forEach((rucksack) => {
    const middle = Math.floor(rucksack.length / 2);

    const ruckstackA = rucksack.substring(0, middle);
    const ruckstackB = rucksack.substring(middle);

    const charListA = buildCharList(ruckstackA);
    const charListB = buildCharList(ruckstackB);

    const itemType = charListA.find((charA) => {
      if (charListB.includes(charA)) {
        return charA;
      }
    });

    itemType.toLowerCase() === itemType
      ? (sumOfPriorities += charListValuesTable[itemType])
      : (sumOfPriorities += charListValuesTable[itemType.toLowerCase()] + 26);
  });

  return sumOfPriorities;
};

const calculateSumOfTripletsPriorities = () => {
  let sumOfTripletsPriorities = 0;

  for (i = 0; i < input.length; i = i + 3) {
    const ruckstackA = input[i];
    const ruckstackB = input[i + 1];
    const ruckstackC = input[i + 2];

    const charListA = buildCharList(ruckstackA);
    const charListB = buildCharList(ruckstackB);
    const charListC = buildCharList(ruckstackC);

    const itemType = charListA.find((charA) => {
      if (charListB.includes(charA) && charListC.includes(charA)) {
        return charA;
      }
    });

    itemType.toLowerCase() === itemType
      ? (sumOfTripletsPriorities += charListValuesTable[itemType])
      : (sumOfTripletsPriorities +=
          charListValuesTable[itemType.toLowerCase()] + 26);
  }

  return sumOfTripletsPriorities;
};

console.log("Sum of priorities: ", calculateSumOfPriorities());
console.log("Sum of triplets priorities: ", calculateSumOfTripletsPriorities());
