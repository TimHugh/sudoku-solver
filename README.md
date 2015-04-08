# Sudoku Solver

## Intro

Sudoku solver provides a UI to enter an unsolved Sudoku puzzle and outputs possible solutions to the screen. It is a work in progress.

## Current State

####`puzzle.js`

The Puzzle class holds the game's current state. Currently, it supports set and getting spaces.

####`puzzlePrinter.js`

The PuzzlePrinter object takes a puzzle (via the `boardToString` method) and returns an ASCII representation, suitable for output to a screen.
