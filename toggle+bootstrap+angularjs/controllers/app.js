var app = angular.module('app', ['ngRoute','app.service', 'app.controllers']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'myCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);