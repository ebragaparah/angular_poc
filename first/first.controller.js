'use strict';

angular.module('pocApp')
.controller('FirstCtrl', FirstCtrl);

FirstCtrl.$inject = ['$scope', 'FirstModel'];

function FirstCtrl($scope, FirstModel) {
  var vm = this;
  vm.name = FirstModel.name;
}
