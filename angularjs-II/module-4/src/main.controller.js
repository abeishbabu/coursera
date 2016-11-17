(function () {
'use strict';

angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController)
  .controller('ItemsDetailController', ItemsDetailController);


  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
      var catList = this;
      catList.items =  items.data;  //data part of the response contains the JSON ARRAY
  }

  ItemsDetailController.$inject = ['items'];
  function ItemsDetailController(items) {
        var itemsDetail = this;
      itemsDetail.items =  items.data;  //data part of the response contains the JSON ARRAY
  }

})();
