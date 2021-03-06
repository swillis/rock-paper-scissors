// All code should be written in this file.

let playerOneMoveOneType,
		playerOneMoveTwoType,
		playerOneMoveThreeType,
		playerTwoMoveOneType,
		playerTwoMoveTwoType,
		playerTwoMoveThreeType,
		playerOneMoveOneValue,
		playerOneMoveTwoValue,
		playerOneMoveThreeValue,
		playerTwoMoveOneValue,
		playerTwoMoveTwoValue,
		playerTwoMoveThreeValue;

function setPlayerMoves(
	player,
	moveOneType,
	moveOneValue,
	moveTwoType,
	moveTwoValue,
	moveThreeType,
	moveThreeValue) {

	if (
		!moveOneType ||
		!moveTwoType ||
		!moveThreeType ||
		!moveOneValue ||
		!moveTwoValue ||
		!moveThreeValue) {
		return;
	}

	if (
		!isValidMoveType(moveOneType) ||
		!isValidMoveType(moveTwoType) ||
		!isValidMoveType(moveThreeType)) {
		return;
	}

	if (
		!isValidMoveValue(moveOneValue) ||
		!isValidMoveValue(moveTwoValue) ||
		!isValidMoveValue(moveThreeValue)) {
		return;
	}

	if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
		return;
	}

	else {
		if (player === 'Player One') {
			playerOneMoveOneType = moveOneType;
			playerOneMoveTwoType = moveTwoType;
			playerOneMoveThreeType = moveThreeType;
			playerOneMoveOneValue = moveOneValue;
			playerOneMoveTwoValue = moveTwoValue;
			playerOneMoveThreeValue = moveThreeValue;
		}

		else {
			playerTwoMoveOneType = moveOneType;
			playerTwoMoveTwoType = moveTwoType;
			playerTwoMoveThreeType = moveThreeType;
			playerTwoMoveOneValue = moveOneValue;
			playerTwoMoveTwoValue = moveTwoValue;
			playerTwoMoveThreeValue = moveThreeValue;
		}
	}
}

function isValidMoveType(moveType) {
	return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

function isValidMoveValue(moveValue) {
	return (moveValue >= 1) && (moveValue <= 99);
}

function getRoundWinner(roundNumber) {
	if (roundNumber === 1) {
		return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
	}

	if (roundNumber === 2) {
		return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
	}

	if (roundNumber === 3) {
		return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
	}

	else {
		return null;
	}
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {

	if (
		!playerOneMoveType ||
		!playerOneMoveValue ||
		!playerTwoMoveType ||
		!playerTwoMoveValue) {
		return null;
	}

	if (playerOneMoveType === playerTwoMoveType) {
		if (playerOneMoveValue > playerTwoMoveValue) {
			return 'Player One';
		}

		if (playerOneMoveValue < playerTwoMoveValue) {
			return 'Player Two';
		}

		if (playerOneMoveValue === playerTwoMoveValue) {
			return 'Tie';
		}
	}

	if (playerOneMoveType === 'rock') {
		if (playerTwoMoveType === 'scissors') {
			return 'Player One';
		}

		else {
			return 'Player Two'
		}
	}

	if (playerOneMoveType === 'paper') {
		if (playerTwoMoveType === 'rock') {
			return 'Player One';
		}

		else {
			return 'Player Two'
		}
	}

	if (playerOneMoveType === 'scissors') {
		if (playerTwoMoveType === 'paper') {
			return 'Player One';
		}

		else {
			return 'Player Two'
		}
	}
}

function addWin(winner) {
  if (winner === 'Player One') {
    playerOneWins = (playerOneWins + 1);
  } else if (winner === 'Player Two') {
    playerTwoWins = (playerTwoWins + 1);
  }
}

function getGameWinner() {
	if (!playerOneMoveOneType ||
		!playerOneMoveOneValue ||
		!playerTwoMoveOneType ||
		!playerTwoMoveOneValue ||
		!playerOneMoveTwoType ||
		!playerOneMoveTwoValue ||
		!playerTwoMoveTwoType ||
		!playerTwoMoveTwoValue ||
		!playerOneMoveThreeType ||
		!playerOneMoveThreeValue ||
		!playerTwoMoveThreeType ||
		!playerTwoMoveThreeValue) {
		return null;
	}

  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);

  if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else if (playerOneWins < playerTwoWins) {
    return 'Player Two';
  } else {
    return 'Tie';
  }
}

function setComputerMoves() {
  const moves = ['rock', 'paper', 'scissors'];
  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];
  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;
  setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
                 moveTwoValue, moveThreeType, moveThreeValue);
}
