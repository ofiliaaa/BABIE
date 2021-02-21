const triggers = ['im gonna cry', 'i wanna cry'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === 'p!cry' || words[0] === 'n!cry' || triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        message.channel.send("noooo don't be sad ahaha you're so sexy");
    }
}