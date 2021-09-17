const Discord = require('discord.js');

const triggers = ['toughtalk'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        const filesList = fs.readdirSync(
            path.resolve(`${__dirname}/../pics/toughtalk/`)
        );
        const random = Math.round(Math.random() * (filesList.length - 1));

        const file = new Discord.MessageAttachment(path.resolve(`${__dirname}/../pics/toughtalk/${filesList[random]}`));
        message.channel.send({ files: [file] });
    }
    
}