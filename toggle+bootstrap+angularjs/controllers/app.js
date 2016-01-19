var app = angular.module('app', ['ngRoute','app.service', 'app.controllers']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/question/1', {
      templateUrl: 'views/first.html',
      controller: 'firstCtrl'
    })
    .when('/question/2', {
      templateUrl: 'views/second.html',
      controller: 'secondCtrl'
    })
    .when('/question/3', {
      templateUrl: 'views/third.html',
      controller: 'thirdCtrl'
    })
    .when('/question/4', {
      templateUrl: 'views/fourth.html',
      controller: 'fourthCtrl'
    })
    .when('/question/5', {
      templateUrl: 'views/fifth.html',
      controller: 'fifthCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);