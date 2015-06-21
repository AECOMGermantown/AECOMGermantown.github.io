'use strict';

var app = angular.module('configModule');

app.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home")

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "recalls/recalls.tpl.html",
            caption: "Recalls",
            navOrder:1
        })

});
