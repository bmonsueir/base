'use strict';

describe('Controller: AddpollCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var AddpollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddpollCtrl = $controller('AddpollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
