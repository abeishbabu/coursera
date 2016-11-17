(function () {
'use strict';

  angular.module('data')
    .component('categoryList', {
      templateUrl: 'src/templates/categories.template.html',
      bindings: {
        items: '<'
      }
  });

})();
