angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin(); 
    }, 1000);
  };
})

.controller('VenuesCtrl', function($scope) {
  $scope.venues = [
        {
         title: 'Alibi', 
         Address:' 23-31 Bradbury Place, Queen’s Quarter, Belfast', 
         Image: 'img/venues/alibi.jpg',
         id: 1,
          drinks:
            [
              {
                title: 'Drink1',
                id: '1',
              },
              {
                title: 'drink2',
                id: '2',

              }
            ]
        },
        {
         title: 'Box', 
         Address:'2 Queens Quay, Belfast', 
         Image: 'img/venues/box.png',
          id: 2,
          drink:
              [
                {
                  title: 'drink3',
                  id: '3',

                },
                {
                  title: 'drink4',
                  id: '4',
                }
              ]
        },

      ];
})

.controller('VenueCtrl', function($scope, $stateParams) {
});
