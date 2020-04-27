const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error,data) =>{
    if (error)
        throw error;
    const lines = data.split('\n').length -1;
    console.log(lines); 
});
