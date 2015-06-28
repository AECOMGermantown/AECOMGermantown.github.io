/**
 * Created by alexbostic on 6/19/15.
 */
/**
 * Created by bing on 9/10/14.
 */
'use strict';

angular.module('commonModule').factory('common.fdaService', fdaService);
fdaService.$inject = ['$http', '$q','$analytics', 'toastr', 'config','common.recallModel','common.utils','common.statesRecallsService'];

function fdaService($http, $q, $analytics, toastr, config,recallModel,utils,statesRecallsService) {
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
        var defer = $q.defer();

        request.then(function(response){
            $analytics.eventTrack('GetRecallsSuccess', {  category: 'RecallsService', label: recallType + ' Successful request' });
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

            return $q.all(recallInfoRequest).then(function(data){
                defer.resolve(data);
            });



        },function(response){
            //toastr.error('Get Recalls Failed', 'Error');
            $analytics.eventTrack('GetRecallsFail', {  category: 'RecallsService', label: recallType + ' Failed request' });
            return response;
        });

        return defer.promise;

    }

    function getRecallInfo(recallType,skip){

        var url = utils.subUrl(config.openFDAUrls.recallsInfo,{recallType:recallType,limit:perBatchAmount,skip:skip});

        var request = $http.get(url);

        var defer = $q.defer();

        request.then(function(response){
            $analytics.eventTrack('GetRecallInfoSuccess', {  category: 'RecallsService', label: recallType + '[' + skip + ']' + ' Successful request' });
            angular.forEach(response.data.results , function(resultInfo) {

                var rc = recallModel.create(resultInfo);
                recalls.push(rc);

                statesRecallsService.addStateRecall(rc.state);

            });
            defer.resolve(recalls);

        },function(response){
            //toastr.error('Get Recall Info Failed', 'Error');
            $analytics.eventTrack('GetRecallInfoFail', {  category: 'RecallsService', label: recallType + '[' + skip + ']' + ' Failed request' });
            //would usually call reject but  rate limits on api cause a failure
            defer.resolve(response);
        });

        return defer.promise;

    }


}


