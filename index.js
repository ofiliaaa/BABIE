const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var actions = [];

const actionFiles = fs.readdirSync('./actions').filter(function(file) {return file.endsWith('.js')});

for (const file of actionFiles) {
    const action = require(`./actions/${file}`);
    actions.push(action);
}

client.on('message', message => {
    // turn the message content to all lowercase
    // then split the message into individual words
    var words = message.content.toLowerCase().split(' ')
    var teehee = message.content.toLowerCase()
    if (message.author.bot) return;

    actions.forEach(action => {
		if (action.check(message)) {
			message.channel.startTyping();
			action.execute(message);
			message.channel.stopTyping();
			return;
		}
    });
});
client.login(process.env.DISCORD_TOKEN);