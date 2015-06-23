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



function getList() {
    for (var i = 0; i < recallArray.length; i++)
        $('#listInfo').append(i + ': ' + recallArray[i].recall_number + ', ' + recallArray[i].classification + '<br/>');
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

    debugger;
}



function resetList() {
    recallArray = new Array();
}

function triggerFetch(btnType) {
    var totalCount = 0;
    var currentCount = 0;
    var perBatchAmount = 100;

    $.ajax({ // ajax call starts
        url: 'http://api.fda.gov/' + btnType + '/enforcement.json?&limit=1',
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
    alert(btnType);
    $.ajax({ // ajax call starts
        url: 'http://api.fda.gov/' + btnType + '/enforcement.json?&limit=' + perBatchAmt + '&skip=' + currentCnt,
        dataType: 'json' // Choosing a JSON datatype
    })
    .fail(function (data) {
        //debugger;
        alert("Ajax failed to fetch data in fetchData");
    })
    .done(function (data) { // Variable data contains the data we get from serverside
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
    alert(key);
    if (key in resultsObject) {
        resultsObject[key] = resultsObject[key] + 1;
    }
    else {
        resultsObject[key] = 1;
    }
}

