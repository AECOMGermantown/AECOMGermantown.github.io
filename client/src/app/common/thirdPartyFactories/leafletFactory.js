/**
 * Created by alexbostic on 4/9/15.
 */
/**
 * Created by alexbostic on 4/6/15.
 */
'use strict';

var commonModule = angular.module('commonModule');

commonModule.factory('L', function() {
    return window.L; //leaflet must already be loaded on the page
});
