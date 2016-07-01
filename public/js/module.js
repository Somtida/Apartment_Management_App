'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/',
      template: '<h1>Welcome</h1>',
    })

    .state('showall', {
      url: '/showall',
      templateUrl: '/html/showall.html',
      controller: 'showallCtrl'
    })

    .state('apartment', {
      url: '/apartment',
      templateUrl: '/html/apartment.html',
      controller: 'apartmentCtrl'
    })
    .state('apartment.createApartment', {
      url: '/createApartment',
      templateUrl: '/html/createApartment.html',
      controller: 'apartmentCtrl'
    })
    .state('apartment.showAllApartment', {
      url: '/showAllApartment',
      templateUrl: '/html/showAllApartment.html',
      controller: 'apartmentCtrl'
    })


    .state('renter', {
      url: '/renter',
      templateUrl: '/html/renter.html',
      controller: 'renterCtrl'
    })
    .state('renter.createRenter',{
      url: '/createRenter',
      templateUrl: '/html/createRenter.html',
      controller: 'renterCtrl'
    })
    .state('renter.showAllRenter',{
      url: '/showAllRenter',
      templateUrl: '/html/showAllRenter.html',
      controller: 'renterCtrl'
    })


})

app.filter('phonenumber', function() {
	    /*
	    Format phonenumber as: c (xxx) xxx-xxxx
	    	or as close as possible if phonenumber length is not 10
	    	if c is not '1' (country code not USA), does not use country code
	    */

	    return function (number) {
		    /*
		    @param {Number | String} number - Number that will be formatted as telephone number
		    Returns formatted number: (###) ###-####
		    	if number.length < 4: ###
		    	else if number.length < 7: (###) ###
		    Does not handle country codes that are not '1' (USA)
		    */
	        if (!number) { return ''; }

	        number = String(number);

	        // Will return formattedNumber.
	        // If phonenumber isn't longer than an area code, just show number
	        var formattedNumber = number;

			// if the first character is '1', strip it out and add it back
			// var c = (number[0] == '1') ? '1 ' : '';
			number = number[0] == '1' ? number.slice(1) : number;

			// # (###) ###-#### as c (area) front-end
			var area = number.substring(0,3);
			var front = number.substring(3, 6);
			var end = number.substring(6, 10);

			if (front) {
				// formattedNumber = (c + "(" + area + ") " + front);
				formattedNumber = ("(" + area + ") " + front);
			}
			if (end) {
				formattedNumber += ("-" + end);
			}
			return formattedNumber;
	    };
	});
