const { input } = require("./input");

const firstMarkerPosition = (markerSize) => {
  const inputArr = [...input];

  const markerPosition = inputArr.findIndex(
    (_, index) =>
      new Set([...Array(markerSize)].map((_, i) => inputArr[index + i]))
        .size === markerSize
  );

  return markerPosition + markerSize;
};

console.log("First marker position of size 4: ", firstMarkerPosition(4));
console.log("First marker position of size 14: ", firstMarkerPosition(14));
