'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
app.controller('MainCtrl', function ($scope, localStorageService, $http) {
  var URL_SERVER = 'http://localhost:3000';
  // var URL_SERVER = 'http://ds057224.mongolab.com:57224/mytodo_db';
  var PATH = '/api';
  // var URL_SERVER = 'http://0.0.0.0:8000';

  // init params
  $scope.name = '';
  $scope.sku = '';

  $scope.productCollection = [];
  $scope.loadData = function(){
    var url = URL_SERVER + PATH + "/products";
    $http.get(url).
      success(function(data, status, headers, config) {
        // $scope.posts = data;
        var products = data;
        $scope.productCollection = products;

      }).
      error(function(data, status, headers, config) {
        // log error
      });
  };

  // $scope.todos = [];
  // var todosInStore = localStorageService.get('todos');
  // $scope.todos = todosInStore || [];  // for local storage
  // $scope.$watch('todos', function(){
  //   localStorageService.set('todos', $scope.todos);
  // }, true);

  // $scope.addTodo = function(){
  //   $scope.productCollection.push($scope.todo);
  //   $scope.todo = '';
  // };
  //
  // $scope.removeTodo = function(index){
  //   $scope.productCollection.splice(index,1);
  // };

  $scope.createData = function(){
    var url = URL_SERVER + PATH + "/products";
    var params = {
      name: $scope.name,
      sku: $scope.sku,
      price: 0
    }
    $http.post(url, params).
      success(function(data, status, headers, config) {
        console.log("YATA!");
        $scope.loadData();
        $scope.name = '';
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  }

  $scope.deleteData = function(idx){
    var id = $scope.productCollection[idx]._id;
    console.log("this ID: "+id);
    var url = URL_SERVER + PATH + "/products/" + id;
    $http.delete(url).
      success(function(data, status, headers, config) {
        $scope.loadData();
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  }

  $scope.updateData = function(idx){
    var obj = $scope.productCollection[idx];
    var id = obj._id;
    var url = URL_SERVER + PATH + "/products/" + id;
    var params = {
      name: obj.name,
      sku: obj.sku,
      price: 0
    }
    $http.put(url, params).
      success(function(data, status, headers, config) {
        console.log('update success!');
        $scope.loadData();
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  }

});
