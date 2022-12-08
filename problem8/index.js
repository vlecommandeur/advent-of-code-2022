const { input } = require("./input");

const countVisibleTrees = () => {
  let treeSize = input.length;
  let visibleTrees = 0;

  for (let row = 0; row < treeSize; row++) {
    for (let column = 0; column < treeSize; column++) {
      const currentTree = input[row][column];
      const isOnTheEdge =
        row === 0 ||
        column === 0 ||
        row === treeSize - 1 ||
        column === treeSize - 1;

      if (isOnTheEdge) {
        visibleTrees++;
      }

      if (!isOnTheEdge) {
        let visibleTop = true;
        for (let top = row - 1; top >= 0; top--) {
          if (input[top][column] >= currentTree) visibleTop = false;
        }

        let visibleBottom = true;
        for (let bottom = row + 1; bottom < treeSize; bottom++) {
          if (input[bottom][column] >= currentTree) visibleBottom = false;
        }

        let visibleLeft = true;
        for (let left = column - 1; left >= 0; left--) {
          if (input[row][left] >= currentTree) visibleLeft = false;
        }

        let visibleRight = true;
        for (let right = column + 1; right < treeSize; right++) {
          if (input[row][right] >= currentTree) visibleRight = false;
        }

        if (visibleTop || visibleBottom || visibleLeft || visibleRight) {
          visibleTrees++;
        }
      }
    }
  }

  return visibleTrees;
};

const calculateHighestScenicScore = () => {
  let treeSize = input.length;
  let highestScenicScore = 0;

  for (let row = 0; row < treeSize; row++) {
    for (let column = 0; column < treeSize; column++) {
      const currentTree = input[row][column];

      const topOnTheEdge = row === 0;
      const bottomOnTheEdge = row === treeSize - 1;
      const leftOnTheEdge = column === 0;
      const rightOnTheEdge = column === treeSize - 1;

      let topScore = 0;
      let topBlocked = false;
      for (let top = row - 1; top >= 0; top--) {
        if (input[top][column] < currentTree && !topBlocked) {
          topScore++;
        } else {
          topBlocked = true;
        }
      }

      if (topBlocked && !topOnTheEdge) topScore++;

      let bottomScore = 0;
      let bottomBlocked = false;
      for (let bottom = row + 1; bottom < treeSize; bottom++) {
        if (input[bottom][column] < currentTree && !bottomBlocked) {
          bottomScore++;
        } else {
          bottomBlocked = true;
        }
      }

      if (bottomBlocked && !bottomOnTheEdge) bottomScore++;

      let leftScore = 0;
      let leftBlocked = false;
      for (let left = column - 1; left >= 0; left--) {
        if (input[row][left] < currentTree && !leftBlocked) {
          leftScore++;
        } else {
          leftBlocked = true;
        }
      }

      if (leftBlocked && !leftOnTheEdge) leftScore++;

      let rightScore = 0;
      let rightBlocked = false;
      for (let right = column + 1; right < treeSize; right++) {
        if (input[row][right] < currentTree && !rightBlocked) {
          rightScore++;
        } else {
          rightBlocked = true;
        }
      }

      if (rightBlocked && !rightOnTheEdge) rightScore++;

      const scenicScore = topScore * bottomScore * leftScore * rightScore;
      if (scenicScore > highestScenicScore) highestScenicScore = scenicScore;
    }
  }

  return highestScenicScore;
};

console.log("Visibile trees:", countVisibleTrees());
console.log("Highest scenic score:", calculateHighestScenicScore());
