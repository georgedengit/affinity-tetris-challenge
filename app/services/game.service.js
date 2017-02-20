(function() {
  'use strict';

  angular.module('app.service')
    .factory('gameService', gameService);

  gameService.$inject = ['gridService', 'pieceService'];

  function gameService(grid, Piece) {
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
      grid.newGrid();
      game.currentPiece = new Piece('O');
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
