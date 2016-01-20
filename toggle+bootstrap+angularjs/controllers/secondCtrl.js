(function() {
   
  var app = angular.module("app.controllers");

  app.controller("secondCtrl", ['$scope', "$location", "Data", function($scope, $location, Data) {

    $scope.inc = 0;

    if ($scope.surveys[$scope.index] === undefined) return;

    if ($scope.surveys[$scope.index].category) {
      $scope.Question = $scope.surveys[$scope.index].category;
    }

    if (!$scope.Question) return;
    $scope.isQuestionTrue = [];

    angular.forEach($scope.Question, function(value, key) {
      if (value.isQuestion) {
        $scope.isQuestionTrue.push(value);
      }
    });

    if ($scope.prevFlag[$scope.index] === 0) {
      angular.forEach($scope.isQuestionTrue, function(value, key) {
        for(var i = 2 ; i < $scope.isQuestionTrue.length ; i++) {
          $scope.selections[$scope.index].push({
            questionId: $scope.surveys[$scope.index].questionId,
            categoryId: value.categoryId,
            categoryName: value.categoryName,
            answer: "",
            storeId: 1,
            comment: ""
          });
        }
      });
      $scope.prevFlag[$scope.index] = 1;
    }

    $scope.next = function() {
      $scope.inc += 1;
    }

    $scope.prev = function() {
      $scope.inc -= 1;
    }

    $scope.nextQuestion = function() {
      $scope.index += 1;
      $location.path("/question/3");
      $scope.$emit('eventName', { message: $scope.index });
    }

    $scope.previousQuestion = function() {
      $scope.index -= 1;
      $location.path("/question/1");
      $scope.$emit('eventName', { message: $scope.index });
    }

  }]);
   
})();