/**
 * Created by alexbostic on 6/19/15.
 */
'use strict';

var config = angular.module('configModule', []);

var openFDAUrls = {
    enforcement:'http://api.fda.gov/{btnType}/enforcement.json?&limit=1'
}




var settings = {
    openFDAUrls:openFDAUrls
};

angular.module('configModule').value('config', settings);



