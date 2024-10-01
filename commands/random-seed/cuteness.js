module.exports = {
  name: 'cute',
  description: 'step right up! what is your cuteness quality?',

  execute({ m, cl }) {
    let ownerId = '273960318429036545'
    let target = m.mentions.users.first() ?? m.author;

    if(target.id === cl.user.id) {
      return 'I\'m the cutest. Period.';
    }

    if(target.id === ownerId) {
      if(m.author.id === ownerId) {
        return `You\'re the cutest!!!!`
      }

      return `${ target.username } is fuckin ugly.`;
    }

    let quality = options[target.id % options.length];
    return `${ target.id === m.author.id ? 'You are' : `${target.username} is` } ${ quality }`;
  }
}

let options = [
	"the most adorable being to walk this Earth.",
	"extremely cute.",
	"kawaiiiii.",
	"cuter than cute.",
	"kinda cute.",
	"okay, nothing special.",
	"🤮.",
	"ugly, honestly.",
	"just absolutely gross.",
	"an absolute train wreck.",
	"... MY EYES!",
	"the most disgusting person I've ever had the displeasure of seeing."
];
