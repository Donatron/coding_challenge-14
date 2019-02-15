// Declare variables for document elements
const footer = document.querySelector("#footer");
const moves = document.querySelector("#moves");
const matches = document.querySelector("#matches");
const time = document.querySelector("#time");
const stats = document.querySelector(".stats");
const gameButton = document.querySelector("#game-button");
const cardsArray = document.querySelectorAll(".card");

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
let gameStart;

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

// Declare function to create cards
const createCard = (src, id) => {
  let html = `<div class="card" id="card-${id}">`;
  html += '<img src="img/iron-throne.png" alt="" class="tile side-a" />';
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

// Assign all cards to board;
let board = createBoard();

// Iterate over board array and add items to game board
const displayBoard = () => {
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

// Add start game button functionality
gameButton.addEventListener("click", e => {
  e.preventDefault();

  // Display game board
  displayBoard();

  init();
  // Start timer;
  gameStart = new Date().getTime();
  createTimer(gameStart);
});

// Reset all game variables;
const resetGame = () => {
  numberOfMoves = 0;
  numberOfMatches = 0;
  timeElapsed = "00 : 00";
};

// Create timer
const createTimer = start => {
  setInterval(() => {
    let now = new Date().getTime();
    let timeElapsed = now - start;

    let seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
    let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    time.innerHTML = `${minutes} : ${seconds}`;
  }, 1000);
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

// Rotate Cards at click;
cardsArray.forEach(card => {
  card.addEventListener("click", () => {
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
        setTimeout(() => {
          console.log("this is running");
          cardOne.style.transform = "rotateY(0deg)";
          cardTwo.style.transform = "rotateY(0deg)";
        }, 500);
        // Remove "flipped" class
        cardOne.classList.remove("flipped");
        cardTwo.classList.remove("flipped");
      }

      // Update number of moves
      moves.innerHTML = numberOfMoves;
      matches.innerHTML = numberOfMatches;

      // Reset flipped cards;
      flippedCards = 0;
    }
  });
});

// Check whether matched pair found
const checkMatch = (cardOne, cardTwo) => {
  return cardOne === cardTwo;
};

const init = () => {
  resetGame();

  moves.innerHTML = numberOfMoves;
  matches.innerHTML = numberOfMatches;
  time.innerHTML = timeElapsed;
  stats.style.visibility = "visible";
};

// Add copyright tags to footer
const generateCopyright = () => {
  let html = "";
  let date = new Date();
  let year = date.getFullYear();

  html += `<p>Copyright &copy ${year}`;
  html += " | ";
  html += "<a href='https://donatron.github.io/portfolio' target='_blank' >";
  html += "Don Macarthur </a></p>";

  return html;
};

footer.innerHTML = generateCopyright();

// function to find card element
const handleBoardClick = event => {
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
      setTimeout(() => {
        console.log("this is running");
        cardOne.style.transform = "rotateY(0deg)";
        cardTwo.style.transform = "rotateY(0deg)";
      }, 500);
      // Remove "flipped" class
      cardOne.classList.remove("flipped");
      cardTwo.classList.remove("flipped");
    }

    // Update number of moves
    moves.innerHTML = numberOfMoves;
    matches.innerHTML = numberOfMatches;

    // Reset flipped cards;
    flippedCards = 0;
  }
};

document.querySelector(".board").addEventListener("click", handleBoardClick);
