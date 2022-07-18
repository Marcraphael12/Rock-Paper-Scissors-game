const rock_btn = document.querySelector('.rock');
const paper_btn = document.querySelector('.paper');
const scissors_btn = document.querySelector('.scissor');
const lizard_btn = document.querySelector('.lizard');
const spock_btn = document.querySelector('.spock');

const all_buttons = [rock_btn, paper_btn, scissors_btn, lizard_btn, spock_btn];

rock_btn.addEventListener('click', () => {
	preventDefault();
	console.log('rock');
	return 'rock';
})

paper_btn.addEventListener('click', () => {
	preventDefault();
	console.log('paper');
	return 'paper';
})

scissors_btn.addEventListener('click', () => {
	preventDefault();
	console.log('scissors');
	return 'scissors';
})

lizard_btn.addEventListener('click', () => {
	preventDefault();
	console.log('lizard');
	return 'lizard';
})

spock_btn.addEventListener('click', () => {
	preventDefault();
	console.log('spock');
	return 'spock';
})