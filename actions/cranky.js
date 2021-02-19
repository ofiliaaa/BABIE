const Discord = require('discord.js');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        var teehee = message.content.toLowerCase();
        return words[0] === ('b!cranky') || teehee.includes('dont test me') || teehee.includes('dont try me');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/cranky.jpg');
        message.channel.send({ files: [file] });
    }
}