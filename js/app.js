let playerDeck = []
let playerHostages = []
let playerDiscard = []
let compDiscard = []
let compDeck = []
let compHostages = []

let compCardToRemove = []
let compCardPicked = []
let playerCardPicked = []
let playerCardToRemove = []
let initialDeck 
// let getScore = []
// console.log(playerCardPicked)
// Cached element references

let playerDeckEl = document.getElementById('playerDeck')
let playerHostagesEl = document.getElementById('playerHostages')
let playerDiscardEl = document.getElementById('playerDiscard')
// console.log(playerDiscardEl)
let compDeckEl = document.getElementById('compDeck')
let compHostagesEl = document.getElementById('compHostages')
let compDiscardEl = document.getElementById('compDiscard')
let startBtnEl = document.getElementById('startBtn')
// let testDeck = document.getElementById('testDeck')
let gameBegin= true;
let playerScore = 0;
let compScore = 0;
// Event listeners
document.getElementById('startBtn').addEventListener('click', function() { if(compDeck.length == 0 && playerDeck.length == 0 && gameBegin == true)
  {
    let useDeck = initialDeck;

    console.log(useDeck.length)
    console.log(useDeck)
    for(var i = 0; i< 26; i++)
  
    for(var i = 0; i< 26; i++)
    {
     
      let randIdx = Math.floor(Math.random()*useDeck.length)
    let compCardPicked = useDeck.splice(randIdx, 1)[0]    // Assign card with the random index to a variable
    compDeck.push(compCardPicked)   // Add card picked to deck 2
    }
   console.log(useDeck.length)
   console.log(useDeck)
    for(var i = 0; i< 26; i++)
    {
      
      let randIdx = Math.floor(Math.random()*useDeck.length)
    let playerCardPicked = useDeck.splice(randIdx, 1)[0]    // Assign card with the random index to a variable
    playerDeck.push(playerCardPicked)   // Add card picked to deck 2
    }
      gameBegin = false;

  }
  else if((compDeck.length == 0 || playerDeck.length == 0 ) && gameBegin == false)
  {
    //compute scores and declare winner and
    if(compDeck.length == 0 )
    {
    alert("Player wins")

    }
    else{
      alert("Computer Wins!")
    }
    document.getElementById('startBtn').disable = true;

   
  }
  else{
  if (compDeck.length > 0){  // Randomly select number from total cards remaining
    
    let compCardPicked = compDeck.splice(0, 1)[0] 
    console.log("Computer card: "+compCardPicked.value)   // Assign card with the random index to a variable
    compDiscard.push(compCardPicked)   // Add card picked to deck 2
  }
  

  if (playerDeck.length > 0){  // Randomly select number from total cards remaining

    let playerCardPicked = playerDeck.splice(0, 1)[0]    // Assign card with the random index to a variable
    console.log("player card value: "+playerCardPicked.value)
    playerDiscard.push(playerCardPicked)   // Add card picked to deck 2
  }

  
  //compute scores
  if(compDiscard[compDiscard.length-1].value > playerDiscard[playerDiscard.length -1].value)
  {
    compScore += 1;
    console.log("computer score incremented to "+compScore)
  }
  else if(compDiscard[compDiscard.length-1].value < playerDiscard[playerDiscard.length -1].value)
  {
    playerScore += 1;
    console.log("player score inceremented to : "+playerScore)
  }
  //in acase of war
  else{
    let war = true;
    while(war == true)
    {
      if(compDeck.length < 4 && compScore< playerScore)
      {
        alert("Player Wins!")
        document.getElementById('startBtn').disable = true;
      }
      else if(playerDeck.length < 4 && playerScore < compScore)
      {
        alert("Computer Wins!")
        document.getElementById('startBtn').disable = true;
      }
      else{
     
        for(var i =0 ; i < 3; i++)
          {
            let topcard = compDeck.splice(0, 1)[0]
            compHostages.push(topcard)
            topcard = playerDeck.splice(0,1)[0]
            playerHostages.push(topcard)

          }  
          let topcardcomp = compDeck.splice(0,1)[0]; 
         
          compDiscard.push(topcardcomp)
          console.log("Computer card value: "+topcardcomp.value)
          let topcardplayer = playerDeck.splice(0,1)[0];
          console.log("Player card value: "+topcardplayer.value)
          playerDiscard.push(topcardplayer)
          if(topcardcomp.value < topcardplayer.value)
          {
            playerScore += 1;
            console.log("player score inceremented to : "+playerScore)
            
            war = false;
          }
          else if(topcardplayer.value < topcardcomp.value)
          {
            compScore +=1;
            console.log("computer score incremeneted to : "+compScore)
            war = false;
          }
      
        }
      }
  }
  

}
})


document.getElementById('resetBtn').addEventListener('click', function() {
  document.getElementById('resetBtn').innerHTML = "Hello World" //example?
})

init ()
function init() {
  initialDeck = [
    {title: "d02", value: 1},
    {title: "h02", value: 1},
    {title: "c02", value: 1},
    {title: "s02", value: 1},
    {title: "d03", value: 2},
    {title: "h03", value: 2},
    {title: "c03", value: 2},
    {title: "s03", value: 2},
    {title: "d04", value: 3},
    {title: "h04", value: 3},
    {title: "c04", value: 3},
    {title: "s04", value: 3},
    {title: "d05", value: 4},
    {title: "h05", value: 4},
    {title: "c05", value: 4},
    {title: "s05", value: 4},
    {title: "d06", value: 5},
    {title: "h06", value: 5},
    {title: "c06", value: 5},
    {title: "s06", value: 5},
    {title: "d07", value: 6},
    {title: "h07", value: 6},
    {title: "c07", value: 6},
    {title: "s07", value: 6},
    {title: "d08", value: 7},
    {title: "h08", value: 7},
    {title: "c08", value: 7},
    {title: "s08", value: 7},
    {title: "d09", value: 8},
    {title: "h09", value: 8},
    {title: "c09", value: 8},
    {title: "s09", value: 8},
    {title: "d10", value: 9},
    {title: "h10", value: 9},
    {title: "c10", value: 9},
    {title: "s10", value: 9},
    {title: "dJ", value: 10},
    {title: "hJ", value: 10},
    {title: "cJ", value: 10},
    {title: "sJ", value: 10},
    {title: "dQ", value: 11},
    {title: "hQ", value: 11},
    {title: "cQ", value: 11},
    {title: "sQ", value: 11},
    {title: "dK", value: 12},
    {title: "hK", value: 12},
    {title: "cK", value: 12},
    {title: "sK", value: 12},
    {title: "dA", value: 13},
    {title: "hA", value: 13},
    {title: "cA", value: 13},
    {title: "sA", value: 13},
  ]
  console.log(initialDeck)
}

// Function to handle a button click:
/*
function handleClick(startBtn) {
console.log('handleClick')
  if (compDeck.length > 0){  // Randomly select number from total cards remaining
    let randIdx = Math.floor(Math.random(compDeck.length))
    let compCardPicked = compDeck.splice(randIdx, 1)[0]    // Assign card with the random index to a variable
    compDiscard.push(compCardPicked)   // Add card picked to deck 2
  }
  // Pass card picked to render function to display
  render(compCardPicked)
  console.log(playerDeck.length)
  if (playerDeck.length > 0) {
    let randIdx = Math.floor(Math.random()*playerDeck.length)
    let playerCardPicked = playerDeck.splice(randIdx, 1)[0]
    console.log(playerCardPicked)
    playerDeck.push(playerCardPicked)
  }
  // render(playerCardPicked)
  // if ( compDeck.length === 0 || playerDeck.length === 0 ){
  //   if( compDeck.length > 0){
  //     console.log('Player Won');
  //   } else {
  //     console.log('Computer Won');
  //   }
  //   return false;
}
console.log('handleClick')
*/

// // Function to render deck state
function render(compCardPicked) {
//   // Remove outline class when first card is picked
  if (compDiscard.length === 1) {  
    compDiscardEl.classList.remove("outline")
  }
//   // Removes previous picked card from deck 2 class list
  if (compDiscard.length > 1) {  
    compDiscardEl.classList.remove('compCardToRemove')
  }
//   // Set card to be removed on next play

  let compCardToRemove = compCardPicked
//   // console.log(cardToRemove, 'remove this card next time')
//   // Add current card picked to deck 2 element
  compDiscardEl.classList.add(compCardPicked)
//   // Adjust shadow when deck gets above/below halfway full
  if (compDiscard.length === 26) {
    compDiscardEl.classList.add('shadow')
    compDeckEl.classList.remove('shadow')
  }
  // Remove card back color and add outline when last card is picked
  if (compDeck.length === 0) {
    compDeckEl.classList.add('outline')
    compDeckEl.classList.remove('back-blue')
  }
} 
function render(playerCardPicked) {
  if (playerDiscard.length === 1) {  
    playerDiscardEl.classList.remove("outline")
  }
  if (playerDiscard.length > 1) {  
    playerDiscardEl.classList.remove('playerCardToRemove')
  }
  let playerCardToRemove = playerCardPicked
  console.log(playerDiscardEl)
  console.log(playerCardPicked)
  playerDiscardEl.classList.add('playerCardPicked')
  if (playerDiscard.length === 26) {
    playerDiscardEl.classList.add('shadow')
    playerDeckEl.classList.remove('shadow')
  }
  if (playerDeck.length === 0) {
    playerDeckEl.classList.add('outline')
    playerDeckEl.classList.remove('back-red')
  }
}


  console.log(compCardPicked, 'compCardPicked') 
  console.log(playerCardPicked, 'playerCardPicked')
  console.log(compDiscard, 'compDiscard')
  console.log(compDeck, 'compDeck')
  console.log(playerDeck, 'playerDeck')
  console.log(playerDiscard, 'playerDiscard')
  console.log(playerHostages,'playerHostages')
  console.log(compHostages, 'compHostages')
  
