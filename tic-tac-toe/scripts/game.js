
function resetGameStatus(){
    activePlayer=0;
    currentRound=0;
    gameIsOver=false;
    // gameOverElement.innerHTML= 'You won! <span id="winner-name">PLAYER NAME</span>';
    gameOverElement.style.display='none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++){
        
        for (let j = 0; j < 3; j++){
            gameData[i][j]=0;
            gameFieldElements[gameBoardIndex].textContent="";
            gameFieldElements[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
            
        }
    }


}
function startNewGame() {
  if (players[0].name === "" || players[0] === "") {
    alert("Please set custom player names for both players!");

    return;
  }

  resetGameStatus();
  activePlayerName.textContent = players[activePlayer].name;

  gameAreaElement.style.display = "block";
}

function selectGameField(event) {
  const selectedRow = event.target.dataset.row - 1;
  const selectedCol = event.target.dataset.col - 1;
  if (gameIsOver){
    return;
  }

  if (gameData[selectedRow][selectedCol] != 0 ) {
    alert("Please select an empty field!");
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  
  currentRound+=1;
  gameData[selectedRow][selectedCol] = activePlayer + 1;
  const winnerId = checkForGameOver();
  if (winnerId !==0){
    endGame(winnerId);
  }
  activePlayer = 1 - activePlayer;
  activePlayerName.textContent = players[activePlayer].name;

 
  
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound==9){
    return -1;
  }

  return 0;
}


function endGame(winnerId){
    gameIsOver=true;

    if (winnerId> 0){

    
   
    gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId-1].name;
    gameOverElement.style.display='block';
    }
    else{
        gameOverElement.firstElementChild.textContent="It's a draw!";
    }
}