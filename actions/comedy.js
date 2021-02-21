const Discord = require('discord.js');

const triggers = ['i think im funny', 'that was funny', 'thats funny', 'im funny'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/comedy.jpg');
        message.channel.send({ files: [file] });
    }
}