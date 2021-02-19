module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words.includes('shush')
    },
    execute(message) {
        message.channel.send('you shush')
    }
}