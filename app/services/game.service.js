(function() {
  'use strict';

  angular.module('app.service')
    .factory('gameService', gameService);

  gameService.$inject = ['gridService', 'pieceService'];

  function gameService(grid, piece) {
    let game = {
      // Game state variables
      currentPiece: null,

      // Game controls
      newGame: newGame,
      pauseGame: pauseGame,

      // Piece controls
      movePiece: movePiece,
      rotatePiece: rotatePiece,
      dropPiece: dropPiece
    };

    function newGame() {
      game.currentPiece = null;
      grid.newGrid();
    }

    function pauseGame() {

    }

    function movePiece() {

    }

    function rotatePiece() {

    }

    function dropPiece() {

    }

    return game;
  }
})();
