(function() {
  'use strict';

  angular.module('app.service')
    .factory('gameService', gameService);

  gameService.$inject = ['gridService', 'tetriminoService'];

  function gameService(grid, tetrimino) {
    let game = {
      // Game state variables
      currentPiece: null,

      // Game controls
      newGame: newGame,
      pauseGame: pauseGame,
      resetGame: resetGame,

      // Piece controls
      movePiece: movePiece,
      rotatePiece: rotatePiece,
      dropPiece: dropPiece
    };

    function newGame() {
      game.resetGame();
      grid.newGrid();
    }

    function pauseGame() {

    }

    function resetGame() {
      game.currentPiece
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
