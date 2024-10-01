module.exports = {
  name: 'cool',
  description: 'step right up! what is your coolness quality?',

  execute({ m, cl }) {
    let ownerId = '273960318429036545'
    let target = m.mentions.users.first() ?? m.author;

    if(target.id === cl.user.id) {
      return 'Me? I think I\'m the very best, like no one ever was.';
    }

    if(target.id === ownerId) {
      if(m.author.id === ownerId) {
        return `You\'re the best owner a bot could ask for! <3`
      }

      return `Don't tell them I said this, but I think that they smell like a sack of diapers.`;
    }

    let quality = options[target.id % options.length];
    return `${ target.id === m.author.id ? 'You are' : `${target.username} is` } ${ quality }`;
  }
}

let options = [
	"the coolest being to walk this Earth.",
	"extremely amazingly amazing.",
	"as cool as ice.",
	"cooler than cool.",
	"an extremely cool dude.",
	"pretty sweet, not gonna lie.",
	"okay, nothing special.",
	"just not all that neat.",
	"awful, honestly.",
	"terrible in every way.",
	"an absolute train wreck.",
	"a horrible, horrible person.",
	"the worst person I've ever had the displeasure of knowing."
];
