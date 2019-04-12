// program data:
var number =  Math.floor((Math.random() * 10) + 1);
var guess;
var limit = 5;
// if correct: let the user know they won
for (i = 1; i <= limit; i++){
    // prompt user for their guess 
    guess = window.prompt("Guess a number: ");
    if (guess == number){
        document.write("Correct! You won.");
        break;
    }
    // if incorrect: let the user know
    else if (guess != number){
        alert("incorrect \n remaining guesses: " + (limit - i));
    }
}