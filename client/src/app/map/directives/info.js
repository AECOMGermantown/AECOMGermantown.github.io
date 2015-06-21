/**
 * Created by alexbostic on 6/21/15.
 */
'use strict';

var mapModule = angular.module('mapModule');


mapModule.directive('mapInfo', mapInfo);
mapInfo.$inject = ['L','common.utils'];

function mapInfo(L,utils) {
    return {
        restrict: 'A',
        scope: {
            map: '=',
            mapInfo:'='
        },
        link: function postLink(scope, elem) {



            var info = L.control();

            info.onAdd = function (map) {
                this._div = L.DomUtil.create('div', 'info');
                this.update();
                return this._div;
            };

            info.update = function (props) {
                info._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
                    '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
                        : 'Hover over a state');
            };

            scope.mapInfo.update = function(props){
                info.update(props);
            };

            info.addTo(scope.map);
        }
    };
}