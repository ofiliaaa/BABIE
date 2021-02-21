const Discord = require('discord.js');

const triggers = ['go to sleep', 'go to bed'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ')
        var teehee = message.content.toLowerCase();
        return words[0] === ('b!sleep') || triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/gosleep.jpg');
        message.channel.send({ files: [file] });
    }
}