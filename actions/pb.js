const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return teehee.includes('peeba babba');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/pb.jpg');
        message.channel.send({ files: [file] });
    }
}