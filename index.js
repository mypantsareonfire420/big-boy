const { 
  Client, 
  Events, 
  GatewayIntentBits, 
  ActivityType 
} = require('discord.js');
const { token, prefix } = require('./config.json');

const readCommands = require('./util/read-commands');
const commandHandler = require('./util/command-handler');
const channelCache = require('./util/channel-cache');
const yearProgress = require('./util/year-progress');
const quotes = require('./util/quotes');

const respond = require('./features/respond');
const certified = require('./features/certified');
const portal = require('./features/portal');
const confess = require('./features/confess');
const level = require('./features/level');

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildVoiceStates
]});

let fileNames = [];
client.once(Events.ClientReady, async (ready) => {
  const time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    timeZone: 'America/New_York'
  });

  console.log(`big boy is online at ${ time }`);
  fileNames = await readCommands();

  client.user.setStatus('dnd');
  bio();
});

async function bio() {
  client.user.setPresence({
    activities: [{
      name: `${ new Date().getFullYear() } is ${ yearProgress() }% done.
I am ${ ((new Date() - new Date('2022-03-31 14:00 EST')) / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(2) } years old. (${
  ((new Date() - new Date('2022-03-31 14:00 EST')) / (1000 * 60 * 60 * 24)).toFixed(0)
} days old)`
    }],
  });

  for(let i = 0; i < 60; i++) {
    await new Promise((res) => setTimeout(res, 1000));
  }

  bio();
}

let x = 0;
let cache;
client.on(Events.MessageCreate, (m) => {
  if(x === 0) { cache = channelCache(client); }

  if(m.author.bot || !m.guild) { return; }

  // test
  console.log(`${ (m.guild.name).substring(0, 6) } - @${ m.author.username }: "${ m.content }"`);

  portal(m, cache);
  confess(m, cache);
  level(m);

  // todo: levelling system
  commandHandler(client, fileNames, m, prefix);
  respond(m, [
    ['big boy', Math.random() > 0.99 ? { files: ['./mario.jpg'] } : 'the fuck you want', 'contain'],
    ['what time is it', 'https://media.tenor.com/_A27t2_4wH0AAAAC/peanut-butter-jelly-time-banana.gif', 'contain'],
    ['piss', '*piss*', 'start'],
    ['*piss*', '# piss', 'start'],
    ['uwu', 'no uwuing ur banned', 'contain'],
    ['^', '^', 'start'],
    ['(╯°□°）╯︵ ┻━┻', '┬─┬ ノ( ゜-゜ノ)', 'contain'],
    ['rumble', '### WWE, \n# ARE YOU READY TO RUMBLE?????', 'start'],
    ['oi', 'oi', 'start'],
    ['ping', 'pong!', 'start'],
    ['peepee', 'poopoo', 'start'],
    ['ayo mistuh white', 'bitch', 'start'],
    ['<3', '<3', 'start'],
    ['i love you', 'get a room', 'start'],
    ['gimme a quote', `${ quotes() }`, 'start']
  ]);
  certified(m);

  x++;
});

client.login(token);
