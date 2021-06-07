const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['im sorry','im so sorry'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/apolocheese.jpg');
        message.channel.send({ files: [file] });
    }
}