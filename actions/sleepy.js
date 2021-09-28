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
                .replace(/[\u0300-\u036F]/g, "")
        .replace(/[\u2018\u2019]/g, "")
        .replace(/[\u201C\u201D]/g, "")
        .replace(/[']/g,"")
        .replace(/\W\s/g, '')
                .includes(t)
            ).length > 0
    },
    execute(message) {
        message.channel.send('AWAKEN')
    }
}