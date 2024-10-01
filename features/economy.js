const db = require('../db.json');
const fs = require('fs');

const getCoins = (id) => db[`${ id }`].coins ?? 100;

function addCoins(id, coins) {
  coins = Number(coins);

  db[`${ id }`].coins += coins;

  try { fs.writeFileSync('./db.json', JSON.stringify(db), (x) => {}); } 
  catch(e) { console.error(e); }

  return db[`${ id }`].coins;
}

module.exports.getCoins = getCoins;
module.exports.addCoins = addCoins;
