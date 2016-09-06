// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
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
 .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
 
 .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
  .state('app.regist', {
      url: '/regist',
      views: {
        'menuContent': {
          templateUrl: 'templates/regist.html',
          controller: 'registCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.event', {
      url: '/event',
      views: {
        'menuContent': {
          templateUrl: 'templates/event.html',
          controller: 'eventCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controllers: 'search'
      },
      'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-positive" ng-click="login()"><i class="icon ion-android-search"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        
    }
  })
.state('traveler', {
      url: '/traveler',
      abstract: true,
      templateUrl: 'templates/traveler/menu.html'
    })
 .state('traveler.content', {
      url: '/content',
      views: {
        'menuContent': {
          templateUrl: 'templates/traveler/content.html'
        }
      }
    })
 .state('guide', {
      url: '/guide',
      abstract: true,
      templateUrl: 'templates/guide/menu.html'
    })
 .state('guide.content', {
      url: '/content',
      views: {
        'menuContent': {
          templateUrl: 'templates/guide/content.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/event');
});
