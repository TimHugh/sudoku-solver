var Puzzle = (function(){
  var spaces, width, height, newBoard, indexToSpace, spaceToIndex, validSpace;

  width = 9;
  height = 9;
  spaces = [];

  newBoard = function() {
    for(var i = 0; i < (width * height); i++) { spaces[i] = 0; }
  }

  indexToSpace = function(index) {
    var row = Math.floor(index / width);
    var col = index % width;
    return [row, col];
  }
  spaceToIndex = function(row, col) {
    return row * width + col;
  }
  validSpace = function(row, col) {
    if(row < 0 || row >= width || col < 0 || col >= height)
      return false;
    else
      return true;
  }

  return function(){
    newBoard();

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
      return spaces;
    };

    // basic getters
    this.getHeight = function() {
      return height;
    };
    this.getWidth = function() {
      return width;
    };
    this.getSize = function() {
      return height * width;
    };
  };
})();

module.exports = Puzzle;
