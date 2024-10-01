const req = require('node-superfetch');

module.exports = {
  name: 'shower-thought',
  aliases: ['thought'],
  description: 'what opinions do i have?',

  async execute({ m }) {
    let { body } = await req.get('https://old.reddit.com/r/showerthoughts.json?sort=hot');
    let thought = body.data.children[Math.floor(Math.random() * body.data.children.length)].data;

    return `/u/${ thought.author }: "${ thought.title }" \n(+${ thought.score })`
  }
}
