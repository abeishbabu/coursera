(function () {
'use strict';

  angular.module('data')
    .component('category-list', {
      templateUrl: 'src/templates/categories.template.html',
      bindings: {
        items: '<'
      }
  });

})();
