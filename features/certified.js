module.exports = (m) => {
  let t = '';
  
  if(m.content.toLowerCase().startsWith('this is a certified')) {
    t = m.content.substr(20, m.content.length);
    t += ' certified:tm:';
  } else if(m.content.toLowerCase().startsWith('roll for')) {
    t = m.content.substr(9, m.content.length);
    
    let rand = Math.floor(Math.random() * 20 + 1);
    if(rand === 1) {
      rand = 'natural 1';
    } else if(rand === 20) {
      rand = 'natural 20';
    }

    t = `Rolled a ${rand} for ${t}`;
  } else { return; }
  m.channel.send(t);
};
