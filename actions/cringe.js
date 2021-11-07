const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const triggers = ['cringe'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, '')
        )
    },
    execute(message) {
        const filesList = fs.readdirSync(
            path.resolve(`${__dirname}/../pics/cringe/`)
        );
        const random = Math.round(Math.random() * (filesList.length - 1));

        const file = new Discord.MessageAttachment(path.resolve(`${__dirname}/../pics/cringe/${filesList[random]}`));
        message.channel.send({ files: [file] });
    }
}