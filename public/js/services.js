'use strict';

var app = angular.module('myApp');

app.service('Apartment', function($http, $q){
  this.apartmentRooms = [];

  this.get = () => $http.get('/api/apartments');

  this.post = newRoom => {
    return $http.post('/api/apartments', newRoom);
  }
  this.delete = id => {
    return $http.delete(`/api/apartments/${id}`);
  }
  this.putRenter = (id, renterId) => {
    return $http.put(`/api/apartments/${id}/addRenter/${renterId}`);
  }
  this.put = (id, newRoom) => {
    return $http.put(`/api/apartments/${id}`, newRoom);
  }

})

app.service('Renter', function($http){
  this.renters = [];
  this.get = () => {
    return $http.get('/api/renters');
  }
  this.post = newRenter => {
    return $http.post('/api/renters', newRenter);
  }
  this.delete = id => {
    return $http.delete(`/api/renters/${id}`);
  }
  this.put = (id, newRenter) => {
    return $http.put(`/api/renters/${id}/`, newRenter);
  }
})
