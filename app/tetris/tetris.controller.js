(function() {
  'use strict';

  angular.module('app.tetris')
    .controller('TetrisController', TetrisController);

  TetrisController.$inject = ['gameService', 'gridService', 'pieceConstants'];

  function TetrisController(game, grid, pieceConstants) {
    let vm = this;
    vm.title = "Tetris";
    vm.grid = grid;
    vm.pieceConstants = pieceConstants;

    function init() {
      // Start game
      game.newGame();
    }

    init();
  }
})();
