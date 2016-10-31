(function(){
.controller("ShoppingListController1", ShoppingListController1)
//.controller("ShoppingListController2", ShoppingListController2)
.factory("ShoppingListFactory", ShoppingListFactory)
.directive("shoppingList", ShoppingListDirective);


function ShoppingListDirective(){
	var ddo = {
		templateUrl : "shoppingList.html",
		scope: {
			items: "<",
			title: "@"
		},
		controller: "ShoppingListDirectiveController",
		controllerAs: "list",
		bindToController: true
	};
	return ddo;
}


function ShoppingListDirectiveController(){
	var list = this;
	list.cookiesInList = function(){
		for(var i = o; i < list.items.length; i = i + 1)
		{
			var nm = list.items[i].name;
			if (nm.toLowerCase().indexOf('cookie') !== -1){
				return true;
			} 
		}
		return false;
	};
}

ShoppingListController1.$inject=["ShoppingListFactory"];
function ShoppingListController1(ShoppingListFactory){
	var list = this;
	var shoppingList = ShoppingListFactory();
	
	
	list.items = shoppingList.getItems();
	list.title = "Shopping List 1 Count# "  + list.items.length;
	
	list.addItem = function(){
		shoppingList.addItem(list.name, list.quantity);
		list.title = "Shopping List 1 Count# "  + list.items.length;
	};
	list.removeItem = function(index){
		shoppingList.removeItem(index);
		list.title = "Shopping List 1 Count# "  + list.items.length;
	};
	
}

function ShoppingListService(maxItems){
	var service = this;
	var items = [];
	
	service.addItem = function(name, quantity){
		var item = {};
		item.name = name;
		item.quantity = quantity;
		items.push(item);
	};
	service.removeItem = function(index){
		items.splice(index,1);
	};
	service.getItems = function(){
		return items;
	};
}

function ShoppingListFactory(){
	var factory = function(maxItems){
		return new ShoppingListService(maxItems);
	};
	return factory;
}





})();
