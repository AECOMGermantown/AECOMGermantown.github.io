/**
 * Created by alexbostic on 4/18/15.
 */
(function () {
    'use strict';

    var search = angular.module('searchModule');

    search.controller('searchResultsController', searchResultsController);
    searchResultsController.$inject = ['$scope','searchService','config'];

    function searchResultsController($scope,searchService,config) {
        /*jshint validthis:true */
        var vm = this;

        vm.docs = searchService.docs;
        vm.maxSize = 5;
        vm.totalItems = 0;
        vm.currentPage = 1;
        vm.removeUrl = config.searchSettings.removeUrl;
        vm.addUrl = config.searchSettings.addUrl;

        activate();

        function activate(){
            $scope.$watch(searchService.getDocs, function (newValue, oldValue) {
                if(newValue){
                    vm.docs = searchService.docs;
                    vm.totalItems = searchService.totalDocs;
                }
            });
        }

        vm.pageChanged = function() {
            searchService.search(null,vm.currentPage);
        };




    }


})();




