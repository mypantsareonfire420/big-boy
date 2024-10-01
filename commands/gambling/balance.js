const { getNeededXp, getProfile } = require('../../features/level');

module.exports = {
  name: 'balance',
  aliases: ['bal', 'xp', 'level', 'profile'],
  description: 'checks a user\'s balance',

  execute: ({ m }) => {
    let target = m.mentions?.users.first() ?? m.author;
    let profile = getProfile(target.id);

    return `You are level ${ profile.level } with ${ profile.xp } xp (${ 
      (profile.xp / getNeededXp(profile.level)).toFixed(2)
    }%)
You have ${ profile.coins } coins.`;
  }
}
