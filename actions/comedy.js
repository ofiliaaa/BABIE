const Discord = require('discord.js');

const triggers = ['i think im funny', 'that was funny', 'thats funny', 'im funny'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/comedy.jpg');
        message.channel.send({ files: [file] });
    }
}