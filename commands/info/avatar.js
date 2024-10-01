const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['pfp'],
  description: 'sends users pfp',

  execute({m}) {
    let color = ((Math.floor(Math.random() * 16777216))).toString(16);

    let embed = new EmbedBuilder()
      .setColor(Number(`0x${ color }`))
      .setTimestamp()
      .setImage(
        m.mentions.users.first()?.displayAvatarURL() 
        ?? m.author.displayAvatarURL()
      )
      .setFooter({ text: `#${ color }` });

    m.channel.send({ embeds: [embed] })

    // console.log(m.mentions.users?.first() ?? 'no');
  }
}
