module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase();
        return (teehee.includes('it was a joke') || teehee.includes('its a joke') || teehee.includes('thats a joke') || teehee.includes('that was a joke'))
    },
    execute(message) {
        message.channel.send('haha funny :neutral_face:')
    }
}