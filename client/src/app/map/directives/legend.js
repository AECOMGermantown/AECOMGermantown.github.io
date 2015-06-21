/**
 * Created by alexbostic on 6/21/15.
 */
'use strict';

var mapModule = angular.module('mapModule');


mapModule.directive('mapLegend', mapLegend);
mapLegend.$inject = ['L','common.utils'];

function mapLegend(L,utils) {
    return {
        restrict: 'A',
        scope: {
            map: '='
        },
        link: function postLink(scope, elem) {

            var legend = L.control({position: 'bottomright'});

            legend.onAdd = function (map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                    labels = [],
                    from, to;

                for (var i = 0; i < grades.length; i++) {
                    from = grades[i];
                    to = grades[i + 1];

                    labels.push(
                        '<i style="background:' + utils.getColor(from + 1) + '"></i> ' +
                        from + (to ? '&ndash;' + to : '+'));
                }

                div.innerHTML = labels.join('<br>');
                return div;
            };

            legend.addTo(scope.map);
        }
    };
}