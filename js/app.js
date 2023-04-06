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

let playerDeckEl = document.getElementById('playerDeck')
let playerHostagesEl = document.getElementById('playerHostages')
let playerDiscardEl = document.getElementById('playerDiscard')
// console.log(playerDiscardEl)
let compDeckEl = document.getElementById('compDeck')
let compHostagesEl = document.getElementById('compHostages')
let compDiscardEl = document.getElementById('compDiscard')
let startBtnEl = document.getElementById('startBtn')
// let testDeck = document.getElementById('testDeck')
let gameBegin = true;
let playerScore = 0;
let compScore = 0;
// Event listeners
document.getElementById('startBtn').addEventListener('click', function () {
  if ((compDeck.length == 0 || playerDeck.length == 0) && gameBegin == false) {
    if (compDeck.length == 0) {
      alert("Player wins")
    } else {
      alert("Computer Wins!")
    }
    document.getElementById('startBtn').disable = true;
  }
  else {
      compCardPicked = compDeck.splice(0, 1)[0]
      console.log("Computer card value: " + compCardPicked.title)
      renderComputer(compCardPicked,compDiscard)
      compDiscard.unshift(compCardPicked)
      playerCardPicked = playerDeck.splice(0, 1)[0]
      console.log("player card value: " + playerCardPicked.title)
      renderPlayer(playerCardPicked, playerDiscard)
      playerDiscard.unshift(playerCardPicked)
      if (compDiscard[compDiscard.length - 1].value > playerDiscard[playerDiscard.length - 1].value) {
        compScore += 1;
        console.log("computer score incremented to " + compScore)
      }
      else if (compDiscard[compDiscard.length - 1].value < playerDiscard[playerDiscard.length - 1].value) {
        playerScore += 1;
        console.log("player score incremented to : " + playerScore)
      }
      //in the case of war
      else {
        let war = true;
        while (war == true) {
          if (compDeck.length < 4 && compScore < playerScore) {
            alert("Player Wins!")
            document.getElementById('startBtn').disable = true;
          }
          else if (playerDeck.length < 4 && playerScore < compScore) {
            alert("Computer Wins!")
            document.getElementById('startBtn').disable = true;
          }
          else {
            for (var i = 0; i < 3; i++) {
              let topCard = compDeck.splice(0, 1)[0]
              compHostages.unshift(topCard)
              topCard = playerDeck.splice(0, 1)[0]
              playerHostages.unshift(topCard)
            }
            let topCardComp = compDeck.splice(0, 1)[0];
            
            
            renderComputer(topCardComp, compDiscard)
            compDiscard.unshift(topCardComp)
            console.log("Computer card value: " + topCardComp.title)
            let topCardPlayer = playerDeck.splice(0, 1)[0];
            console.log("Player card value: " + topCardPlayer.title)
            renderPlayer(topCardPlayer, playerDiscard)
            playerDiscard.unshift(topCardPlayer)
            if (topCardComp.value < topCardPlayer.value) {
              playerScore += 1;
              console.log("Player score is now: " + playerScore)
              war = false;
            }
            else if (topCardPlayer.value < topCardComp.value) {
              compScore += 1;
              console.log("Computer score is now: " + compScore)
              war = false;
            }
          }
        }
      }
    }
  });

  document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('resetBtn').innerHTML = "Game Reset" //example?
  })

  document.getElementById('playBtn').addEventListener('click', function()
  {

  })

  init()
  function init() {
    initialDeck = [
      { title: "d02", value: 1 },
      { title: "h02", value: 1 },
      { title: "c02", value: 1 },
      { title: "s02", value: 1 },
      { title: "d03", value: 2 },
      { title: "h03", value: 2 },
      { title: "c03", value: 2 },
      { title: "s03", value: 2 },
      { title: "d04", value: 3 },
      { title: "h04", value: 3 },
      { title: "c04", value: 3 },
      { title: "s04", value: 3 },
      { title: "d05", value: 4 },
      { title: "h05", value: 4 },
      { title: "c05", value: 4 },
      { title: "s05", value: 4 },
      { title: "d06", value: 5 },
      { title: "h06", value: 5 },
      { title: "c06", value: 5 },
      { title: "s06", value: 5 },
      { title: "d07", value: 6 },
      { title: "h07", value: 6 },
      { title: "c07", value: 6 },
      { title: "s07", value: 6 },
      { title: "d08", value: 7 },
      { title: "h08", value: 7 },
      { title: "c08", value: 7 },
      { title: "s08", value: 7 },
      { title: "d09", value: 8 },
      { title: "h09", value: 8 },
      { title: "c09", value: 8 },
      { title: "s09", value: 8 },
      { title: "d10", value: 9 },
      { title: "h10", value: 9 },
      { title: "c10", value: 9 },
      { title: "s10", value: 9 },
      { title: "dJ", value: 10 },
      { title: "hJ", value: 10 },
      { title: "cJ", value: 10 },
      { title: "sJ", value: 10 },
      { title: "dQ", value: 11 },
      { title: "hQ", value: 11 },
      { title: "cQ", value: 11 },
      { title: "sQ", value: 11 },
      { title: "dK", value: 12 },
      { title: "hK", value: 12 },
      { title: "cK", value: 12 },
      { title: "sK", value: 12 },
      { title: "dA", value: 13 },
      { title: "hA", value: 13 },
      { title: "cA", value: 13 },
      { title: "sA", value: 13 },
    ]
    console.log(initialDeck)
    if (compDeck.length == 0 && playerDeck.length == 0 && gameBegin == true) {
      let useDeck = initialDeck;
      for (var i = 0; i < 26; i++) {
          let randIdx = Math.floor(Math.random() * useDeck.length)
          compCardPicked = useDeck.splice(randIdx, 1)[0]
          compDeck.unshift(compCardPicked)
        }
      console.log(compDeck.length)
      //console.log(useDeck)
      for (var i = 0; i < 26; i++) {
        let randIdx = Math.floor(Math.random() * useDeck.length)
        playerCardPicked = useDeck.splice(randIdx, 1)[0]    // Assign card with the random index to a variable
        playerDeck.unshift(playerCardPicked)   // Add card picked to deck 2
      }
      console.log(playerDeck.length)
      gameBegin = false;
    } 
  }
  // Pass card picked to render function to display
  

  function renderComputer(compCardPicked, compDiscard) {
    //   // Remove outline class when first card is picked
    if (compDiscard.length === 1) {
      compDiscardEl.classList.remove("outline", compDiscard[0])
    }
    //   // Removes previous picked card from deck 2 class list
    if (compDiscard.length > 1) {
      compDiscardEl.classList.remove('compCardToRemove')
    }
    //   // Set card to be removed on next play
    let compCardToRemove = compCardPicked
    console.log(compCardToRemove, 'remove this card next time')
    console.log('compDiscardEl ===', compDiscardEl, compCardPicked)
    //   // Add current card picked to deck 2 element
    let list =  compDiscardEl.classList;
    let nlist = compCardPicked['title']
    for(let x of list.values)
    {
        nlist += " "+x
    }
    compDiscardEl.classList.add(compCardPicked['title'])
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
  function renderPlayer(playerCardPicked, playerDiscard) {
    if (playerDiscard.length === 1) {
      playerDiscardEl.classList.remove("outline", playerDiscard[0])
    }
    if (playerDiscard.length > 1) {
      playerDiscardEl.classList.remove('playerCardToRemove')
    }
    let playerCardToRemove = playerCardPicked
    console.log(playerDiscardEl)
    console.log(playerCardPicked)
    playerDiscardEl.classList.add(playerCardPicked['title'])
    if (playerDiscard.length === 26) {
      playerDiscardEl.classList.add('shadow')
      playerDeckEl.classList.remove('shadow')
    }
    if (playerDeck.length === 0) {
      playerDeckEl.classList.add('outline')
      playerDeckEl.classList.remove('back-red')
    }
  }


  console.log(compDiscard, 'compDiscard')
  console.log(compDeck, 'compDeck')
  console.log(playerDeck, 'playerDeck')
  console.log(playerDiscard, 'playerDiscard')
  console.log(playerHostages, 'playerHostages')
  console.log(compHostages, 'compHostages')

