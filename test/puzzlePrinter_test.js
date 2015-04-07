var expect = require('chai').expect;
var Puzzle = require('../lib/puzzle.js');
var PuzzlePrinter = require('../lib/puzzlePrinter.js');

var emptyPuzzle       = "+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n";
var puzzleWithNumbers = "+---+---+---+\n|...|...|...|\n|...|2..|...|\n|...|...|...|\n+---+---+---+\n|...|...|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n|...|..3|...|\n|...|...|...|\n|...|...|...|\n+---+---+---+\n";

describe('Puzzle Printer', function() {
  var puzzle;
  var printer;

  beforeEach(function() {
    puzzle = new Puzzle;
    printer = new PuzzlePrinter(puzzle);
  });

  it('correctly prints an empty puzzle', function() {
    expect(printer.boardToString()).to.equal(emptyPuzzle);
  });

  it('correctly prints a puzzle with numbers', function() {
    puzzle.setSpace(2, 4, 2);
    puzzle.setSpace(7, 6, 3);

    expect(printer.boardToString()).to.equal(puzzleWithNumbers);
  });
});
