var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");
var fs = require("fs");

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
      
        if (newWord.isComplete()) {
            console.log("\nWinner! Winner! You're going to " + newWord.wordChoice + "!\n");           
            startGame();

        } else if (newWord.trysLeft === 0) {
            console.log("\nThe country was " + newWord.wordChoice + " but you lost. Sorry, friend!\n");
            startGame();

        } else {
            console.log(" ");
            console.log("Guesses Left: " + newWord.trysLeft);
            console.log("Letters Guessed: " + newWord.guessed.join(", ") + "\n");
            
            userGuess();
        }
    });
};

startGame();
