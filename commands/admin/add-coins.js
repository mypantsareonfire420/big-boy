const { addCoins } = require('../../features/economy');

module.exports = {
  name: 'add-coins',
  description: 'gives a user coins',

  ownerOnly: true,
  args: [2, 2, true, ['id', 'amount'], '<id : Number> <amount : Number>'],

  execute: ({}, { id, amount }) => {
    addCoins(id, amount = 1);
  }
}
