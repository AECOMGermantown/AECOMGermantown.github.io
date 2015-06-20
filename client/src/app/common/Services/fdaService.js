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
            console.log(response);
            totalCount = response.data.meta.results.total > 5000 ? 5000 : response.data.meta.results.total > 5000;


            var requestRecallInfoCount = parseInt(totalCount / perBatchAmount);
            if ((totalCount % perBatchAmount) > 0) {
                requestRecallInfoCount++;
            }

            for (var i = 0; i < requestRecallInfoCount; i++) {
                currentCount = i * perBatchAmount;
                recallInfoRequest.push(getRecallInfo(recallType,currentCount));
            }

            return $q.all(recallInfoRequest);



        },function(response){

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

        });

    }


}
