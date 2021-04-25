const haiku = [
    "this is a haiku\nthis line has more syllables\nplease be nice to me",
    "look at butter dog\nhehe she is so stinky\nbutter dog is queen",
    "TS jones is back\neverybody hide your feets\nn!tickle attack",
    "im the coolest bot\nmy swag is unparalleled\nwaffle is cool too",
    "bring back mount garfield\nlove that big fat orange cat\nhe sure hates mondays",
    "aaa italians\nmama mia pizza pie\ncooka da meatball",
    "battleblock theater\neverybody needs to play\n*sings* buckle your pants",
    "oh no jones is ts\ntry your best to run away\nyou will not escape (written by Jones)",
    "sydney may protest\nbut i think its obvious: animal fetish (written by jones)",
    "oh was that a yawn\nsomeone should head straight to sleep\nbut you likely wont (written by jones)",
    "little slimy slug\nhes so squishy what a king\ndont you dare salt him",
    "i love my slug son\nhe is just so beautiful\nwhat a little king",
];



module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(" ");
        return words[0] === "b!haiku";
    },
    execute(message) {
        var count = Math.round(Math.random() * (haiku.length - 1));
        message.channel.send(haiku[count]);
     
    }
}