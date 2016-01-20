(function() {
   
   var app = angular.module("app.controllers");
   
   app.controller("firstCtrl", ['$scope', "$location", "Data", function($scope, $location, Data) {

      $scope.inc = 0;
      
      if ($scope.hasConfig === undefined) {
        $location.path("/");
        return;
      }
      
      $scope.next = function() {
        $scope.inc += 1;
      }
      
      $scope.prev = function() {
        $scope.inc -= 1;
      }
      
      $scope.nextQuestion = function() {
        $scope.index += 1;
        $location.path("/question/2");
        $scope.$emit('eventName', { message: $scope.index });
      }

   }]);
   
})();