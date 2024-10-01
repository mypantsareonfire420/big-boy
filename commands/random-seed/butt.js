module.exports = {
  name: 'butt',
  aliases: ['butt-quality', 'ass', 'ass-quality'],
  description: 'step right up! what is your ass quality?',

  execute({ m, cl }) {
    let ownerId = '273960318429036545'
    let target = m.mentions.users.first() ?? m.author;

    if(target.id === cl.user.id) {
      return 'Me? I think that I have the best butt around.';
    }

    if(target.id === ownerId) {
      return `ur butt is godly, master...${ Math.random() > 0.99 ? '\n\n*help, he is keeping me hostage*' : '' }`;
    }

    let quality = options[target.id % options.length];
    return `${ target.id === m.author.id ? 'ur' : `${target.username}'s` } butt is ${ quality }`;
  }
}

let options = [
	"average at best",
	"pretty ok",
	"decent",
	"solid",
	"flat af",
	"meh",
	"out of this world bby :)",
	"tiny",
	"terrible",
	"nice ;)",
	"god-awful",
	"utterly unremarkable",
	"of exceptional quality",
	"incredible",
	"nice and smooth",
	"just so round... and out there...",
	"unbelievable",
	"so ugly only ur momma could love it",
	"bootylicious",
	"appalling",
	"heave-inducing",
	"unrepentantly uninteresting",
	"garbage-tier",
	"wretched",
	"regal"
];
