const Discord = require('discord.js');

const triggers = ['oh for real', 'ohfr', 'oh fr', 'for real?', 'oh for real?', 'ohfr?', 'oh fr?', 'fr?'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/ohfr.jpg');
        message.channel.send({ files: [file] });
    }
}