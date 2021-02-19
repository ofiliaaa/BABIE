const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        var words = message.content.toLowerCase().split(' ')
        return teehee.includes('ok wig') || words.includes('wig');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/wig.jpg');
        message.channel.send({ files: [file] });
    }
}