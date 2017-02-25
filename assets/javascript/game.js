
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
 'u', 'v', 'w', 'x', 'y', 'z']; 
var wins = 0;
var losses = 0;

// guessedLetters = [];
var secretLetter = "";
var guessesLeft = 10;
var randomLetter = Math.floor(Math.random() * 10);
var guessesLeft = document.getElementById("guessesleft");
var keyPressed;

document.onkeyup = function GetChar (event){
           var keyCode = ('which' in event) ? event.which : event.keyCode;
           if (event.keyCode >= 65 && event.keyCode <= 90) {
           keyPressed = String.fromCharCode(keyCode);}

	
		secretLetter = letters[randomLetter];
		if (keyPressed === secretLetter) {
			console.log("You win!");
			wins++ ; 
		}
			else {
				console.log("Guess again!");
				losses++ ;
				var guessedLetters = document.getElementById("userguesses");
				guessedLetters.innerHTML = guessedLetters.innerHTML + (keyPressed);
				
			}
		
    };

	
	// function userGuessedIt() {
	// 	var userGuess = String.fromCharCode(e.keyCode);
	// 	userGuess = userGuess.toLowerCase();
	// 	if (userGuess === secretLetter) {
	// 		wins ++;
	// 		gameOver = true;
	// 		else {
	// 			guessesLeft --;
	// 			guessedLetters.push(userGuess);
	// 			gameOver = false;
	// 		}
	// 	}7
// }

// // document.getElementById("userinput").addEventListener("keypress", startGame);


// }
