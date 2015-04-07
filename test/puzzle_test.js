var expect = require('chai').expect
var Puzzle = require('../lib/puzzle.js');

var emptyPuzzleRows = "+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+";

describe('puzzle', function() {
  var puzzle;

  beforeEach(function() {
    puzzle = new Puzzle;
  });

  it('is created blank', function() {
    expect(puzzle.printBoard()).to.equal(emptyPuzzleRows);
  });
});
