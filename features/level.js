const db = require('../db.json');
const fs = require('fs');

/*
db is formatted as follows

user id
current xp
level
next daily
lifetime (recorded) messages
coins
*/

module.exports = (m, id, amount = 1) => {
  addXp(m, id, amount);
};

const getNeededXp = (level) => Math.floor((level + 1) ** 3 + (level + 1) * 3) * 2;

function addXp(m, id, amount = 1) {
  let mid = m === null ? id : m.author.id;
  let profile = db[mid];

  if(!profile) {
    profile = {
      userId: mid,
      level: 1,
      xp: 1,
      sent: 1,
      coins: 100,
      nextDaily: null
    };
  }

  console.log(profile);

  profile.sent += 1;
  profile.xp += amount;
  let needed = getNeededXp(profile.level);

  if(profile.xp > needed) {
    let oldLevel = profile.level;

    do {
      profile.level += 1;
      profile.xp -= needed;
      needed = getNeededXp(profile.level);
    } while(profile.xp > needed);

    let x = Number((profile.xp / getNeededXp(profile.level) * 100).toFixed(0))

    m.channel.send(`Congratulations <@${ mid }>, you've jumped from level ${ oldLevel } to level ${ profile.level }!
You need ${ getNeededXp(profile.level) - profile.xp } xp to level up to level ${ profile.level + 1 }${
  x > 30 ? `, you're already ${ x }% of the way there!` : '!'
}`);
  }

  db[mid] = profile;

  try { fs.writeFileSync('./db.json', JSON.stringify(db), (x) => {}); } 
  catch(e) { console.error(e); }
}

const getProfile = (id) => db[`${ id }`]; 

function updateProfile(profile) {
  db[profile.userId] = profile;

  try { fs.writeFileSync('./db.json', JSON.stringify(db), (x) => {}); } 
  catch(e) { console.error(e); }
}

module.exports.getNeededXp = getNeededXp;
module.exports.addXp = addXp;
module.exports.getProfile = getProfile;
module.exports.updateProfile = updateProfile;
