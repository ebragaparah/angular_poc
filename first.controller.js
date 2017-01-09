'use strict';

angular.module('pocApp')
.controller('FirstCtrl', FirstCtrl);

FirstCtrl.$inject = ['$scope'];

function FirstCtrl($scope) {
  var vm = this;
  vm.data = 'first';
}
