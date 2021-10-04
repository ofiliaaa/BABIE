const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['im scared','im so scared','i am scared', 'i am so scared', 'youre scaring me', 'are you scared', 'what are you scared', 'are you scared yet', 'i am afraid', 'im afraid', 'im so afraid', 'i am so afraid', 'ooo im so scared', 'thats terrifying', 'thats so terrifying','im terrified', 'i am terrified', 'i am so terrified'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/afraid.jpg');
        message.channel.send({ files: [file] });
    }
}