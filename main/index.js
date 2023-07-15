require('dotenv').config(); // initialize dotenv
const Discord = require('discord.js'); // import discord.js

// taken from token.js file, which is untracked in git
const CLIENT_TOKEN=token.token;

const client = new Discord.Client(); // create new client

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message=> {
  // when message happens, do the following

  // ex. delete messages not equal to 'f'
  // if(message.content !== 'f')
  //       {
  //           message.delete()
  //           .then(msg => console.log( /*time*/ + 'Message by ' + message.author.username + ' has been deleted in ' + message.channel.name + '.'))
  //           .catch(console.error);
  //       }
})

// and that's all we need


// make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); // login bot using token