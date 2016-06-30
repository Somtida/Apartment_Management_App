'use strict';

var app = angular.module('myApp');

app.service('Apartment', function($http, $q){
  this.apartmentRooms = [];

  this.get = () => $http.get('/api/apartments');
      // .then(res => {
      //   this.apartmentRooms = res.data;
      //   console.log("this.apartmentRooms: ",this.apartmentRooms);
      // })
      // .catch(err=>{
      //   console.log("err: ",err);
      // })


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

app.service('Renter', function($http){
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
