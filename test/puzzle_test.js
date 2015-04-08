var expect = require('chai').expect
var Puzzle = require('../lib/puzzle.js');

describe('Puzzle', function() {
  var puzzle;

  var emptyPuzzle = [];
  for(var i = 0; i < 81; i++) { emptyPuzzle[i] = 0; }

  var puzzleWithNumbers = [];
  for(var i = 0; i < 81; i++) { puzzleWithNumbers[i] = 0; }
  puzzleWithNumbers[22] = 2;
  puzzleWithNumbers[69] = 3;

  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('is created blank', function() {
    for(var row = 0; row < puzzle.getHeight(); row++) {
      for(var col = 0; col < puzzle.getWidth(); col++) {
        expect(puzzle.getSpace(row, col)).to.equal(0);
      }
    }
    expect(JSON.stringify(puzzle.toArray())).to.equal(JSON.stringify(emptyPuzzle));
  });

  it('correctly saves and gets numbers', function() {
    puzzle.setSpace(2, 4, 2);
    puzzle.setSpace(7, 6, 3);

    expect(JSON.stringify(puzzle.toArray())).to.equal(JSON.stringify(puzzleWithNumbers));

    expect(puzzle.getSpace(2, 4)).to.equal(2);
    expect(puzzle.getSpace(7, 6)).to.equal(3);
  });

  it('correctly reports height, width, and size', function() {
    expect(puzzle.getHeight()).to.equal(9);
    expect(puzzle.getWidth()).to.equal(9);
    expect(puzzle.getSize()).to.equal(81);
  });
});
