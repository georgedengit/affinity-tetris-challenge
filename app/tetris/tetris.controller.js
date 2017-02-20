(function() {
  'use strict';

  angular.module('app.tetris')
    .controller('TetrisController', TetrisController);

  TetrisController.$inject = ['gameService', 'gridService'];

  function TetrisController(game, grid) {
    let vm = this;
    vm.title = "Tetris";
    vm.grid = grid;

    function init() {
      // Start game
      game.newGame();
      console.log(vm.grid.cells);
    }

    init();
  }
})();
