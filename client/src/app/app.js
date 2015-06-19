/**
 * Created by alexbostic on 6/19/15.
 */
/*global angular*/
'use strict';
angular.module('openfdaApp', [
    'ngAria',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'commonModule',
    'configModule',
    'template.app'
]);


angular.module('openfdaApp').config(['$locationProvider', function ($locationProvider) {
    //turn on htl5Mode caused ui-router having trouble with nested routes when refresh page
    //resolution now is to put <base href="/"> in index.html, but this might not work with new version of Angular
    //see: https://github.com/angular-ui/ui-router/issues/116
    $locationProvider.html5Mode(true);

}]);

angular.module('openfdaApp').config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|W|w|):/);
}]);

//this is a work around to have previous state available all the time, see ui-router issue#92
angular.module('openfdaApp').run(function () {

});
