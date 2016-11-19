(function () {
"use strict";


angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService'];
function SignupController(MenuService, MyInfoService) {
    var signupCtrl = this;

  signupCtrl.submit = function () {
    
    //get the favourite menu
    var promise = MenuService.getFavMenuItem(signupCtrl.user.favmenuNumber);
   promise.then(
                      function (response) {
					    	signupCtrl.completed = true;
					    	signupCtrl.user.favmenu = response.data;
					    	signupCtrl.error = "";
					    	MyInfoService.setInfo(signupCtrl.user);
                    }, function(response){
						    signupCtrl.error = "No such favourite menu exist";
						    signupCtrl.completed = false;
                    });
  };
}


})();
