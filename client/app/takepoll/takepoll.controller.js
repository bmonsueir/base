'use strict';

angular.module('workspaceApp')
  .controller('TakepollCtrl',['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.names = [];
    $scope.question = null;
    $scope.answers = {'what':3};
    $scope.votes = {'what':3};
    var id = $location.search();
    console.log(id);
   $http.get("/api/pollss")
    .success(function(response) {$scope.names = response;
     var i = 0;
     
     if(id.param == undefined){
         var newItem = Math.floor(Math.random()*$scope.names.length) + 1;
      id = {'param':$scope.names[newItem]._id};
       console.log(id);
   }
     
     while($scope.names[i]) {
        if($scope.names[i]._id.toString() == id.param.toString()){
          $scope.question = $scope.names[i].question;
          $scope.answers = $scope.names[i].answers;
          $scope.votes = $scope.names[i].votes;
          }
        i++;
      }    
    });
  
    $scope.voteChoice = function(choice){
    $scope.votes[choice]++;
      updateVotes();
    };
    
   $scope.addAnotherChoice = function(addAnother){
    $scope.votes.push(1);
    $scope.answers.push(addAnother);
    updateVotes();
      
   }
   
   function updateVotes(){
     $http.put('/api/pollss/'+ id['param'], {"question": $scope.question, "answers": $scope.answers, "votes": $scope.votes});
        alert('vote successful')
        $location.path('/viewVote').search({param: id['param']})
     console.log(id);
   }
   
  }]);
