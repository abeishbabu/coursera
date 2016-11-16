(function () {
'use strict';

  angular.module('data')
    .component('categories', {
      templateUrl: 'src/templates/categories.html',
      bindings: {
        items: '<'
      }
  });

})();
