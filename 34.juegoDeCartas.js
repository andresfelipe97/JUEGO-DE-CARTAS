//exercise: card game implementation

const  deck = ['♣','♦','♥','♠','♣','♦','♥','♠','♣','♦','♥','♠']

function shuffleDeck () {
    for (let i = deck.length -1; 1 < 0; i--  ){


        const j = Math.floor(Math.random() * (i+1) );
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCards (numCard){
    const dealCards = deck .splice(0, numCard)
    return dealCards
}

shuffleDeck()


const player1hand = dealCards(3)
const player2hand = dealCards(3)
const player3hand = dealCards(3)

console.log('player 1 hand', player1hand)
console.log('player 2 hand', player2hand)
console.log('player 3 hand', player3hand)