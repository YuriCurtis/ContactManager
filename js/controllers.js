'use strict';

var app = angular.module('contactsApp.controllers', [])

    app.controller('AppCtrl', ['$scope', '$rootScope', '$window', '$location', 'Contact', 
	function ($scope, $rootScope, $window, $location, Contact) {
		    
		// Animation
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
    app.controller('contactListCtrl', ['$scope', 'Contact', function ($scope, Contact) {
        // callback for ng-click 'createUser':
        $scope.addContact = function () {
            $location.path('/contact-add');
        };
		//query() returns all the contacts
		$scope.contacts = Contact.query(); 
    }])
	
// Contact Details Controller
    app.controller('contactDetailCtrl', ['$scope', '$routeParams', 'Contact', function ($scope, $routeParams, Contact) {
		// get() returns a single entry
        $scope.contact = Contact.get({contactId: $routeParams.contactId});
		// callback for ng-click 'delContact':
        $scope.delContact = function (contactId) {
            Contact.delete({ id: contactId });
            $scope.contact = Contact.query();
        };
  
    }]) 
	
// Contact Add Controller
    app.controller('contactAddCtrl', ['$scope', '$routeParams', 'Contact', function ($scope, $routeParams, Contact) {
		// callback for ng-click 'createUser':
        $scope.addContact = function() { //create a new contact
		// Start as not visible but when button is tapped it will show as true 
        $scope.visible = false;  		
			$scope.contact.$save(function() {
				Contact.create($scope.contact);
				$window.location.href = ''; //redirect to home
				/*$location.path('/contact-add');*/
			});
			
		};
    }])
// Contact Edit Controller - Try to use xeditable for inline editing instead
    app.controller('contactEditCtrl', ['$scope', '$routeParams', 'contact', function ($scope, $routeParams, contact) {
    // GET contacts current data
		$scope.contact = Contact.get({contactId: $routeParams.contactId});
		
	// Start as not visible but when button is tapped it will show as true 
        $scope.visible = false;

    // Create the array to hold the list of New Contacts
		$scope.contacts = contact.query();

    // Create the function to grab form data for the updated entry
    	$scope.editContact = function(){

    	};
	
    }])
	
// Manager Report List Controller
    app.controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', 
	function ($scope, $routeParams, Report) {
        $scope.contacts = Report.query({contactId: $routeParams.contactId});
    }])
// Authentication - needs to be implemented
	app.controller('loginController', ['$scope', '$http', 'UserService', function(scope, $http, User) {
		scope.login = function() {
		var config = { /* ... */ } // configuration object
	
		$http(config)
		.success(function(data, status, headers, config) {
			if (data.status) {
				// succefull login
				User.isLogged = true;
				User.username = data.username;
			}
			else {
				User.isLogged = false;
				User.username = '';
			}
		})
		.error(function(data, status, headers, config) {
			User.isLogged = false;
			User.username = '';
		});
	}
}]);;