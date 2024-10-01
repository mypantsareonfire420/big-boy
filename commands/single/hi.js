module.exports = {
  name: 'hi',
  description: 'hi!',

  async execute({ m }) {
    try {
      await m.react('👋');
    } catch(e) {
      return 'Hi!'
    }
  }
}
