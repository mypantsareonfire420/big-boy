let frames = [
  '(-°□°)- _ _┬─┬',
  '(╯°□°)╯ _  _ ]',
  '(╯°□°)╯ _ _︵ _ _┻━┻',
  '(╯°□°)╯ _ _ _ _ _ _ [',
  '(╯°□°)╯ _ _ _ _ _ _ _ _ _ _ ┬─┬'
];

module.exports = {
  name: 'tableflip',
  description: 'flip table',

  async execute({ m: msg }) {
    let m = await msg.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for(let j = 0; j < 1; j++) {
      let i = 0;
      
      await new Promise((res) => setTimeout(res, 600));

      for(i; i < 4; i++) {
        await new Promise((res) => setTimeout(res, 600));
        await m.edit(frames[i]);
      }

      await new Promise((res) => setTimeout(res, 600));


      for(i; i > -1; i--) {
        await new Promise((res) => setTimeout(res, 600));
        await m.edit(frames[i]);
      }
    }
  }
}
