const { readFileSync, writeFileSync } = require("fs");

console.log("Start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}` + "\n" + `${second}`,
  { flag: "a" }
);

console.log("done w this task");
console.log("starting the next one");
