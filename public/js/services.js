'use strict';

var app = angular.module('myApp');

app.service('Apartment', function($http){
  this.get = () => {
    return $http.get('/api/apartments');
  }
  this.post = newRoom => {
    return $http.post('/api/apartments', newRoom);
  }
  this.delete = id => {
    return $http.delete(`/api/apartments/${id}`);
  }
  this.put = (id, newRoom) => {
    return $http.put(`/api/apartments/${id}/`, newRoom);
  }
  this.put = (id, renterId) => {
    return $http.put(`/api/apartments/${id}/addRenter/${renterId}`);
  }
})
