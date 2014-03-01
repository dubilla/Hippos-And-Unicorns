'use strict';

angular.module('hipposAndUnicornsApp')
  .controller('MainCtrl', function ($scope, Animal) {
    // $scope.animal = animal.getAnimal();
    debugger
    $scope.what = Animal.getAnimal();
  });
