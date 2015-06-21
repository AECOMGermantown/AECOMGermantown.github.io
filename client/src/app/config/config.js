/**
 * Created by alexbostic on 6/19/15.
 */
'use strict';


var openFDAUrls = {
    recalls:'http://api.fda.gov/${recallType}/enforcement.json?&limit=1',
    recallsInfo:'http://api.fda.gov/${recallType}/enforcement.json?&limit=${limit}&skip=${skip}'
}




var settings = {
    openFDAUrls:openFDAUrls
};

angular.module('configModule').value('config', settings);



