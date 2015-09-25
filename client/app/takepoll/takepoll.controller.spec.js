'use strict';

describe('Controller: TakepollCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var TakepollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TakepollCtrl = $controller('TakepollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
