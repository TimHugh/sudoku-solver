var PuzzlePrinter = (function(){
  var rowToString, groupToString;

  rowToString = function(puzzle, row) {
    string = '|';
    for(var col = 0; col < puzzle.getWidth(); col++) {
      num = puzzle.getSpace(row, col);
      string += (num == 0 ? '.' : num);
      if((col + 1) % 3 == 0) {
        string += '|';
      }
    }
    return string + "\n";
  };

  return {
    boardToString: function(puzzle) {
      string = '+---+---+---+\n';
      for(var row = 0; row < puzzle.getHeight(); row++) {
        string += rowToString(puzzle, row);
        if((row+1) % 3 == 0) {
          string += '+---+---+---+\n';
        }
      }
      return string;
    }
  };
})();

module.exports = PuzzlePrinter;
