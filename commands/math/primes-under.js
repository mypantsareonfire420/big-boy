module.exports = {
  name: 'primes-under',
  description: 'find primes under a certain number',
  
  args: [1, 1, false, ['n'], '<number>'],

  execute({ m }, { n }) {
    let s = sieve(n);

    if(n.length < 7) {
      if(s.length > 20) {
        return `There are ${ s.length } prime numbers below ${ n }`;
      }

      return `The prime numbers below ${ n } are ${ s }`
    } else {
      m.channel.send('Big Boy is working, please wait...')
        .then((msg) => {
          // created at
          const created = m.createdTimestamp;
          msg.edit(`There are ${ s.length } prime numbers below ${ n }`)
            .then((message) => {
              const edited = msg.editedTimestamp;
              const diff = `${ edited - created }ms`;

              console.log(created, edited)

              message.edit(`There are ${ s.length } prime numbers below ${ n } (took ${ diff })`);
            });
          });
    }
  } 
}

function sieve(limit) {
  var limitSqrt = Math.sqrt(limit);
  var sieve = [];
  var n;

  sieve[2] = true;
  sieve[3] = true;

  for (var x = 1; x <= limitSqrt; x++) {
    var xx = x*x;
    for (var y = 1; y <= limitSqrt; y++) {
      var yy = y*y;
      if (xx + yy >= limit) {
        break;
      }
 
      n = (4 * xx) + (yy);
      if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
        sieve[n] = !sieve[n];
      }
      
      n = (3 * xx) + (yy);
      if (n <= limit && (n % 12 == 7)) {
        sieve[n] = !sieve[n];
      }
      
      n = (3 * xx) - (yy);
      if (x > y && n <= limit && (n % 12 == 11)) {
        sieve[n] = !sieve[n];
      }
    }
  }

  for (n = 5; n <= limitSqrt; n++) {
    if (sieve[n]) {
      x = n * n;
      for (var i = x; i <= limit; i += x) {
        sieve[i] = false;
      }
    }
  }

  let list = [];
  for(let i = 0; i < sieve.length; i++) {
    if(sieve[i] === true) { list.push(i); }
  }
  return list;
}

module.exports.sieve = sieve;
