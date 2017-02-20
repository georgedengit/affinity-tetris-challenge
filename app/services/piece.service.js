(function() {
  'use strict';

  angular.module('app.service')
    .factory('pieceService', pieceService);

  pieceService.$inject = ['gridService', 'pieceConstants'];

  function pieceService(grid, pieceConstants) {
    let Piece = function(type) {
      let self = this;
      self.type = type;
      self.coords = [];
      _.each(pieceConstants[type].coords, function(x ,y) {
        let cell = grid.getCell(x, y);
        console.log(cell);
        self.coords.push(cell);
      });
    }

    Piece.prototype.putInCell = (cell) => {
      console.log(cell);
      grid.cells.push(cell);
      return this;
    }

    return Piece;
  }
})();
