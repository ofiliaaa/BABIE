const Discord = require('discord.js');

module.exports = {
    check(message) {
        return message.content.toLowerCase() === ('hmm');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/hmm.jpg');
        message.channel.send({ files: [file] });
    }
}