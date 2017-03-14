(function () {
  'use strict';

  angular
    .module('app')
    .controller('TestController', TestController);

  function TestController(authService) {

    var vm = this;

    vm.authService = authService;

  }
})();