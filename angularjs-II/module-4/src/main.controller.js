(function () {
'use strict';

angular.module('MenuApp')
  .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject = ['items'];
  function MainAppController(items) {
      var mainList = this;
      mainList.items = items;
  }

})();
