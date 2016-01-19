(function() {
  
  var app = angular.module("app.controllers", ["app.service"]);

  app.controller("myCtrl", ["$scope", "$http", "$location", "$timeout", "surveyService",

    function ($scope, $http, $location, $timeout, surveyService) {
      
      surveyService.getData(function(dataResponse) {
                  
          $scope.surveys = dataResponse;

          $scope.selections = [];

          /* create 2d array mannually */
          var numInternalArrays = $scope.surveys.length;
          for (var i = 0; i < numInternalArrays; i++) {
            $scope.selections[i] = [];
          };

          $scope.index = 0;

          var toggleCheckboxFlag = 0;

          /* PRIVATE FUNCTION
              for find value from selections array and replace it
            */
          function findAndRemove(array, property, value) {
            array.forEach(function(result, index) {
              if(result[property] === value) {
                array.splice(index, 1);
                toggleCheckboxFlag = 1;
              }
            });
          }

          $scope.toggleSelectionCheckbox = function (QuestionId, value) {
            toggleCheckboxFlag = 0;
            if (!value) return;
            findAndRemove($scope.selections[$scope.index], 'categoryId', value.subCategoryId);
            if (toggleCheckboxFlag != 1) {
              $scope.selections[$scope.index].push({
                questionId: QuestionId.questionId,
                categoryId: value.subCategoryId,
                categoryName: value.subCategoryName,
                storeId: 1,
                comment: ""
              });
            }
          };

          $scope.submitSelection = function() {
            $scope.value = $scope.selections[$scope.index];
            $scope.hideSubmitButton = true;
            $scope.disableCheckbox = true;
            $scope.hideEditButton = true;

            // var param = $scope.index + 1;
            $location.path("/question/1");
          }
      });
      
        $scope.EditSelection = function() {

          $scope.hideEditButton = false;
          $scope.hideSubmitButton = false;
          $scope.disableCheckbox = false;
          $scope.value = false;
        }
      
    }]);
    
})();