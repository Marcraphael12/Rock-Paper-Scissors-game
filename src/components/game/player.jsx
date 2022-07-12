import styled from "styled-components";

const rock = () => {
  return 'rock';
}

const paper = () => {
  return 'paper';
}

const scissors = () => {
  return 'scissors';
}

const lizard = () => {
  return 'lizard';
}

const spock = () => {
  return 'spock';
}

const Player = () => {
  const Button = styled.button `
  `;
  return (
    <div className="page1">
      <div>
        <Button>${}</Button>
      </div>
      <div>
        <Button>${}</Button>
        <Button>${}</Button>
      </div>
      <div>
        <Button>${}</Button>
        <Button>${}</Button>
      </div>
    </div>
  );
}
 
export default Player;