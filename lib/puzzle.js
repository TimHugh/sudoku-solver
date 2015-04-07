var Puzzle = (function(){
  var width = 9;
  var height = 9;

  var newBoard = function() {
    new_board = [];
    for(var i = 0; i < (width * height); i++) { new_board[i] = 0; }
    return new_board;
  }
  var spaces = newBoard();

  var indexToSpace = function(index) {
    row = Math.floor(index / width);
    col = index % width;
    return [row, col];
  }
  var spaceToIndex = function(row, col) {
    return row * width + col;
  }
  var validSpace = function(row, col) {
    if(row < 0 || row >= width || col < 0 || col >= height)
      return false;
    else
      return true;
  }

  return function(){
    this.setSpace = function(row, col, number) {
      if(validSpace(row, col))
        spaces[spaceToIndex(row, col)] = number;
      // TODO else, raise error?
    };

    this.getSpace = function(row, col) {
      if(!validSpace(row, col))
        return null;
      return spaces[spaceToIndex(row, col)];
    };

    this.toArray = function() {
      return this.spaces;
    };
  };
})();

module.exports = Puzzle;
