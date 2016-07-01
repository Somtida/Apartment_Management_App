'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Apartment, Renter) {
  console.log('mainCtrl!');
  $scope.apartmentRooms = [];
  Apartment.get()
    .then(res=>{
      Apartment.apartmentRooms = res.data;
      $scope.apartmentRooms = Apartment.apartmentRooms;
      console.log("Apartment.apartmentRooms: ", Apartment.apartmentRooms);
    })
    .catch(err=>{
      console.log("err: ",err);
    })

  $scope.renters = [];
  Renter.get()
    .then(res=>{
      Renter.renters = res.data;
      $scope.renters = Renter.renters;

    })
    .catch(err => {
      console.log("err: ",err);
    })


});

app.controller('renterCtrl', function($scope, Renter) {
  console.log('renterCtrl!');
  $scope.showRenterEdit = false;
  $scope.showRenterBox = true;
  $scope.myindex;

  $scope.resetCreateRenterArea = () => {
    $scope.newRenter = null;
  }

  $scope.createNewRenter = () => {
    console.log("$scope.newRenter", $scope.newRenter);
    Renter.post($scope.newRenter)
      .then(res=>{
        console.log("posted");
      })
      .catch(err => {
        console.log("err: ",err);
      })
    $scope.newRenter = null;
  }

  $scope.deleteRenter = (index) => {
    let id = Renter.renters[index]._id;
    console.log("id: ",id);
    Renter.delete(id)
      .then(() =>{
        console.log("deleted");
      })
      .catch(err => {
        console.log("err: ", err);
      })
    // $scope.apartmentRooms.splice(index, 1);
    Renter.renters.splice(index, 1);
  }

  $scope.editRenter = (index) => {
    $scope.myindex = index;
    $scope.showRenterEdit = true;
    $scope.showRenterBox = false;
    let id = $scope.renters[index]._id;
    console.log("id: ",id);
    $scope.editRenterObj = angular.copy($scope.renters[index]);
  }

  $scope.saveEditRenter = () => {
    $scope.showRenterEdit = false;
    $scope.showRenterBox = true;
    console.log("$scope.editRenterObj:",$scope.editRenterObj);
    let id = $scope.editRenterObj._id;
    console.log("id: ",id);

    Renter.put(id, $scope.editRenterObj)
      .then(res=>{
        console.log("edited");
        console.log("res.data: ",res.data);
      })
      .catch(err=>{
        console.log("err: ",err);
      })

    Renter.renters[$scope.myindex] = $scope.editRenterObj;
  }

  $scope.cancelEditRenter = () => {
    $scope.showRenterEdit = false;
    $scope.showRenterBox = true;
  }

});

app.controller('apartmentCtrl', function($scope, Apartment) {
  console.log('apartmentCtrl!');
  // $scope.editRoomObj = [];
  $scope.editArea = false;
  $scope.showApartmentBox = true;
  $scope.myindex;

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

  $scope.deleteRoom = (index) => {

    let id = Apartment.apartmentRooms[index]._id;
    console.log("id: ",id);
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

  $scope.cancelEdit = () => {
    $scope.editArea = false;
    $scope.showApartmentBox = true;
  }

  $scope.editRoom = (index) => {
    $scope.myindex = index;
    $scope.editArea = true;
    $scope.showApartmentBox = false;
    let id = $scope.apartmentRooms[index]._id;
    console.log("id: ",id);
    $scope.editRoomObj = angular.copy($scope.apartmentRooms[index]);
    // console.log("$scope.editRoomObj: ",$scope.editRoomObj);
    // console.log($scope.editRoomObj.name);

  }
  $scope.saveEditRoom = () => {
    $scope.editArea = false;
    $scope.showApartmentBox = true;
    console.log("$scope.editRoomObj:",$scope.editRoomObj);
    let id = $scope.editRoomObj._id;
    console.log("id: ",id);

    Apartment.put(id, $scope.editRoomObj)
      .then(res=>{
        console.log("edited");
        console.log("res.data: ",res.data);
      })
      .catch(err=>{
        console.log("err: ",err);
      })

    Apartment.apartmentRooms[$scope.myindex] = $scope.editRoomObj;
  }

});

app.controller('showallCtrl', function($scope, Apartment){
  console.log('showallCtrl');
  $scope.showAllArea = true;
  $scope.showMoveInBox = false;
  let apartmentId, renterId;
  $scope.moveIn = (index) => {
    // $scope.index = index;
    $scope.showAllArea = false;
    $scope.showMoveInBox = true;
    apartmentId = $scope.apartmentRooms[index]._id;
    console.log("apartmentId: ",apartmentId);
    $scope.apartmentDetail = $scope.apartmentRooms[index];

  }
  $scope.addRenterToRoom = () => {
    console.log("$scope.selectedRenter: ",$scope.selectedRenter);
    renterId = $scope.selectedRenter._id;
    console.log("renterId: ",renterId);
    console.log("apartmentId: ",apartmentId);
    Apartment.putRenter(apartmentId, renterId)
      .then(res=>{
        console.log("moved in");
        console.log("res.data: ",res.data);
      })
      .catch(err=>{
        console.log("err: ",err);
      })

  }


})
