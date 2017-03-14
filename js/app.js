(function () {

  'use strict';

  angular
    .module('app', ['auth0.lock', 'angular-jwt', 'ui.router'])
    .config(config);

  function config($stateProvider, lockProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'js/ng-views/home.html',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'js/ng-views/login.html',
        controllerAs: 'vm'
      })
      .state('test', {
        url: '/test',
        controller: 'TestController',
        templateUrl: 'js/ng-views/test.html',
        controllerAs: 'vm'
      })

    lockProvider.init({
      clientID: 'dFMA0AqqccHHwGiNkKpvzxxw2Xplywyp',
      domain: 'nairul.auth0.com'
    });

    $urlRouterProvider.otherwise('/home');
  }

})();