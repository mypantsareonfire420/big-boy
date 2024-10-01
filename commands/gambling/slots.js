const { getCoins, addCoins } = require('../../features/economy');

module.exports = {
  name: 'slots',
  description: 'test your luck on the slots',

  args: [1, 1, true, ['bet'], '<bet : Number>'],

  execute({ m }, { bet }) {
    let coins = parseInt(getCoins(m.author.id));
    bet = parseInt(bet)

    if(isNaN(bet) || bet < 0 || bet % 1 !== 0 || bet > coins) {
      return 'Please bet a whole, positive number of coins that you have.'
    }

    let slot = slots(); // [rate, slot outcome]
    
    m.channel.send(`The bot rolled ${ slot[1] }`);
    if(slot[0] === -1) {
      addCoins(m.author.id, bet * -1);
      return `You lost! You have ${ bet - coins } coins remaining.`
    }

    addCoins(m.author.id, bet * slot[0]);
    return `You won ${ bet * slot[0] } coins! You have ${ coins + (bet * slot[0]) } coins remaining.`
  }
}

function slots() {
  let slotArr = [];
  let slotOutcomes = [
    ' $ ', 
    ':cherries:', ':cherries:', ':cherries:', 
    ':lemon:', ':lemon:', ':lemon:', ':lemon:', ':lemon:', ':lemon:', ':lemon:',
    ' 7 ', ' 7 ', ' 7 ', ' 7 ', ' 7 ', ' 7 ', ' 7 ', ' 7 ', ' 7 ',
    'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR',
    ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ', ' 3 ',
    '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   '
    // '   ' x31
    // ' 3 ' x17
    // 'BAR' x13
    // ' 7 ' x9
    // ' :lemon: ' x7
    // ' :cherries: ' x3
    // ' $ ' x1
    // = 81
  ];

  for(let i = 0; i < 3; i++) {
    slotArr.push(slotOutcomes[Math.floor(Math.random() * slotOutcomes.length)]);
  }
  
  let a = slotArr[0];
  let b = slotArr[1];
  let c = slotArr[2];
  let rate = -1;
  
  if(a === b && b === c) {
    switch(a) {
      case ' $ ': 
        rate = 728;
        break;

      case ':cherries:':
        rate = 139.296; 
        break;
        
      case ':lemon:': 
        rate = 38.362;
        break;

      case ' 7 ':
        rate = 27;
        break;
          
      case 'BAR':
        rate = 15.553;
        break;
            
      case ' 3 ':
        rate = 10.4005;
        break;

      case '   ':
        rate = 4.224;
        break;
        
      default:
        rate = -1;
        break;
    }
  } else if(a === b || b === c || a === c) {
    let toSwitch = a;
    if(a !== b && a !== c) { toSwitch = b; }

    switch(toSwitch) {
      case ' $ ': 
        rate = 80;
        break;

      case ':cherries:':
        rate = 26;  
        break;
        
      case ':lemon:': 
        rate = 10.57;
        break;

      case ' 7 ':
        rate = 8;
        break;
          
      case 'BAR':
        rate = 5.231;
        break;
            
      case ' 3 ':
        rate = 3.765;
        break;

      case '   ':
        rate = 1.613;
        break;
              
      default:
        rate = -1;
        break;
    }
  }

  return [rate, slotArr];
}
