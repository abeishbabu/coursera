(function(){
angular.module('data')
.constant("baseAPIURL","https://davids-restaurant.herokuapp.com/")
 .service("MenuDataService", MenuDataService);
 
 MenuDataService.$inject= ["$http","baseAPIURL"];
 function MenuDataService ($http,baseAPIURL){
 
    var service = this;
    
    service.getAllCategories = function(){
	/*console.log("ïnside getAllCategories");
      var response = $http({
		method: "GET",
		url: baseAPIURL +  "categories.json"
      });

      return response;*/
      	return $http.get(baseAPIURL + '/categories.json').then(function (response) {
      		return response.data;
	});
    };


    service.getItemsForCategory = function(categoryShortName){
	/*console.log("ïnside getItemsForCategory for:" + categoryShortName);
      var response = $http({
		method: "GET",
		url: baseAPIURL +  "menu_items.json?category=" +  categoryShortName
      });

      return response;*/
	var config = {};
    	if (categoryShortName) {
      		config.params = {category: categoryShortName};
    	}

    	return $http.get(baseAPIURL + '/menu_items.json', config).then(function (response) {
      		return response.data;
	});
    };

  
 }


})();
