const Discord = require('discord.js');

const triggers = ['tough talk'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/toughtalk.jpg');
        message.channel.send({ files: [file] });
    }
}