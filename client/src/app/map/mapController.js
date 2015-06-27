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
            maxZoom: 4,
            dragging: false,
            touchZoom: false,
            scrollWheelZoom: false,
            minZoom: 4
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
            weight: 3,
            opacity: 1,
            color: '#9c0880',
            dashArray: '0',
            fillOpacity: 1,
            fillColor: utils.getColor(resultsObject[feature.properties.name])
        };
        setTimeout(style(), 60000);
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 3,
            color: '#86036D',
            dashArray: '',
            fillOpacity: 1,
            fillColor: '#86036D'
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
            mouseout: resetHighlight
            // click: zoomToFeature
        });
    }


}
