const Discord = require('discord.js');

const triggers = ['not that theres anything wrong with that'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/seinfeld.jpg');
        message.channel.send({ files: [file] });
    }
}