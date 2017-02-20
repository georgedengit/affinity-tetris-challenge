(function() {
  'use strict';

  angular.module('app.constants', [])
    .constant('gridConstants', {
      COLS: 10,
      ROWS: 22
    })
    .constant('pieceConstants', {
      I: {
        color: 'cyan',
        coords: [[4, 0], [4, 1], [4, 2], [4, 3]]
      },
      J: {
        color: 'blue',
        coords: [[3, 2], [3, 3], [4, 3], [5, 3]]
      },
      L: {
        color: 'orange',
        coords: [[3, 3], [4, 3], [5, 3], [5, 2]]
      },
      O: {
        color: 'yellow',
        coords: [[4, 2], [5, 2], [4, 3], [5, 3]]
      },
      S: {
        color: 'green',
        coords: [[4, 2], [5, 2], [3, 3], [4, 3]]
      },
      T: {
        color: 'purple',
        coords: [[4, 2], [3, 3], [4, 3], [5, 3]]
      },
      Z: {
        color: 'red',
        coords: [[3, 2], [4, 2], [4, 3], [5, 3]]
      }
    });
})();
