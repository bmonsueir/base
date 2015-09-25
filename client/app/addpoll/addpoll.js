'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addpoll', {
        templateUrl: 'app/addpoll/addpoll.html',
        controller: 'AddpollCtrl',
        authenticate: true
      });
  });
