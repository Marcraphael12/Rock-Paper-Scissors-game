const computer_choice = () => {
  let computerchoice = Math.floor(Math.random() * 5);
  console.log(computerchoice);
  if (computerchoice === 0)
    {return "rock";}
  else if (computerchoice === 1 )
    {return "paper";}
  else if (computerchoice === 2 )
    {return "spock";}
  else if (computerchoice === 3 )
     {return "lizard";}
  else {
    return 'scissors';
  }
}
console.log(computer_choice());
