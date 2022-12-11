const { input } = require("./input");

const calculateNumberOfPositions = () => {
  let up = 0;
  let down = 0;
  let left = 0;
  let right = 0;

  let maxUp = 0;
  let maxDown = 0;
  let maxLeft = 0;
  let maxRight = 0;

  input.forEach(([direction, steps]) => {
    if (direction === "U") {
      up += steps;
      down -= steps;
    }

    if (direction === "D") {
      down += steps;
      up -= steps;
    }

    if (direction === "L") {
      left += steps;
      right -= steps;
    }

    if (direction === "R") {
      right += steps;
      left -= steps;
    }

    if (maxUp < up) maxUp = up;
    if (maxDown < down) maxDown = down;
    if (maxLeft < left) maxLeft = left;
    if (maxRight < right) maxRight = right;
  });

  const originX = maxLeft;
  const originY = maxDown;

  let headX = originX;
  let headY = originY;
  let tailX = originX;
  let tailY = originY;

  const visitedPositions = [[originX, originY]];

  input.forEach(([direction, steps]) => {
    let step = 1;
    while (step <= steps) {
      if (direction === "U") {
        headY++;
      }

      if (direction === "D") {
        headY--;
      }

      if (direction === "L") {
        headX--;
      }

      if (direction === "R") {
        headX++;
      }

      if (headY === tailY) {
        if (headX - tailX >= 2) {
          tailX++;
        }

        if (tailX - headX >= 2) {
          tailX--;
        }
      }

      if (headX === tailX) {
        if (headY - tailY >= 2) {
          tailY++;
        }

        if (tailY - headY >= 2) {
          tailY--;
        }
      }

      if (headX !== tailX && headY !== tailY) {
        if (
          (headX === tailX + 2 && headY === tailY + 1) ||
          (headX === tailX + 1 && headY === tailY + 2)
        ) {
          tailX++;
          tailY++;
        }

        if (
          (headX === tailX - 2 && headY === tailY - 1) ||
          (headX === tailX - 1 && headY === tailY - 2)
        ) {
          tailX--;
          tailY--;
        }

        if (
          (headX === tailX + 2 && headY === tailY - 1) ||
          (headX === tailX + 1 && headY === tailY - 2)
        ) {
          tailX++;
          tailY--;
        }

        if (
          (headX === tailX - 2 && headY === tailY + 1) ||
          (headX === tailX - 1 && headY === tailY + 2)
        ) {
          tailX--;
          tailY++;
        }
      }

      if (
        visitedPositions.every(
          (visitedPosition) =>
            visitedPosition[0] !== tailX || visitedPosition[1] !== tailY
        )
      ) {
        visitedPositions.push([tailX, tailY]);
      }

      step++;
    }
  });

  return visitedPositions.length;
};

const calculateNumberOfLargerPositions = () => {
  let up = 0;
  let down = 0;
  let left = 0;
  let right = 0;

  let maxUp = 0;
  let maxDown = 0;
  let maxLeft = 0;
  let maxRight = 0;

  input.forEach(([direction, steps]) => {
    if (direction === "U") {
      up += steps;
      down -= steps;
    }

    if (direction === "D") {
      down += steps;
      up -= steps;
    }

    if (direction === "L") {
      left += steps;
      right -= steps;
    }

    if (direction === "R") {
      right += steps;
      left -= steps;
    }

    if (maxUp < up) maxUp = up;
    if (maxDown < down) maxDown = down;
    if (maxLeft < left) maxLeft = left;
    if (maxRight < right) maxRight = right;
  });

  const originX = maxLeft;
  const originY = maxDown;

  let coords = [
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
    [originX, originY],
  ];

  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const visitedPositions = [[originX, originY]];

  input.forEach(([direction, steps]) => {
    let step = 1;
    while (step <= steps) {
      if (direction === "U") {
        coords[0][1]++;
      }

      if (direction === "D") {
        coords[0][1]--;
      }

      if (direction === "L") {
        coords[0][0]--;
      }

      if (direction === "R") {
        coords[0][0]++;
      }

      test.forEach((_, index) => {
        let headX = coords[index][0];
        let headY = coords[index][1];

        let tailX = coords[index + 1][0];
        let tailY = coords[index + 1][1];

        if (headY === tailY) {
          if (headX - tailX >= 2) {
            coords[index + 1][0]++;
          }

          if (tailX - headX >= 2) {
            coords[index + 1][0]--;
          }
        }

        if (headX === tailX) {
          if (headY - tailY >= 2) {
            coords[index + 1][1]++;
          }

          if (tailY - headY >= 2) {
            coords[index + 1][1]--;
          }
        }

        if (headX !== tailX && headY !== tailY) {
          if (
            (headX === tailX + 2 && headY === tailY + 1) ||
            (headX === tailX + 1 && headY === tailY + 2) ||
            (headX === tailX + 2 && headY === tailY + 2)
          ) {
            coords[index + 1][0]++;
            coords[index + 1][1]++;
          }

          if (
            (headX === tailX - 2 && headY === tailY - 1) ||
            (headX === tailX - 1 && headY === tailY - 2) ||
            (headX === tailX - 2 && headY === tailY - 2)
          ) {
            coords[index + 1][0]--;
            coords[index + 1][1]--;
          }

          if (
            (headX === tailX + 2 && headY === tailY - 1) ||
            (headX === tailX + 1 && headY === tailY - 2) ||
            (headX === tailX + 2 && headY === tailY - 2)
          ) {
            coords[index + 1][0]++;
            coords[index + 1][1]--;
          }

          if (
            (headX === tailX - 2 && headY === tailY + 1) ||
            (headX === tailX - 1 && headY === tailY + 2) ||
            (headX === tailX - 2 && headY === tailY + 2)
          ) {
            coords[index + 1][0]--;
            coords[index + 1][1]++;
          }
        }
      });

      if (
        visitedPositions.every(
          (visitedPosition) =>
            visitedPosition[0] !== coords[coords.length - 1][0] ||
            visitedPosition[1] !== coords[coords.length - 1][1]
        )
      ) {
        visitedPositions.push([
          coords[coords.length - 1][0],
          coords[coords.length - 1][1],
        ]);
      }

      step++;
    }
  });

  return visitedPositions.length;
};

console.log("Number of positions: ", calculateNumberOfPositions());
console.log("Number of larger positions: ", calculateNumberOfLargerPositions());
