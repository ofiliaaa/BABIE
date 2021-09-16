const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['huh???','huh?','huh?!','huh!?','ayo?','ayo????','ayo?!','ayo!?'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase())
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/ayo.jpg');
        message.channel.send({ files: [file] });
    }
}