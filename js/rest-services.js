'use strict';

angular.module('contactsApp.restServices', ['ngResource'])
    .factory('contact', ['$resource',
        function ($resource) {
            //return $resource('http://localhost:3000/contacts/:contactId', {});
			return $resource('/contacts/:contactId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            //return $resource('http://localhost:3000/contacts/:contactId/reports', {});
			return $resource('/contacts/:contactId/reports', {});
        }]);