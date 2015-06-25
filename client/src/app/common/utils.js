/**
 * Created by alexbostic on 6/19/15.
 */
'use strict';

var commonModule = angular.module('commonModule');

commonModule.factory('common.utils',  utils);
utils.$inject = ['_'];

function utils (_){

    function subUrl(url,sub){

        var compiled = _.template(url);
        var newUrl = compiled(sub);


        return newUrl;

    }

    // get color depending on population density value
    function getColor(d) {
        return d > 1000 ? '#9c0880' :
            d > 500  ? '#b6459a' :
                d > 200  ? '#cb71b2' :
                    d > 100  ? '#dba2cf' :
                                    '#edd1e7';
    }

    var utilFactory = {
        subUrl:subUrl,
        getColor:getColor
    }
    return utilFactory;
}