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
        return triggers.includes(message.content.toLowerCase()
        .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, ''))
    },
    execute(message) {
        message.channel.send('thats what she said')
    }
}