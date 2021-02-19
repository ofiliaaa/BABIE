const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return teehee.includes('tough talk');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/toughtalk.jpg');
        message.channel.send({ files: [file] });
    }
}