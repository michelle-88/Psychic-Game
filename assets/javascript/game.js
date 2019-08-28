// if guess left = 0 then losses score goes up and guess left/already guess reset and display up top changes



// Create variables to store values(wins, losses, user guess, computer guess, computer choices)
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess;
var computerGuess;
var displayText = "";

// Create function to display results to the page/DOM
function updateDisplay(){
    document.querySelector("#displayText").innerHTML = displayText;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#guessSoFar").innerHTML = guessSoFar;
};


// Create a function to generate a random letter choice for computer guess
function computerRandomLetter(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// Create function to reset all scores (guesses left, already guessed) when guesses left reaches 0
function resetScores(){
    guessLeft = 9;
    guessSoFar = [];
};

computerRandomLetter();
console.log(computerGuess);

updateDisplay();

// Create onkeyup event function to grab userGuess
document.onkeyup = function(event){
     
    userGuess = event.key.toLowerCase();
    
    console.log(userGuess);

// Write conditional to determine if userGuess matches computerGuess. 
    if(userGuess === computerGuess){
        wins++;
        updateDisplay();
        computerRandomLetter();

    }
    
   
// if computerguess = userguess, change display text, wins++, generate new letter, 

    


    updateDisplay();
};