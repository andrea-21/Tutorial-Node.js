const path = require('path');
const fs = require('fs');

const pathDir = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(pathDir, (error, files) => {
    files.forEach(element => {
        if (path.extname(element) === ext)
            console.log(element);
     });
})