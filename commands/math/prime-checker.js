const { sieve } = require('./primes-under');

module.exports = {
  name: 'prime-check',
  aliases: ['prime-checker', 'is-prime'],
  description: 'checks if a number is prime',

  args: [1, 1, true, ['n'], '<number>'],

  execute: ({ m }, { n }) => {
    if(isNaN(n)) { return m.reply('please give a number'); }

    n = Number(n);
    let z = Math.floor(Math.sqrt(n));
    let list = sieve(z);
    let t = true;
    let composite = [];

    for(let i = 0; i < list.length; i++) {
      let x = list[i];
      if(n % x === 0) { t = false; composite.push(x); }
    }

    if(t) { return `${ n } is a prime number.` }
    return `${ n } is composite, and is divisible by (but not limited to): ${ composite.length <= 20 ? `${ composite }` : `${ composite.length } numbers.`}`;
  }
}
