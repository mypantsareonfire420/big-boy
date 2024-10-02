module.exports = () => {
  let quotes = [
    'You are not immune to propaganda.',
    '[insert funny message here]',
    '1-800-EAT-SHIT',
    'I shit my pants!',
    '𝓳𝓪𝓼𝓸𝓷 𝓭𝓮𝓻𝓾𝓵𝓸',
    'according to all known laws of aviation, there is no way a bee should be able to fly.',
    'It is better to cum in the sink, than to sink in the cum.',
    'The zoo called, and they\'re wondering how they got out of your cage.',
    '𝘧𝘶𝘤𝘬𝘪𝘯𝘨 𝘥𝘪𝘦𝘴 𝘰𝘧 𝘤𝘳𝘪𝘯𝘨𝘦',
    'HAIL SATAN, WORSHIP DOOM',
    'الضوء سريع - ألبرت أينشتاين',
    'sqrt(-1) love you!',
    'umop-apisdn!',
    'Any computer is a laptop if you\'re brave enough!',
    'Rule #1: it\'s never my fault',
    'How do you spell gorjesus?',
    'Assume something\'s dangerous until proven safe. Then eat it.',
    'I\'ve come to make an announcement...',
    'Two bros, sitting in a hot tub, right next to each other because they\'re gay!',
    'Sir, this is a wendys.',
    'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues',
    'We\'ve been trying to reach you about your car\'s extended warranty.',
    'The sun is a deadly laser.',
    'https://youtube.com/watch?v=dQw4w9WgXcQ',
    'Buy one now at double price and get the next one free!',
    'It says \'Gullible\' on the ceiling.',
    'Unfortunately free will is a lie.',
    'He then proceeded to pull a comically large spoon.',
    'I should call her...',
    '1. e4 e5  2. Ke2',
    'If she can say \'lol\' without laughing, she can say \'I love you\' without meaning it.',
    `${ new Date().getDay() !== 2 ? 'It\'s Tuesday!' : 'Time is a social construct, don\'t believe it.' }`,
    'I could give you a penny for all the thoughts you had and I\'d still get change back.',
    'Sharp as a marble, that one.',
    'If nobody from the future comes to stop you, than how bad of a decision could it be?',
    '"GENDER IS WHAT\'S IN YOUR PANTS", LOOKS LIKE MY GENDER IS SHIT. CHECKMATE, LIBERALS',
    '8 BILLION PEOPLE, 8 BILLION BALLS.',
    '$ sudo rm -rf / --no-preserve-root',
    `I can't hear you, ${ ['it\'s too dark in here', 'my pants are on fire', 'please stick a finger in your mouth', 'give me your credit number to keep this call going'][Math.floor(Math.random() * 4)] }`,
    `\`\`\`fix
@mypantsareonfire has left the game
\`\`\``
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}