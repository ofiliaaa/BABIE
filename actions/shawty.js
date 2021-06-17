const Discord = require('discord.js');


module.exports = {
    check(message) {
        return message.content.toLowerCase() === 'goodnight' || message.content.toLowerCase() === 'good morning'
    },
    execute(message) {
        let file 
        if(message.content.toLowerCase() === 'goodnight'){
            file = new Discord.MessageAttachment(__dirname + '/../pics/gnshawty.jpg');
        } else {
            file = new Discord.MessageAttachment(__dirname + '/../pics/gmshawty.jpg');
        }
        message.channel.send({ files: [file] });
    }
}