require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const CLIENT_TOKEN="63a5f91f8f1d6b9d39c042c004c3ed635d1084198d23931c87df7de90b0ff235"

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token