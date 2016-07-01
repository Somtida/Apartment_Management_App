'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Apartment) {
  console.log('mainCtrl!');
  $scope.apartmentRooms = [];
  Apartment.get()
    .then(res=>{
      $scope.apartmentRooms = res.data;
      Apartment.apartmentRooms = res.data;
      console.log("Apartment.apartmentRooms: ", Apartment.apartmentRooms);
    })
    .catch(err=>{
      console.log("err: ",err);
    })


});

app.controller('renterCtrl', function($scope, Renter) {
  console.log('renterCtrl!');
  $scope.resetCreateRenterArea = () => {
    $scope.newRenter = null;
  }

  $scope.renters = [];
  Renter.get()
    .then(res=>{
      $scope.renters = res.data;
      // Renter.renters = res.data;
    })
    .catch(err => {
      console.log("err: ",err);
    })




});

app.controller('apartmentCtrl', function($scope, Apartment) {
  console.log('apartmentCtrl!');
  $scope.resetCreateApaArea = () => {
    $scope.newRoom = null;

  }

  $scope.createNewRoom = () => {
    console.log("newRoom: ", $scope.newRoom);
    Apartment.post($scope.newRoom)
      .then(()=>{
        console.log("posted");
      })
      .catch(err=>{
        console.log("err: ",err);
      })
    $scope.newRoom = null;
  }

});

app.controller('showallCtrl', function($scope, Apartment){
  console.log('showallCtrl');
  $scope.deleteRoom = (index) => {
    let id = $scope.apartmentRooms[index]._id;
    console.log("$scopeid: ",$scope.apartmentRooms[index]._id);
    Apartment.delete(id)
      .then(() =>{
        console.log("deleted");
      })
      .catch(err => {
        console.log("err: ", err);
      })
    // $scope.apartmentRooms.splice(index, 1);
    Apartment.apartmentRooms.splice(index, 1);
  }


})
