var letterOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computerGuess; 
var wins = 0;
var losses = 0;
var guessesLeft;
var wrongGuesses;

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
	document.getElementById("stats").innerHTML = html; 
}

resetGame(); 
  	document.onkeyup = function(event) {
  		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	  		console.log("User guess: " + userGuess);

	  		if (userGuess === computerGuess) {
	  			alert("You win! The computer's guess: " + computerGuess + ". You guessed: " + userGuess + ".");
	  			wins++;
	  			resetGame();
	  		} else {
	  			guessesLeft--;
	  			wrongGuesses.push(userGuess);
	  			updateHTML();
	  			if (guessesLeft === 0) {
	  				alert("Good try but your guess was incorrect. The computer guessed: " + computerGuess + ".");
	  				losses++;
	  				resetGame();
	  			}
	  		}
	}


		
		