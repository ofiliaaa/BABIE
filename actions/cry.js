module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        var teehee = message.content.toLowerCase();

        return (words[0] === 'p!cry' || words[0] === 'n!cry' || teehee.includes('im gonna cry') || teehee.includes('i wanna cry'));
    },
    execute(message) {
        message.channel.send("noooo don't be sad ahaha you're so sexy");
    }
}