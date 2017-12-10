// var inquirer = require("inquirer");
// var wordConstructor = require("./word.js")
// var word = require("./word.js");
// var letter = require("./letter.js");


// var wordBank = ["united states of america", "mexico", "canada", "brazil", "argentina", "puerto rico", "cuba", "chile", "antarctica", "england", "scotland", "ireland", "france", "germany", "japan", "russia", "egypt", "india"]

// function startGame(){
//     inquirer.prompt(
//         {
//             name: "welcome",
//             type: "list",
//             message: "Welcome to Command Line Hangman",
//             choices: ["Start New Game", "Quit Application"]
//         }
//     ).then(function(answer){
        
//         }
//     );
// };

// function selectWord(){
//     var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)]
//     module.exports.selectedWord = selectedWord;
// }

// function userGuess(){
//     var selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)]
//     wordToGuess = new word.Word(selectedWord)
//     console.log(wordToGuess.print());
//     inquirer.prompt(
//         {
//             name: "letter",
//             type: "input",
//             message: "Please guess a letter (only 1)",

//         }
//     ).then(function(answer){
//         var letter = answer.letter;
//         wordToGuess.checkLetter(letter);
//     })
// }

// startGame();