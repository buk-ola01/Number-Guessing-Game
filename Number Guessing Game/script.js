function NumberGuesserCheck() {
     var user = prompt("Input Your Username");
     alert(`Hello ${user} Click on OK to continue`);

     let number = Math.floor(Math.random() * 2);

     let userScore = 0;
     var instruction = alert(
          "We have selected a random number between 1 - 2,See if you can guess it"
     );

     var Input = prompt("Guess the number");

     if (number == Input) {
          Number.isInteger(Input);
          userScore = 1;
          alert(
               `you guessed the number ${number} correctly.You now have ${userScore} point`
          );
     } else if (number !== Input) {
          userScore = 0;
          alert(`your guess is incorrect. Better Luck next time`);
     }
}
