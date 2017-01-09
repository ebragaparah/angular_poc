angular.module('pocApp').factory('MainModel', MainModel);

function MainModel() {
  var main = {};
  main.name = 'My name is Main';
  
  return main;
}
