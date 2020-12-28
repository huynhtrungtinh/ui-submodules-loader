const fs =require('fs')
const path = require('path');
const path_package = path.join(__dirname,"../package.json");
const target_package = path.join(__dirname,"../serve/package.json");
if (fs.existsSync(path_package)) {
   const file_package = JSON.parse(fs.readFileSync(path_package));
   const package = {
      "name": file_package.name,
      "version": file_package.version,
      "license": "DIGI-TEXX",
      "main": "index.js",
      "scripts": {
         "start": "node index.js"
      },
      "dependencies": {
         "express": "^4.16.3",
         "helmet": "^3.18.0"
      },
      "authors":file_package.author||['x <x@digi-texx.vn>']
   }
   fs.writeFileSync(target_package,JSON.stringify(package, null, 4),'utf8');
}