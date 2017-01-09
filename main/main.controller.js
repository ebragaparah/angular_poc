'use strict';

angular.module('pocApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'MainModel'];

function MainCtrl($scope, MainModel) {
  var vm = this;
  vm.name = MainModel.name;
}
