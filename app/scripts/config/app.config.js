(function () {
  'use strict';

  angular.module('com.config', ['angular-loading-bar'])

  .constant('ENV', {
      name: 'development',
      apiUrl: 'http://localhost:3000/api/',
      siteUrl: 'http://192.168.1.102:9000'
    })
    // APP Main Config

  .config(['cfpLoadingBarProvider',
    function (cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeBar = false;

    }
  ]);

})();
