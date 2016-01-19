(function() {
   
    var app = angular.module("app.controllers");

    app.controller("contactCtrl", ['$scope', "$location", "Data", function($scope, $location, Data) {
      
        // $scope.selections[$scope.index].push({
        //   questionId: $scope.surveys[$scope.index].questionId,
        //   categoryId: $scope.surveys[$scope.index].categoryId,
        //   categoryName: "",
        //   comment: "",
        //   answer: "",
        //   storeId: 1
        // });
      
        $scope.addValue = function(value) {
          console.log("AAA", $scope.selections, value);
          $location.path("/question/1");
        }

    }]);
  
})();