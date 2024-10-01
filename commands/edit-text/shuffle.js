module.exports = {
  name: 'shuffle',
  description: 'shuffles message',

  args: [1, -1, false, ['text'], '<text>'],

  execute: ({}, { text }) => { return shuffle(text.split('')).join(''); }
}

function shuffle(array) {
  const arr = array.slice(0);
  for(let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
