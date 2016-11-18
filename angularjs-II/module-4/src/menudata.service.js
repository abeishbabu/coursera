(function(){
angular.module('data')
.constant("baseAPIURL","https://davids-restaurant.herokuapp.com/")
 .service("MenuDataService", MenuDataService);
 
 MenuDataService.$inject= ["$http","baseAPIURL"];
 function MenuDataService ($http,baseAPIURL){
 
    var service = this;
    
    service.getAllCategories = function(){
	
      	return $http.get(baseAPIURL + '/categories.json').then(function (response) {
      		return response.data;
	});
    };


    service.getItemsForCategory = function(categoryShortName){
	
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
