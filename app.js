var app = angular.module('foobar', []);

app.controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope'];

app.controller('FirstCtrl', FirstCtrl);
FirstCtrl.$inject = ['$scope'];

app.controller('SecondCtrl', SecondCtrl);
SecondCtrl.$inject = ['$scope'];

app.controller('ThirdCtrl', ThirdCtrl);
ThirdCtrl.$inject = ['$scope'];

app.controller('FourthCtrl', FourthCtrl);
FourthCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
  var vm = this;
  $scope.$on('msgFromSecondCtrl', function(event, data) {
    vm.msgFromSecondCtrl = data;
  });
  $scope.broadcastMainMsg = function() {
    $scope.$broadcast('mainCtrlMsg', [1, 2, 3, 4]);
  };
}

function FirstCtrl($scope) {
  var vm = this;
  $scope.$on('mainCtrlMsg', function(event, data) {
    vm.data = data[0];
  });
  $scope.$on('msgFromSecondCtrl', function(event, data) {
    vm.msgFromSecondCtrl = data;
  });
}

function SecondCtrl($scope) {
  var vm = this;
  $scope.$emit('msgFromSecondCtrl', 'emit do segundo controller');
  $scope.$on('mainCtrlMsg', function(event, data) {
    vm.data = data[1];
  });
}

function ThirdCtrl($scope) {
  var vm = this;
  $scope.$on('mainCtrlMsg', function(event, data) {
    vm.data = data[2];
  });
}

function FourthCtrl($scope) {
  var vm = this;
  $scope.$on('mainCtrlMsg', function(event, data) {
    vm.data = data[3];
  });
  $scope.$on('msgFromSecondCtrl', function(event, data) {
    vm.msgFromSecondCtrl = data;
  });
}
