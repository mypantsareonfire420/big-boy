const { getCoins, addCoins } = require('../../features/economy');

module.exports = {
  name: 'coinflip',
  aliases: ['cf', '50/50', '5050', '50-50'],
  description: 'coinflip',

  args: [2, 2, true, ['bet', 'flip'], '<bet : Number> <flip : \'heads\' || \'tails\''],
  execute({ m }, { bet, flip }) {
    let coins = parseInt(getCoins(m.author.id));
    bet = parseInt(bet)

    if(isNaN(bet) || bet < 0 || bet % 1 !== 0 || bet > coins) {
      return 'Please bet a whole, positive number of coins that you have.'
    }

    console.log(flip)
    if(!['heads', 'tails'].includes(flip)) {
      return 'Please bet "heads" or "tails"';
    }

    let x = Math.random() > 0.5 ? 'heads' : 'tails';
    m.channel.send(`The bot flipped ${ x }.`)
    if(x === flip) {
      addCoins(m.author.id, bet);
      return `You've won ${ bet } coins! You have ${ coins + bet } coins left.`
    }

    addCoins(m.author.id, bet * -1);
    return `You've lost ${ bet } coins. You have ${ coins - bet } coins left.`
  }
}
