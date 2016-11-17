(function () {
'use strict';

angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })

    // Categories page
     .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/main-categorieslist.template.html',
        controller: 'CategoriesController as catList',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
        }]
      }
    })

    //Item page based on selected category
   .state('itemDetail', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/items-detail.template.html',
    controller: 'ItemsDetailController  as  itemsDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemId);
            }]
    }
  });


    ;
}
})();
