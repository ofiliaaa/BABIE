const Discord = require('discord.js');

const triggers = ['dont test me', 'dont try me'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('b!cranky') || triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/cranky.jpg');
        message.channel.send({ files: [file] });
    }
}