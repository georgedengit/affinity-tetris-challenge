(function() {
  'use strict';

  angular.module('app.constants', [])
    .constant('gridConstants', {
      COLS: 10,
      ROWS: 22
    })
    // coordinates have pieces' center as first element
    .constant('pieceConstants', {
      I: {
        color: 'cyan',
        coords: [[4, 2], [4, 1], [4, 0],  [4, 3]]
      },
      J: {
        color: 'blue',
        coords: [[4, 3], [3, 2], [3, 3], [5, 3]]
      },
      L: {
        color: 'orange',
        coords: [[4, 3], [3, 3], [5, 3], [5, 2]]
      },
      O: {
        color: 'yellow',
        coords: [[4, 3], [4, 2], [5, 2], [5, 3]]
      },
      S: {
        color: 'green',
        coords: [[4, 3], [4, 2], [3, 3], [5, 2]]
      },
      T: {
        color: 'purple',
        coords: [[4, 3], [3, 3], [4, 2], [5, 3]]
      },
      Z: {
        color: 'red',
        coords: [[4, 3], [4, 2], [3, 2], [5, 3]]
      }
    });
})();
