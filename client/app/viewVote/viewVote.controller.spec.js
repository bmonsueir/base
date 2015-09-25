'use strict';

describe('Controller: ViewVoteCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var ViewVoteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewVoteCtrl = $controller('ViewVoteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
