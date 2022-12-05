const { input } = require("./input");
const { Stack } = require("../stack");

const stack1 = new Stack(["T", "D", "W", "Z", "V", "P", "D", "H"]);
const stack2 = new Stack(["L", "S", "W", "V", "F", "J", "B"]);
const stack3 = new Stack(["Z", "M", "L", "S", "V", "T", "B", "H"]);
const stack4 = new Stack(["R", "S", "J"]);
const stack5 = new Stack(["C", "Z", "B", "G", "F", "M", "L", "W"]);
const stack6 = new Stack(["Q", "W", "V", "H", "Z", "R", "G", "B"]);
const stack7 = new Stack(["V", "J", "P", "C", "B", "D", "N"]);
const stack8 = new Stack(["P", "T", "B", "Q"]);
const stack9 = new Stack(["H", "G", "Z", "R", "C"]);

const getStack = (stack) =>
  ({
    1: stack1,
    2: stack2,
    3: stack3,
    4: stack4,
    5: stack5,
    6: stack6,
    7: stack7,
    8: stack8,
    9: stack9,
  }[stack]);

const computePartTwoTopCrates = () => {
  let topCrates = "";

  input.forEach((step) => {
    const fromStack = getStack(step[1]);
    const toStack = getStack(step[2]);

    let cratesToPush = [];
    [...Array(step[0])].forEach(() => {
      cratesToPush.push(fromStack.peek());
      fromStack.pop();
    });

    cratesToPush.reverse().forEach((el) => {
      toStack.push(el);
    });
  });

  [...Array(9)].forEach((_, i) => {
    topCrates += getStack(i + 1).peek();
  });

  return topCrates;
};

module.exports = { computePartTwoTopCrates };
