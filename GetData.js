function fetchData(btnType) {
    alert("hi2");
    var arr = new Array();
    $.ajax({ // ajax call starts
        url: 'http://api.fda.gov/' + btnType + '/enforcement.json?&limit=' + perBatchAmount + '&skip=' + currentCount,
        dataType: 'json' // Choosing a JSON datatype
    })
    .fail(function () {
        alert("Ajax failed to fetch data in fetchData");
    })
    .done(function (data) { // Variable data contains the data we get from serverside
        debugger;
        for (var j in data.results) {
            arr.push(data.results[j].recall_number, data.results[j].reason_for_recall, data.results[j].status, data.results[j].recall_initiation_date);
            $('#listInfo').append(data.results[j].recall_number + '<br/>');
        }
    });

}
