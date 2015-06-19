/**
 * Created by alexbostic on 4/19/15.
 */
(function () {
    'use strict';

    angular.module('searchModule').factory('searchService', searchService);
    searchService.$inject = ['$http','config'];

    function searchService($http,config) {

        //public vars


        //private variables
        var _searchTerm = '';

        init();

        var service = {
            docs:null,
            totalDocs:0,
            getDocs:getDocs,
            search:search
        };


        function init() {


        }

        return service;

        //public functions

        function search(keyword,page){

            if(keyword){
                _searchTerm = keyword;
            }

            var searchUrl = generateSolrQueryUrl(_searchTerm,page);
            var request = $http.jsonp(searchUrl+'&json.wrf=JSON_CALLBACK');
            return request.then(function (result) {
                var response = result.data.response;
                if(response.numFound > 0){
                    console.log(response.docs);
                    service.docs = response.docs;
                    service.totalDocs = response.numFound;
                }
                else{
                    console.log('no results');
                    service.docs = null;
                    service.totalDocs = 0;
                }

                return service.docs;
            });
        }

        //internal functions

        function generateSolrQueryUrl(keyword,page){
            var badCharacters = ['\\', '+', '-', '&', '|', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':', '"', ';', ' '];

            for (var i in badCharacters) {
                keyword = keyword.replace(badCharacters[i],'\\' + badCharacters[i]);
            }

            var url = config.searchSettings.solrQueryUrl.replace('%QUERY', encodeURIComponent(keyword));

            url += '&fl=' + config.searchSettings.fl;


            var start = page * config.searchSettings.rows - config.searchSettings.rows;

            url += '&start=' + start + '&rows=' + config.searchSettings.rows;

            return url;
        }

        function getDocs() {
            return service.docs;
        }

    }
})();