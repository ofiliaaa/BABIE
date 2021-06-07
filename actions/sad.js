const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['im so sad','im crying'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/cry.jpg');
        message.channel.send({ files: [file] });
    }
}