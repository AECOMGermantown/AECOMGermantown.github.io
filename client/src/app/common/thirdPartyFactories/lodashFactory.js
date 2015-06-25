/**
 * Created by alexbostic on 4/6/15.
 */
'use strict';

var commonModule = angular.module('commonModule');

commonModule.factory('_', function() {
    return window._; //loadash must already be loaded on the page
});
