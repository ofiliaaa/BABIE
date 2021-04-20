const haiku = [
    'this is a haiku, this line has more syllables, please be nice to me', 
    'look at butter dog, hehe she is so stinky, butter dog is queen',
    'TS jones is back, everybody hide your feets, n!tickle attack', 
    'im the coolest bot, my swag is unparalleled, waffle is cool too', 
    'bring back mount garfield, love that big fact orange cat, he sure hates mondays',
    'aaa italians, mama mia pizza pie, cooka da meatball', 
    'battleblock theater, everybody needs to play, *sings* buckle your pants',
    'oh no jones is ts, try your best to run away, you will not escape (written by Jones)',
    'sydney may protest, but i think its obvious: animal fetish (written by jones)',
    'oh was that a yawn, someone should head straight to sleep, but you likely wont (written by jones)',
    'little slimy slug, hes so squishy what a king, dont you dare salt him',
    'i love my slug son, he is just so beautiful, what a little king',
];

var count = Math.round(Math.random() * (haiku.length - 1));

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === 'b!haiku';
    },
    execute(message) {
        message.channel.send(haiku[count]);
        // increment the counter by one
        count++;
        // if the counter is past the facts count, reset it to zero
        if (count >= haiku.length){
            count = Math.round(Math.random() * (haiku.length - 1));
        }
    }
}