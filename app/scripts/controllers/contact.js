'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mytodoApp
 */
app.controller('ContactCtrl', function ($scope, Flash, $http) {
  var URL_SERVER = 'http://localhost:3000';
  var PATH = '/api';

  $scope.name = '';
  $scope.email = '';
  $scope.message = '';

  $scope.createData = function(){
    var url = URL_SERVER + PATH + "/contact";
    var params = {
      name: $scope.name,
      email: $scope.email,
      message: $scope.message
    }

    if($scope.name != ''){
      $http.post(url, params).
        success(function(data, status, headers, config) {
          console.log("contact sent!");

          var message = "<strong>Feedback sent!</strong>";
          Flash.create('success', message, 'custom-class');
        }).
        error(function(data, status, headers, config) {
          // log error
        });
    }
  }
});
