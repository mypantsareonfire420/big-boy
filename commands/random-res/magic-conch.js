module.exports = {
  name: 'magic-conch',
  description: 'oh, magic conch',

  execute() {
    return `${ responses[Math.floor(Math.random() * responses.length)] }`;
  }
}

let responses = [
	"Maybe someday",
	"Nothing",
	"Neither",
	"I don't think so",
	"Yes",
	"Try asking again"
]
