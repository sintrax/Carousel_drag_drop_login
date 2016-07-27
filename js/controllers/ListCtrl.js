var app = angular.module('stangaOne1', ['ngAnimate', 'ngDragDrop']);

app.controller('listCtrl', function($scope) {
  $scope.list1 = [
    { 'title': 'StangaOne1', 'drag': true },
    { 'title': 'Simeon Karamarinov', 'drag': true },
    { 'title': 'HTML5', 'drag': true },
    { 'title': 'CSS3', 'drag': true },
    { 'title': 'JavaScript', 'drag': true },
    { 'title': 'AngularJS', 'drag': true },
    { 'title': 'Bootstrap3', 'drag': true },
    { 'title': 'jQuery', 'drag': true },
    { 'title': 'AJAX', 'drag': true },
    { 'title': 'JSON', 'drag': true }
  ];
});

