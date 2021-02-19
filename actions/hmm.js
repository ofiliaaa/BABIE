const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('hmm');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/hmm.jpg');
        message.channel.send({ files: [file] });
    }
}