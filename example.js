var stringPad = require('./');

var pad = new stringPad('zhang', '11s', 0);

console.log(pad.toLeft());
console.log(pad.toRight());
console.log(pad.toMiddle());