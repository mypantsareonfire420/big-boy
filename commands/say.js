module.exports = {
  name: 'say',
  description: 'say stuff with bot',

  ownerOnly: true,
  args: [1, -1, false, ['text'], '<text>'],

  async execute ({ m }, { text }) { 
    await m.delete().then(() => {
      m.channel.send(text);
    })
   }
}
