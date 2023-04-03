// Declare deck variables
let deck1 = []
let deck2 = []
let deck3 = []
let deck4 = []

let cardToRemove
// let score = 0

// Cached element references

let deck1El = document.getElementById('deck-1')
let deck2El = document.getElementById('deck-2')
let deck3El = document.getElementById('deck-3')
let deck4El = document.getElementById('deck-4')


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
document.getElementById('resetButton').addEventListener('click', startGame);

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
  deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02"]
  // deck3 = ["cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",]
}


// Function to handle a button click:
function handleClick() {
  // Randomly select number from total cards remaining
  if (deck1.length > 0) {
    let randIdx = Math.floor(Math.random()*deck1.length)
  // Assign card with the random index to a variable
    let cardPicked = deck1.splice(randIdx, 1)[0]
  // Add card picked to deck 2
    deck2.push(cardPicked)
  // Pass card picked to render function to display
    render(cardPicked)
  if (deck4.length > 0) {
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
  if (deck2.length === 1) {  
    deck2El.classList.remove("outline")
  }
  if (deck4.length === 1) {  
    deck4El.classList.remove("outline")
  }
  // Removes previous picked card from deck 2 class list
  if (deck2.length > 1) {  
    deck2El.classList.remove(cardToRemove)
  }
  if (deck4.length > 1) {  
    deck4El.classList.remove(cardToRemove)
  }
  // Set card to be removed on next play

  cardToRemove = cardPicked
  // console.log(cardToRemove, 'remove this card next time')

  // Add current card picked to deck 2 element

  deck2El.classList.add(cardPicked)
  deck4El.classList.add(cardPicked)

  // deck4El.classList.add(cardPickedB)

  // Adjust shadow when deck gets above/below halfway full

  if (deck2.length === 26) {
    deck2El.classList.add('shadow')
    deck1El.classList.remove('shadow')
  }
  if (deck4.length === 26) {
    deck4El.classList.add('shadow')
    deck3El.classList.remove('shadow')
  }
  // Remove card back color and add outline when last card is picked

  if (deck1.length === 0) {
    deck1El.classList.add('outline')
    deck1El.classList.remove('back-blue')
  }
  
  if (deck3.length === 0) {
    deck3El.classList.add('outline')
    deck3El.classList.remove('back-red')
  }

  // if (deck1.length === 0 && deck3.length ===0) {

  // }
  // console.log(cardPickedA, 'cardPickedA') 
  // console.log(cardPickedB, 'cardPickedB') 
  // console.log(deck2, 'deck2')
  // console.log(deck1, 'deck1')
  // console.log(deck3, 'deck3')
  // console.log(deck4, 'deck4')
}


