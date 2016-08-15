angular.module('yogabrasilia.controllers')

.controller('CardsCtrl', function($scope, $http) {

  var api = 'http://yoga.brasilia.io/cards/from-subdomain/';

  $http.get(api+'1.json').success(function(data, status, headers, config){
    $scope.cards = data;
  });

})