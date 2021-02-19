const triggers = [
    'its so hard',
    'thats so hard',
    'that was so hard',
    'its so long',
    'that was hard',
    'felt super long',
    'it was hard',
    'it got hard out of nowhere',
    'it\'s so hard',
    'that\'s so hard'
]

module.exports = {
    check(message) {
        var teehee = message.content.toLowerCase()
        return triggers.filter(trigger => teehee.includes(trigger)).length > 0
    },
    execute(message) {
        message.channel.send('thats what she said')
    }
}