(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('app', ['ngRoute', 'app.tetris'])
    .config(configure);

  configure.$inject = ['$locationProvider', '$routeProvider'];

  function configure($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo: '/tetris'
    });
  }
})();
