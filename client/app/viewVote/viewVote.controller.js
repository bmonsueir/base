'use strict';

angular.module('workspaceApp')
  .controller('ViewVoteCtrl', ['$scope', '$http', '$location','Auth', function ($scope, $http, $location, Auth) {
    $scope.names = [];
    $scope.question = null;
    $scope.answers = [0];
    $scope.votes = [0];
    $scope.user = '';
    $scope.total = null;
    $scope.width = 600;
    $scope.height = 400;
    $scope.yAxis = 'votes';
    $scope.xAxis = '';
    $scope.max = 0;
    $scope.data = {};
    var id = $location.search();
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    
    
   $http.get('/api/pollss')
    .success(function(response) {$scope.names = response;
    var i = 0;
     while($scope.names[i]) {
        if($scope.names[i]._id.toString() == id.param.toString()){
          //$scope.question = $scope.names[i].question;
          //$scope.answers = $scope.names[i].answers;
          $scope.data = $scope.names[i];
           var columns = $scope.data.votes.length;
           var spaces = 84/ columns;
            $scope.user = $scope.names[i].user;
              for (var j = 0; j < columns; j++) {
                  if ($scope.data.votes[j] > $scope.max){
                      $scope.max = $scope.data.votes[j];
                      }
                  }
          
          }
        i++;
      }    
    });
    
  $scope.deleteRecord = function(){
     $http.delete('/api/pollss/'+ id.param);
     alert('Poll has been deleted');
      $location.path('/');
  }
  $scope.isPollster = function(){
     
      if($scope.getCurrentUser().name === $scope.user){
          return true;
      } else {
          return false;
      }
      
  }
    
    
  }]);
