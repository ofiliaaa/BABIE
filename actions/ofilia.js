const triggers = ['ofilia', 'ofiiia', '0filia'];

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words.filter(w => triggers.includes(w)).length > 0;
    },
    execute(message) {
        message.channel.send('i think you mean king of swag and master of comedy')
    }
}