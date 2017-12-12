//FILES AND NPM PACKAGES REQUIRED BY THE JAVASCRIPT
var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");
var fs = require("fs");

//STARTS WHEN THE JS IS RUN AND WHEN THE USER HAS FINISHED THE GAME
function startGame(){
    
    inquirer.prompt(
        {
            name: "welcome", 
            type: "list",
            message: "Welcome to Command Line Hangman",
            choices: ["Start New Game", "Quit Application"]
        }
    ).then(function(answer){
        
        if(answer.welcome === "Start New Game"){
//SELECTS A RANDOM COUNTRY FROM THE TXT FILE AND MAKES PASSES IT INTO THE WORD CONSTRUCTOR           
            fs.readFile("countries.txt", "utf8", function(err, data){
                if(err) throw err;
                var lines = data.split('\n');
                var selectedWord = lines[Math.floor(Math.random()*lines.length)];
                newWord = new word.Word(selectedWord);
                
                userGuess();
            })

        }else{
            console.log("\nHope you come back again!\n");
        }
    });
};

//FUNCTION THAT TAKES IN THE USERS LETTER GUESS AND PASSES IT TO THE CHECK LETTER FUNCTION
function userGuess() { 
    
    console.log(newWord.print());
    
    inquirer.prompt([
        {
            name: 'letter',
            type: 'text',
            message: "Guess a letter to try and guess the country",
        }
    ]).then(function(user) { 
       
        var letter = user.letter;
        newWord.checkLetter(letter);
//IF ALL THE LETTERS HAVE BEEN GUESSED, USER WINS
        if (newWord.isComplete()) {
            console.log("\nWinner! Winner! You're going to " + newWord.wordChoice + "!\n");           
            startGame();
//IF THE GUESSES LEFT GETS TO 0, THE USER LOSES
        } else if (newWord.triesLeft === 0) {
            console.log("\nThe country was " + newWord.wordChoice + " but you lost. Sorry, friend!\n");
            startGame();
//IF NEITHER, IT WILL CONTINUE TO LET YOU GUESS THE LETTER UNTIL YOU ARE OUT OF TRIES OR WIN
        } else {
            console.log(" ");
            console.log("Guesses Left: " + newWord.triesLeft);
            console.log("Letters Guessed: " + newWord.guessed.join(", ") + "\n");
            
            userGuess();
        }
    });
};

startGame();
