(function() {
  'use strict';

  angular.module('app.service')
    .factory('keyboardService', keyboardService)

  function keyboardService() {
    let keyboard = {};

    return keyboard;
  }
})();
