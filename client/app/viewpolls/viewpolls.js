'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewpolls', {
        templateUrl: 'app/viewpolls/viewpolls.html',
        controller: 'ViewpollsCtrl'
      });
  });
