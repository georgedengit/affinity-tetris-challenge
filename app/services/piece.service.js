(function() {
  'use strict';

  angular.module('app.service')
    .factory('pieceService', pieceService);

  pieceService.$inject = ['gridService', 'pieceConstants'];

  function pieceService(grid, pieceConstants) {
    // Create piece and render it within the grid
    // Stores cells held by piece and the coordinates
    let Piece = function(type) {
      let self = this;
      self.type = type;
      self.cells = [];
      self.coords = [];
      _.each(pieceConstants[type].coords, function(coordArr) {
        let cell = grid.getCell(coordArr[0], coordArr[1]);
        self.coords.push(cell);
      });
      self.renderCells();
    };

    // Render the cells in the grid held by the piece based on coordinates
    Piece.prototype.renderCells = function() {
      var self = this;
      _.each(self.coords, function(coord) {
        let cell = grid.getCell(coord.x, coord.y);
        if (cell) {
          cell.type = self.type;
          cell.color = pieceConstants[cell.type].color;
          self.cells.push(cell);
        }
      });
    };

    // Reset the cells held by the current piece
    Piece.prototype.resetCells = function() {
      _.each(this.cells, function(cell) {
        cell.type = null;
        cell.color = 'transparent';
      });
      this.cells = [];
    };

    Piece.prototype.moveLeft = function() {
      let self = this;
      let isAllowed = _.every(self.cells, function(cell) {
        let newCell = grid.getCell(cell.x - 1, cell.y);
        if (!newCell || (newCell.type !== null && !_.includes(self.cells, newCell))) {
          return false;
        }
        return true;
      });
      if (!isAllowed) {
        return false;
      }

      // Regenerate coords on the move
      self.coords = _.map(self.cells, function(cell) {
        return {
          x: cell.x - 1,
          y: cell.y
        };
      });

      // Reset the cells
      self.resetCells();
      // Rerender based on new coordinates
      self.renderCells();
    };

    Piece.prototype.moveRight = function() {
      let self = this;
      let isAllowed = _.every(self.cells, function(cell) {
        let newCell = grid.getCell(cell.x + 1, cell.y);
        if (!newCell || (newCell.type !== null && !_.includes(self.cells, newCell))) {
          return false;
        }
        return true;
      });
      if (!isAllowed) {
        return false;
      }

      // Regenerate coords on the move
      self.coords = _.map(self.cells, function(cell) {
        return {
          x: cell.x + 1,
          y: cell.y
        };
      });

      // Reset the cells
      self.resetCells();
      // Rerender based on new coordinates
      self.renderCells();
    };

    Piece.prototype.moveDown = function() {
      let self = this;
      let isAllowed = _.every(self.cells, function(cell) {
        let newCell = grid.getCell(cell.x, cell.y + 1);
        if (!newCell || (newCell.type !== null && !_.includes(self.cells, newCell))) {
          return false;
        }
        return true;
      });
      if (!isAllowed) {
        return false;
      }

      // Regenerate coords on the move
      self.coords = _.map(self.cells, function(cell) {
        return {
          x: cell.x,
          y: cell.y + 1
        };
      });

      // Reset the cells
      self.resetCells();
      // Rerender based on new coordinates
      self.renderCells();
    };

    Piece.prototype.rotatePiece = function() {

    };

    return Piece;
  }
})();
