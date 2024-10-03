module.exports = (m, list) => {
  if(!m.channel.topic?.includes('<!-- confess -->')) { return; }
  if(!m.content.toLowerCase().startsWith('confess')) { return; }

  if(m.content.toLowerCase().startsWith('scramble')) {
    let toSend = '';
    let content = m.content.split('');
    
    for(let i = 0; i < content.length; i++) {
      let lowercaseR = /^[a-z]+$/;
      let uppercaseR = /^[A-Z]+$/;
      let numbercaseR = /^[0-9]+$/;

      if(lowercaseR.test(content[i])) {
        toSend += ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][Math.floor(Math.random() * 26)];
      }
      else if(uppercaseR.test(content[i])) {
        toSend += ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'][Math.floor(Math.random() * 26)];
      }
      else if(numbercaseR.test(content[i])) {
        toSend += ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'][Math.floor(Math.random() * 10)];
      }
      else if(content[i] === ' ') { toSend += ' '; }
    }

    m.delete().then((ms) => {
      m.channel.send(`ANONYMOUS SCRAMBLED CONFESSION:\n${ toSend }`);
    })
  }

  else {
    m.delete().then((ms) => {
      m.channel.send(`ANONYMOUS CONFESSION:\n${ m.content }`);
    });
  }
}
