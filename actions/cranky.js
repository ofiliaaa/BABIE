const Discord = require('discord.js');

const triggers = ['dont test me', 'dont try me'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('b!cranky') || triggers.includes(message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/cranky.jpg');
        message.channel.send({ files: [file] });
    }
}