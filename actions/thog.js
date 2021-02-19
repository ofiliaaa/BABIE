const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return teehee.includes('dont care') || teehee.includes('i dont care');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/thog.jpg');
        message.channel.send({ files: [file] });
    }
}