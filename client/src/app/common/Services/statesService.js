/**
 * Created by alexbostic on 6/27/15.
 */
angular.module('commonModule').factory('common.statesRecallsService', statesRecallsService);
statesRecallsService.$inject = [];

function statesRecallsService() {



    var statesRecalls = {};

    //security.service public API
    var service = {
        addStateRecall:addStateRecall,
        getRecallsByState:getRecallsByState,
        getStateRecalls:getStateRecalls
    };

    return service;

    function addStateRecall(state){
        if (state !== null){
            if (state in statesRecalls) {
                statesRecalls[state]++;
            }
            else {
                statesRecalls[state] = 1;
            }
        }
    }

    function getStateRecalls(){
        return statesRecalls;
    }

    function getRecallsByState(state){
        if(state){
            return statesRecalls[state];
        }
    }

}