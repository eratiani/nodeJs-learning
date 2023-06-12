const { readFile } = require("fs");
console.log("start of task");
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("task complete");
});
console.log("starting next task");
