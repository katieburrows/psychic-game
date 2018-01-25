//GLOBAL VARIABLES

  	var letterOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  	var computerGuess; //set to nothing originally.
  	var wins = 0;
  	var losses = 0;
  	var guessesLeft;
  	var wrongGuesses;



//FUNCTIONS

	//reset game:  reset computer guess, set guessesLeft back to 10, clear out wrongGuesses.

	function resetGame () {
		computerGuess = letterOptions [Math.floor(Math.random() * 26)];
		console.log("Compy guess: " + computerGuess);
		guessesLeft = 10;
		wrongGuesses = [];
		updateHTML();
	};

	function updateHTML() {
		var html = 
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Guesses so far: " + wrongGuesses.join(", ")+ "</p>";
		document.getElementById("stats").innerHTML = html; //"stats" is a div in the HTML.
	}



//MAIN PROCESS
resetGame(); //calling resetGame here to kick off the game on the page load
  	document.onkeyup = function(event) {
  		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	  		console.log("User guess: " + userGuess);

	  		if (userGuess === computerGuess) {
	  			alert("You win!");
	  			wins++;
	  			resetGame();
	  		} else {
	  			guessesLeft--;
	  			wrongGuesses.push(userGuess);
	  			updateHTML();
	  			if (guessesLeft === 0) {
	  				alert("it's okay, try again, you completely lost but mom loves you...probs");
	  				losses++;
	  				resetGame();
	  			}
	  		}
	}


		
		