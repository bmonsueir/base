'use strict';

angular.module('workspaceApp')
    .controller('AddpollCtrl', function($scope, $http, $location) {
 
      $scope.question = '';
      $scope.choices = [{id: 'choice1'},{id: 'choice2'}];
      var answer =[];
      var vote = [];
      $scope.addNewChoice = function() {
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'id':'choice'+newItemNo});
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
        $http.post('/api/pollss', {"question": $scope.question, "answers": answer, "votes": vote});
        alert('Submission successful')
        $location.path('/')
        }
      };
      
      $scope.showChoiceLabel = function (choice) {
        return choice.id === $scope.choices[0].id;
        }
        
      
    });