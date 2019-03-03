// Import CSS and Font
require("./style.css");
require("./fonts/game-of-thrones.ttf");

// Import HTML file
require("./index.html");

// Import card images
require("./img/characters/arya-stark.jpg");
require("./img/characters/cersei-lannister.jpg");
require("./img/characters/danaerys-targaeryan.jpg");
require("./img/characters/jaime-lannister.jpg");
require("./img/characters/jon-snow.jpg");
require("./img/characters/ned-stark.jpg");
require("./img/characters/sansa-stark.jpg");
require("./img/characters/tyrion-lannister.jpg");
require("./img/covers/iron-throne.png");

// Declare variables for document elements
const footer = document.querySelector("#footer");
const moves = document.querySelector("#moves");
const matches = document.querySelector("#matches");
const time = document.querySelector("#time");
const stats = document.querySelector(".stats");
const gameButton = document.querySelector("#game-button");
const boardElement = document.querySelector(".board");

// Declare variables for game information
let numberOfMoves = 0;
let numberOfMatches = 0;
let timeElapsed = "00 : 00";
let flippedCards = 0;
let cardOneSource;
let cardTwoSource;
let cardOneId;
let cardTwoId;
let match = false;
let gameTimer;
let timer;
let gameTime;
let timerRunning = false;
let gameStatus = "Stopped";

// Create array of card image source files
const imagesArray = [
  "arya-stark.jpg",
  "cersei-lannister.jpg",
  "danaerys-targaeryan.jpg",
  "jaime-lannister.jpg",
  "jon-snow.jpg",
  "ned-stark.jpg",
  "sansa-stark.jpg",
  "tyrion-lannister.jpg",
  "arya-stark.jpg",
  "cersei-lannister.jpg",
  "danaerys-targaeryan.jpg",
  "jaime-lannister.jpg",
  "jon-snow.jpg",
  "ned-stark.jpg",
  "sansa-stark.jpg",
  "tyrion-lannister.jpg"
];

// Get all available character names
const getCharacterNames = () => {
  const characters = [];
  for (let image of imagesArray) {
    characters.push(image);
  }
  return characters;
};

let characters = getCharacterNames();

// Create array of random characters;
const getRandomCharacters = () => {
  let randomCharacters = [];

  while (characters.length) {
    let index = Math.floor(Math.random(characters.length) * characters.length);
    randomCharacters.push(characters[index]);
    characters.splice(index, 1);
  }

  return randomCharacters;
};

// Assign random characters to variable for creation of game board
let randomCharacters = getRandomCharacters();

// Add rows to Game Board
const createRows = n => {
  // Create HTML variable
  let html = "";
  // Iternate 'n' times and create a row for each iteration
  for (let i = 1; i <= n; i++) {
    html += `<div class="row-${i}"><div class="tile-container"></div></div>`;
  }

  boardElement.innerHTML = html;
};

// Declare function to create cards
const createCard = (src, id) => {
  let html = `<div class="card" id="card-${id}">`;
  html += '<img src="img/covers/iron-throne.png" alt="" class="tile side-a" />';
  html += '<div class="side-b">';
  html += `<img src="img/characters/${src}" alt="${src}" />`;
  html += "</div></div>";

  return html;
};

// Create game board
const createBoard = () => {
  let boardArray = [];
  for (let i = 0; i < randomCharacters.length; i++) {
    let card = createCard(randomCharacters[i], i);

    boardArray.push(card);
  }
  return boardArray;
};

// Iterate over board array and add items to game board
const displayBoard = board => {
  // iterate over each row of game board
  for (let i = 1; i <= 4; i++) {
    let row = document.querySelector(`.row-${i} .tile-container`);

    // Add four cards to each row
    for (let j = 0; j < 4; j++) {
      let card = board.shift();
      row.innerHTML += card;
    }
  }
};

// Declare function to update number of moves and matches
const updateStats = () => {
  moves.innerHTML = numberOfMoves;
  matches.innerHTML = numberOfMatches;
};

// Function to update game button and game status
const updateGameStatus = () => {
  if (gameStatus === "Stopped") {
    // Update text on game button
    updateGameButton("Pause");

    // Reinstate click functionality to board
    boardElement.addEventListener("click", handleBoardClick);

    // Update game status
    gameStatus = "Playing";
  } else if (gameStatus === "Playing") {
    // Update text on game button
    updateGameButton("Resume");

    // Remove click functionality from board
    boardElement.removeEventListener("click", handleBoardClick);

    // Stop timer
    clearInterval(gameTimer);

    // Update game status
    gameStatus = "Paused";
  } else if (gameStatus === "Paused") {
    // Update text on game button
    updateGameButton("Pause");

    // Reinstate click functionality to board
    boardElement.addEventListener("click", handleBoardClick);

    // Restart timer
    gameTimer = setInterval(timer, 1000);

    // Update game status
    gameStatus = "Playing";
  }
};

// Function to update Game Button Text content
const updateGameButton = value => {
  return (gameButton.textContent = value);
};

// Start game
const startGame = () => {
  // Add rows to game board
  createRows(4);

  // Assign all cards to board;
  let board = createBoard();

  // Display game board
  displayBoard(board);

  initGame();
};

// Check number of matches
const checkMatches = () => {
  if (numberOfMatches === 8) {
    // Show success message
    completeGame();

    // Clear timer
    clearTimeout(createTimer);
  }
};

// Reset number of flipped cards
const resetFlipped = () => {
  flippedCards = 0;
};

// Complete game
const completeGame = () => {
  // Display success message
  gameFinsihedMessage(numberOfMoves, gameTime);

  // Update game status
  gameStatus = "Stopped";

  // Update game button
  updateGameButton("Play Again");

  // Clear Timer
  clearInterval(gameTimer);
};

// Format gameTime for finish message
const formatGameTime = time => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }

  return `${min} : ${sec}`;
};

// Create game completed message
const gameFinsihedMessage = (moves, time) => {
  let totalTime = formatGameTime(time);

  let html = "<div class='success'>";
  html += "<h4>CONGRATULATIONS!</h4>";
  html += `<p>You found all matches in ${moves} moves</p>`;
  html += `<p>And you took ${totalTime} minutes</p>`;
  html += "<p>You've managed to ward off the white walkers.</p>";
  html += "<p>For now.......</p>";
  html += "</div>";

  boardElement.innerHTML = html;
};

// Create game rules message
const gameRulesMessage = () => {
  let html = "<div class='success'>";
  html += "<h4>How to play</h4>";
  html += `<p>Click the "Start Game" button to reveal 16 random cards</p>`;
  html += `<p>Select any card to reveal the hidden character.</p>`;
  html += "<p>Select a second card to try to find a matching pair.</p>";
  html += "<p>Reveal all 8 matching characters to win</p>";
  html += "</div>";

  boardElement.innerHTML = html;
};

// Add game button click functionality
gameButton.addEventListener("click", e => {
  e.preventDefault();

  // If between games, create game board and start game
  if (gameStatus === "Stopped") {
    startGame();
  }

  // Update Game and Game Button Status
  updateGameStatus();
});

// Reset all game variables;
const resetGame = () => {
  numberOfMoves = 0;
  numberOfMatches = 0;
  gameTime = 0;

  resetFlipped();
};

// Create timer
timer = () => {
  gameTime++;
  let min = Math.floor(gameTime / 60);
  let sec = Math.floor(gameTime % 60);
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  time.innerHTML = `${min} : ${sec}`;
};

// Assign id and source variables to selected card;
const getCardVariables = (src, id) => {
  if (flippedCards === 1) {
    cardOneSource = src;
    cardOneId = id;
  } else {
    cardTwoSource = src;
    cardTwoId = id;
  }
};

// function to find card element
const handleBoardClick = event => {
  // Do nothing if user clicks on something other than card
  if (
    !event.target.parentNode ||
    !event.target.parentNode.classList.contains("card")
  ) {
    return;
  }

  // Create card variable
  let card = event.target.parentNode;

  // Do nothing if card already matched
  if (card.classList.contains("matched")) {
    return;
  }
  card.classList.toggle("flipped");
  flippedCards++;

  if (card.classList.contains("flipped")) {
    card.style.transform = "rotateY(180deg)";
  }

  //assign photo src to variable
  let sideB = card.querySelector(".side-b img");
  let src = sideB.getAttribute("src");
  let id = card.getAttribute("id");

  // Get card Variables
  getCardVariables(src, id);

  if (flippedCards === 2) {
    numberOfMoves++;
    let cardOne = document.querySelector(`#${cardOneId}`);
    let cardTwo = document.querySelector(`#${cardTwoId}`);

    if (checkMatch(cardOneSource, cardTwoSource)) {
      numberOfMatches++;

      // add "matched" class to cards
      cardOne.classList.add("matched");
      cardTwo.classList.add("matched");
    } else {
      // Turn cards back over
      setTimeout(() => {
        cardOne.style.transform = "rotateY(0deg)";
        cardTwo.style.transform = "rotateY(0deg)";
      }, 500);
      // Remove "flipped" class
      cardOne.classList.remove("flipped");
      cardTwo.classList.remove("flipped");
    }

    // Update number of moves and matches
    updateStats();

    // Check number of matches
    checkMatches();

    // Reset number of flipped cards
    resetFlipped();
  }
};

boardElement.addEventListener("click", handleBoardClick);

// Check whether matched pair found
const checkMatch = (cardOne, cardTwo) => {
  return cardOne === cardTwo;
};

const initGame = () => {
  resetGame();

  moves.innerHTML = numberOfMoves;
  matches.innerHTML = numberOfMatches;
  time.innerHTML = timeElapsed;
  stats.style.visibility = "visible";

  // Start timer
  gameTimer = setInterval(timer, 1000);
};

const init = () => {
  gameRulesMessage();
};

init();

// Add copyright tags to footer
const generateCopyright = () => {
  let html = "";
  let year = new Date().getFullYear();

  html += `<p>Copyright &copy ${year}`;
  html += " | ";
  html += "<a href='https://donatron.github.io/portfolio' target='_blank' >";
  html += "Don Macarthur </a></p>";

  return html;
};

footer.innerHTML = generateCopyright();
