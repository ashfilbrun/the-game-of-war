// Declare deck variables
let playerDeck = []
let playerHostages = []
let playerDiscard = []
let compDiscard = []
let compDeck = []
let compHostages = []

let cardToRemove
// let score = 0

// Cached element references

let playerDeckEl = document.getElementById('playerDeck')
let playerHostagesEl = document.getElementById('playerHostages')
let playerDiscardEl = document.getElementById('playerDiscard')
let compDeckEl = document.getElementById('compDeck')
let compHostagesEl = document.getElementById('compHostages')
let compDiscardEl = document.getElementById('compDiscard')
// let deck7El = document.getElementById('deck-7')

// if ( deck1.length === 0 || deck3.length === 0 ){
//   if( deck1.length > 0){
//     console.log('Player Won');
//   } else {
//     console.log('Computer Won');
//   }
//   return false;
// }

// Event listeners

document.getElementById('btn').addEventListener('click', handleClick)
document.getElementById('btn-2').addEventListener('click', handleClick)
document.getElementById('btn-3').addEventListener('click', handleClick)
// document.getElementById('resetButton').addEventListener('click', startGame);

// window.addEventListener("message", (event) => {
//     if (event.origin !== "") return;

//     // …
//   },
//   false
// );

// Functions

init()

// Initialize deck 1 with array of 52 cards 
function init() {
  initialDeck = [
  {title: "dA", value: 13},
  {title: "dK", value: 12},
  {title: "dQ", value: 11},
  {title: "dJ", value: 10},
  {title: "d10", value: 9},
  {title: "d09", value: 8},
  {title: "d08", value: 7},
  {title: "d07", value: 6},
  {title: "d06", value: 5},
  {title: "d05", value: 4},
  {title: "d04", value: 3},
  {title: "d03", value: 2},
  {title: "d02", value: 1},
  {title: "hA", value: 13},
  {title: "hK", value: 12},
  {title: "hQ", value: 11},
  {title: "hJ", value: 10},
  {title: "h10", value: 9},
  {title: "h09", value: 8},
  {title: "h08", value: 7},
  {title: "h07", value: 6},
  {title: "h06", value: 5},
  {title: "h05", value: 4},
  {title: "h04", value: 3},
  {title: "h03", value: 2},
  {title: "h02", value: 1},
  {title: "cA", value: 13},
  {title: "cK", value: 12},
  {title: "cQ", value: 11},
  {title: "cJ", value: 10},
  {title: "c10", value: 9},
  {title: "c09", value: 8},
  {title: "c08", value: 7},
  {title: "c07", value: 6},
  {title: "c06", value: 5},
  {title: "c05", value: 4},
  {title: "c04", value: 3},
  {title: "c03", value: 2},
  {title: "c02", value: 1},
  {title: "sA", value: 13},
  {title: "sK", value: 12},
  {title: "sQ", value: 11},
  {title: "sJ", value: 10},
  {title: "s10", value: 9},
  {title: "s09", value: 8},
  {title: "s08", value: 7},
  {title: "s07", value: 6},
  {title: "s06", value: 5},
  {title: "s05", value: 4},
  {title: "s04", value: 3},
  {title: "s03", value: 2},
  {title: "s02", value: 1},
  ]
}


// Function to handle a button click:
function handleClick() {
  // Randomly select number from total cards remaining
  if (compDeck.length > 0) {
    let randIdx = Math.floor(Math.random()*compDeck.length)
  // Assign card with the random index to a variable
    let cardPicked = compDeck.splice(randIdx, 1)[0]
  // Add card picked to deck 2
    compDiscard.push(cardPicked)
  // Pass card picked to render function to display
    render(cardPicked)
  if (playerDeck.length > 0) {
    let randIdx = Math.floor(Math.random()*deck4.length)
    // Assign card with the random index to a variable
    let cardPickedB = deck4.splice(randIdx, 1)[0]
    // Add card picked to deck 2
    deck4.push(cardPicked)
    // Pass card picked to render function to display
    render(cardPicked)
    }
  }
}
// Function to render deck state
function render(cardPicked) {
  // Remove outline class when first card is picked
  if (compDiscard.length === 1) {  
    compDiscardEl.classList.remove("outline")
  }
  if (playerDiscard.length === 1) {  
    playerDiscardEl.classList.remove("outline")
  }
  // Removes previous picked card from deck 2 class list
  if (compDiscard.length > 1) {  
    compDiscardEl.classList.remove(cardToRemove)
  }
  if (playerDiscard.length > 1) {  
    playerDiscardEl.classList.remove(cardToRemove)
  }
  // Set card to be removed on next play

  cardToRemove = cardPicked
  // console.log(cardToRemove, 'remove this card next time')

  // Add current card picked to deck 2 element

  compDiscardEl.classList.add(cardPicked)
  playerDiscardEl.classList.add(cardPicked)

  // deck4El.classList.add(cardPickedB)

  // Adjust shadow when deck gets above/below halfway full

  if (compDiscard.length === 26) {
    compDiscardEl.classList.add('shadow')
    compDeckEl.classList.remove('shadow')
  }
  if (playerDiscard.length === 26) {
    playerDiscardEl.classList.add('shadow')
    playerDeckEl.classList.remove('shadow')
  }
  // Remove card back color and add outline when last card is picked

  if (compDeck.length === 0) {
    compDeckEl.classList.add('outline')
    compDeckEl.classList.remove('back-blue')
  }
  
  if (playerDeck.length === 0) {
    playerDeckEl.classList.add('outline')
    playerDeckEl.classList.remove('back-red')
  }

  // if (deck1.length === 0 && deck3.length ===0) {

  // }
  // console.log(cardPickedA, 'cardPickedA') 
  console.log(cardPicked, 'cardPicked') 
  console.log(compDiscard, 'compDiscard')
  console.log(compDeck, 'compDeck')
  console.log(playerDeck, 'playerDeck')
  console.log(playerDiscard, 'playerDiscard')
  console.log(playerHostages,'playerHostages')
  console.log(compHostages, 'compHostages')
}


