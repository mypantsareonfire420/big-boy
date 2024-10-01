const req = require('node-superfetch');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'reddit',
  description: 'reddit',

  args: [1, 1, false, ['subreddit'], '<subreddit>'],

  async execute({ m }, { subreddit }) {
    let { body } = await req.get(`https://old.reddit.com/r/${ subreddit }.json?sort=hot`);
    let post = body.data.children[Math.floor(Math.random() * body.data.children.length)].data;

    let color = ((Math.floor(Math.random() * 16777216))).toString(16);
    
    let embed = new EmbedBuilder()
      .setColor(Number(`0x${ color }`))
      .setTimestamp()
      .setTitle(`${ post.title }`)
      .setAuthor({ name: `/u/${ post.author }` })
      .setURL(`https://www.reddit.com${ post.permalink }`)
      .setFooter({ text: `#${ color }` });

    if(post.thumbnail) { embed.setImage(`${ post.url }`); }

    m.channel.send({ embeds: [embed] })

  }
}
