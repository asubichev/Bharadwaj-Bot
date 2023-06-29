require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const CLIENT_TOKEN="MTEyMzc2MjUzMjA3OTg5NDYyOA.GfKmqw.tCpH__bmqKV2xFT8bT0HRCP1s3OplToREbhmy4"

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token