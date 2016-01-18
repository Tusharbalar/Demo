var app = angular.module('app', ['ngRoute','app.service', 'app.controllers']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/question/:param', {
      templateUrl: 'views/first.html',
      controller: 'myCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);