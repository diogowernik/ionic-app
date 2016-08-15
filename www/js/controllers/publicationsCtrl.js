angular.module('yogabrasilia.controllers')

.controller('PublicationsCtrl', function($scope, $http) {

  var api = 'http://yoga.brasilia.io/publications/from-subdomain/';

  $http.get(api+'1.json').success(function(data, status, headers, config){
    $scope.cards = data;
  });
  
})