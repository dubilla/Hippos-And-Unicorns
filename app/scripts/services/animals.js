'use strict';

angular.module('hipposAndUnicornsApp')
  .provider('Animal', function () {
    this.$get = function ($http) {
      var service = {
        getAnimal: function () {
          return $http({
            method: 'JSONP',
            url: 'http://ajax.googleapis.com/ajax/services/search/images',
            params: {
              v: '1.0',
              q: 'unicorn',
              callback: 'JSON_CALLBACK'
            }
          });
        }
      };

      return service;
    };
  });
