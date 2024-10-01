module.exports = {
  name: 'opinion',
  description: 'what opinions do i have?',

  execute({ m }) {
    let text = m.content.split('').map((c) => c.charCodeAt(0).toString(2)).join('');
    text = parseInt(text, 2);
    return opinions[text % opinions.length];
  }
}

let opinions = [
  'yes', 'no', 'idk man', 'what the fuck', 
  'love it', 'hate it', '...', 
  'whatever makes you happy', 'okay', 
  'is there something wrong with that?', 
  'just... no', 'agreed'
];
