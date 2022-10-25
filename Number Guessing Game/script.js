function NumberGuesserCheck() {
     var user = prompt("Input Your Username");
     alert(`Hello ${user} Click on OK to continue`);

     let number = Math.floor(Math.random() * 2);

     let userScore = 0;
     var instruction = alert(
          "We have selected a random number from 1 - 2,See if you can guess it"
     );

     var Input = prompt("Guess the number");

     if (number == Input) {
          Number.isInteger(Input);
          userScore += 1;
          alert(
               `you guessed the number ${number} correctly.You now have ${userScore} point`
          );
     } else if (number !== Input) {
          userScore = 0;
          alert(`your guess is incorrect. Game Over`);
     }

     if (userScore == 1) {
          var no = [Math.floor(Math.random() * 3)];

          let input = prompt("Enter a number in range 1-3 ");

          if (input == no) {
               userScore += 1;
               alert(
                    `You guessed the number right!!. you now have ${userScore} point`
               );
          } else if (input < no) {
               alert("You guessed too low");
          }
          if (input > no) {
               alert("You guessed too high");
               console.log(input);
          }
     }
     if (userScore == 0) {
          console.log(user);
     }
}
