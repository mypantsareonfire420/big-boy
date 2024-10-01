module.exports = (m, list) => {
  // guild id, channel id, guild name, channel name, channel topic
  
  if(!m.channel.topic?.includes('<!-- portal -->')) { return; }

  const channelId = m.channel.id;
  let channels = [];

  for(let i = 0; i < list.length; i++) {
    if(channelId === list[i][1]) { continue; }
    if(list[i][3]?.includes('<!-- portal -->')) { channels.push(list[i]); }
  }

  for(let ch of channels) {
    ch[2].send(`Incoming from ${ ch[2].guild.name }:\n${ m.content }`);
  }
};
