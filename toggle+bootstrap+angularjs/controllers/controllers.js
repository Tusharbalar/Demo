(function() {
  
  var app = angular.module("app.controllers", ["app.service"]);

  app.controller("myCtrl", ["$scope", "$http", "$timeout", "surveyService",

    function ($scope, $http, $timeout, surveyService) {
      
      surveyService.getData(function(dataResponse) {
        console.log("SASASa", dataResponse)
      });
      
    }]);
})();