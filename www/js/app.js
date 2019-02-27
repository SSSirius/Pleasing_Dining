// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform,$rootScope) {
	// $rootScope.host = "http://localhost:8100/";
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js


  $stateProvider


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('intro', {
      url: '/',
      templateUrl: 'templates/intro.html',
      controller: 'IntroCtrl'
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
       .state('tab.dash-aim', {
           url: '/dash/aim',
           views: {
               'tab-dash': {
                   templateUrl: 'templates/tab-dash-aim.html',
                   controller: 'AimCtrl'
               }
           }
       })
       .state('tab.dash-food', {
           url: '/dash/food/:foodID',
           views: {
               'tab-dash': {
                   templateUrl: 'templates/tab-dash-food.html',
                   controller: 'DashfoodCtrl'
               }
           }
       })
       .state('tab.dash-material', {
           url: '/dash/material/:materialID',
           views: {
               'tab-dash': {
                   templateUrl: 'templates/tab-dash-material.html',
                   controller: 'DashmaterialCtrl'
               }
           }
       })
        .state('tab.dash-today', {
            url: '/dash/today',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash-today.html',
                    controller: 'TodayCtrl'
                }
            }
        })
  .state('tab.book', {
      url: '/book',
      views: {
        'tab-book': {
          templateUrl: 'templates/tab-book.html',
          controller: 'BookCtrl'
        }
      }
  })
         .state('tab.book-canteen', {
             url: '/book/canteen/:mealId',
             views: {
                 'tab-book': {
                     templateUrl: 'templates/tab-book-canteen.html',
                     controller: 'BookCtrl'
                 }
             }
         })
    .state('tab.book-detail', {
        url: '/book/floor/:bookId',
      views: {
        'tab-book': {
          templateUrl: 'templates/tab-book-detail.html',
          controller: 'BookDetailCtrl'
        }
      }
    })
       .state('tab.book-dish', {
           url: '/book/dish/:dishID',
           views: {
               'tab-book': {
                   templateUrl: 'templates/tab-book-dish.html',
                   controller: 'BookDishCtrl'
               }
           }
       })
       .state('tab.book-evaluation', {
           url: '/book/evaluation',
           views: {
               'tab-book': {
                   templateUrl: 'templates/tab-book-evaluation.html',
                   controller: 'BookEvaluationCtrl'
               }
           }
       })

  .state('tab.sport', {
      url: '/sport',
    views: {
        'tab-sport': {
            templateUrl: 'templates/tab-sport.html',
            controller: 'SportCtrl'
      }
    }
  })
       .state('tab.sport-add', {
           url: '/sport/add',
           views: {
               'tab-sport': {
                   templateUrl: 'templates/tab-sport-add.html',
                   controller: 'SportCtrl'
               }
           }
       })


     .state('tab.login', {
         url: '/login',
         views: {
             'tab-me': {
                 templateUrl: 'templates/tab-login.html',
                 controller: 'LoginCtrl'
             }
         }
     })
          .state('tab.signup', {
              url: '/signup',
              views: {
                  'tab-me': {
                      templateUrl: 'templates/tab-signup.html',
                      controller: 'LoginCtrl'
                  }
              }
          })
          .state('tab.me', {
              url: '/me',
              views: {
                  'tab-me': {
                      templateUrl: 'templates/tab-me.html',
                      controller: 'MeCtrl'
                  }
              }
          })
          .state('tab.mereflect', {
              url: '/me/reflect',
              views: {
                  'tab-me': {
                      templateUrl: 'templates/tab-mereflect.html',
                      controller: 'MeCtrl'
                  }
              }
          })
    .state('tab.me-aboutme', {
        url: '/me/aboutme',
          cache: 'true',
        views: {
            'tab-me': {
                templateUrl: 'templates/tab-aboutme.html',
                controller: 'AboutCtrl',
              
            }
        }
    })
      .state('tab.me-aboutme-name', {
          url: '/me/aboutme/name',
          views: {
              'tab-me': {
                  templateUrl: 'templates/tab-aboutme-name.html',
                  controller: 'AboutCtrl'
              }
          }
      })
       .state('tab.me-aboutme-gender', {
           url: '/me/aboutme/gender',
           views: {
               'tab-me': {
                   templateUrl: 'templates/tab-aboutme-gender.html',
                   controller: 'AboutCtrl'
               }
           }
       })
       
         .state('tab.me-aboutme-uni', {
             url: '/me/aboutme/uni',
             views: {
                 'tab-me': {
                     templateUrl: 'templates/tab-aboutme-uni.html',
                     controller: 'AboutCtrl'
                 }
             }
         })
         .state('tab.me-aboutme-date', {
             url: '/me/aboutme/date',
             views: {
                 'tab-me': {
                     templateUrl: 'templates/tab-aboutme-date.html',
                     controller: 'AboutCtrl'
                 }
             }
         })
    .state('tab.me-myinfo', {
        url: '/me/myinfo',
        views: {
            'tab-me': {
                templateUrl: 'templates/tab-myinfo.html',
                controller: 'MeCtrl'
            }
        }
    })
    
 
     .state('tab.me-myaim', {
         url: '/me/myaim',
         views: {
             'tab-me': {
                 templateUrl: 'templates/tab-myaim.html',
                 controller: 'AimCtrl'
             }
         }
     })

     .state('tab.me-mysta', {
         url: '/me/mysta',
         views: {
             'tab-me': {
                 templateUrl: 'templates/tab-mysta.html',
                 controller: 'MeCtrl'
             }
         }
     })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
