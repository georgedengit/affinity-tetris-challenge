(function() {
  'use strict';

  angular.module('app.service')
    .factory('pieceService', pieceService);

  pieceService.$inject = ['gridService'];

  const defaultPos = {
    x: 0,
    y: 0
  };

  function pieceService(grid) {
    let Piece = function() {
      grid.firstRow
    }

    Piece.prototype.putInCell = (cell) => {
      grid.cells.push(cell);
      return this;
    }

    return Piece;
  }
})();
