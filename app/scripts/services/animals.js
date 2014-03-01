'use strict';

angular.module('hipposAndUnicornsApp')
  .provider('Animal', function () {
    this.$get = function ($http) {
      var animals = ['hippo', 'unicorn'],
          randomAnimal = animals[Math.floor(Math.random()*animals.length)],
          service;

      service = {
        getAnimal: function () {
          return $http({
            method: 'JSONP',
            url: 'http://ajax.googleapis.com/ajax/services/search/images',
            params: {
              v: '1.0',
              q: randomAnimal,
              safe: 'active',
              callback: 'JSON_CALLBACK',
              start: Math.floor(Math.random() * 20)
            }
          });
        }
      };

      return service;
    };
  });
