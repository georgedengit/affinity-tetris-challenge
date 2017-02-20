'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app', function() {


  it('should automatically redirect to /tetris when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/tetris");
  });


  describe('tetris', function() {

    beforeEach(function() {
      browser.get('index.html#!/tetris');
    });


    it('should render tetris when user navigates to /tetris', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for tetris/);
    });

  });

});
