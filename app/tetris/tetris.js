(function() {
  'use strict';

  angular.module('app.tetris', ['ngRoute', 'app.service'])
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.when('/tetris', {
      'templateUrl': 'tetris/tetris.html',
      'controller': 'TetrisController',
      'controllerAs': 'vm'
    });
  };
})();
