(function() {
   
   var app = angular.module("app.controllers");
   
   app.controller("sidebarCtrl", ['$scope', "$location", function($scope, $location) {

      $scope.inc = 0;

      $scope.next = function() {
        $scope.inc += 1;
      }

      $scope.prev = function() {
        $scope.inc -= 1;
      }
      
      $scope.nextQuestion = function() {
        $location.path("/question/2");
        console.log("AAA", $scope.selections);
      }      

   }]);
   
})();