(function() {
  'use strict';

  angular.module('app.tetris')
    .controller('TetrisController', TetrisController);

  TetrisController.$inject = ['$document', 'gameService', 'gridService', 'pieceConstants'];

  function TetrisController($scope, game, grid, pieceConstants) {
    let vm = this;
    vm.title = "Tetris";
    vm.grid = grid;

    $scope.on('keydown', game.keypress);

    function init() {
      // Start game
      game.newGame();
    }

    init();
  }
})();
