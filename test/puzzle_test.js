var expect = require('chai').expect
var Puzzle = require('../lib/puzzle.js');

var emptyPuzzleRows = "+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n";
var puzzleWithNumbers = "+---+---+---+\n|...|...|...|\n|...|2..|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|..3|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n";

describe('puzzle', function() {
  var puzzle;

  beforeEach(function() {
    puzzle = new Puzzle;
  });

  it('is created blank', function() {
    expect(puzzle.printBoard()).to.equal(emptyPuzzleRows);
  });

  it('correctly displays numbers', function() {
    puzzle.setNumber(2, 4, 2);
    puzzle.setNumber(7, 6, 3);

    expect(puzzle.printBoard()).to.equal(puzzleWithNumbers);
  });
});
