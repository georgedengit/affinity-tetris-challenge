(function() {
  'use strict';

  angular.module('app.tetris')
    .controller('TetrisController', TetrisController);

  TetrisController.$inject = ['gameService'];

  function TetrisController(gameService) {
    let vm = this;
    vm.title = "Tetris";

    function init() {
      // Start game
    }

    init();
  }
})();
