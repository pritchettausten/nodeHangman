function Letter(letter) {
    this.letter = letter;
    if (this.letter == ' ') {
        this.show = true;
    } else {
        this.show = false;
    }
    this.printLetter = function() {
        if (this.show) {
            return this.letter;
        } else {
            return ' _ ';
        }
    };
}
module.exports = {
    Letter
}