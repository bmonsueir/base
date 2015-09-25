'use strict';

describe('Controller: ViewpollsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var ViewpollsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewpollsCtrl = $controller('ViewpollsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
