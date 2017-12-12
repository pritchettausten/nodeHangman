var letter = require("./letter.js")
//MAIN WORD CONSTRUCTOR WHICH CONTAINS THE LETTERS ARRAY AND LETTERS GUESSED ARRAY AS WELL
var Word = function(wordChoice) {
    this.wordChoice = wordChoice;
    this.triesLeft = 10;
    this.letters = [];
    this.guessed = [];
//LOOPS THROUGH THE WORD PUSHING EACH LETTER TO THE ARRAY AFTER MAKING IT AN OBJECT WITH THE LETTER CONSTRUCTOR
    for (var i = 0; i < this.wordChoice.length; i++) {
        this.letters.push(new letter.Letter(this.wordChoice[i]));
    };
//CHECKS TO SEE IF ALL OF THE LETTERS HAVE BEEN GUESSED
    this.isComplete = function() {
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].show) {
                return false;
            }
        }
        return true;
    };
//PRINTS OUT THE UNDERSCORES FOR EACH LETTER SO THE USER CAN SEE THE LETTER SPACES
    this.print = function() {
        var wordPrint = "";
        for (var i = 0; i < this.letters.length; i++) {
            wordPrint += this.letters[i].printLetter();   
        }
        wordPrint += "\n";
        return wordPrint;
    };
}; 
//PROTOTYPE TO CHECK THE LETTER AGAINST THE LETTERS ARRAY, PUSH TO THE GUESSED ARRAY AND CHANGE GUESSES LEFT IF INCORRECT LETTER
Word.prototype.checkLetter = function(letter) {
    var letter = letter.toLowerCase();
    this.notValid = true;
    this.valid = false;

    if (this.guessed.indexOf(letter) != -1) {
        this.valid = true;

    } else {
        this.guessed.push(letter);
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].letter.toLowerCase() == letter) {
                this.notValid = false;
                this.letters[i].show = true;
            }
        };

        if (this.notValid) {
            this.triesLeft--;
        }
    }
};

module.exports = {
    Word
};
