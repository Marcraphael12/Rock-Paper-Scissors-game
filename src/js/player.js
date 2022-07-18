const rock_btn = document.querySelector('.rock');
const paper_btn = document.querySelector('.paper');
const scissors_btn = document.querySelector('.scissor');
const lizard_btn = document.querySelector('.lizard');
const spock_btn = document.querySelector('.spock');

const player_choice = [];

rock_btn.addEventListener('click', () => {
	preventDefault();
	console.log('rock');
	player_choice.push('rock');
})

paper_btn.addEventListener('click', () => {
	preventDefault();
	console.log('paper');
	player_choice.push('paper');
})

scissors_btn.addEventListener('click', () => {
	preventDefault();
	console.log('scissors');
	player_choice.push('scissors');
})

lizard_btn.addEventListener('click', () => {
	preventDefault();
	console.log('lizard');
	player_choice.push('lizard');
})

spock_btn.addEventListener('click', () => {
	preventDefault();
	console.log('spock');
	player_choice.push('spock');
})