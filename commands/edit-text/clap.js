module.exports = {
  name: 'clap',
  description: 'clap',

  args: [0, -1, false, ['text'], '<text>'],

  execute: ({}, { text }) => { 
    console.log(text); 
    return (text.split(' ').join(' 👏 ')); 
  }
}
