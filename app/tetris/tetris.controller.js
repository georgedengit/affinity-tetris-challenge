(function() {
  'use strict';

  angular.module('app.tetris')
    .controller('TetrisController', TetrisController);

  TetrisController.$inject = ['gameService', 'keyboardService'];

  function TetrisController(gameService, keyboardService) {
    let vm = this;
    vm.title = "Tetris";

    function init() {
      // Start game
    }

    init();
  }
})();
