/**
 * Created by alexbostic on 4/18/15.
 */
(function () {
    'use strict';

    var search = angular.module('searchModule');

    search.controller('searchBoxController', searchBoxController);
    searchBoxController.$inject = ['Bloodhound','config','searchService'];

    function searchBoxController(Bloodhound,config, searchService) {
        /*jshint validthis:true */
        var vm = this;



        activate();

        function activate(){
            vm.suggestOptions = {
                highlight: true,
                hint: true,
                minLength: 1
            };

            var suggest = new Bloodhound({
                datumTokenizer: function(d) {
                    return Bloodhound.tokenizers.whitespace(d.value);
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                limit: 10,
                minLength: 3,

                remote: {
                    url: config.searchSettings.solrSuggestUrl,
                    ajax: {
                        dataType: 'jsonp',

                        data: {
                            'wt': 'json',
                            'rows': 5
                        },

                        jsonp: 'json.wrf'
                    },
                    filter: function(data) {
                        //console.log(data);
                        var jsonObject = data.suggest.mySuggester[Object.keys(data.suggest.mySuggester)[0]];
                        if (jsonObject && jsonObject.suggestions && jsonObject.suggestions.length > 0) {
                            return $.map(jsonObject.suggestions, function (suggestion) {

                                // Replace all <b> tags
                                var kw = suggestion.term.replace(/<b>/g,'');
                                // Replace all </b> tags. Requires regex because of "/"
                                var tag = '</b>';
                                var replace = new RegExp(tag, 'g');
                                kw = kw.replace(replace,'');
                                return {
                                    value: kw
                                };
                            });
                        }
                        return [];
                    }
                }
            });

            suggest.initialize();

            vm.emihDataset = {
                displayKey: 'value',
                source: suggest.ttAdapter()
            };
        }



        //logger.log('in home','home',null);
        //vm.focusMe = false;
        vm.selectedKeyword = null;
        //vm.searchUrlString = "api/search/data/keywordList?q=%QUERY";


        vm.doSearchEnter = function (keyEvent) {
            if (keyEvent.which === 13) {
                vm.doSearch();
            }

        }

        vm.doSearch = function () {
            if (vm.selectedKeyword) {
                var kw = vm.selectedKeyword;
                if(kw.value){
                    kw = kw.value.replace('<b>','');
                    kw = kw.replace('</b>','');
                }
                vm.wmataDocs = [];
                searchService.search(kw,1);
            }
        }

        vm.clearText = function(){
            vm.selectedKeyword = { keyword: '' };
            vm.focusMe = true;
        };

        vm.clearSearchInput = function(keyEvent){
            if (keyEvent.which === 13) {
                vm.clearText();
            }
        }
    }


})();



