(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.checkLunch = function(){
    var lunch = $scope.lunch || ""
    var items = lunch.split(",");
    var cnt = 0;

    for ( var i = 0; i < items.length; i = i + 1){  // elimiate empty value
      if (items[i] != "")
        cnt = cnt + 1
    }

    if (lunch === ""){
      $scope.msg = "Please enter data first";
      $scope.msgclass= "message-error";
      $scope.borderclass= "border-error";
    }
    else if (cnt >0 && cnt <= 3){
      $scope.msg = "Enjoy!";
      $scope.msgclass= "message-success";
      $scope.borderclass= "border-success";
    }
    else if (cnt > 3){
      $scope.msg = "Too Much!";
      $scope.msgclass= "message-success";
      $scope.borderclass= "border-success";
    }
    else{
      $scope.msg = "Please enter data first";
      $scope.msgclass= "message-error";
      $scope.borderclass= "border-error";
    }

    console.log(lunch + cnt);
  };
}




})(); // end of IIFE