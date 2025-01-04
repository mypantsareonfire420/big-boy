module.exports = {
  name: 'help',
  description: 'lists all commands and what they do',

  args: [0, 1, false, ['cmd'], '[cmd: Name of the command you want to run]'],

  execute({ m, fn }, { cmd }) { 
    // console.log(fn);

    if(cmd.length === 0) {
      let arr = [];
      for(let i = 0; i < fn.length; i++) {
        arr[i] = [fn[i][0], fn[i][2].description, fn[i][2].ownerOnly ? true : false]
      }

      arr.sort((a, b) => a[0].localeCompare(b[0]));

      let str = 'The commands you can use are:\n\n';
      
      for(let i = 0; i < fn.length; i++) {
        let l = str.length; 

        let str2 = `!**${ arr[i][0] }**: ${ arr[i][1] } ${ arr[i][2] ? '(Owner only)' : '' }\n`

        if(l + str2.length > 2000) { 
          m.channel.send(str) 
          str = '';
        } else {
          str += str2;
        }
      }

      // how to split messages efficiently

      return str;
    }

    else {
      return;
    }
  }
}
