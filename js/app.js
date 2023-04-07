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
let h3El = document.getElementById("h3")
let playerDeckEl = document.getElementById('playerDeck')
let playerHostagesEl = document.getElementById('playerHostages')
let playerDiscardEl = document.getElementById('playerDiscard')
let compDeckEl = document.getElementById('compDeck')
let compHostagesEl = document.getElementById('compHostages')
let compDiscardEl = document.getElementById('compDiscard')
let startBtnEl = document.getElementById('startBtn')
let playerScoreEl =  document.getElementById('playerScoreboard')
let compScoreEl = document.getElementById('compScoreboard')
let gameBegin = true;
let playerScore = 0;
let compScore = 0;
let war = false;
let inducewar = 0;
let doublewar = 0;
h3El.innerHTML = "Begin Game by clicking 'Flip Card' button below!"

let flipCardButton = document.getElementById('startBtn');
let collectCardButton = document.getElementById('collectBtn');

// Event listeners
document.getElementById('startBtn').addEventListener('click', function () {  
  if ((compDeck.length === 0 || playerDeck.length === 0) && gameBegin === false) {
    if (compDeck.length === 0) {
      h3El.innerHTML = "Player Wins!"
      flipCardButton.disabled = true;
      collectCardButton.disabled = true;
      return;
    } else {
      h3El.innerHTML = "Computer Wins!"
      flipCardButton.disabled = true;
      collectCardButton.disabled = true;
      return;
    }
  }
  else if (war === true) {
    if(compDeck.length < 4 && compDeck.length === playerDeck.length)
    {
      h3El.innerHTML = "The Game is a Draw!" 
      flipCardButton.disabled = true;
      collectCardButton.disabled = true;
      return;
    }
    if (compDeck.length < 4 && compDeck.length < playerDeck.length) {
      war = false
      h3El.innerHTML = "Player Wins!"
      flipCardButton.disabled = true;
      collectCardButton.disabled = true;
      return;
    }
    else if (playerDeck.length < 4 && playerDeck.length < compDeck.length) {
      h3El.innerHTML = "Computer Wins!"
      flipCardButton.disabled = true;
      collectCardButton.disabled = true;
      return;
    }

    collectCardButton.disabled = true
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
    let topCardPlayer;
    if(inducewar === 8 )
    {
      for(var i = 0; i < playerDeck.length; i++)
      {
        if(playerDeck[i].value === topCardComp.value)
        {
          topCardPlayer = playerDeck[i]
          playerDeck.splice(i,1)
          break;
        }
      }
    } else{
    topCardPlayer = playerDeck.splice(0, 1)[0];
    }
    if(playerDiscard[0].value  != compDiscard[0].value)
    {
      h3El.innerHTML = " "
      flipCardButton.disabled = true;
      war = false;
      collectCardButton.disabled = false; 
    }
    else
    {  
      h3El.innerHTML = "War!"
      flipCardButton.disabled = false;
      war = true;
      collectCardButton.disabled = true;
    }
    renderPlayer(topCardPlayer, playerDiscard)
    playerDiscard.unshift(topCardPlayer)
    } else {
      h3El.innerHTML= " "
      collectCardButton.disabled = false
      compCardPicked = compDeck.splice(0, 1)[0]
      renderComputer(compCardPicked,compDiscard)
      compDiscard.unshift(compCardPicked)
      if(inducewar === 3 || inducewar === 8 || inducewar === 9)
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
      renderPlayer(playerCardPicked, playerDiscard)
      playerDiscard.unshift(playerCardPicked)
      flipCardButton.disabled = true;
      if(playerDiscard[0].value  == compDiscard[0].value)
      {
        h3El.innerHTML = "War!"
        flipCardButton.disabled = false;
        war = true;
        collectCardButton.disabled = true;
        return;
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
    h3El.innerHTML = "Begin Game by clicking 'Flip Card' button below!"
    inducewar = 0
    flipCardButton.disabled = false
    collectCardButton.disabled= true
  })
  document.getElementById('collectBtn').addEventListener('click', function()
  {
    collectCardButton.disabled = true
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
      war = false
      flipCardButton.disabled = false;
      h3El.innerHTML = " "
    }
    else if (compDiscard[0].value < playerDiscard[0].value) {
      playerScore += 1;
      playerDeck  = playerDeck.concat(playerDiscard ,  playerHostages , compHostages, compDiscard)
      playerDiscard = []
      playerHostages = []
      compDiscard = []
      compHostages = []
      renderResetFunction()
      war = false
      flipCardButton.disabled = false;
      h3El.innerHTML = " "
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

    if (compDeck.length == 0 && playerDeck.length == 0 && gameBegin == true) {
      let useDeck = initialDeck;
      for (var i = 0; i < 26; i++) {
        let randIdx = Math.floor(Math.random() * useDeck.length)
        compCardPicked = useDeck.splice(randIdx, 1)[0]
        compDeck.unshift(compCardPicked)
      }
      for (var i = 0; i <26; i++) {
        let randIdx = Math.floor(Math.random() * useDeck.length)
        playerCardPicked = useDeck.splice(randIdx, 1)[0]    
        playerDeck.unshift(playerCardPicked)
      }
      gameBegin = false;
    } 
    compScoreEl.innerHTML= compDeck.length
    playerScoreEl.innerHTML = playerDeck.length
  }
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
    if (compDiscard.length >=1 ) {
      compDiscardEl.classList.remove("outline", compDiscard[0].title)
    }
    let compCardToRemove = compCardPicked
    if(compCardPicked != null)
    {
    compDiscardEl.classList.add(compCardPicked['title'])
    }
    if (compDiscard.length === initialDeck.length) {
      compDiscardEl.classList.add('shadow')
      compDeckEl.classList.remove('shadow')
    }
    if (compDeck.length === 0) {
      compDeckEl.classList.add('outline')
      compDeckEl.classList.remove('back-blue')
    }
  }
  function renderPlayer(playerCardPicked, playerDiscard) {
    if (playerDiscard.length >= 1) {
      playerDiscardEl.classList.remove("outline", playerDiscard[0].title)
    }
    let playerCardToRemove = playerCardPicked
    if(playerCardPicked != null)
    playerDiscardEl.classList.add(playerCardPicked['title'])
    if (playerDiscard.length === initialDeck.length) {
      playerDiscardEl.classList.add('shadow')
      playerDeckEl.classList.remove('shadow')
    }
    if (playerDeck.length === 0) {
      playerDeckEl.classList.add('outline')
      playerDeckEl.classList.remove('back-blue')
    }
  }
  function renderResetFunction()
  {
    compDiscardEl.className = "card large outline"
    compHostagesEl.className = "card large outline"
    playerDiscardEl.className = "card large outline"
    playerHostagesEl.className = "card large outline"
    compScoreEl.innerHTML= compDeck.length
    playerScoreEl.innerHTML = playerDeck.length
  }
  function renderResetDeck()
  {
    compDeckEl.className = 'card large back-blue shadow'
    playerDeckEl.className = 'card large back-blue shadow'
  }