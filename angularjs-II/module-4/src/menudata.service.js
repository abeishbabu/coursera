(function(){
angular.module('data')
 .service("MenuDataService", MenuDataService);
 
 MenuDataService.$inject= ["$http"];
 function MenuDataService ($http){
    console.log("inside MenuDataService");
    var service = this;
    
    service.getAllCategories = function(){
	console.log("ïnside getAllCategories");
      var response = $http({
		method: "GET",
		url: "https://davids-restaurant.herokuapp.com/categories.json"
      });
	console.log("getAllcategories:"+  response);
      return response;
    };
  
   service.getItemsForCategory = function(categoryShortName){
     var response = $http({
         method: "GET",
         url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
     });
   };
 }


})();
