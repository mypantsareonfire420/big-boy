module.exports = (m, list) => {
  if(!m.channel.topic?.includes('<!-- confess -->')) { return; }
  if(!m.content.toLowerCase().startsWith('confess')) { return; }

  m.delete().then((ms) => {
    m.channel.send(`ANONYMOUS CONFESSION:\n${ m.content }`);
  })
}
