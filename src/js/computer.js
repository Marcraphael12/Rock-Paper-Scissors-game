import icon_rock from '../images/icon_rock.png';
import icon_paper from '../images/icon_paper.png';
import icon_scissors from '../images/icon_scissors.png';
import icon_lizard from '../images/icon_lizard.png';
import icon_spock from '../images/icon_spock.png';

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