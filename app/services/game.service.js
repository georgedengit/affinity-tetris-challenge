(function() {
  'use strict';

  angular.module('app.service')
    .factory('gameService', gameService);

  gameService.$inject = ['$interval', 'gridService', 'pieceService'];

  function gameService($interval, grid, Piece) {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    let game = {
            // Game state variables
      currentPiece: null,
      isPaused: false,

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
      game.isPaused = !game.isPaused;
    }

    function keypress($event) {
      const currentPiece = game.currentPiece;
      if (!currentPiece) {
        return;
      }
      switch ($event.keyCode) {
        case 37: // Left
          currentPiece.moveLeft();
          break;
        case 38: // Up
          currentPiece.rotatePiece();
          break;
        case 39: // Right
          currentPiece.moveRight();
          break;
        case 40: // Down
          currentPiece.moveDown();
          break;
        case 80: // P
          self.pauseGame();
          break;
        default:
          return;
      }
    }

    return game;
  }
})();
