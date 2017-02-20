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
      newCell: newCell,
      getCell: getCell
    };

    function newGrid() {
      grid.cells = [];
      for (let y = 0; y < grid.rows; y++) {
        grid.cells[y] = [];
        for (let x = 0; x < grid.cols; x++) {
          grid.cells[y].push(grid.newCell([x, y]));
        }
      }
    }

    function newCell(arr) {
      return new Cell(arr);
    }

    function Cell(arr) {
      this.type = null;
      this.x = arr[0];
      this.y = arr[1];
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
