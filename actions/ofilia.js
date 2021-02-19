module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return (words.includes('ofilia') || words[0] === ('ofilia') || words.includes('ofiiia'))
    },
    execute(message) {
        message.channel.send('i think you mean king of swag and master of comedy')
    }
}