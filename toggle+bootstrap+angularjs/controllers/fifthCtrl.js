(function() {
   
    var app = angular.module("app.controllers");

    app.controller("fifthCtrl", ['$scope', "$location", "Data", function($scope, $location, Data) {
      
        $scope.inc = 0;
      
        $scope.selections[$scope.index].push({
          questionId: $scope.surveys[$scope.index].questionId,
          categoryId: $scope.surveys[$scope.index].categoryId,
          categoryName: "",
          comment: "",
          answer: "",
          storeId: 1
        });
      
        $scope.nextQuestion = function() {
          console.log("AAA", $scope.selections)
          $location.path("/contact");
        }

    }]);
  
})();