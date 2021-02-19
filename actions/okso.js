const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return teehee.includes('story time');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/okso.jpg');
        message.channel.send({ files: [file] });
    }
}