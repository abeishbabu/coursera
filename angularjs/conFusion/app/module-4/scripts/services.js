  'use strict';
  angular.module('confusionApp')
  //.constant("baseURL","http://localhost:3000/")
  .constant("baseURL","https://abeish-ionic.herokuapp.com/")
  .factory('menuFactory',['$resource' , 'baseURL', function($resource, baseURL){

   var menuFac = {};

   menuFac.getDishes = function(){
		return $resource(baseURL + 'dishes/:id',null,  {'update':{method:'PUT' }});
   }

   // implement a function named getPromotion
   // that returns a selected promotion from server.
   menuFac.getPromotion =  function(){
		return $resource(baseURL + 'promotions/:id',null,  {'update':{method:'PUT' }});
    };

   return menuFac;
 }])


  .factory('corporateFactory',['$resource','baseURL', function($resource, baseURL) {

   var corpfac = {};

   // Implement function to return leaders details
   corpfac.getLeaders = function(){
      return $resource(baseURL + 'leadership/:id', null, {'update':{method:'PUT'}});
   }

   return corpfac;

 }])
 
 
 .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL){
	//return the feedback url for posting the data
	var feedbackfac = $resource(baseURL + 'feedback/:id');
	return feedbackfac;
 }])



;
