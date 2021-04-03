const Discord = require('discord.js');

const triggers = ['*sigh*'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/sigh.jpg');
        message.channel.send({ files: [file] });
    }
}