(function(){
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['ApiPath'];
function MyInfoService(ApiPath){

	var myinfo = this;
	myinfo.isAvailable = false;
	myinfo.setInfo = function(user){
		myinfo.user = user;
		myinfo.isAvailable = true;
		myinfo.basePath =  ApiPath;
	};

	myinfo.getInfo = function(){
		return myinfo;
	}

}



})();