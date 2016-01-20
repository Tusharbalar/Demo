(function() {
   
    var app = angular.module("app.controllers");

    app.controller("contactCtrl", ['$scope', "$location", "Data", function($scope, $location, Data) {
      
        $scope.previousQuestion = function() {
          $location.path("/question/5");
          $scope.$emit('eventName', { message: $scope.index });
        }
        
        if ($scope.prevFlag[$scope.index] === 0) {
          $scope.selections[$scope.index].push({
            questionId: $scope.surveys[$scope.index].questionId,
            categoryId: $scope.surveys[$scope.index].categoryId,
            categoryName: "",
            comment: "",
            answer: "",
            storeId: 1
          });
          $scope.prevFlag[$scope.index] = 1;
        }
      
        $scope.addValue = function(value) {
          $location.path("/question/1");
        }

    }]);
  
})();