const Discord = require('discord.js');

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return teehee.includes('i think im funny') || teehee.includes('that was funny') || teehee.includes('thats funny') || teehee.includes('im funny');
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/comedy.jpg');
        message.channel.send({ files: [file] });
    }
}