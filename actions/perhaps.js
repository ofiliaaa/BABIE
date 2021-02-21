const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');

        return words.includes('perhaps') || words.includes('mayhaps') || message.content.toLowerCase().replace(/\W\s/g, '') === 'is that a challenge';
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/perhaps.jpg');
        message.channel.send({ files: [file] });
    }
}