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
      self.state = 1;
      self.cells = [];
      self.coords = [];
      _.each(pieceConstants[type].coords, function(coordArr) {
        let cell = grid.getCell(coordArr[0], coordArr[1]);
        if (!cell) {
          return false;
        }
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
      // moveDown is special in determining if we reached the end
      // so this needs to return true if the move was possible
      return true;
    };

    Piece.prototype.rotatePiece = function() {
      let self = this;

      // Get next rotation state
      const rotationArray = self.getRotation();
      const nextState = rotationArray[0];
      const coords = rotationArray[1];

      // Check if rotation is allowed
      let isAllowed = _.every(coords, function(coord) {
        let newCell = grid.getCell(coord.x, coord.y);
        if (!newCell || (newCell.type !== null && !_.includes(self.cells, newCell))) {
          return false;
        }
        return true;
      });
      if (!isAllowed) {
        return false;
      }

      // If rotation is allowed, set state and new coords
      self.state = nextState;
      self.coords = coords;
      // Reset the cells
      self.resetCells();
      // Rerender based on new coordinates
      self.renderCells();
    };

    Piece.prototype.getRotation = function() {
      let self = this;
      let center = self.cells[0];
      let coords = [];
      let nextState;
      switch(self.type) {
        case 'I':
          switch(self.state) {
            case 1:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x+1, y: center.y});
              coords.push({x: center.x+2, y: center.y});
              nextState = 2;
              break;
            case 2:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x, y: center.y+1});
              coords.push({x: center.x, y: center.y+2});
              nextState = 1;
              break;
          }
          break;
        case 'J':
          switch(self.state) {
            case 1:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x+1, y: center.y-1});
              coords.push({x: center.x, y: center.y+1});
              nextState = 2;
              break;
            case 2:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x+1, y: center.y});
              coords.push({x: center.x+1, y: center.y+1});
              nextState = 3;
              break;
            case 3:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x, y: center.y+1});
              coords.push({x: center.x-1, y: center.y+1});
              nextState = 4;
              break;
            case 4:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x-1, y: center.y-1});
              coords.push({x: center.x+1, y: center.y});
              nextState = 1;
              break;
          }
          break;
        case 'L':
          switch(self.state) {
            case 1:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x, y: center.y+1});
              coords.push({x: center.x+1, y: center.y+1});
              nextState = 2;
              break;
            case 2:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x-1, y: center.y+1});
              coords.push({x: center.x+1, y: center.y});
              nextState = 3;
              break;
            case 3:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x-1, y: center.y-1});
              coords.push({x: center.x, y: center.y+1});
              nextState = 4;
              break;
            case 4:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x+1, y: center.y});
              coords.push({x: center.x+1, y: center.y-1});
              nextState = 1;
              break;
          }
          break;
        case 'S':
          switch(self.state) {
            case 1:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x+1, y: center.y});
              coords.push({x: center.x+1, y: center.y+1});
              nextState = 2;
              break;
            case 2:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y+1});
              coords.push({x: center.x-1, y: center.y+1});
              coords.push({x: center.x+1, y: center.y});
              nextState = 1;
              break;
          }
          break;
        case 'T':
          switch(self.state) {
            case 1:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x+1, y: center.y});
              coords.push({x: center.x, y: center.y+1});
              nextState = 2;
              break;
            case 2:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x, y: center.y+1});
              coords.push({x: center.x+1, y: center.y});
              nextState = 3;
              break;
            case 3:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x, y: center.y+1});
              nextState = 4;
              break;
            case 4:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x-1, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x+1, y: center.y});
              nextState = 1;
              break;
          }
          break;
        case 'Z':
          switch(self.state) {
            case 1:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y+1});
              coords.push({x: center.x+1, y: center.y});
              coords.push({x: center.x+1, y: center.y-1});
              nextState = 2;
              break;
            case 2:
              coords.push({x: center.x, y: center.y});
              coords.push({x: center.x, y: center.y-1});
              coords.push({x: center.x-1, y: center.y-1});
              coords.push({x: center.x+1, y: center.y});
              nextState = 1;
              break;
          }
          break;
        case 'O':
        default:
          return [self.state, self.coords];
      }
      return [nextState, coords];
    }

    return Piece;
  }
})();
