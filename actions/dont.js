const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('b!dont');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/dont.jpg');
        message.channel.send({ files: [file] });
    }
}