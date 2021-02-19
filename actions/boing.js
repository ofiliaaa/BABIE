const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('b!boing');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/boing.jpg');
        message.channel.send({ files: [file] });
    }
}