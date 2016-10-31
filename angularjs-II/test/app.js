(function(){
angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.service("MenuService", MenuService)
.directive("foundItems", FoundItems);

function FoundItems(){
	var ddo = {
		templateUrl: "menulist.html",
		scope: {
			items: "<",
			onRemove: "&"
		}
		
	};
	return ddo;
}


NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){
	var menu = this;
	menu.found = MenuSearchService.getMenuItems();
	menu.narrowItDown = function(){
		MenuSearchService.getMatchedMenuItems(menu.searchTerm);
		//menu.found = MenuSearchService.getMenuItems();
	};
	menu.removeMenuItem = function(index) {
		foundMenuItems.splice(index,1);
	};
}

MenuSearchService.$inject=["MenuService"];
function MenuSearchService(MenuService){
	var service = this;
	var foundMenuItems = [];
	
	service.getMatchedMenuItems = function(searchTerm){
		console.log("Search Term: "+searchTerm);
		
		var promise = MenuService.getMenu();
		promise.then(function(response){
			var menu = response.data.menu_items;
			//search the description for the searchTerm
			for(var i = 0; i < menu.length; i = i + 1) {
				console.log("Search Term: "+ menu[i].description);
				if ( menu[i].description.toLowerCase().indexOf(searchTerm) > -1)
					foundMenuItems.push(menu[i]);
			}
			console.log("found items:" + foundMenuItems.length);
		})
		.catch(function(errorResponse){
			console.log(errorResponse);
		});
	};
	
	service.getMenuItems = function(){
		return foundMenuItems;
	};
	
	service.removeMenuItem = function(index) {
		foundMenuItems.splice(index,1);
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
