
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
 'u', 'v', 'w', 'x', 'y', 'z']; 
// guessedLetters = [];
var secretLetter = "";
var randomLetter = Math.floor(Math.random() * 26);
var guessesLeft = document.getElementById("guessesleft");
var keyPressed;
var howManyGuesses = 10;
var userLost = 1;

function gameOver() {
	location.reload(true);
}

document.onkeyup = function GetChar (event){
           var keyCode = ('which' in event) ? event.which : event.keyCode;
           if (event.keyCode >= 65 && event.keyCode <= 90) {
           keyPressed = String.fromCharCode(keyCode);}

	
		secretLetter = letters[randomLetter];
		
		if (keyPressed === secretLetter) {
			console.log("You win!");
			var wins = document.getElementById("userwins");
			theUserWins = 0;
			wins.innerHTML = theUserWins++;
		}
			else {
				console.log("Guess again!");
				var guessedLetters = document.getElementById("userguesses");
				guessedLetters.innerHTML = guessedLetters.innerHTML + (keyPressed + " ");
				var guessesLeft = document.getElementById("guessesleft");
				guessesLeft.innerHTML = howManyGuesses--;
				if (howManyGuesses < 0) {
					alert("Sorry, Game Over!");
					var losses = document.getElementById("userlosses");
					losses.innerHTML  = userLost++;
					// gameOver();
				}

			}
    };
