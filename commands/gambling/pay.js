const { getCoins, addCoins } = require('../../features/economy');

module.exports = {
  name: 'pay',
  description: 'checks a user\'s balance',

  args: [2, 2, true, ['amount', 'target'], '<amount : Number> <target : user>'],

  execute: ({ m }, { amount, target }) => {
    let targetId = m.mentions?.users.first().id;
    let authorId = m.author.id;
    amount = Number(amount);
    let authorCoins = getCoins(authorId);

    if(isNaN(amount) || amount < 0 || amount % 1 === 0 || amount > authorCoins) {
      return 'Please bet a whole, positive number of coins that you have.';
    }

    addCoins(targetId, amount);
    addCoins(authorId, amount * -1);

    return `You have paid <@${ targetId }> ${ amount } coins!
You have ${ authorCoins - amount } coins left.`;
  }
}
