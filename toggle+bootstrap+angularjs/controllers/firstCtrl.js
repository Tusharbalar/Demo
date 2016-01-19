(function() {
   
   var app = angular.module("app.controllers");
   
   app.controller("firstCtrl", ['$scope', "$location", "Data", function($scope, $location, Data) {

      $scope.inc = 0;

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
   
      //  $scope.$watch('index', function (newValue, oldValue) {
      //    console.log("SASAS", newValue)
      //     if (newValue !== oldValue) Data.setIndex(newValue);
      // });
  
   }]);
   
})();