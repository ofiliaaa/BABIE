const triggers = ['acetaminophen'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        message.channel.send('i see the medicine')
    }
}