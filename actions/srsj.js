const Discord = require('discord.js');

const triggers = ['are you serious', 'please tell me youre joking', 'pls tell me youre joking', 'are you serious or joking', 'are you joking'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/srsj.jpg');
        message.channel.send({ files: [file] });
    }
}