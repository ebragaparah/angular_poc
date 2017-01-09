'use strict';

angular.module('pocApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
  var vm = this;
  vm.data = 'main ctrl';
}
