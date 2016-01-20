(function() {
   
    var app = angular.module("app.controllers");

    app.controller("contactCtrl", ['$scope', "$location", "Data", "surveyService",
    
      function($scope, $location, Data, surveyService) {
      
        $scope.previousQuestion = function() {
          $location.path("/question/5");
          $scope.$emit('eventName', { message: $scope.index });
        }
        
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
      
        $scope.addValue = function(value) {

          console.log("final json", $scope.selections, value);

          $scope.selection = {
            "surveyResultTestDtos" : $scope.selections,
            "customerDetailDto" : value
          }

          /* Set data into database */
          surveyService.setData($scope.selection);
        }

    }]);
  
})();