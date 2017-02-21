(function() {
  'use strict';

  angular.module('app.service')
    .factory('gameService', gameService);

  gameService.$inject = ['gridService', 'pieceService', 'pieceConstants'];

  function gameService(grid, Piece, pieceConstants) {
    const pieces = _.keys(pieceConstants);
    let game = {
            // Game state variables
      currentPiece: null,
      isPaused: false,

      // Game controls
      newGame: newGame,
      newPiece: newPiece,
      pauseGame: pauseGame,
      keypress: keypress,
      checkNextMove: checkNextMove
    };

    function newGame() {
      grid.newGrid();
      game.newPiece();
    }

    function newPiece() {
      const randPieceType = pieces[Math.floor(Math.random()*pieces.length)];
      const isGameOver = _.find(pieceConstants[randPieceType].coords, function(coord) {
        const cell = grid.getCell(coord[0], coord[1]);
        return cell.type !== null;
      });
      if (isGameOver) {
        game.newGame();
      } else {
        game.currentPiece = new Piece(randPieceType);
      }
    }

    function pauseGame() {
      game.isPaused = !game.isPaused;
    }

    function checkNextMove() {
      if (!game.isPaused) {
        if (!game.currentPiece.moveDown()) {
          grid.clearCompleted();
          game.newPiece();
        }
      }
    }

    function keypress($event) {
      const currentPiece = game.currentPiece;
      if (!currentPiece) {
        return;
      }
      switch ($event.keyCode) {
        case 37: // Left
          if (!game.isPaused) {
            currentPiece.moveLeft()
          };
          break;
        case 38: // Up
          if (!game.isPaused) {
            currentPiece.rotatePiece();
          }
          break;
        case 39: // Right
          if (!game.isPaused) {
            currentPiece.moveRight();
          }
          break;
        case 40: // Down
          if (!game.isPaused) {
            currentPiece.moveDown();
          }
          break;
        case 80: // P
          game.pauseGame();
          break;
        default:
          return;
      }
    }

    return game;
  }
})();
