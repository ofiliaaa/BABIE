const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const triggers = ['its so cold','im so cold','its so cold here','its so cold out','its cold out','im cold','its cold here'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/[\u0300-\u036F]/g, "").replace(/[\u2018\u2019]/g, "").replace(/[\u201C\u201D]/g, "").replace(/[']/g,"").replace(/\W\s/g, ''))
    },
    execute(message) {
        const filesList = fs.readdirSync(
            path.resolve(`${__dirname}/../pics/cold/`)
        );
        const random = Math.round(Math.random() * (filesList.length - 1));

        const file = new Discord.MessageAttachment(path.resolve(`${__dirname}/../pics/cold/${filesList[random]}`));
        message.channel.send({ files: [file] });
    }
}