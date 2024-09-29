let cards = [];
let sum = 0;
let blackjack = false;
let stillAlive = false;
let massage = "";
let massageEl = document.getElementById("massage-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  Name: "kelvin",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.chips;

function getRandomeCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  stillAlive = true;
  let firstcard = getRandomeCard();
  let scondCard = getRandomeCard();
  let cards = [firstcard, scondCard];
  let sum = firstcard + scondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + ";";
  }
  sumEl.textContent = "sum " + sum;
  if (sum <= 20) {
    massage = "do you want to draw new card";
  } else if (sum === 21) {
    massage = "yahoo! you've got a blackjack! ";
    blackjack = true;
  } else {
    massage = "you're out of the game ";
    stillAlive = false;
  }

  massageEl.textContent = massage;
}

function newCard() {
  if (stillAlive === true && blackjack === false) {
    let Card = getRandomeCard();
    sum += Card;
    cards.push(Card);
    console.log(cards);
    renderGame();
  }
}
