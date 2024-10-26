const path = require('path');
const sloc = require('sloc');
const fs = require('fs');

let dirs = [];
module.exports = {
  name: 'cloc',
  aliases: ['code-line', 'code-line-count'],
  description: 'how many lines of code are in big boy?',

  async execute({ cl }) {
    readFiles('../');

    let jsobj = {
      total: 0,
      source: 0,
      comment: 0,
      single: 0,
      block: 0,
      mixed: 0,
      todo: 0,
      empty: 0,
      blockEmpty: 0
    };
    
    let jsonobj = {
      total: 0,
      source: 0,
      comment: 0,
      single: 0,
      block: 0,
      mixed: 0,
      todo: 0,
      empty: 0,
      blockEmpty: 0
    };

    let otherobj = {
      total: 0,
      source: 0,
      comment: 0,
      single: 0,
      block: 0,
      mixed: 0,
      todo: 0,
      empty: 0,
      blockEmpty: 0
    };

    for(let i = 0; i < dirs.length; i++) {
      fs.readFile(path.join('./', dirs[i]), 'utf-8', (err, code) => {
        if(err) { console.error(err); }

        let stats = sloc(code, 'js');
        let ext = dirs[i].split('.')[1];
        
        for(let [key, val] of Object.entries(stats)) {
          // jsobj[key] += val;
          if(ext === 'js') {
            jsobj[key] += val;
          } else if(ext === 'json') {
            jsonobj[key] += val;
          } else {
            otherobj[key] += val;
          }
        }
      });
    }

    await new Promise((res) => setTimeout(res, 1000));

    let total = jsobj.total + jsonobj.total + otherobj.total;
    let comments = jsobj.comment + jsonobj.comment + otherobj.comment;
    let whitespace = jsobj.empty + jsobj.blockEmpty 
      + jsonobj.empty + jsonobj.blockEmpty
      + otherobj.empty + otherobj.blockEmpty;

    return `Lines of code in **Big Boy**:
JavaScript: ${ jsobj.total }
JSON: ${ jsonobj.total }
Other: ${ otherobj.total }
Whitespace: ${ whitespace } (${ (whitespace / total * 100).toFixed(2) }%)
Comments: ${ comments } (${ (comments / total * 100).toFixed(2) }%)
Total: ${ total }
`;
  }
};

*/

function readFiles(dir) {
  let files = fs.readdirSync(path.join(__dirname, dir));

  for(let file of files) {
    if(file === 'node_modules'
      || file === '.git'
      || file === 'img'
      || file === 'font'
    ) { continue; }
    
    let stat = fs.lstatSync(path.join(__dirname, dir, file));

    if(stat.isDirectory()) {
      readFiles(path.join(dir, file));
    } else {
      dir = dir.split('\\').slice(2).join('\\');
      dirs.push(path.join(dir, file));
      dir = path.join('..', '..', dir);
    }
  }
}