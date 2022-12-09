const { Tree, Node } = require("../tree");
const { input } = require("./input");
const { v4: uuidv4 } = require("uuid");

const instructions = ["dir", "cd"];

const calculateDirectoriesSizesSum = () => {
  let directoriesSizesSum = 0;

  const tree = new Tree();
  tree.root = new Node({
    name: "/",
    value: 0,
    id: uuidv4(),
    type: "directory",
  });

  let currentNode = tree.root;

  input.forEach((command) => {
    const commandArr = command.split(" ");

    if (commandArr[0] === "dir") {
      currentNode.add({
        name: commandArr[1],
        value: 0,
        id: uuidv4(),
        type: "directory",
      });
    }

    if (commandArr[0] === "cd") {
      if (commandArr[1] !== "..") {
        currentNode = currentNode.children.find(
          (child) =>
            child.data.name === commandArr[1] && child.data.type === "directory"
        );
      }
      if (commandArr[1] === "..") {
        tree.traverseBF((node) => {
          if (
            node.children.find((child) => {
              return (
                child.data.id === currentNode.data.id &&
                child.data.type === "directory"
              );
            })
          ) {
            currentNode = node;
          }
        });
      }
    }

    if (!instructions.includes(commandArr[0])) {
      if (
        currentNode.children.some(
          (child) =>
            child.data.name === commandArr[1] && child.data.type === "file"
        )
      ) {
        currentNode.children.find(
          (child) =>
            child.data.name === commandArr[1] && child.data.type === "file"
        ).data.value += commandArr[0];
      } else {
        currentNode.add({
          name: commandArr[1],
          value: commandArr[0],
          id: uuidv4(),
          type: "file",
        });
      }
    }
  });

  tree.traverseBF((node) => {
    if (node.data.type === "directory") {
      let sum = 0;

      const test = new Tree();
      test.root = node;

      test.traverseBF((nodeTest) => {
        if (nodeTest.data.type === "file") sum += parseInt(nodeTest.data.value);
      });

      if (sum <= 100000) directoriesSizesSum += sum;
    }
  });

  return directoriesSizesSum;
};

const calculateDeletedDirectorySize = () => {
  const tree = new Tree();
  tree.root = new Node({
    name: "/",
    value: 0,
    id: uuidv4(),
    type: "directory",
  });

  let currentNode = tree.root;

  input.forEach((command) => {
    const commandArr = command.split(" ");

    if (commandArr[0] === "dir") {
      currentNode.add({
        name: commandArr[1],
        value: 0,
        id: uuidv4(),
        type: "directory",
      });
    }

    if (commandArr[0] === "cd") {
      if (commandArr[1] !== "..") {
        currentNode = currentNode.children.find(
          (child) =>
            child.data.name === commandArr[1] && child.data.type === "directory"
        );
      }
      if (commandArr[1] === "..") {
        tree.traverseBF((node) => {
          if (
            node.children.find((child) => {
              return (
                child.data.id === currentNode.data.id &&
                child.data.type === "directory"
              );
            })
          ) {
            currentNode = node;
          }
        });
      }
    }

    if (!instructions.includes(commandArr[0])) {
      if (
        currentNode.children.some(
          (child) =>
            child.data.name === commandArr[1] && child.data.type === "file"
        )
      ) {
        currentNode.children.find(
          (child) =>
            child.data.name === commandArr[1] && child.data.type === "file"
        ).data.value += commandArr[0];
      } else {
        currentNode.add({
          name: commandArr[1],
          value: commandArr[0],
          id: uuidv4(),
          type: "file",
        });
      }
    }
  });

  let rootDirectorySize = 0;

  tree.traverseBF((node) => {
    if (node.data.type === "directory") {
      let sum = 0;

      const test = new Tree();
      test.root = node;

      test.traverseBF((nodeTest) => {
        if (nodeTest.data.type === "file") sum += parseInt(nodeTest.data.value);
      });

      if (sum > rootDirectorySize) rootDirectorySize = sum;
    }
  });

  let remainingSpace = 30000000 - (70000000 - rootDirectorySize);
  let result = 9999999999999999999999999999999;

  tree.traverseBF((node) => {
    if (node.data.type === "directory") {
      let sum = 0;

      const test = new Tree();
      test.root = node;

      test.traverseBF((nodeTest) => {
        if (nodeTest.data.type === "file") sum += parseInt(nodeTest.data.value);
      });

      if (sum > remainingSpace && sum < result) result = sum;
    }
  });

  return result;
};

console.log("Directories sizes sum:", calculateDirectoriesSizesSum());
console.log("Deleted directory size:", calculateDeletedDirectorySize());
