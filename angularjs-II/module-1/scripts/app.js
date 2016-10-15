(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.checkLunch = function(){
    var lunch = $scope.lunch || ""
    var items = lunch.split(",");
    var cnt = items.length;

    if (lunch === "")
      $scope.msg = "Please enter data first";
    else if (cnt >0 && cnt <= 3)
      $scope.msg = "Enjoy!";
    else if (cnt > 3)
      $scope.msg = "Too Much";
    else
      $scope.msg = "Please enter data first";

    console.log(lunch + cnt);
  };
}




})(); // end of IIFE