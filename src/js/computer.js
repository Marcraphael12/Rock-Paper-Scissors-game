const ComputerChoice = () => {
	const computerChoice = Math.floor(Math.random() * 4);
	if (computerChoice === 0) {
		return 'rock';
	} else if (computerChoice === 1) {
		return 'paper';
	} else if (computerChoice === 2) {
		return 'scissors';
	} else if (computerChoice === 3) {
		return 'lizard';
	} else {
		return 'spock';
	}
	return computerChoice;
}

console.log(ComputerChoice());