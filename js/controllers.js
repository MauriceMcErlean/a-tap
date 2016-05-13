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
    .factory('MusicFactory', function() {

      var venues = [
        {
          title: 'Alibi', 
         Address:' 23-31 Bradbury Place, Queen’s Quarter, Belfast', 
         Image: 'img/venues/alibi.jpg',
          id: 1,
          musics:
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
          musics:
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
          currentMusic = null;

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
        getMusic: function(venueId, musicId) {
          // You don't have the current venue in this function see the console log below
          console.log("Current venue is", currentvenue);

          if (!venueId || !musicId) return null;

          // Get the current venue with the venue Id grabbed from the state params
          var currentvenue = this.getvenue(venueId);

          // Print current venue as of now
          console.log("Current venue after grabbing it with ID:\n", currentvenue);

          // We want to loop through the musics array
          for (var mu in currentvenue.musics) {
            if (currentvenue.musics[mu].id == musicId) {

              // Assign musics at mu index to the current music
              currentMusic = currentvenue.musics[mu];
              return currentMusic;
            }
          }

          return null;
        }
      }
    })

    .controller ('venuesCtrl', ['$scope', 'MusicFactory', function ($scope, MusicFactory) {

  $scope.venues = MusicFactory.getvenues();
}])

    .controller ('venueCtrl', ['$scope', '$stateParams', 'MusicFactory', function ($scope, $stateParams, MusicFactory) {

  // Here in when the venue selected by the Reggae id 1, show music and use the venue name in the title of the page.
  var venue = MusicFactory.getvenue($stateParams.venueId);

  $scope.venueId = $stateParams.venueId;
  $scope.musics = venue.musics;
  $scope.title = venue.title;
}])

    .controller ('MusicCtrl', ['$scope', '$stateParams', 'MusicFactory', function ($scope, $stateParams, MusicFactory) {
  var music = MusicFactory.getMusic($stateParams.venueId, $stateParams.musicId);

  console.log("Music after calling get music factory\n", music);
  $scope.artist = music.artist;
}]);