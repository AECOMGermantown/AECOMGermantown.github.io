/**
 * Created by alexbostic on 6/19/15.
 */
/**
 * Created by bing on 9/10/14.
 */
'use strict';

angular.module('commonModule').factory('common.fdaService', fdaService);
fdaService.$inject = ['$http', '$q', 'toastr', 'config','common.recallModel','common.utils'];

function fdaService($http, $q, toastr, config,recallModel,utils) {
    // internal vars
    var perBatchAmount = 100;
    var recalls = [];

    //security.service public API
    var service = {
        getRecalls:getRecalls,
        getRecallInfo:getRecallInfo,
        recalls:recalls
    };
    return service;

    //region public API funciton definitions
    // Attempt to authenticate a user by the given email and password

    function getRecalls(recallType){

        var totalCount = 0;
        var currentCount = 0;
        var recallInfoRequest = [];


        var url = utils.subUrl(config.openFDAUrls.recalls,{recallType:recallType})

        var request = $http.get(url);

        request.then(function(response){

            totalCount = response.data.meta.results.total > 5000 ? 5000 : response.data.meta.results.total;


            var requestRecallInfoCount = parseInt(totalCount / perBatchAmount);
            if ((totalCount % perBatchAmount) > 0) {
                requestRecallInfoCount++;
            }

            for (var i = 0; i < requestRecallInfoCount; i++) {
                currentCount = i * perBatchAmount;
                //call with service so it can be stubbed
                recallInfoRequest.push(service.getRecallInfo(recallType,currentCount));
            }

            return $q.all(recallInfoRequest);



        },function(response){
            toastr.error('Get Recalls Failed', 'Error');
        });

        return request;

    }

    function getRecallInfo(recallType,skip){

        var url = utils.subUrl(config.openFDAUrls.recallsInfo,{recallType:recallType,limit:perBatchAmount,skip:skip});

        var request = $http.get(url);

        return request.then(function(response){

            angular.forEach(response.data.results , function(resultInfo) {

                recalls.push(recallModel.create(resultInfo));


            });

        },function(response){
            toastr.error('Get Recall Info Failed', 'Error');
        });

    }


}
