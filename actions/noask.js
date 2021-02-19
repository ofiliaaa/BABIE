const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('b!noask');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/noask.jpg');
        message.channel.send({ files: [file] });
    }
}