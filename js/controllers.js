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
    { title: 'Alibi', Address:' 23-31 Bradbury Place, Queen’s Quarter, Belfast', Image: 'img/venues/alibi.jpg', id: 1 },
    { title: 'Box', Address:'2 Queens Quay, Belfast', Image: 'img/venues/box.png', id: 2 },
    { title: 'Chinawhite', Address:'43 Franklin St, Belfast',Image: 'img/venues/chinawhite.jpg', id: 3 },
    { title: 'Limelight', Address:'17 Ormeau Ave, Belfast',Image: 'img/venues/limelight.jpg', id: 4 },
    { title: 'Ollies', Address:'The Merchant Hotel, 35-39 Waring St, Cathedral Quarter, Belfast', Image: 'img/venues/ollies.jpg', id: 5 },
    { title: 'XS', Address:'Belmont Hotel, Rathfriland Road Banbridge', Image: 'img/venues/xs.png',id: 6 },
    { title: 'El Divino', Address:'Mays Meadow, Belfast', Image: 'img/venues/eldivino.png', id: 7 }
  ];
})

.controller('VenueCtrl', function($scope, $stateParams) {
});
