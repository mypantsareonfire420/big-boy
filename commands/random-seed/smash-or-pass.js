module.exports = {
  name: 'smash-or-pass',
  description: 'step right up! will i smash or pass on you?',

  execute({ m, cl }) {
    let ownerId = '273960318429036545'
    let target = m.mentions.users.first() ?? m.author;

    if(target.id === cl.user.id) {
      return 'Obviously smash, google me.';
    }

    if(target.id === ownerId) {
      if(m.author.id === ownerId) {
        return `I mean... Aren\'t we kind of related? In a way?`
      }

      return `I sure hope no one is dumb enough to smash that... thing.`;
    }

    return `${ target.id % 2 === 1 ? 'Smash, 100%.' : 'Pass, ew.' }`;
  }
}

