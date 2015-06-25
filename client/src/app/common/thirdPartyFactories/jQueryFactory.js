/**
 * Created by alexbostic on 4/6/15.
 */
'use strict';

var commonModule = angular.module('commonModule');

commonModule.factory('$', function() {
    return window.$; //jQuery must already be loaded on the page
});
