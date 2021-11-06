const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    check(message) {
        message = message.content.toLowerCase().replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, '');

        message = message.split('').filter((item, index, array) => {
            if (index === 0) {
                return true;
            } else if (item === array[index - 1]) {
                return false;
            } else {
                return true;
            }
        }).join('');

        if (message.length < 4) return false;
        return message.split("he").filter(e => e).length === 0;
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/hehe.jpg');
        message.channel.send({ files: [file] });
    }
}