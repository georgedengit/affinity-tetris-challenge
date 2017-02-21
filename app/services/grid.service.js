(function() {
  'use strict';

  angular.module('app.service')
    .factory('gridService', gridService);

  gridService.$inject = ['gridConstants', 'pieceConstants'];

  function gridService(gridConstants, pieceConstants) {
    let grid = {
      // Grid data
      cells: [],
      cols: gridConstants.COLS,
      rows: gridConstants.ROWS,

      // Grid controls
      newGrid: newGrid,
      newCell: newCell,
      getCell: getCell,
      clearCompleted: clearCompleted
    };

    function newGrid() {
      grid.cells = generateCells(grid.rows, grid.cols);
    }

    function clearCompleted() {
      const completed = _.remove(grid.cells, function(row) {
        return _.every(row, function(cell) {
          return cell.type !== null;
        });
      });
      const newCells = generateCells(completed.length, grid.cols);
      if (newCells.length > 0) {
        grid.cells = newCells.concat(grid.cells);
        remapCells(grid.cells);
      }
    }

    function remapCells(rows) {
      _.each(rows, function(row, ri) {
        _.each(row, function(cell, ci) {
          cell.x = ci;
          cell.y = ri;
        });
      });
    }

    function generateCells(rows, cols) {
      let newCells = [];
      for (let y = 0; y < rows; y++) {
        newCells[y] = [];
        for (let x = 0; x < cols; x++) {
          newCells[y].push(grid.newCell([x, y]));
        }
      }
      return newCells;
    }

    function newCell(arr) {
      return new Cell(arr);
    }

    function Cell(arr) {
      this.type = null;
      this.color = 'transparent';
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
