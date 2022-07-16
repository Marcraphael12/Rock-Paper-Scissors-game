// let's make our game
// our computer choices
import computer_choice from "./computer";

// icons for buttons
import icon_rock from '../../images/icon-rock.png';
import icon_paper from '../../images/icon-paper.png';
import icon_scissor from '../../images/icon-scissors.png';
import icon_lizard from '../../images/icon-lizard.png';
import icon_spock from '../../images/icon-spock.png';

const GamePlay = () => {
	// we need the player choice
	let player_choice = '';

	function rock () {
		const button = document.createElement('button');
		const icon = document.createElement('img');
		icon.setAttribute('src', icon_rock)
		button.appendChild(icon);

		button.addEventListener('click', (e) => {
			e.preventDefault();
			return player_choice = 'rock';
		})
	}

	function paper () {
		const button = document.createElement('button');
		const icon = document.createElement('img');
		icon.setAttribute('src', icon_paper)
		button.appendChild(icon);

		button.addEventListener('click', (e) => {
			e.preventDefault();
			return player_choice = 'paper';
		})
	}


}
 
export default GamePlay;