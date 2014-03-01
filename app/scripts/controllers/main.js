'use strict';

angular.module('hipposAndUnicornsApp')
  .controller('MainCtrl', function ($scope, Animal) {
    Animal.getAnimal()
      .then(function(data) {
        $scope.imageSrc = data.data.responseData.results[0].url
      });
  });
