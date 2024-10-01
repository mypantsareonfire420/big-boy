module.exports = (client) => {
  const guildCache = client.guilds.cache;
  let arr = [];

  guildCache.each((guild) => {
    let cache = guild.channels.cache;

    cache.forEach((channel) => {
      // guild id, channel id, object, topic
      arr.push([guild.id, channel.id, channel, channel.topic]);
    })
  })

  return arr
};
