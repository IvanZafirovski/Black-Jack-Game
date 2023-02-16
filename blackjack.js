
let cards = [] /// array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el"); /// querySelector with id # or . for class
let cardsEl = document.querySelector("#cards-el");
let player = {
    name: "Ivan",
    currency: "$",
    chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.innerText = player.name + " " + player.currency + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor((Math.random() * 13)+ 1);
    if(randomNumber > 10){
        return 10;
    }else if (randomNumber === 1){
        return 11;
    }else {
        return randomNumber
    }
}
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard ; 
    renderGame();
}
function renderGame(){
    cardsEl.textContent ="Cards: " ;
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }       
        sumEl.textContent = "Sum: " + sum ;
    if (sum <= 20){
        message = "Do you want to draw another card?";
    }else if ( sum === 21){
        message = "You have won blackjack!!!";
        hasBlackJack = true;
    }else {
        message = "You just lost the game!";
        isAlive = false;
    }
    messageEl.textContent =  message;
}
function newCard(){
    if( isAlive === true && hasBlackJack === false ){
     let cardNew = getRandomCard ();
    sum += cardNew;
    cards.push(cardNew);
    console.log(cards);
    renderGame();
}
}








// let age = 33;

// if (age < 21) {
//     console.log(" You can not enter the club");
// } else {
//     console.log(" Welcome Sir Ivan");
// }

// let age = 190;

// if (age < 100){
//     console.log("Not eligible for the birthday card");
// } else if(age === 100){
//     console.log("Here is you bithday card sir from the King")
// } else{
//     console.log("You already have gotten one");
// }