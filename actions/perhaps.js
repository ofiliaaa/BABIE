const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        var teehee = message.content.toLowerCase();

        return words.includes('perhaps') || words.includes('mayhaps') || teehee.includes('is that a challenge');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/perhaps.jpg');
        message.channel.send({ files: [file] });
    }
}