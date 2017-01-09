angular.module('pocApp').factory('FirstModel', FirstModel);

function FirstModel() {
  var first = {};
  first.name = 'My name is first';

  return first;
}
