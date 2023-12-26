const timer = 5000;
const outputInterval = 1000;
let val = 0;

process.stdout.write(`${timer / 1000} second delay\n`);

const ready = () => {
  outputInterval(`ready`);
  clearInterval(myInt);
  process.stdout.write("\n");
};

const counter = () => {
  val++;
  outputInterval(`${timer / 1000 - val} seconds left`);
};

const output = (mes) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(mes);
};

const myInt = setInterval(counter, outputInterval);
setTimeout(ready, timer);

const pathMod = require("path");
console.log(__filename);
console.log(pathMod.basename(__filename));

const utilMod = require("util");

utilMod.log(pathMod.basename(__filename));

const first = require('./mods/first.js');
first();


const ranNum = require('./mods/randomNum.js');
console.log(ranNum.random(50));