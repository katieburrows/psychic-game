// get comparisons working
	alert("Hey now")
  	var letterOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  	document.onkeyup = function() {
  		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	  		console.log(userGuess);
	}

	var computerGuess = letterOptions[Math.floor(Math.random())*letterOptions.length]; {
		console.log(computerGuess);
	}

	if ((userGuess==computerGuess)) {
		ties ++
		alert("Ties: " + ties);
	}


	// var html = "<p>wins: " + wins + "</p>" +
	// 			"<p>losses: " + losses + "</p>" +
				// "<p> Guesses left: " + variable + "</p>" +
				// "<p> Your Guesses so far: " + variable + "</p>";

	document.querySelector("#game").innerHTML = html

		
		