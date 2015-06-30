'use strict';

var app = angular.module('configModule');

app.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route
    //Don't uncomment this line
   //$urlRouterProvider.otherwise("/map");
    $stateProvider
       /*.state('home', {
            url: "/home",
            templateUrl: "recalls/recalls.tpl.html",
            caption: "Recalls",
            navOrder:1
        })*/
        .state('map', {
            url: "/map",
            templateUrl: "map/map.tpl.html",
            caption: "Recalls Map",
            navOrder:1
        })
});