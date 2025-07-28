 //  Creating objects

      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };
      //  We are now updating the score on the page by DOM manipulation.
      updateScoreElement();

      //  Creating object

      //   if (

      //   // score === null this is equal to following.
      //   !score
      //   )
      // {
      //   score = {
      //     wins:0,
      //     losses:0,
      //     ties:0
      //   }
      // }       We used this code above as the default operator ||

      //  Making a function for the result .
      // Used a parameter playerMove here.
      // console.log(computerMove);
      function playGame(playerMove) {
        //  We called here function into a fucntion.
        const computerMove = pickComputerMove();

        let result = "";

        if (playerMove === "✌") {
          if (computerMove === "✊") {
            //  Now we create the result it makes when we select rock.
            result = "You lose!";
          } else if (computerMove === "✋") {
            result = "You win!";
          } else if (computerMove === "✌") {
            result = "It's a tie!";
          }
        } else if (playerMove === "✋") {
          if (computerMove === "✊") {
            result = "You win!";
          } else if (computerMove === "✋") {
            result = "It's a tie!";
          } else if (computerMove === "✌") {
            result = "You lose!";
          }
        } else if (playerMove === "✊") {
          if (computerMove === "✊") {
            result = "It's a tie!";
          } else if (computerMove === "✋") {
            result = "You lose! ";
          } else if (computerMove === "✌") {
            result = "You win!";
          }
        }

        //  We used here if and esle if statement to update the score in the popup.
        if (result === "You win!") {
          score.wins++;
        } else if (result === "You lose!") {
          score.losses++;
        } else if (result === "It's a tie!") {
          score.ties++;
        }
        //  We are updating the score on the page.
        updateScoreElement();
        //  Using the built in objects.

        localStorage.setItem("score", JSON.stringify(score));

        //  We are updating the result and moves on the page.

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(
          ".js-moves"
        ).innerHTML = `You  ${playerMove}.${computerMove} Computer`;
      }

      // Making the function for the updating score in the html element.

      function updateScoreElement() {
        //  We are updating the score on the page.
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      //  Made a function for the computerMove.
      function pickComputerMove() {
        //  Math.random select a random number between 1 and 0 .
        const randomNumber = Math.random();
        //  Then I created changeable variable and after that we approached it inside the conditions.
        let computerMove = "";
        //  Creating a fuction so that I can reuse in my code.
        //  0 to 1/3 its rock
        //  if its 1/3 to 2/3 this is Paper
        //  if its 2/3 to 1 its Scissors
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          // console.log('Rock');
          computerMove = "✊";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          // console.log('Paper');
          computerMove = "✋";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          // console.log('Scissors');
          computerMove = "✌";
        }
        return computerMove;
      }