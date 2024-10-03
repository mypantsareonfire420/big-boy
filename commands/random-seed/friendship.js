module.exports = {
  name: 'friendship',
  description: 'step right up! what is your friendship quality?',

  execute({ m, cl }) {
    let ownerId = '273960318429036545'
    let target1 = m.mentions.users.first();
    let target2 = m.mentions.users.first(2);

    if(!target1 || !target2) {
      return message.reply('please tag two users.');
    }

    if(target1.id === cl.user.id || target2.id === cl.user.id) {
      return 'Besties!!!!!';
    }

    if(target1.id === ownerId || target2.id === ownerId) {
      if(m.author.id === ownerId) {
        return `You two are 100% compatible!`
      }

      return `You two are 0% compatible.`;
    }

    let quality = parseFloat(`0.${ (target1.id.toFixed(5) * target2.id.toFixed(5)).toString().reverse() }`);
    return `You two are ${ (quality * 100).toFixed(2) }% compatible.`
  }
}

