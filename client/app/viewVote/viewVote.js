'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewVote', {
        templateUrl: 'app/viewVote/viewVote.html',
        controller: 'ViewVoteCtrl'
      });
  });
