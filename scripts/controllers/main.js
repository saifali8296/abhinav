'use strict';

angular.module('todoListApp') 
.controller('mainCtrl', function($scope,dataService) {
 $scope.addTodo = function() {
   var todo ={name: "This ia a new Todo"};
   $scope.todos.push(todo);
 };
$scope.hellowWorld = dataService.helloWorld;
 
 dataService.getTodos(function(response) {
      console.log(response.data);
         $scope.todos = response.data;                                             
});
  $scope.deleteTodo = function(todo,$index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };
})
