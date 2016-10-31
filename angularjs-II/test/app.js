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
		MenuSearchService.getMatchedMenuItems(menu.name);
	};
}

MenuSearchService.$inject=["MenuService"];
function MenuSearchService(MenuService){
	var service = this;
	var foundMenuItems = [];
	
	service.getMatchedMenuItems = function(name){
		var promise = MenuService.getMenu();
		promise.then(function(response){
			console.log(response.data);
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
	}
	
}

})();
