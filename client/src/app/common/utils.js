/**
 * Created by alexbostic on 6/19/15.
 */
'use strict';

var commonModule = angular.module('commonModule');

commonModule.factory('common.utils',  utils);
utils.$inject = ['_'];

function utils (_){

    function subUrl(url,sub){

        for (var key in sub) {
            url.replace(key, sub[key]);
        }

        return url;

    }

    var utilFactory = {
        subUrl:subUrl
    }
    return utilFactory;
}