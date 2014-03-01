'use strict';

angular.module('hipposAndUnicornsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        provider: 'Animal'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
