const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ')
        return words[0] === 'b!lying';
    },
    execute(message) {
        const filesList = fs.readdirSync(
            path.resolve(`${__dirname}/../pics/lie/`)
        );
        const random = Math.round(Math.random() * (filesList.length - 1));

        const file = new Discord.MessageAttachment(path.resolve(`${__dirname}/../pics/lie/${filesList[random]}`));
        message.channel.send({ files: [file] });
    }
}