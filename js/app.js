'use strict';
var app = angular.module('stangaOne1', [
    'ngRoute',
    'ui.bootstrap'
    
])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home',{
            templateUrl:'views/home.view.html',
            controller: 'CarouselDemoCtrl'
        }).
        when('/list', {
            templateUrl: 'views/list.html',
            controller: 'listCtrl'
        }).
        when('/account', {
            templateUrl: 'account.html',
            controller: 'stangaOne1Account.js'
        }).
        
        
        otherwise({
            redirectTo: '/home', template:'views/home.html'
        });
}]); //application routing


