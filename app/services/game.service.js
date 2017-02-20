(function() {
  'use strict';

  angular.module('app.service')
    .factory('gameService', gameService);

  gameService.$inject = ['gridService', 'pieceService'];

  function gameService(grid, Piece) {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    let game = {
            // Game state variables
      currentPiece: null,

      // Game controls
      newGame: newGame,
      newPiece: newPiece,
      pauseGame: pauseGame,
      keypress: keypress
    };

    function newGame() {
      grid.newGrid();
      game.newPiece();
    }

    function newPiece() {
      game.currentPiece = new Piece(pieces[Math.floor(Math.random()*pieces.length)]);
    }

    function pauseGame() {

    }

    function keypress($event) {
      const currentPiece = game.currentPiece;
      if (!currentPiece) {
        return;
      }
      switch ($event.keyCode) {
        case 37: // Left
          return currentPiece.moveLeft();
        case 38: // Up
          return currentPiece.rotatePiece();
        case 39: // Right
          return currentPiece.moveRight();
        case 40: // Down
          return currentPiece.moveDown();
        case 80: // P
          return self.pauseGame();
        default:
          return;
      }
    }

    return game;
  }
})();
