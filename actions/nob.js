const Discord = require('discord.js');

const triggers = ['no bitches', 'i have bitches', 'do you even have bitches', 'i do to have bitches', 'i so have bitches', 'you have no bitches', 'you definitely dont have bitches'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''));
    },
    execute(message) {
        const filesList = fs.readdirSync(
            path.resolve(`${__dirname}/../pics/nob/`)
        );
        const random = Math.round(Math.random() * (filesList.length - 1));

        const file = new Discord.MessageAttachment(path.resolve(`${__dirname}/../pics/nob/${filesList[random]}`));
        message.channel.send({ files: [file] });
    }
}