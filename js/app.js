angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    } 
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'VenuesCtrl'
      }
    }
  })

    .state('app.venues', {
      url: '/venues',
      views: {
        'menuContent': {
          templateUrl: 'templates/venues.html',
          controller: 'VenuesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/venues/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/venue.html',
        controller: 'VenueCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/venues');
});
