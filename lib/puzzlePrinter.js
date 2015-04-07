var PuzzlePrinter = (function(){
  var puzzle;
  var cur_array;

  var setPuzzle = function(puzzle) {
    this.puzzle = puzzle;
  }
  var updateArray = function() {
    this.cur_array = this.puzzle.toArray();
  }

  var rowToString = function(row) {
    string = '|';
    for(var group = 0; group < 3; group++) {
      string += groupToString(group * 3, (group * 3) + 3);
      string += '|';
    }
    return string + "\n";
  };
  var groupToString = function(start, stop) {
    return this.cur_array.slice(start,stop).join('').replace(/0/g,'.');
  };

  return function(puzzle){
    setPuzzle(puzzle);

    this.boardToString = function() {
      updateArray();

      string = '+---+---+---+\n';
      for(var row = 0; row < puzzle.getHeight(); row++) {
        string += rowToString(row);
        if((row+1) % 3 == 0)
          string += '+---+---+---+\n';
      }
      return string;
    };
  };
})();

module.exports = PuzzlePrinter;
