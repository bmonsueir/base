'use strict';

angular.module('workspaceApp')
  .controller('TakepollCtrl',['$scope', '$http', '$location','Auth', function ($scope, $http, $location, Auth) {
    $scope.names = [];
    $scope.question = null;
    $scope.answers = {'what':3};
    $scope.votes = {'what':3};
    $scope.voters = {'what':3};
    $scope.here = $location.absUrl();
    var id = $location.search();
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
   
    
   $http.get('/api/pollss')
    .success(function(response) {$scope.names = response;
     var i = 0;
     
     if(id.param == undefined){
         var newItem = Math.floor(Math.random()*$scope.names.length) + 1;
      id = {'param':$scope.names[newItem]._id};
     
   }
     
     while($scope.names[i]) {
        if($scope.names[i]._id.toString() === id.param.toString()){
          $scope.question = $scope.names[i].question;
          $scope.answers = $scope.names[i].answers;
          $scope.votes = $scope.names[i].votes;
          $scope.voters = $scope.names[i].voters;
          }
        i++;
      }    
    });
  
    $scope.voteChoice = function(choice){
        if(choice > -1){
    $scope.votes[choice]++;
    $scope.voters.push($scope.getCurrentUser().name);
    updateVotes();
        }else{
            $location.path('/viewVote').search({param: id['param']});
            
        }
    };
    
   $scope.addAnotherChoice = function(addAnother){
    $scope.votes.push(1);
    $scope.answers.push(addAnother);
    $scope.voters.push($scope.getCurrentUser().name);
    updateVotes();
      
   }
   
   function updateVotes(){
     $http.put('/api/pollss/'+ id.param, {'answers': $scope.answers, 'votes': $scope.votes, 'voters': $scope.voters});
        alert('vote successful');
        $location.path('/viewVote').search({param: id['param']});
     
   }
   
   $scope.hasVoted = function (){
       if($scope.voters.indexOf($scope.getCurrentUser().name) > -1) {
           return true;
       } else {
           return false;
           }
       
   }
   
  }]);
