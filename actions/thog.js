const Discord = require('discord.js');

const triggers = ['dont care', 'i dont care'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/thog.jpg');
        message.channel.send({ files: [file] });
    }
}