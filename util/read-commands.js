const path = require('path');
const fs = require('fs');

let fileNames = [];

function readFiles(dir) {
  let files = fs.readdirSync(path.join(__dirname, dir));
  for(let file of files) {
    let stat = fs.lstatSync(path.join(__dirname, dir, file));
    if(stat.isDirectory()) {
      readFiles(path.join(dir, file));
    } else if(
      file !== 'command-handler.js'
    ) {
      let fileA = path.join(__dirname, dir, file);
      let obj = require(fileA);

      let truePath = fileA.split('\\').slice(4).join('/');

      if(obj.name === 'monke') {
        console.log(path.join(__dirname, dir, file));
      }

      if(!obj.name) {
        throw new Error(`cmd::${truePath} does not have a "name".`);
      }

      if(!obj.description) {
        throw new Error(`cmd::${truePath} does not have a "description".`);
      }

      if(!obj.execute) {
        throw new Error(`cmd::${truePath} does not have an "execute".`);
      }

      if(obj.aliases) {
        if(typeof(obj.aliases) !== 'object') {
          throw new Error(`cmd::${truePath} "aliases" has to be of type 'array'.`);
        }
        
        for(let thing of obj.aliases) {
          fileNames.push([thing, fileA, obj]);
        }
      }
    
      fileNames.push([obj.name, fileA, obj]);
    }
  }
}

module.exports = () => {
  readFiles('../commands');
  return fileNames;
};
