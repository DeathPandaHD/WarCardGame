//! Creating a class with the methods to create a deck of cards and shuffle them

class Deck{
    constructor(){
        this.cardDeckArray = [];
    }

//* this will create a deck of 52 playing cards

buildDeck(){
    this.suit = ["♠️", "♣️", "♥️", "♦️"];
    this.cardFaceValue = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    for (let x = 0; x < this.suit.length; x++){
        for (let i = 0; i < this.cardFaceValue.length; i++){
        this.cardDeckArray.push(this.cardFaceValue[i] + ' of ' +this.suit[x]);
        }            
    }
 }
//* will shuffle deck
shuffleDeck(){
    let i = 0;
    let o = 0;
    let temp = 0;
    for (i = this.cardDeckArray.length - 1 ; i > 0;i--){
        o = Math.floor(Math.random() * (i+1));
        temp = this.cardDeckArray[i];
        this.cardDeckArray[i] = this.cardDeckArray[o];
        this.cardDeckArray[o] = temp;
    }
}
//* returns Generated deck as array
returnDeck(){
    return this.cardDeckArray;
}

//* will take card from deck to player's hand
DealACard(){
    return this.cardDeckArray.pop()
}

}

//! making a class that used methods to deal hands and keep score

class Player{ 
    constructor(){
        this.score = 0;
        this.hand=[] ;
    }
    
    //* takes cards being dealt from the deck
    takeOneCard(card){
        this.hand.push(card);
    }
    //* updates cards dealt in the player's hand
    returnHand(){
        return this.hand;
    } 
    //* play a card from each player and updates hand
    playCard(){
        return this.hand.pop();
    }
    //* updates score
    updatedScore(){
        this.score++;
    }
    //* shows final score at the end
    returnScore(){
        return this.score;
    }

    //* returns cards values when game is played
    returnCardValue(card){
        if (card.startsWith('2')) {
            return 2;
            
        }
        if (card.startsWith('3')) {
            return 3;
            
        }
        if (card.startsWith('4')) {
            return 4;
            
        }
        if (card.startsWith('5')) {
            return 5;
            
        }
        if (card.startsWith('6')) {
            return 6;
            
        }
        if (card.startsWith('7')) {
            return 7;
            
        }
        if (card.startsWith('8')) {
            return 8;
            
        }
        if (card.startsWith('9')) {
            return 9;
            
        }
        if (card.startsWith('10')) {
            return 10;
            
        }
        if (card.startsWith('J')) {
            return 11;
            
        }
        if (card.startsWith('Q')) {
            return 12;
            
        }
        if (card.startsWith('K')) {
            return 13;
            
        }
        if (card.startsWith('A')) {
            return 14;
            
        }
    }

}

//* will create and shuffle the deck for the game

const myDeck = new Deck();
myDeck.buildDeck();
myDeck.shuffleDeck();

//? code used to test: console.log(myDeck)

//* Creating players
const player1 = new Player();
const player2 = new Player();

//* splits deck between players
for (let i = 0; i < 26; i++ ){
    player1.takeOneCard(myDeck.DealACard());
    player2.takeOneCard(myDeck.DealACard());
}

//? Test if deck is split
//? console.log(player1)
//? console.log(player2)

//* loop plays a card for each player
for (let i = 0; i < 26; i++) {
    let player1Card = player1.playCard();
    let player2Card = player2.playCard();
 //*test if cards play
 //* console.log (player1Card); 
 //* console.log (player2Card);  

 //* checks if player 1 wins and awards player if true

 if (player1.returnCardValue(player1Card) > player2.returnCardValue(player2Card) ) {
     console.log(player1Card + ' beats ' + player2Card + ' player one takes the round');
     player1.updatedScore();
 //* checks if player 2 won if player 1 didnt, gives player 2 point of true
    } else if (player1.returnCardValue(player1Card) < player2.returnCardValue(player2Card) ) {
    console.log(player2Card + ' beats ' + player1Card + ' player two takes the round');
    player2.updatedScore();
//* checks if is draw if neither player 1 or 2 have won, no points given
 } else{
     console.log("round is draw " + player1Card + 'ties with' + player2Card );
 }

}

//! displays final results
  

console.log('Player 1 Final Score:'+ player1.returnScore())
console.log('Player 2 Final Score:'+ player2.returnScore())

if ( player1.returnScore() > player2.returnScore()) {
    
    alert('Player 1 is the winner')
    
} else if ( player1.returnScore() < player2.returnScore()) {

    alert('Player 2 is the winner')
    {
    
}

}