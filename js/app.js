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
let playerScoreEl =  document.getElementById('playerScoreboard')
let compScoreEl = document.getElementById('compScoreboard')
// let testDeck = document.getElementById('testDeck')
let gameBegin = true;
let playerScore = 0;
let compScore = 0;
let war = false;
let inducewar = 0;
let doublewar = 0;
// Event listeners
document.getElementById('startBtn').addEventListener('click', function () {
  
  console.log("comp deck")
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
      console.log("Computer Discard: ", compDiscard)
      if(inducewar == 3 || inducewar==8 || inducewar==9)
      {
        for(var i = 0; i < playerDeck.length; i++)
        {
          if(playerDeck[i].value == compCardPicked.value)
          {
            playerCardPicked = playerDeck[i]
            playerDeck.splice(i,1)
            break;
          }
        }
        doublewar++;
        
      }
      
      else{
      playerCardPicked = playerDeck.splice(0, 1)[0]
      }
      console.log("player card value: " + playerCardPicked.title)
      renderPlayer(playerCardPicked, playerDiscard)
      playerDiscard.unshift(playerCardPicked)
      console.log("player discard:", playerDiscard)
      if (war == true) {
        console.log("its a war")
        
        while (war == true) {
          if (compDeck.length < 4 && compScore < playerScore) {
            alert("Player Wins!")
            war = false
            document.getElementById('startBtn').disable = true;
          }
          else if (playerDeck.length < 4 && playerScore < compScore) {
            alert("Computer Wins!")
            war = false
            document.getElementById('startBtn').disable = true;
          }
          else {
            console.log("pull three cards from each pile on to the hostage pile")
            for (var i = 0; i < 3; i++) {
              let topCard = compDeck.splice(0, 1)[0]
              
              compHostages.unshift(topCard)
              
              
              topCard = playerDeck.splice(0, 1)[0]
             
              playerHostages.unshift(topCard)
              
            }
            renderCompHostage( compHostages)
            renderPlayerHostage(playerHostages)
            let topCardComp = compDeck.splice(0, 1)[0];
                       
            renderComputer(topCardComp, compDiscard)
            compDiscard.unshift(topCardComp)
            console.log("Computer card value: " + topCardComp.title)
           
            let topCardPlayer = playerDeck.splice(0, 1)[0];
          
            console.log("Player card value: " + topCardPlayer.title)
            renderPlayer(topCardPlayer, playerDiscard)
            playerDiscard.unshift(topCardPlayer)
           
          }
        }
      }
    }
    inducewar ++;
    compScoreEl.innerHTML= compDeck.length
    playerScoreEl.innerHTML = playerDeck.length
  });

  document.getElementById('resetBtn').addEventListener('click', function () {
    gameBegin = true
    compDeck = []
    playerDeck = []
    init()
    renderResetDeck()
    renderResetFunction()
    war = false
    playerHostages = []
    compHostages = []
    compDiscard = []
    playerDiscard = []
    playerScore = 0;
    compScore = 0;
    compScoreEl.innerHTML= compDeck.length
    playerScoreEl.innerHTML = playerDeck.length
    inducewar = 0
  })

  document.getElementById('playBtn').addEventListener('click', function()
  {
    let topCardComp = compDiscard[0]
    let topCardPlayer = playerDiscard[0]
    if (compDiscard[0].value > playerDiscard[0].value) {
      compScore += 1;
      compDeck  = compDeck.concat(playerDiscard ,  playerHostages , compHostages, compDiscard) 
      playerDiscard = []
      playerHostages = []
      compDiscard = []
      compHostages = []
      renderResetFunction()
      console.log(compDeck)
      console.log("computer score incremented to " + compScore)
      war = false
    }
    else if (compDiscard[0].value < playerDiscard[0].value) {
      playerScore += 1;
      playerDeck  = playerDeck.concat(playerDiscard ,  playerHostages , compHostages, compDiscard)
      playerDiscard = []
      playerHostages = []
      compDiscard = []
      compHostages = []
      renderResetFunction()
      console.log(playerDeck)
      console.log("player score incremented to : " + playerScore)
      war = false
    }
    //in the case of war
    else {
      war = true;
      console.log(compDeck)
      console.log(playerDeck)
      if (topCardComp.value < topCardPlayer.value) {
        playerScore += 1;
        playerDeck  = playerDeck.concat(playerDiscard ,  playerHostages , compHostages, compDiscard)
        playerDiscard = []
        playerHostages = []
        compDiscard = []
        compHostages = []
        renderResetFunction()
        console.log("Player score is now: " + playerScore)
        war = false;
      }
      else if (topCardPlayer.value < topCardComp.value) {
        compScore += 1;
        compDeck  = compDeck.concat(playerDiscard ,  playerHostages , compHostages, compDiscard) 
        playerDiscard = []
        playerHostages = []
        compDiscard = []
        compHostages = []
        renderResetFunction()
        console.log("Computer score is now: " + compScore)
        war = false;
      }
      else {
        console.log("pull three cards from each pile on to the hostage pile")
        for (var i = 0; i < 3; i++) {
          let topCard = compDeck.splice(0, 1)[0]
          
          compHostages.unshift(topCard)
          
          
          topCard = playerDeck.splice(0, 1)[0]
         
          playerHostages.unshift(topCard)
          
        }
        renderCompHostage( compHostages)
        renderPlayerHostage(playerHostages)
        topCardComp = compDeck.splice(0, 1)[0];
                   
        renderComputer(topCardComp, compDiscard)
        compDiscard.unshift(topCardComp)
        console.log("Computer card value: " + topCardComp.title)
        if(inducewar == 8 )
        {

          for(var i = 0; i < playerDeck.length; i++)
          {
            if(playerDeck[i].value == topCardComp.value)
            {
              let topCardPlayer = playerDeck[i]
              playerDeck.splice(i,1)
              break;
            }
          }
      }
      else{
        topCardPlayer = playerDeck.splice(0, 1)[0];
      }
        console.log("Player card value: " + topCardPlayer.title)
        renderPlayer(topCardPlayer, playerDiscard)
        playerDiscard.unshift(topCardPlayer)
        console.log(compDeck)
        console.log(playerDeck)
      }
      
    }

    compScoreEl.innerHTML= compDeck.length
      playerScoreEl.innerHTML = playerDeck.length
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
    compScoreEl.innerHTML= compDeck.length
    playerScoreEl.innerHTML = playerDeck.length
  }
  // Pass card picked to render function to display
  function renderCompHostage(compHostages)
  {
    if(compHostages.length > 0)
    {
      compHostagesEl.classList.remove("outline")
      compHostagesEl.classList.add("back-blue", "shadow")
    }
  }
  function renderPlayerHostage(playerHostages)
  {
    if(playerHostages.length > 0)
    {
      playerHostagesEl.classList.remove("outline")
      playerHostagesEl.classList.add("back-blue", "shadow")
    }
  }

  function renderComputer(compCardPicked, compDiscard) {
    //   // Remove outline class when first card is picked
    if (compDiscard.length >=1 ) {
      compDiscardEl.classList.remove("outline", compDiscard[0].title)
    }
    //   // Removes previous picked card from deck 2 class list
    /*
    if (compDiscard.length > 1) {
      compDiscardEl.classList.remove('compCardToRemove')
    }
    */
    //   // Set card to be removed on next play
    let compCardToRemove = compCardPicked
    console.log(compCardToRemove, 'remove this card next time')
    console.log('compDiscardEl ===', compDiscardEl, compCardPicked)
    //   // Add current card picked to deck 2 element
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
    if (playerDiscard.length >= 1) {
      playerDiscardEl.classList.remove("outline", playerDiscard[0].title)
    }
    // if (playerDiscard.length > 1) {
    //   playerDiscardEl.classList.remove('playerCardToRemove')
    // }
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
  function renderResetFunction()
  {
    compDiscardEl.className = "card large outline"
    compHostagesEl.className = "card large outline"
    playerDiscardEl.className = "card large outline"
    playerHostagesEl.className = "card large outline"
  }

  function renderResetDeck()
  {
    compDeckEl.className = 'card large back-blue shadow'
    playerDeckEl.className = 'card large back-blue shadow'

  }
  console.log(compDiscard, 'compDiscard')
  console.log(compDeck, 'compDeck')
  console.log(playerDeck, 'playerDeck')
  console.log(playerDiscard, 'playerDiscard')
  console.log(playerHostages, 'playerHostages')
  console.log(compHostages, 'compHostages')

