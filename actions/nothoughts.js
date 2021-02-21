const Discord = require('discord.js');

const triggers = ['no thoughts head empty', 'no thoughts'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/nothoughts.jpg');
        message.channel.send({ files: [file] });
    }
}