var expect = require('chai').expect
var Puzzle = require('../lib/puzzle.js');

describe('Puzzle', function() {
  var puzzle;

  beforeEach(function() {
    puzzle = new Puzzle;
  });

  it('is created blank', function() {
    for(space in puzzle.toArray) {
      expect(space).to.equal(0);
    }
  });

  it('correctly displays numbers', function() {
    puzzle.setSpace(2, 4, 2);
    puzzle.setSpace(7, 6, 3);

    expect(puzzle.getSpace(2, 4)).to.equal(2);
    expect(puzzle.getSpace(7, 6)).to.equal(3);
  });

  it('correctly reports height, width, and size', function() {
    expect(puzzle.getHeight()).to.equal(9);
    expect(puzzle.getWidth()).to.equal(9);
    expect(puzzle.getSize()).to.equal(81);
  });
});
