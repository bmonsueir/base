'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/takepoll', {
        templateUrl: 'app/takepoll/takepoll.html',
        controller: 'TakepollCtrl',
        authenticate: true
      });
  });
