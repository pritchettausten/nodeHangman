function Letter(letter) {
    this.letter = letter;
    if (this.letter == " ") {
        this.show = true;
    } else {
        this.show = false;
    }
//IF THE LETTER IS TRUE IT WILL SHOW, ELSE IT WILL CONTINUE TO SHOW AN UNDERSCORE
    this.printLetter = function() {
        if (this.show) {
            return this.letter;
        } else {
            return "_ "; 
        }
    };
}
module.exports = {
    Letter
}