const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'user-info',
  description: 'sends user info',

  execute({m}) {
    let color = ((Math.floor(Math.random() * 16777216))).toString(16);
    let user = m.mentions.users.first() || m.author;
    let member = m.guild.members.cache.get(user.id);

    let embed = new EmbedBuilder()
      .setColor(Number(`0x${ color }`))
      .setTimestamp()
      .setThumbnail(user.displayAvatarURL())
      .setAuthor({ name: `Information for @${ user.username }` })
      .addFields(
        { name: 'Bot?', value: `${ user.bot }` },
        { name: 'Nickname', value: `${ member.nickname ?? 'None' }` },
        { name: 'Joined Server:', value: new Date(member.joinedTimestamp).toLocaleString() },
        { name: 'Joined Discord:', value: new Date(user.createdTimestamp).toLocaleString() },
        { name: '# of Roles', value: `${ member.roles.cache.size - 1 }` },
      )
      .setFooter({ text: `#${ color }` });

    m.channel.send({ embeds: [embed] })

    // console.log(m.mentions.users?.first() ?? 'no');
  }
}
