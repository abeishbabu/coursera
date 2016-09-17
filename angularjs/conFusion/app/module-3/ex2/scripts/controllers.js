'use strict';
angular.module('confusionApp')

    .controller("MenuController", ['$scope', 'menuFactory', function($scope, menuFactory){

        
        $scope.dishes = menuFactory.getDishes();

        $scope.tab = 1;
        $scope.filterText = '';
        $scope.select= function(tab){
            $scope.tab= tab;
            if (tab ===2){
                $scope.filterText = "appetizer";
            } else if (tab===3){
                $scope.filterText = "dessert";
            } else if (tab === 4){
                $scope.filterText = "mains";
            } else {
                $scope.filterText ="";
            }
            //alert(this.filterText);
            //return this.filterText;
        };

        $scope.isSelected = function(checkTab){
            return ($scope.tab === checkTab);
        };

        $scope.showDetails = true;
        $scope.toggleDetails= function(){
            $scope.showDetails = !$scope.showDetails;
        };
    }]) // no semicolon


    .controller('dishDetailController', ['$scope', 'menuFactory', function($scope, menuFactory) {
          $scope.dish = menuFactory.getDish(0);
    }])


    .controller('ContactController', ['$scope', function($scope){

            $scope.feedback = {mychannel :"", firstName : "", lastName : "", agree: false, email: "" };
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;

    }])


    .controller('FeedbackController', ['$scope', function($scope){
            $scope.sendFeedback = function()
            {
                console.log($scope.feedback);
                if($scope.feedback.agree && $scope.feedback.mychannel == "" && !$scope.feedback.mychannel)
                {
                    $scope.invalidChannelSelection = true;
                    console.log("error");
                } else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"",lastName :"", agree:false, email:""};
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
    }])