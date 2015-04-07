var Puzzle = (function(){
  // create a new blank board
  var newBoard = function(){
    var newSquares = [];
    for(var row = 0; row < 9; row++) {
      newSquares[row] = [];
      for(var col = 0; col < 9; col++) {
        newSquares[row][col] = '.';
      }
    }
    return newSquares;
  };
  // return one column of one row as a string
  var groupString = function(row, groupCol){
    group = squares[row].slice(groupCol * 3, (groupCol * 3) + 3);
    return group.join('');
  };
  var rowString = function(row){
    string = "|";
    for(var group = 0; group < 3; group++) {
      string += groupString(row, group);
      string += "|";
    }
    return string;
  }

  var squares = newBoard();

  return function(){
    // print the current board to the screen
    this.printBoard = function() {
      var boardString = "+---+---+---+\n";
      for(var row = 0; row <= 8; row++) {
        boardString += rowString(row) + "\n";
        if((row + 1) % 3 == 0)
          boardString += "+---+---+---+\n";
      }
      return boardString;
    };

    this.setNumber = function(row, col, value) {
      squares[row - 1][col - 1] = value;
    };
  };
})();

module.exports = Puzzle;
