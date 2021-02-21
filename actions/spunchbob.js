const Discord = require('discord.js');
const images = 12;

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ')
        return words[0] === 'b!spunch';
    },
    execute(message) {
        var choice = Math.round(Math.random() * images);
        const file = new Discord.MessageAttachment(__dirname + '/../pics/spunchbob/' + choice + '.jpg');
        message.channel.send({ files: [file] });
    }
}