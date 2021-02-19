module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase()
        return (teehee.includes('perish') || teehee.includes('then perish'))
    },
    execute(message) {
        message.channel.send('m-mr. obawma')
    }
}