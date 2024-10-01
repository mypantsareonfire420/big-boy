module.exports = {
  name: 'eval',
  description: 'not for you',

  ownerOnly: true,
  args: [1, -1, false, ['text'], '<text>'],

  execute: ({ m }, { text }) => { return eval(text); }
}
