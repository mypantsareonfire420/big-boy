module.exports = {
  name: 'choose',
  aliases: ['pick'],
  description: 'picks between shit',

  args: [1, -1, false, ['text'], '<text>'],

  execute({m}) {
    let x = m.content.split(/ +/).shift();

    return `I choose ${ x[Math.floor(Math.random() * x.length)] }!`;
  }
}
