const facts = [
    'gerbils are monogamous how romantic:)',
    'according to Dr. Flowers, sheep suck, very dumb, why',
    'pigs pecking order is so severe that just looking at a pig across the pen is seen as an aggressive behavior',
    'if a sheep and goat fight sheep will win despite being the less aggressive species',
    'when horses neigh they want you to neigh back',
    'the first report of pet therapy (pets to help people) was in Belgium in 800AD for handicap family care',
    'a ruminant stomach is made of four parts - the reticulum, rumen, omasum, and abomasum; yumyyyy',
    'Dmitri Belyaev tested wild foxes for a -tamability trait- which, when selected for, caused phenotypic changes',
    'stallions roar...its scary',
    'my notes on cow sounds have them listed as -mm, mm(h), and (m)enh- i still dont understand',
    'when trimming goat feet the rest of the flock will huddle around you out of curiosity, but may also chose to pull hair/clothes/etc',
    'chinese pig breeds are much nicer than european breeds and dont even establish peck orders',
    'chinese pig breeds will plop on the ground when they dont want to do something while european pig breeds run away',
    'baby squirrels before they grow fur are reffered to as pinkies',
    'if rehabilitating flying squirrels you must help them learn to fly',
    'female cats are called queens',
    'rabbits used to be classified as rodents but now have their own order -lagomorpha',
    'rabbits be vicious accept it sydney',
    'ferrets have fun names, male-hob, female-jill, young-kits',
    'most snakes only have one lung -on the left',
];

var count = Math.round(Math.random() * (facts.length - 1));

module.exports = {
    check(message) {
        var words = message.content.toLowerCase().split(' ');
        return words[0] === 'b!animal';
    },
    execute(message) {
        message.channel.send(facts[count]);
        // increment the counter by one
        count++;
        // if the counter is past the facts count, reset it to zero
        if (count >= facts.length){
            count = Math.round(Math.random() * (facts.length - 1));
        }
    }
}