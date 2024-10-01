module.exports = {
  name: 'spoiler-letter',
  description: 'spoils letter',

  args: [1, -1, false, ['text'], '<text>'],

  execute: ({}, { text }) => { return `||${text.split('').join('||||')}||`; }
}
