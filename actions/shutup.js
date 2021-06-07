const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['shut up','stfu'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const filesList = fs.readdirSync(
            path.resolve(`${__dirname}/../pics/shutup/`)
        );
        const random = Math.round(Math.random() * (filesList.length - 1));

        const file = new Discord.MessageAttachment(path.resolve(`${__dirname}/../pics/shutup/${filesList[random]}`));
        message.channel.send({ files: [file] });
    }
}