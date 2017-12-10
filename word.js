var letter = require("./letter.js")

var Word = function(wordChoice) {
    this.trysLeft = 8;
    this.wordChoice = wordChoice;
    this.letters = [];
    this.guessed = [];
    for (var i = 0; i < this.wordChoice.length; i++) {
        this.letters.push(new letter.Letter(this.wordChoice[i]));
    }
    this.isComplete = function() {
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].show) {
                return false;
            }
        }
        return true;
    };
    this.print = function() {
        var wordPrint = "";
        for (var i = 0; i < this.letters.length; i++) {
            wordPrint += this.letters[i].printLetter();
        }
        return wordPrint;
    };
}; 

Word.prototype.checkLetter = function(letter) {
    this.notValid = true;
    this.valid = false;
    var letter = letter.toLowerCase();
    if (this.guessed.indexOf(letter) != -1) {
        this.valid = true;
    } else {
        this.guessed.push(letter);
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].letter.toLowerCase() == letter) {
                this.notValid = false;
                this.letters[i].show = true;
            }
        }
        if (this.notValid) {
            this.trysLeft--;
        }
    }
};





module.exports = {
    Word
};