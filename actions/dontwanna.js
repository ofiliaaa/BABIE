const Discord = require('discord.js');
const fs = require('fs');
const triggers = ['i dont wanna be here anymore', 'i dont like this','i gotta go', ' i uh i gotta go', 'im leaving'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''))
    },
    execute(message) {
        const file = new Discord.MessageAttachment(__dirname + '/../pics/dontwanna.jpg');
        message.channel.send({ files: [file] });
    }
}