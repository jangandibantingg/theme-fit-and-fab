// creating Angular Module
var websiteApp = angular.module('websiteApp', []);
websiteApp.controller('FormController', function($scope, $http, $timeout,$location) {
	$scope.footerformData = {};
	$scope.successStatus = true;
	$scope.submitfooterForm = function(data) {
		
		$scope.successStatus = true;
		var status = true;
		if (data) {
			
			return false;
		} else {
			
			$http({
				method : 'POST',
				url : 'process.php',
				data : $.param($scope.footerformData), // pass in data as strings
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			}).success(function(data) {
				
				$scope.successStatus = false;
				$scope.footerformData = {};

				$('#footerSuccess').fadeIn(1000);
				$timeout(function() {
					$('#footerSuccess').fadeOut(1000);
				}, 1000);
			})
		};
	};
	
	//	CheckOut Registration Form
	
	 $scope.RegformData = {};
	 $scope.submitRegForm = function(data){	 	
	 	$scope.successStatusReg = true;
	 	var status = true;
		if (data) {
			return false;
		} else {
			$scope.successStatusReg = false;
				$scope.RegformData = {};
			}
	 }
	 
	 //	CheckOut Coupon Form
	 	
	 	$scope.CoupformData = {};
	 $scope.submitCoupForm = function(data){	
	 	//alert(555); 	
	 	$scope.successStatusCop = true;
	 	var status = true;
		if (data) {
			return false;
		} else {
			
			$scope.successStatusCop = false;
				$scope.CoupformData = {};
			}
	 }
	 
	 
	// CheckOut Billing Form
	
	$scope.formData = {};
	
	  $scope.checkOption = function(){
	  	$scope.country = false;
	  	
	  }
	  $scope.checkOption2 = function(){
	  	$scope.country1 = false;
	  }
	  $scope.submitcotactusForm = function(data) {
	  	$scope.successStatus = true;
	  	if(data == true){
	  		if(!$scope.formData.country)
	  		$scope.country = true;
	  		if(!$scope.formData.country1)
	  		$scope.country1 = true;
	  		return false;
	  	}
	  	else if(!$scope.formData.country){  		
	  		$scope.country = true;
	  		
	  		return false;
	  	}
	  	else{
	  		
	  		$scope.message = ""
	  		
	  		// here get the value of check box
	  		if($('#other-add').prop("checked") == true){                
			//alert($('#other-add').prop("checked"));
			}	
			$scope.successStatus = false;
			 $scope.formData = {};
			$('#other-add').attr('checked', false);;
			$('#msg').val("");
			$('#address2').val("");
			 $('#success').fadeIn(1000);
			 $timeout(function(){
			 $('#success').fadeOut(1000);
			 },1000);
		 //});
	
		}
	   };
}); 