'use strict';

angular.module('contactsApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
	'xeditable',
    'contactsApp.controllers',
    'contactsApp.contactsServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contacts', {
		templateUrl: 'partials/contact-list.html', 
		controller: 'contactListCtrl'});
    $routeProvider.when('/contacts/:contactId', {
		templateUrl: 'partials/contact-detail.html', 
		controller: 'contactDetailCtrl'});
	$routeProvider.when('/add', {
		templateUrl: 'partials/contact-add.html', 
		controller: 'contactAddCtrl'});
	$routeProvider.when('/edit', {templateUrl: 'partials/contact-edit.html', controller: 'contactEditCtrl'});
    $routeProvider.when('/contacts/:contactId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/contacts'});
}]);

function goBack() {
    window.history.go(-1)
}
contactsApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});