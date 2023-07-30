// CommonJS, every file is module by default
// Modules - Encapsulated Code
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

const { john, peter } = names;

// sayHi("susan");
// sayHi(john);
// sayHi(peter);
