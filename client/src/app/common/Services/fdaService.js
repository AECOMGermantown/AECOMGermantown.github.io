/**
 * Created by alexbostic on 6/19/15.
 */
/**
 * Created by bing on 9/10/14.
 */
'use strict';

angular.module('commonModule').factory('common.fdaService', fdaService);
fdaService.$inject = ['$http', '$q', '$window', 'config','common.recallModel','common.utils'];

function fdaService($http, $q, $window, config,recallModel,utils) {
    // internal vars


    //security.service public API
    var service = {
        triggerFetch:triggerFetch
    };
    return service;

    //region public API funciton definitions
    // Attempt to authenticate a user by the given email and password

    function triggerFetch(btnType){

        var totalCount = 0;
        var currentCount = 0;
        var perBatchAmount = 100;

        var url = utils.subUrl(config.openFDAUrls.enforcement,{btnType:btnType})

        var request = $http.get(config.apiEndpoints.securityLogout);

    }


}
