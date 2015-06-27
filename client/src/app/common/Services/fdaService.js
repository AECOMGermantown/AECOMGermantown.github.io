/**
 * Created by alexbostic on 6/19/15.
 */
/**
 * Created by bing on 9/10/14.
 */
'use strict';

angular.module('commonModule').factory('common.fdaService', fdaService);
fdaService.$inject = ['$http', '$q','$analytics', 'toastr', 'config','common.recallModel','common.utils'];

function fdaService($http, $q, $analytics, toastr, config,recallModel,utils) {
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

            return $q.all(recallInfoRequest);



        },function(response){
            toastr.error('Get Recalls Failed', 'Error');
            $analytics.eventTrack('GetRecallsFail', {  category: 'RecallsService', label: recallType + ' Failed request' });
        });

        return request;

    }

    function getRecallInfo(recallType,skip){

        var url = utils.subUrl(config.openFDAUrls.recallsInfo,{recallType:recallType,limit:perBatchAmount,skip:skip});

        var request = $http.get(url);

        return request.then(function(response){
            $analytics.eventTrack('GetRecallInfoSuccess', {  category: 'RecallsService', label: recallType + '[' + skip + ']' + ' Successful request' });
            angular.forEach(response.data.results , function(resultInfo) {

                recalls.push(recallModel.create(resultInfo));


            });

        },function(response){
            toastr.error('Get Recall Info Failed', 'Error');
            $analytics.eventTrack('GetRecallInfoFail', {  category: 'RecallsService', label: recallType + '[' + skip + ']' + ' Failed request' });
        });

    }


}










// FDA API call


var recallArray = new Array();
var lkupClassArray = new Array();
var lkupCtryArray = new Array();
var lkupStateArray = new Array();
var lkupCityArray = new Array();
var lkupStatusArray = new Array();
var resultsObject = {};

function Recall(rNum, reason, status, initDate, state, prodType, prodDescription, country, city, firm, reportDate, classification) {
    this.recall_number = rNum;
    this.reason_for_recall = reason;
    this.status = status;
    //"distribution_pattern"
    //"product_quantity"
    this.recall_initiation_date = initDate;
    this.state = state;
    //"event_id"
    this.product_type = prodType;
    this.product_description = prodDescription;
    this.country = country;
    this.city = city;
    this.recalling_firm = firm;
    this.report_date = reportDate;
    //"@epoch"
    //"voluntary_mandated"
    this.classification = classification;
    //"code_info"
    //"@id"
    //"openfda"
    //"initial_firm_notification"
}


// I have an object that stores the counts
// resultsObject['MD'] will return the count for Maryland so you can use any state code


function getList() {
    for (var i = 0; i < recallArray.length; i++)
        $('#listInfo').append(i + ': ' + recallArray[i].recall_number + ', ' + recallArray[i].classification + '<br/>');
        //alert(resultsObject['MD']);
}

function getLkupList() {
    // store unique status
    $.each(recallArray, function (key, value) {
        if ($.inArray(value.status, lkupStatusArray) == -1)
            lkupStatusArray.push(value.status);
    });

    // store unique country
    $.each(recallArray, function (key, value) {
        if ($.inArray(value.country, lkupCtryArray) == -1)
            lkupCtryArray.push(value.country);
    });

    // store unique state
    $.each(recallArray, function (key, value) {
        if ($.inArray(value.state, lkupStateArray) == -1)
            lkupStateArray.push(value.state);
    });

    // store unique city
    $.each(recallArray, function (key, value) {
        if ($.inArray(value.city, lkupCityArray) == -1)
            lkupCityArray.push(value.city);
    });

    // store unique classification
    $.each(recallArray, function (key, value) {
        if ($.inArray(value.classification, lkupClassArray) == -1)
            lkupClassArray.push(value.classification);
    });

    // debugger;
}



function resetList() {
    recallArray = new Array();
}

function triggerFetch(btnType) {
    var totalCount = 0;
    var currentCount = 0;
    var perBatchAmount = 100;

    $.ajax({ // ajax call starts
        url: 'http://api.fda.gov/' + btnType + '/enforcement.json?api_key=OcwgoDc41cB1ppVVXhOlS2hEGs4ky23AoB1MLBFB&limit=1',
        dataType: 'json' // Choosing a JSON datatype
    })
    .fail(function () {
        alert("Ajax failed to fetch data in submit");
    })
    .done(function (data) { // Variable data contains the data we get from serverside
        $('#listInfo').html(''); // Clear div
        totalCount = data.meta.results.total;
        if (totalCount > 5000) {
            totalCount = 5000;
        }
        $('#listInfo').append("Total Count is: " + totalCount + '<br/>');

        var loopCount = parseInt(totalCount / perBatchAmount);
        if ((totalCount % perBatchAmount) > 0) {
            loopCount++;
        }
        $('#listInfo').append("Loop Count: " + loopCount + '<br/>');
        for (var i = 0; i < loopCount; i++) {
            currentCount = i * perBatchAmount;
            fetchData(btnType, perBatchAmount, currentCount);
        }
        

    });
}


function fetchData(btnType, perBatchAmt, currentCnt) {
    $.ajax({ // ajax call starts
        url: 'http://api.fda.gov/' + btnType + '/enforcement.json?api_key=OcwgoDc41cB1ppVVXhOlS2hEGs4ky23AoB1MLBFB&limit=' + perBatchAmt + '&skip=' + currentCnt,
        dataType: 'json' // Choosing a JSON datatype
    })
    .fail(function (data) {
        //debugger;
        alert("Ajax failed to fetch data in fetchData");
    })
    .done(function (data) { // Variable data contains the data we get from serverside
        //Clear the resultsObject
        //Object.keys(resultsObject).length = 0;
        //alert(resultsObject.length)
        for (var j in data.results) {
            recallArray.push(
                new Recall(
                    data.results[j].recall_number, 
                    data.results[j].reason_for_recall, 
                    data.results[j].status, 
                    data.results[j].recall_initiation_date,
                    data.results[j].state,
                    data.results[j].product_type,
                    data.results[j].product_description,
                    data.results[j].country,
                    data.results[j].city,
                    data.results[j].recalling_firm,
                    data.results[j].report_date,
                    data.results[j].classification));
                    
                    updateResults(data.results[j].state);
        }
        //debugger;
    });
}

function updateResults(key) {
    //If the key already exists increment the value by 1
    //Otherwise add a new key/value pair
    if (key != null){
        if (key in resultsObject) {
            resultsObject[key] = resultsObject[key] + 1;
        }
        else {
            resultsObject[key] = 1;
        }
    }
}



function getRecallByState(state) {
    return resultsObject[state];
}


$(document).ready(function () {
    triggerFetch("food");
});

