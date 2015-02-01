'use strict';

angular.module('contactsApp.controllers', [])
    .controller('AppCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
	
	// Contact Load Controller
    .controller('contactListCtrl', ['$scope', 'contact', function ($scope, contact) {
        $scope.contacts = contact.query();
    }])
	
	// Contact Details Controller
    .controller('contactDetailCtrl', ['$scope', '$routeParams', 'contact', function ($scope, $routeParams, contact) {
        $scope.contact = contact.get({contactId: $routeParams.contactId});
    }])
	
	// Contact Add Controller
    .controller('contactAddCtrl', ['$scope', '$routeParams', 'contact', function ($scope, $routeParams, contact) {
    // Start as not visible but when button is tapped it will show as true
		
	$scope.addUser = function(id) {
			if (id == 'new') {
					$scope.visible = true;
				} else {
					$scope.visible = false;
				}
			// Create the array to hold the list of New Contacts
			
				$scope.contacts = [];
				/*$scope.contacts = contact.query();*/
			
			// Create the function to push the data into the "contacts" array
				$scope.newContact = function(){
					$scope.contacts.push({
				 firstName:$scope.contactfirstName,
				  lastName:$scope.contactlastName,
					 email:$scope.contactemail,
					  date:$scope.contactdate,
					 title:$scope.contacttitle,
				department:$scope.contactdepartment,
			   managerName:$scope.contactmanagerName,
				   reports:$scope.contactreports,
			   officePhone:$scope.contactofficePhone,
				 cellPhone:$scope.contactcellPhone,
					  city:$scope.contactcity,
				   twitter:$scope.contacttwitterId,
					  blog:$scope.contactblog
					});
			
					$scope.contactfirstName = '';
					$scope.contactlastName = '';
					$scope.contactemail = '';
					$scope.contactdate = '';
					$scope.contactofficePhone = '';
					$scope.contactcellPhone = '';
					$scope.contacttitle = '';
					$scope.contactdepartment = '';
					$scope.contactmanagerName = '';
					$scope.contactreports = '';
					$scope.contactcity = '';
					$scope.contacttwitterId = '';
					$scope.contactblog = '';
					};
				};

    }])
	// Contact Edit Controller
    .controller('contactEditCtrl', ['$scope', '$routeParams', 'contact', function ($scope, $routeParams, contact) {
    // GET contacts current data
		$scope.contact = contact.get({contactId: $routeParams.contactId});
		
	// Start as not visible but when button is tapped it will show as true 
        $scope.visible = false;

    // Create the array to hold the list of New Contacts
		$scope.contacts = contact.query();

    // Create the function to grab form data for the updated entry
    	$scope.editContact = function(){

        $scope.contacts.$save({
     firstName:$scope.contactfirstName,
      lastName:$scope.contactlastName,
         email:$scope.contactemail,
          date:$scope.contactdate,
         title:$scope.contacttitle,
    department:$scope.contactdepartment,
   managerName:$scope.contactmanagerName,
       reports:$scope.contactreports,
   officePhone:$scope.contactofficePhone,
     cellPhone:$scope.contactcellPhone,
          city:$scope.contactcity,
       twitter:$scope.contacttwitterId,
          blog:$scope.contactblog
        });

        $scope.contactfirstName = '';
        $scope.contactlastName = '';
        $scope.contactemail = '';
        $scope.contactdate = '';
        $scope.contactofficePhone = '';
        $scope.contactcellPhone = '';
        $scope.contacttitle = '';
        $scope.contactdepartment = '';
        $scope.contactmanagerName = '';
        $scope.contactreports = '';
        $scope.contactcity = '';
        $scope.contacttwitterId = '';
        $scope.contactblog = '';

    };
	
	/*$scope.editContact.$save();*/
	
    }])
	
	// Manager Report List Controller
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.contacts = Report.query({contactId: $routeParams.contactId});
    }]);
	
	// Add Contact Controller
	/*.controller('addCtrl', ['$scope', 'contact', function($scope, contact) { */

    // Start as not visible but when button is tapped it will show as true 

        /*$scope.visible = false;*/

    // Create the array to hold the list of New Contacts

        /*$scope.contacts = [];*/

    // Create the function to push the data into the "contacts" array

 /*   $scope.newContact = function(){

        $scope.contacts.push({
     firstName:$scope.contactfirstName,
      lastName:$scope.contactlastName,
         email:$scope.contactemail,
          date:$scope.contactdate,
         title:$scope.contacttitle,
    department:$scope.contactdepartment,
   managerName:$scope.contactmanagerName,
       reports:$scope.contactreports,
   officePhone:$scope.contactofficePhone,
     cellPhone:$scope.contactcellPhone,
          city:$scope.contactcity,
       twitter:$scope.contacttwitterId,
          blog:$scope.contactblog
        });

        $scope.contactfirstName = '';
        $scope.contactlastName = '';
        $scope.contactemail = '';
        $scope.contactdate = '';
        $scope.contactofficePhone = '';
        $scope.contactcellPhone = '';
        $scope.contacttitle = '';
        $scope.contactdepartment = '';
        $scope.contactmanagerName = '';
        $scope.contactreports = '';
        $scope.contactcity = '';
        $scope.contacttwitterId = '';
        $scope.contactblog = '';

    };*/
/*}]);*/
