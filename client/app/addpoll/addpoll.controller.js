'use strict';

angular.module('workspaceApp')
    .controller('AddpollCtrl', function($scope, $http, $location, Auth) {
 
      $scope.question = '';
      $scope.choices = [{id: 'choice1'},{id: 'choice2'}];
      var answer =[];
      var vote = [];
      var voters = [];
      $scope.names = [];
      $scope.ident = '';
      
      
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.getCurrentUser = Auth.getCurrentUser
      
      $scope.addNewChoice = function() {
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'id':'choice'+ newItemNo});
      };
      
      $scope.showAddChoice = function(choice) {
        return choice.id === $scope.choices[$scope.choices.length-1].id;
      };
      
     
      
      $scope.submit = function() {
        if($scope.choices[$scope.choices.length-1].name){
        for(var i in $scope.choices) {
          answer.push($scope.choices[i].name);
          vote.push(0);
        }
        $http.post('/api/pollss', {'question': $scope.question, 'answers': answer, 'votes': vote, 'voters': voters, 'user': $scope.getCurrentUser().name});
        alert('Submission successful');
        
      
   
   $http.get('/api/pollss')
    .success(function(response) {$scope.names = response;
    $scope.ident = $scope.names[$scope.names.length-1]._id;
    console.log($scope.ident);
     $location.path('/takepoll').search({param: $scope.ident});
    
    });
        
          
        }
      };
      
      $scope.showChoiceLabel = function (choice) {
        return choice.id === $scope.choices[0].id;
        };
        
      
    });