let editedPlayer = 0;
let activePlayer = 0;

let currentRound = 0;
let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },

  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("game-play");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.querySelector('#game-play article');


const editPlayer1Btn = document.getElementById("edit-btn-1");
const editPlayer2Btn = document.getElementById("edit-btn-2");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);
startNewGameBtn.addEventListener("click", startNewGame);
cancelConfigBtn.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
