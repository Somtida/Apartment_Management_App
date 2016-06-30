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
    .state('renter', {
      url: '/renter',
      templateUrl: '/html/renter.html',
      controller: 'renterCtrl'
    })

})
