// program data:
var number =  Math.floor((Math.random() * 100) + 1);
var guess;
var limit = 5;
var won = false;
var guesses = [];
// if correct: let the user know they won
for (i = 1; i <= limit; i++){
    // prompt user for their guess 
    do{
        guess = parseInt(prompt("Guess a number between 1 and 100"));
    } while(isNaN(guess) || isPreviousGuess(guess));
    if (guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: let the user know
    else {
        guesses[i] = guess;
        if (guess < number){
            alert("incorrect your guessed lower. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
        }
        else {
            alert("incorrect your guessed higher. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
        }
    }
}
if (!won){
    document.write("Sorry, you ran out of tries. Game over. <br> The correct number was: " + number);
}
function isPreviousGuess(){
    for (i = 0; i < guesses.length; i++){
        if (guesses[i] == guess){
            return true;
        }
    }
    return false;
}