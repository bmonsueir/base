'use strict';

angular.module('workspaceApp')
  .controller('ViewpollsCtrl', function ($scope, $http, $location) {
   $scope.name = [];
   $http.get("/api/pollss")
    .success(function(response) {$scope.names = response;
    });
      
    $scope.viewQuestion = function(id){
      console.log(id);
      $location.path("/takepoll").search({param: id});
    };
  });
