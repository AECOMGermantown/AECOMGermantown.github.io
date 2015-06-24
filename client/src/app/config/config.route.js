'use strict';

var app = angular.module('configModule');

app.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
   $urlRouterProvider.otherwise("/map");
    $stateProvider
       .state('home', {
            url: "/home",
            templateUrl: "recalls/recalls.tpl.html",
            caption: "Recalls",
            navOrder:1
        })
        .state('map', {
            url: "/map",
            templateUrl: "map/map.tpl.html",
            caption: "Population Map",
            navOrder:1
        })

});