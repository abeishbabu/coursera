(function(){

angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController",ToBuyController)
	.controller("AlreadyBoughtController",AlreadyBoughtController)
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);


ToBuyController.$inject=["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;
	
	toBuy.items = ShoppingListCheckOffService.getItems_toBuy();
	toBuy.buy = function(index){
		ShoppingListCheckOffService.buy(index);
	}
	
}

AlreadyBoughtController.$inject=["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){

	var bought = this;
	bought.items = ShoppingListCheckOffService.getItems_bought();

}


function ShoppingListCheckOffService(){
	var service = this;
	
	var items_toBuy = [{name:"cookies", quantity:10},{ name:"bismol", quantity:2},{name:"snickers", quantity:5}];
	var items_bought = [];
	
	service.buy = function(index){
		items_bought.push(items_toBuy[index]);
		items_toBuy.splice(index,1);
		
	};
	service.getItems_toBuy = function(){
		return items_toBuy;
	};
	
	service.getItems_bought = function(){
		return items_bought;
	};
	

}

})();
