import icon_rock from '../images/icon_rock.png';
import icon_paper from '../images/icon_paper.png';
import icon_scissors from '../images/icon_scissors.png';
import icon_lizard from '../images/icon_lizard.png';
import icon_spock from '../images/icon_spock.png';

const ComputerChoice = () => {
	const computerChoice = Math.floor(Math.random() * 4);
	const computer_button = document.createElement('button');
	const icon = document.createElement('img');
	if (computerChoice === 0) {
		icon.src = icon_rock;
		computer_button.classList.add('rock');
	} else if (computerChoice === 1) {
		icon.src = icon_paper;
		computer_button.classList.add('paper');
	} else if (computerChoice === 2) {
		icon.src = icon_scissors;
		computer_button.classList.add('scissor');
	} else if (computerChoice === 3) {
		icon.src = icon_lizard;
		computer_button.classList.add('lizard');
	} else {
		icon.src = icon_spock;
		computer_button.classList.add('spock');
	}
	computer_button.appendChild(icon);
	return computer_button;
}

console.log(ComputerChoice());