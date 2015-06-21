'use strict';
var mapMod = angular.module('mapModule');

mapMod.controller('mapController', mapController);
mapController.$inject = ['L','config','common.utils'];

function mapController(L,config,utils) {

    var vm = this;

    vm.map = null;
    vm.mapInfo = {};
    var geojson;

    activate();

    function activate(){

        L.mapbox.accessToken = config.mbKey;
        // Replace 'mapbox.streets' with your map id.
        var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
            attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
        });


        vm.map = L.map('map')
            .addLayer(mapboxTiles).setView([37.8, -96], 4);

        geojson = L.geoJson(config.statesData, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(vm.map);


    }


    function style(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: utils.getColor(feature.properties.density)
        };
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }

        vm.mapInfo.update(layer.feature.properties);
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        vm.mapInfo.update();
    }

    function zoomToFeature(e) {
        vm.map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }


}
