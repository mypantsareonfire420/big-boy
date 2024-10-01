module.exports = {
  name: 'reverse',
  description: 'reverses message',

  args: [1, -1, false, ['text'], '<text>'],

  execute: ({}, { text }) => { return text.split('').reverse().join(''); }
}
