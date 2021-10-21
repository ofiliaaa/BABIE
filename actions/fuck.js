const Discord = require('discord.js');

module.exports = {
    check(message) {
        return message.content.toLowerCase().trim() === ('fuck');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/fuck.jpg');
        message.channel.send({ files: [file] });
    }
}