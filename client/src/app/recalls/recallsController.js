/**
 * Created by alexbostic on 6/20/15.
 */

(function () {
    'use strict';

    var recalls = angular.module('recallsModule');

    recalls.controller('recallsController', recallsController);
    recallsController.$inject = ['common.fdaService'];

    function recallsController(fdaService) {
        /*jshint validthis:true */
        var vm = this;
        vm.recalls = [];

        vm.getRecalls = function (recallType) {
            vm.recalls = [];
           fdaService.getRecalls(recallType).then(function(resultRecalls){
               vm.recalls = fdaService.recalls;
           });

        };


    }


})();



