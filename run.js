var word = require("./word.js");
var letter = require("./letter.js");
var inquirer = require("inquirer");

var wordBank = ["united states of america", "mexico", "canada", "brazil", "argentina", "puerto rico", "cuba", "chile", "antarctica", "england", "scotland", "ireland", "france", "germany", "japan", "russia", "egypt", "india", "united arab emirates", "south africa", "uganda"]
var selectedWord = "";

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
            var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
            newWord = new word.Word(selectedWord);
            userGuess();
        }else{
            console.log(" ");
            console.log("Hope you come back again!");
            console.log(" ");
        }
    });
};

function userGuess() { 
    console.log(newWord.print());
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: "Guess a letter to play",
    }]).then(function(user) { 
        var letter = user.letter;
        newWord.checkLetter(letter);
        
        if (newWord.isComplete()) {
            console.log(" ");
            console.log("Winner! Winner! You're going to " + newWord.wordChoice + "!");           
            console.log(" ");
            startGame();
        } else if (newWord.trysLeft === 0) {
            console.log("The answer was " + "*" + newWord.wordChoice + "* but you lost. Sorry, friend!");
            startGame();
        } else {
            console.log(" ");
            console.log("Guesses Left: " + newWord.trysLeft);
            console.log("Letters Guessed: " + newWord.guessed.join(", "));
            
            userGuess();
        }
    });
}
startGame();
