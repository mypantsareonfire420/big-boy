const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'server-info',
  description: 'sends server info',

  execute({m}) {
    let color = ((Math.floor(Math.random() * 16777216))).toString(16);
    let { guild } = m;

    let embed = new EmbedBuilder()
      .setColor(Number(`0x${ color }`))
      .setTimestamp()
      .setThumbnail(guild.iconURL())
      .setImage(guild.bannerURL())
      .setAuthor({ name: `Information for @${ guild.name }` })
      .addFields(
        { name: 'Name', value: `${ guild.name }` },
        { name: 'Created', value: `${ new Date(guild.createdAt).toLocaleString() }` },
        { name: 'Member Count', value: `${ guild.memberCount }` },
        { name: 'Role Count', value: `${ guild.roles.cache.size }` },
        { name: 'Boost Count', value: `${ guild.premiumSubscriptionCount ?? 0 }` },
        { name: 'Boost Tier', value: `Tier ${ guild.premiumTier }` }
      )
      .setFooter({ text: `#${ color }` });

    m.channel.send({ embeds: [embed] })

    console.log(typeof guild.memberCount);
  }
}
