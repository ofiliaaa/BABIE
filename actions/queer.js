const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['ofilia made it','its ofilias bot','ofilia coded it','ofilia made babie','ofilia created babie','babie is ofilias','ofilia made the bot','ofilia coded the bot'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/queer.jpg');
        message.channel.send({ files: [file] });
    }
}