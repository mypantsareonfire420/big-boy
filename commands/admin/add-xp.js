const level = require('../../features/level');

module.exports = {
  name: 'add-xp',
  description: 'gives a user xp',

  ownerOnly: true,
  args: [2, 2, true, ['id', 'amount'], '<id : Number> <amount : Number>'],

  execute: ({}, { id, amount }) => {
    level(null, id, amount = 1);
  }
}
