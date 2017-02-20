(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('app', ['ngRoute', 'app.tetris'])
    .config(configure)
    .constant('_', window._)
    .run(($rootScope) => {
      $rootScope._ = window._;
    });

  configure.$inject = ['$locationProvider', '$routeProvider'];

  function configure($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo: '/tetris'
    });
  }
})();
