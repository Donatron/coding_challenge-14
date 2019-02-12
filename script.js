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
    card.classList.toggle("flipped");
    flippedCards++;

    if (card.classList.contains("flipped")) {
      card.style.transform = "rotateY(180deg)";
    } else {
      card.style.transform = "rotateY(0deg)";
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
        console.log(cardOne, cardTwo);
      } else {
        setInterval(() => {
          cardOne.style.transform = "rotateY(0deg)";
          cardTwo.style.transform = "rotateY(0deg)";
        }, 500);
      }

      // Update number of moves
      moves.innerHTML = numberOfMoves;
      matches.innerHTML = numberOfMatches;
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

// Add start game button functionality
gameButton.addEventListener("click", e => {
  e.preventDefault();

  init();
  // Start timer;
  gameStart = new Date().getTime();
  createTimer(gameStart);
});

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
