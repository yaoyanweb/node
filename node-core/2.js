const fs = require('fs');
const path = require('path');

console.log(path.resolve('./README.md'));

let a = fs.readFileSync('./README.md','utf-8');
console.log(a)