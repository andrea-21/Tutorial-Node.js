const fs = require('fs');

const fileString = fs.readFileSync(process.argv[2], 'utf8');
const lines = fileString.split('\n').length -1;
console.log(lines); 