module.exports = {
  name: 'add',
  description: 'adds 2 numbers',

  args: [2, 2, true, ['a', 'b'], '<a : Number> <b : Number>'],

  execute: ({ m }, { a, b }) => {
    return (parseFloat(a) + parseFloat(b)).toString();
  }
}
