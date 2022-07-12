const Header = () => {
  return (
    <header>
      <h1>
        <span className="obj">Rock</span>
        <span className="obj">Paper</span>
        <span className="obj">Scissors</span>
        <span className="obj">Lizard</span>
        <span className="obj">Spock</span>
      </h1>

      <div className="score">
        <h2>Score</h2>
        <span>
          12
        </span>
      </div>
    </header>
  );
}
 
export default Header;