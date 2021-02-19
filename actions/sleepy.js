module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        var teehee = message.content.toLowerCase()
        return (words[0] === 'n!sleepy' || words[0] === 'zzz' || teehee.includes('am sleepy') || teehee.includes('im sleepy'))
    },
    execute(message) {
        message.channel.send('AWAKEN')
    }
}