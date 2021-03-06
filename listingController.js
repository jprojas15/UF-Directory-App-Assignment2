angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      for (var i=0; i<Listings.length; i++) {
        if (Listings[i].code.toLowerCase() > $scope.input.inputCode.toLowerCase()) {

          $scope.listings.splice(
            i,
            0,
            {
              'code': $scope.input.inputCode, 
              'name': $scope.input.inputName, 
              'coordinates': {
                'latitude': $scope.input.inputLatitude, 
                'longitude': $scope.input.inputLongitude
              }, 
              'address': $scope.input.inputAddress
            }
          );
          
          $scope.input="";
          break;
        }
      }
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice($scope.listings.indexOf(index), 1);
    };

    $scope.showDetails = function(index) {
      for(var i = 0; i<Listings.length; i++){
        if(Listings[i].code == index){
          $scope.detailedInfo = Listings[i];
          break;
        }
      }
    };
  }
]);