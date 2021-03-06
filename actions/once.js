const Discord = require('discord.js');

const triggers = ['once'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/once.jpg');
        message.channel.send({ files: [file] });
    }
}