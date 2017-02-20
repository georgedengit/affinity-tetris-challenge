(function() {
  'use strict';

  angular.module('app.tetris')
    .controller('TetrisController', TetrisController);

  TetrisController.$inject = ['$document', '$interval', 'gameService', 'gridService', 'pieceConstants'];

  function TetrisController($document, $interval, game, grid, pieceConstants) {
    let vm = this;
    vm.title = "Tetris";
    vm.grid = grid;

    $document.on('keydown', game.keypress);

    $interval(function() {
      if (!game.isPaused) {
        if (!game.currentPiece.moveDown()) {
          game.newPiece();
        }
      }
    }, 250);

    function init() {
      // Start game
      game.newGame();
    }

    init();
  }
})();
