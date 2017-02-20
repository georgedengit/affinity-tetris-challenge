(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('app', [
    'ngRoute',
    'app.constants',
    'app.tetris'
  ])
    .config(configure)
    .constant('_', window._)
    .run(function($document, $rootScope) {
      $rootScope._ = window._;
      $document.bind('keypress', function(e) {
        $rootScope.$broadcast('keypress', e);
      });
    });

  configure.$inject = ['$locationProvider', '$routeProvider'];

  function configure($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo: '/tetris'
    });
  }
})();
