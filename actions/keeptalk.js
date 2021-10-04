const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['keep talking', 'im listening', 'good point', 'see you get it', 'i agree'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/keeptalk.jpg');
        message.channel.send({ files: [file] });
    }
}