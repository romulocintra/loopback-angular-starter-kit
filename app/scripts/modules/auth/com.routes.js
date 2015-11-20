(function () {

  'use strict';

  angular
    .module('com.auth')
    .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('index', {
            url: '/',
            templateUrl: 'scripts/modules/auth/views/login.view.html',
            controller: 'LoginCtrl'
          });
      }
    ]);
})();
