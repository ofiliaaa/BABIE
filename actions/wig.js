const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ')
        return words.includes('wig');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/wig.jpg');
        message.channel.send({ files: [file] });
    }
}