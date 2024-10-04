module.exports = {
    name: 'is-tuesday',
    description: 'is it tuesday?',

    execute() {
      return `It is${ new Date().getDay() === 2 ? '' : ' not' } Tuesday`;
    }
}