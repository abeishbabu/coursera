
var app = angular.module('confusionApp',[]);      
  app.controller('dishDetailController', ['$scope', function($scope) {

    var dish={
              name:'Uthapizza',
              image: 'images/uthapizza.png',
              category: 'mains', 
              label:'Hot',
              price:'4.99',
              description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
               comments: [
                   {
                       rating:5,
                       comment:"Imagine all the eatables, living in conFusion!",
                       author:"John Lemon",
                       date:"2012-10-16T17:57:28.556094Z"
                   },
                   {
                       rating:4,
                       comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                       author:"Paul McVites",
                       date:"2014-09-05T17:57:28.556094Z"
                   },
                   {
                       rating:3,
                       comment:"Eat it, just eat it!",
                       author:"Michael Jaikishan",
                       date:"2015-02-13T17:57:28.556094Z"
                   },
                   {
                       rating:4,
                       comment:"Ultimate, Reaching for the stars!",
                       author:"Ringo Starry",
                       date:"2013-12-02T17:57:28.556094Z"
                   },
                   {
                       rating:2,
                       comment:"It's your birthday, we're gonna party!",
                       author:"25 Cent",
                       date:"2011-12-02T17:57:28.556094Z"
                   }
                   
               ]
            };
          
          $scope.dish = dish;

          var comment = {name:"", 
                          rating:[{name:1, value:1},
   										           {name:2, value:2},
   										           {name:3, value:3},
   										           {name:4, value:4},
   										           {name:5, value:5}],
                          description:""};

          $scope.comment = comment;
          $scope.comment.userRating = 5;

          
      }]);

   app.controller('commentController' , ['$scope', function($scope){

   		$scope.insertComment = function(){

   			$scope.comment.date = new Date().toISOString();
   			var cmt ={};
   			$scope.cmt = cmt;
   			$scope.cmt.author = $scope.comment.name;
   			$scope.cmt.rating = ($scope.comment.userRating);
   			$scope.cmt.comment = $scope.comment.description;
   			$scope.cmt.date = $scope.comment.date;

   			$scope.dish.comments.push(cmt);

   			

   			$scope.comment = {name:"", rating:[{name:1, value:1},
   										{name:2, value:2},
   										{name:3, value:3},
   										{name:4, value:4},
   										{name:5, value:5}],description:""};
   			$scope.comment.userRating = 5;
   			$scope.commentForm.$setPristine();
   			console.log($scope.comment);
   		}

   }]);


