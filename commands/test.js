module.exports = {
  name: 'test',
  description: 'IT, do not remove',

  ownerOnly: true,

  execute: async ({ m }) => {
    const message = m.channel.send("This is the original message.")
      .then(async msg => {
        const sleep = async m => await new Promise(r => setTimeout(r, m))
        await sleep(5000);
        
        console.log(message)
        const editedMessage = message.edit("This is the edited message.");
        const editedTimestamp = editedMessage.editedTimestamp;
    
        console.log(`Message edited at: ${editedTimestamp}`);
    
        // Calculate the difference
        if (editedTimestamp) {
          const timeDifference = editedTimestamp - createdTimestamp;
          console.log(`Time difference: ${timeDifference} milliseconds`);
        }
        // Simulating a 5 second delay before editing    
      });
    const createdTimestamp = message.createdTimestamp;
    console.log(`Message sent at: ${ createdTimestamp }`);

    // Edit the message (simulating a delay for the edit):

    // js

    
  }
}
