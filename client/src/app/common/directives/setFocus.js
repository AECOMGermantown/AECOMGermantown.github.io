'use strict';
var commonModule = angular.module('commonModule');

commonModule.directive('setFocus', setFocus);

setFocus.$inject = ['$parse'];
function setFocus ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.setFocus);
            scope.$watch(model, function(value) {

                if(value === true) {

                    element[0].focus();
                    model.assign(scope, false);
                }
            });
        }
    };
}