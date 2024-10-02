const fs = require('fs');
const cf = require('../config.json');

// /*
// ~ COMMAND TYPE
// % module.exports = {
//   @ name: String, [required]
//   # aliases: String[],
//   @ description: String, [required]
  
//   # ownerOnly: Boolean,
//   # args: [Integer, Integer, Boolean, [Object, Object, ...], '<format>']

//   @ execute: Function [required]
// % };
// */

const userId = '273960318429036545';
let argsToPass = {};
let ret;

module.exports = async (c, fileNames, m, prefix) => {
  // does message have prefix in front of it
  let prefixed = false;
  for(let i = 0; i < prefix.length; i++) {
    if(m.content.startsWith(prefix[i])) {
      prefixed = true;
      m.content = m.content.substring(prefix[i].length);
    }
  }

  if(!prefixed) { return; }

  // arg manipulation
  let args = m.content.split(/ +/);
  let command = args[0].toLowerCase();
  args.shift();

  // which one is the command ???
  for(let file of fileNames) {
    if(command !== file[0]) { continue; }
    let fp = file[1];
    let obj = file[2];

    // checking for things
    // ownerOnly: boolean
    if(obj.ownerOnly && m.author.id !== userId) {
      console.log(m.author.id === userId);
      m.reply("You aren't allowed to use this command, as you don't own me.");
      return;
    }

    // args
    /*
    minArgs : int
;primes-under 10000000
    maxArgs : int
    argsType : true ? (separated) : (one thing)
    [var 1, var 2, etc]
    format
    */

    if(obj.args) {
      argsToPass = {};
      let a = obj.args;

      if(
        typeof a[0] !== 'number'
        || typeof a[1] !== 'number'
        || typeof a[2] !== 'boolean'
        || typeof a[3] !== 'object'
      ) { throw new Error(`${ fp }: args incorrectly formatted.`); }

      // min vs max
      let min = a[0];
      let max = a[1];
      let split = a[2];
      let vars = a[3];
      let format = a[4];
      
      if(max === -1) { max = 10000; }
      if(max < min) { throw new Error(`${ fp }: min args can't be bigger than max args.`); }
      if(!split) { args = args.join(' '); }

      // no args and none provided
      if(vars.length === 0 && args.length === 0) {
        ret = await obj.execute({ m, cl: c, cf }, {});
      }

      // no args and provided
      else if(vars.length === 0 && args.length > 0) {
        m.channel.send('There aren\'t supposed to be any arguments for this command.');
      }

      // args and none provided
      else if(vars.length > 0 && args.length === 0) {
        m.channel.send(`The arguments for this command are: ${ format }`);
      }

      // args and provided 
      else {
        // not split
        if(a[2]) {
          for(let i = 0; i < vars.length; i++) {
            argsToPass[`${ vars[i] }`] = args[i];
          }
        } else {
          argsToPass[`${ vars[0] }`] = args;
        }

        // split
        ret = await obj.execute({ m, cl: c, cf }, argsToPass);
      }
    } else {
      ret = await obj.execute({ m, cl: c, cf });
    }

    // get databased on

    if(ret === 0 || !ret) {
      return;
    } else if(ret === 1) {
      console.log(`${ command } failed, try again in a few moments.`);
    } else {
      m.channel.send(ret);
    }

    return;
  }

  m.reply(`I don't know what the command "${ command }" is.`);
}