(function() {
  'use strict';

  angular.module('app.service')
    .factory('pieceService', pieceService);

  pieceService.$inject = ['gridService', 'pieceConstants'];

  function pieceService(grid, pieceConstants) {
    let Piece = function(type) {
      this.type = type;
      this.coords = [];
    }

    Piece.prototype.putInCell = (cell) => {
      grid.cells.push(cell);
      return this;
    }

    return Piece;
  }
})();
