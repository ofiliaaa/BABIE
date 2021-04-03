const Discord = require('discord.js');

const triggers = ['shut up'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/timelimit.jpg');
        message.channel.send({ files: [file] });
    }
}