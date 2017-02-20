(function() {
  'use strict';

  angular.module('app.service')
    .factory('gridService', gridService);

  gridService.$inject = ['gridConstants'];

  function gridService(gridConstants) {
    let grid = {
      // Grid data
      data: {},
      width: gridConstants.WIDTH,
      height: gridConstants.HEIGHT,

      // Grid controls
      newGrid: newGrid
    };

    function newGrid() {
      grid.data = {};
    }

    return grid;
  }
})();
