(function() {
  
  var app = angular.module("app.controllers", ["app.service"]);

  app.controller("myCtrl", ["$scope", "$http", "$location", "$timeout", "surveyService",

    function ($scope, $http, $location, $timeout, surveyService) {
      
      surveyService.getData(function(dataResponse) {
        $scope.surveys = dataResponse;
      });
      
      $scope.a = function(){
        $location.path("/home")
      }
      
    }]);
    
})();