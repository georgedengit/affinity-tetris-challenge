(function() {
  'use strict';

  angular.module('app.service')
    .factory('pieceService', pieceService);

  pieceService.$inject = ['gridService', 'pieceConstants'];

  function pieceService(grid, pieceConstants) {
    let Piece = function(type) {
      let self = this;
      self.type = type;
      self.cells = [];
      self.coords = [];
      _.each(pieceConstants[type].coords, function(coordArr) {
        let cell = grid.getCell(coordArr[0], coordArr[1]);
        cell.type = self.type;
        console.log(cell);
        self.coords.push(cell);
      });
      self.renderCells();
    }

    Piece.prototype.renderCells = function() {
      var self = this;
      _.each(self.coords, function(coord) {
        self.putInCell(grid.getCell(coord.x, coord.y))
      });
      return this;
    }

    Piece.prototype.putInCell = function(cell) {
      this.cells.push(cell);
      return this;
    }

    return Piece;
  }
})();
