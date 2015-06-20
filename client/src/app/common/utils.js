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

    var utilFactory = {
        subUrl:subUrl
    }
    return utilFactory;
}