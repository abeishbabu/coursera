'use strict';
angular.module('confusionApp')

    .controller("MenuController", ['$scope', 'menuFactory', function($scope, menuFactory){

        
        $scope.showMenu_dishes = false;
		$scope.message_dishes = "Loading....";
		menuFactory.getDishes().query(
			function(response){
				$scope.dishes  = response;
				$scope.showMenu_dishes = true;
			},function(response){
				$scope.message_dishes = "Error: "+response.status + " " + response.statusText;
			}
		);

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


    .controller('dishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

		 $scope.dish = menuFactory.getDishes().get({id:(parseInt($stateParams.id,10))});
		 
    }])


    .controller('ContactController', ['$scope', function($scope){

            $scope.feedback = {mychannel :"", firstName : "", lastName : "", agree: false, email: "" };
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;

    }])


    .controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory){
		
            $scope.sendFeedback = function()
            {
				
                if($scope.feedback.agree && $scope.feedback.mychannel == "" && !$scope.feedback.mychannel)
                {
                    $scope.invalidChannelSelection = true;
                    console.log("error");
                } else {
				    console.log($scope.feedback);
					feedbackFactory.save($scope.feedback, function(){
						console.log("entry has been saved");
					});;
					
					//clear the form for next entry
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"",lastName :"", agree:false, email:""};
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
    }])

    // implement the IndexController and About Controller here

    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory){

		//updating promotion details from server
		$scope.showMenu_promotion = false;
		$scope.message_promotion = "Loading...";
		menuFactory.getPromotion().get({id:0})
            .$promise.then(
				function(response) {
                    $scope.promotion = response;
                    $scope.showMenu_promotion = true;
                },
                function(response) {
					$scope.showPromotionMenu = false;
                    $scope.message_promotion = "Error: "+response.status + " " + response.statusText;
                }
			);
			
		//updating chef details from server
        $scope.showMenu_chef = false;
		$scope.message_chef = "Loading...";
		corporateFactory.getLeaders().get({id:3})
			.$promise.then(
				function(response){
					 $scope.chef = response;
					 $scope.showMenu_chef = true;
				}, 
				function(response){
					$scope.message_chef = "Error: "+response.status + " " + response.statusText;
				}
			);
		
		
        //$scope.culinary = corporateFactory.getLeader(2);
        $scope.featureDish = menuFactory.getDishes().get({id:0});
    }])

    .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory){

		$scope.showMenu_leaders = false;
		$scope.message_leaders = "Loading...";
		corporateFactory.getLeaders().query(
			function(response){
				$scope.leaders = response;
				$scope.showMenu_leaders = true;
			},function(response){
				$scope.message_leaders = "Error: "+response.status + " " + response.statusText;
			}
		);


    }])