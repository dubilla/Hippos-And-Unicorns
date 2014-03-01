'use strict';

angular.module('hipposAndUnicornsApp')
  .provider('Animal', function () {
    this.$get = function () {
      var service = {
        getAnimal: function () {
          return [
            'Hippo',
            'Unicorn'
          ];
        }
      };

      return service;
    };
  });
