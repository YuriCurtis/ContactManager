'use strict';

(function () {

    var contacts = [
            {"id": 1, "firstName": "Dustin", "lastName": "Wells", "managerId": 0, "managerName": "", "reports": 1, "title": "Chairman and CEO", "department": "Corporate", "cellPhone": "512-000-0001", "officePhone": "512-000-0001", "email": "dwells@fakemail.com", "city": "Austin, TX", "img": "dustin-wells.jpg", "twitterId": "@fakedwells", "blog": "http://headspring.com"},
            {"id": 2, "firstName": "JT", "lastName": "McCormick", "managerId": 1, "managerName": "Dustin Wells", "reports": 3, "title": "President", "department": "Corporate", "cellPhone": "512-000-0002", "officePhone": "512-000-0002", "email": "jtmccormick@fakemail.com", "city": "Austin, TX", "img": "jt-mccormick.jpg", "twitterId": "@fakejtmccormick", "blog": "http://headspring.com"},
            {"id": 3, "firstName": "Glenn", "lastName": "Burnside", "managerId": 1, "managerName": "JT McCormick", "reports": 2, "title": "Exec VP, Operations", "department": "Operations", "cellPhone": "512-000-0003", "officePhone": "512-000-0003", "email": "gburnside@fakemail.com", "city": "Austin, TX", "img": "glenn-burnside.jpg", "twitterId": "@fakeglenn", "blog": "http://headspring.com"},
            {"id": 4, "firstName": "Jimmy", "lastName": "Bogard", "managerId": 2, "managerName": "JT McCormick", "reports": 3, "title": "Chief Technical Architect", "department": "Engineering", "cellPhone": "512-000-0004", "officePhone": "512-000-0004", "email": "jbogard@fakemail.com", "city": "Austin, TX", "img": "jimmy-bogard.jpg", "twitterId": "@fakejbogard", "blog": "http://headspring.com"},
            {"id": 5, "firstName": "Dave", "lastName": "Valentino", "managerId": 2, "managerName": "JT McCormick", "reports": 3, "title": "Dir. of Enterprise Sales", "department": "Sales", "cellPhone": "512-000-0005", "officePhone": "512-000-0005", "email": "dvalentino@fakemail.com", "city": "Austin, TX", "img": "dave-valentino.jpg", "twitterId": "@fakedvalentino", "blog": "http://headspring.com"},
            {"id": 6, "firstName": "Sharon", "lastName": "Slonaker", "managerId": 3, "managerName": "Glen Burnside", "reports": 1, "title": "Dir. of Human Resources", "department": "Human Resources", "cellPhone": "512-000-0006", "officePhone": "512-000-0006", "email": "sslonaker@fakemail.com", "city": "Austin, TX", "img": "sharon-slonaker.jpg", "twitterId": "@fakesslonaker", "blog": "http://headspring.com"},
            {"id": 7, "firstName": "Alonso", "lastName": "Robles", "managerId": 3, "managerName": "Glen Burnside", "reports": 0, "title": "Dir. of Client Services", "department": "Engineering", "cellPhone": "512-000-0007", "officePhone": "512-000-0007", "email": "arobles@fakemail.com", "city": "Austin, TX", "img": "alonso-robles.jpg", "twitterId": "@fakearobles", "blog": "http://headspring.com"},
            {"id": 8, "firstName": "Ben", "lastName": "Heebner", "managerId": 4, "managerName": "Jimmy Bogard", "reports": 0, "title": "Dir. of Engineering, Austin", "department": "Engineering", "cellPhone": "512-000-0008", "officePhone": "512-000-0008", "email": "bheebner@fakemail.com", "city": "Austin, TX", "img": "ben-heebner.jpg", "twitterId": "@fakebheebner", "blog": "http://headspring.com"},
            {"id": 9, "firstName": "Deran", "lastName": "Schilling", "managerId": 4, "managerName": "Jimmy Bogard", "reports": 0, "title": "Dir. of Engineering, Houston", "department": "Engineering", "cellPhone": "512-000-0009", "officePhone": "713-000-0009", "email": "dschilling@fakemail.com", "city": "Houston, TX", "img": "deran-schilling.jpg", "twitterId": "@fakedschilling", "blog": "http://headspring.com"},
            {"id": 10, "firstName": "Cedric", "lastName": "Yao", "managerId": 4, "managerName": "Jimmy Bogard", "reports": 0, "title": "Dir. of Engineering, Dallas", "department": "Engineering", "cellPhone": "512-000-0010", "officePhone": "512-000-0010", "email": "cyao@fakemail.com", "city": "Dallas, TX", "img": "cedric-yao.jpg", "twitterId": "@fakecyao", "blog": "http://headspring.com"},
            {"id": 11, "firstName": "Kristi", "lastName": "Schurk", "managerId": 6, "managerName": "Sharon Slonaker", "reports": 0, "title": "Lead Recruiter", "department": "Human Resources", "cellPhone": "713-000-0012", "officePhone": "512-000-0012", "email": "kschurk@fakemail.com", "city": "Austin, TX", "img": "kristi-schurk.jpg", "twitterId": "@fakekschurk", "blog": "http://headspring.com"},
			{"id": 12, "firstName": "Aaron", "lastName": "Doi", "managerId": 11, "managerName": "Kristi Schurk", "reports": 0, "title": "Recruiting Coordinator", "department": "Human Resources", "cellPhone": "512-000-0011", "officePhone": "512-000-0011", "email": "adoi@fakemail.com", "city": "Austin, TX", "img": "aaron-doi.jpg", "twitterId": "@fakeadoi", "blog": "http://headspring.com"}
        ],

        findById = function (id) {
            var contact = null,
                l = contacts.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (contacts[i].id === id) {
                    contact = contacts[i];
                    break;
                }
            }
            return contact;
        },

        findByManager = function (managerId) {
            var results = contacts.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };

// Interact with service locally emulating db back-end to create factory
    angular.module('contactsApp.contactsServices', [])
        .factory('Contact', [
            function () {
                return {
                    query: function () {
                        return contacts;
                    },
                    get: function (contact) {
                        return findById(parseInt(contact.contactId));
                    },
					update: {
					  	method: 'PUT' // issue a put request to update the contact
					}
                }

            }])
        .factory('Report', [
            function () {
                return {
                    query: function (contact) {
                        return findByManager(parseInt(contact.contactId));
                    }
                }

            }])
		.service('popupService',function($window){
			this.showPopup=function(message){
			return $window.confirm(message);
			}
		})
		.services.factory('UserService', [function() {
			var sdo = {
				isLogged: false,
				username: ''
			};
			return sdo;
		}]);

}());