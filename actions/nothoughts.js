const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return teehee.includes('no thoughts head empty') || teehee.includes('no thoughts');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/nothoughts.jpg');
        message.channel.send({ files: [file] });
    }
}