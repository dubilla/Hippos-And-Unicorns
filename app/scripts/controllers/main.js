'use strict';

angular.module('hipposAndUnicornsApp')
  .controller('MainCtrl', function ($scope, Animal) {
    Animal.getAnimal()
      .then(function(data) {
        var images = data.data.responseData.results,
          randomImage = images[Math.floor(Math.random() * images.length)];

        $scope.imageSrc = randomImage.url;
      });
  });
