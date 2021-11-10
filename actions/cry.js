const triggers = ['im gonna cry', 'i wanna cry'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === 'p!cry' || words[0] === 'n!cry' || triggers.includes(message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''));
    },
    execute(message) {
        message.channel.send("noooo don't be sad ahaha you're so sexy");
    }
}