const Discord = require('discord.js');

const links = [
    ['tuesday', 'tueaday.jpg'],
    ['wednesday', 'wednesday.jpg'],
    ['thursday', 'thuday.jpg'],
    ['friday', 'friday.jpg'],
    ['sunday', 'sunday.jpg']
];

module.exports = {
    check(message) {
        return links.filter(d => message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, '') === `its ${d[0]}`).length > 0;
    },
    execute(message) {
        const day = links.filter(d => message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, '') === `its ${d[0]}`)[0];
        const file = new Discord.MessageAttachment(__dirname + `/../pics/days/${day[1]}`);
        message.channel.send({ files: [file] });
    }
}