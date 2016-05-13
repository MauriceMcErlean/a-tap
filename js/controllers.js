angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
    .factory('drinkFactory', function() {

      var venues = [
        {
         title: 'Alibi', 
         Address:' 23-31 Bradbury Place, Queen’s Quarter, Belfast', 
         Image: 'img/venues/alibi.jpg',
          id: 1,
          drinks:
            [
              {
                title: 'WKD',
                price: '£3.50',
                id: '1',
              },
              {
                title: 'Vodka',
                price: '£3.50',
                id: '2',
              }
            ]
        },
        {
         title: 'Box', 
         Address:'2 Queens Quay, Belfast', 
         Image: 'img/venues/box.png',
          id: 2,
          drinks:
              [
                {
                  title: 'Shot of coke',
                  price: '£99.50',
                  id: '1',
                },
                {
                  title: 'Buckyboooooo',
                  price: '£3.50',
                  id: '2',
                }
              ]
        },
        {
         title: 'Chinawhite', 
         Address:'43 Franklin St, Belfast',
         Image: 'img/venues/chinawhite.jpg', 
         id: 3,
          drinks:
              [
                {
                  title: 'Shot of coke',
                  price: '£99.50',
                  id: '1',
                },
                {
                  title: 'Buckyboooooo',
                  price: '£3.50',
                  id: '2',
                }
              ]
        },
        {
         title: 'Limelight', Address:'17 Ormeau Ave, Belfast',Image: 'img/venues/limelight.jpg', id: 4,
          drinks:
              [
                {
                  title: 'Shot of coke',
                  price: '£99.50',
                  id: '1',
                },
                {
                  title: 'Buckyboooooo',
                  price: '£3.50',
                  id: '2',
                }
              ]
        },
        {
         title: 'Ollies', Address:'The Merchant Hotel, 35-39 Waring St, Cathedral Quarter, Belfast', Image: 'img/venues/ollies.jpg', id: 5,
          drinks:
              [
                {
                  title: 'Shot of coke',
                  price: '£99.50',
                  id: '1',
                },
                {
                  title: 'Buckyboooooo',
                  price: '£3.50',
                  id: '2',
                }
              ]
        },
        {title: 'XS', Address:'Belmont Hotel, Rathfriland Road Banbridge', Image: 'img/venues/xs.png',id: 6,
          drinks:
              [
                {
                  title: 'Shot of coke',
                  price: '£99.50',
                  id: '1',
                },
                {
                  title: 'Buckyboooooo',
                  price: '£3.50',
                  id: '2',
                }
              ]
        },
        {
         title: 'El Divino', Address:'Mays Meadow, Belfast', Image: 'img/venues/eldivino.png', id: 7,
          drinks:
              [
                {
                  title: 'Shot of coke',
                  price: '£99.50',
                  id: '1',
                },
                {
                  title: 'Buckyboooooo',
                  price: '£3.50',
                  id: '2',
                }
              ]
        },

      ];


      var currentvenue = null,
          currentdrink = null;

      return {
        getvenues: function() {
          return venues;
        },
        getvenue: function(id) {
          if (!id) return null;

          for (var pl in venues) {
            if (venues[pl].id == id) {
              currentvenue = venues[pl];
              return currentvenue;
            }
          }

          return null;
        },
        getdrink: function(venueId, drinkId) {
          // You don't have the current venue in this function see the console log below
          console.log("Current venue is", currentvenue);

          if (!venueId || !drinkId) return null;

          // Get the current venue with the venue Id grabbed from the state params
          var currentvenue = this.getvenue(venueId);

          // Print current venue as of now
          console.log("Current venue after grabbing it with ID:\n", currentvenue);

          // We want to loop through the drinks array
          for (var mu in currentvenue.drinks) {
            if (currentvenue.drinks[mu].id == drinkId) {

              // Assign drinks at mu index to the current drink
              currentdrink = currentvenue.drinks[mu];
              return currentdrink;
            }
          }

          return null;
        }
      }
    })

    .controller ('venuesCtrl', ['$scope', 'drinkFactory', function ($scope, drinkFactory) {

  $scope.venues = drinkFactory.getvenues();
}])

    .controller ('venueCtrl', ['$scope', '$stateParams', 'drinkFactory', function ($scope, $stateParams, drinkFactory) {

  // Here in when the venue selected by the Reggae id 1, show drink and use the venue name in the title of the page.
  var venue = drinkFactory.getvenue($stateParams.venueId);

  $scope.venueId = $stateParams.venueId;
  $scope.drinks = venue.drinks;
  $scope.title = venue.title;
}])

    .controller ('drinkCtrl', ['$scope', '$stateParams', 'drinkFactory', function ($scope, $stateParams, drinkFactory) {
  var drink = drinkFactory.getdrink($stateParams.venueId, $stateParams.drinkId);

  console.log("drink after calling get drink factory\n", drink);
  $scope.artist = drink.artist;
}]);