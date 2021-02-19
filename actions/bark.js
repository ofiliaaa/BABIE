module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words.includes('bark');
    },
    execute(message) {
        message.channel.send("BARKBARKRUFFRUFFRUFFSNARL");
    }
}