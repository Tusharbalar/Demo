(function() {
   
    var app = angular.module("app.controllers");

    app.controller("thirdCtrl", ["$scope", "$location", "Data", function($scope, $location, Data) {

        $scope.inc = 0;

        if ($scope.hasConfig === undefined) {
          $location.path("/");
          return;
        }

        if ($scope.prevFlag[$scope.index] === 0) {
          $scope.selections[$scope.index].push({
            questionId: $scope.surveys[$scope.index].questionId,
            categoryId: $scope.surveys[$scope.index].categoryId,
            categoryName: "",
            comment: "",
            answer: 0,
            storeId: 1
          });
          $scope.prevFlag[$scope.index] = 1;
        }

        $scope.nextQuestion = function() {
          $scope.index += 1;
          $location.path("/question/4");
          $scope.$emit('eventName', { message: $scope.index });
        }

        $scope.previousQuestion = function() {
          $scope.index -= 1;
          $location.path("/question/2");
          $scope.$emit('eventName', { message: $scope.index });
        }

    }]);
  
})();