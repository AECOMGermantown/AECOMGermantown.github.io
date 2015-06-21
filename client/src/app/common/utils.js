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
        return d > 1000 ? '#800026' :
            d > 500  ? '#BD0026' :
                d > 200  ? '#E31A1C' :
                    d > 100  ? '#FC4E2A' :
                        d > 50   ? '#FD8D3C' :
                            d > 20   ? '#FEB24C' :
                                d > 10   ? '#FED976' :
                                    '#FFEDA0';
    }

    var utilFactory = {
        subUrl:subUrl,
        getColor:getColor
    }
    return utilFactory;
}