'use strict';
var header = angular.module('headerModule');

header.controller('headerController', [ '$scope', '$state', headerController]);


function headerController( $scope, $state) {

    var vm = this;


    activate();

    function activate(){
        vm.routes = $state.get().filter(function (s){
            return s && s.navOrder;
        }).sort(function (s1, s2){
            return s1.navOrder > s2.navOrder;
        });
    }


    vm.isNavbarActive = function (stateName){
        return $state.current.name === stateName ? 'navActive' : '';
    };


    vm.routeChange = function(routeName){
        if($state.current.name !== routeName)
        {
            $state.go(routeName);
        }

    }




}
