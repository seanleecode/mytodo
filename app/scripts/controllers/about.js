'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
app.controller('AboutCtrl', function ($scope) {

  // 3d carousel: https://github.com/Wlada/angular-carousel-3d
  $scope.imgArr = [
    {"src":"http://worldversus.com/img/luffy.jpg"},
    {"src":"http://masterherald.com/wp-content/uploads/2015/01/iron-man.jpeg"},
    {"src":"http://cdn.akamai.steamstatic.com/steam/apps/253750/header.jpg"},
    {"src":"http://cdn.phys.org/newman/gfx/news/hires/2013/facebook_like_thumb.jpg"},
    {"src":"http://www.underconsideration.com/brandnew/archives/friendster_logo_detail.gif"}
  ];

  $scope.options = {
    sourceProp: 'src',
    visible: 5,
    perspective: 35,
    startSlide: 0,
    border: 3,
    width: 360,
    height: 270,
    space: 220
  };
});
