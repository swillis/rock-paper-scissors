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
		console.log('Move type is empty');
		return;
	}

	if (
		!isValidMoveType(moveOneType) ||
		!isValidMoveType(moveTwoType) ||
		!isValidMoveType(moveThreeType)) {
		console.log(`Move type is invalid (${moveOneType})`);
		return;
	}

	// if (
	// 	moveOneValue < 1 ||
	// 	moveTwoValue < 1 ||
	// 	moveThreeValue < 1 ||
	// 	moveOneValue > 99 ||
	// 	moveTwoValue > 99 ||
	// 	moveThreeValue > 99) {
	// 	return;
	// }

	if (
		!isValidMoveValue(moveOneValue) ||
		!isValidMoveValue(moveTwoValue) ||
		!isValidMoveValue(moveThreeValue)) {
		console.log(`Move value is invalid (${moveOneValue})`);
		return;
	}

	if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
		console.log('Move values greater than 99');
		return;
	}

	else {
		console.log('Move type is valid');
		console.log('Move value is valid');
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

function getRoundWinner() {}

function isValidMoveType(moveType) {
	return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}

function isValidMoveValue(moveValue) {
	return (moveValue >= 1) && (moveValue <= 99);
}
