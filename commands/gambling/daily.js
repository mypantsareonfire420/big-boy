const { getProfile, updateProfile } = require('../../features/level');

module.exports = {
  name: 'daily',
  description: 'claim daily coins',

  execute({ m }) {
    let profile = getProfile(m.author.id);

    let now = new Date();
    let tomorrow = new Date().setDate(now.getDate() + 1);
    let claimable = false;

    if(profile.nextDaily === null || profile.nextDaily - now <= 0) {
      claimable = true;
    }

    if(claimable) {
      profile.nextDaily = tomorrow;
      profile.xp += 50;
      profile.coins += 50;

      updateProfile(profile);
      return `You have claimed your daily rewards of 50 coins and 50 xp!`;
    } 

    let time = ((profile.nextDaily - now) / (1000 * 60 * 60)).toFixed(1);
    return `Please wait ${ time } hours to claim your daily.`
  }
}
