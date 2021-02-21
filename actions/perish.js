const triggers = ['perish', 'then perish'];

module.exports = {
    check(message) {
        return triggers.includes(message.content.toLowerCase().replace(/\W\s/g, ''));
    },
    execute(message) {
        message.channel.send('m-mr. obawma')
    }
}