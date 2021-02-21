const triggers = ['it was a joke', 'its a joke', 'thats a joke', 'that was a joke'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        message.channel.send('haha funny :neutral_face:')
    }
}