var userAnswer = true;
var numberToGuess = 0;
const MAX_GUESSES = 3; //constant variable cannot be reassigned!
var guess = 0;

var isWinner = function(userGuess){

	if( userGuess < numberToGuess ){
		alert("Too low...") ;
		return false;
	}
	else if( userGuess > numberToGuess ){
 		alert("Too high...") ;
		return false;
	}
	else{
		alert("Winner!!!");
		return true;
	}
}

var playGuessNumber = function(){
	var guessesSoFar = 0;
	var  win = false;

	while(guessesSoFar < MAX_GUESSES && !win){

		guess = parseInt(prompt("What's your guess?"));
		win = isWinner(guess);
		guessesSoFar++;

	};

	if(!win){
		alert("Out of guesses...  You didn't guess the number :( ");
	}
}

//program starts here and calls above functions
guess = alert("Let's play the 'Guess The Number' game.\nI'm thinking of a number between 1-10.\nYou have three guesses to get it right.");

do{
	numberToGuess = Math.ceil(Math.random()*9);	
	console.log("Number to guess: " + numberToGuess);
	playGuessNumber();


	userAnswer = confirm("Do you want to play again?");

}while(userAnswer !== false)
