(function() {
  'use strict';

  angular.module('app.service')
    .factory('gridService', gridService);

  gridService.$inject = ['gridConstants'];

  function gridService(gridConstants) {
    let grid = {
      // Grid data
      cells: [],
      cols: gridConstants.COLS,
      rows: gridConstants.ROWS,

      // Grid controls
      newGrid: newGrid,
      getCell: getCell
    };

    function newGrid() {
      grid.cells = [];
    }

    function getCell(x, y) {
      if (!grid.cells[y] || !grid.cells[y][x]) {
        return false;
      }
      return grid.cells[y][x];
    }

    return grid;
  }
})();
