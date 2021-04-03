module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === ('b!help');
    },
    execute(message) {
        message.channel.send("b!animal, b!kiss, b!limit, b!bye, b!cleanse, b!cranky, b!nc, b!tc, b!spunch, b!boing, b!dont, b!target, b!lying, b!foryou, b!forme, b!circus, b!italian, b!threat, bbgun, b!compliment, and extras :wink:");
    }
}