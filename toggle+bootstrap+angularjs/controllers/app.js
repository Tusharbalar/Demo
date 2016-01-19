var app = angular.module('app', ['ngRoute','app.service', 'app.controllers']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/question/1', {
      templateUrl: 'views/first.html',
      controller: 'sidebarCtrl'
    })
    .when('/question/2', {
      templateUrl: 'views/second.html',
      controller: 'sidebarCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);