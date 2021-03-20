const triggers = ['am sleepy', 'im sleepy'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ').filter(w => w);
        return words[0] === 'n!sleepy'
            || words.filter(w =>
                (w.split('')
                .filter(c =>
                    c === 'z'
                ).length === w.length && w.length>= 3)
            ).length > 0
            || triggers.filter(t =>
                message.content
                .toLowerCase()
                .replace(/\W\s/g, '')
                .includes(t)
            ).length > 0
    },
    execute(message) {
        message.channel.send('AWAKEN')
    }
}