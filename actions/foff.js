const Discord = require('discord.js');

module.exports = {
    check(message) {
        return message.content.toLowerCase().trim() === ('fuck off');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/foff.jpg');
        message.channel.send({ files: [file] });
    }
}