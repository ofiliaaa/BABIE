const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ')
        var teehee = message.content.toLowerCase();
        return words[0] === ('b!sleep') || teehee.includes('go to sleep') || teehee.includes('go to bed');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/gosleep.jpg');
        message.channel.send({ files: [file] });
    }
}