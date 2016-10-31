(function(){
angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.service("MenuService", MenuService);
//.directive("foundItem", FoundItem);




NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){
	var menu = this;
	menu.found = MenuSearchService.getMenuItems();
	menu.narrowItDown = function(){
		MenuSearchService.getMatchedMenuItems(menu.searchTerm);
	};
}

MenuSearchService.$inject=["MenuService"];
function MenuSearchService(MenuService){
	var service = this;
	var foundMenuItems = [];
	
	service.getMatchedMenuItems = function(searchTerm){
		var promise = MenuService.getMenu();
		promise.then(function(response){
			console.log(response.data);
			//search the description for the searchTerm
			for(var i = 0; i < response.data.length; i = i + 1) {
				if ( response.data[i].description.toLowerCase().indexOf(searchTerm) > -1)
					foundMenuItems.push(response.data[i]);
			}
		})
		.catch(function(errorResponse){
			console.log(errorResponse);
		});
	};
	service.getMenuItems = function(){
		return foundMenuItems;
	};
}

MenuService.$inject= ["$http"];
function MenuService($http){
	var service = this;
	service.getMenu = function(){
		var response = $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		});
		return response;
	}
	
}

})();
