'use strict';
var mapMod = angular.module('mapModule');

mapMod.controller('mapController', mapController);
mapController.$inject = ['L','config','common.utils','common.fdaService','common.statesRecallsService'];

function mapController(L,config,utils,fdaService,statesRecallsService) {

    var vm = this;

    vm.map = null;
    vm.mapInfo = {};
    var geojson;

    activate();

    function activate(){



        fdaService.getRecalls('food').then(function(resultRecalls){

            L.mapbox.accessToken = config.mbKey;

            if (L.Browser.mobile || ($(window).width() < 700)) {

                var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
                    dragging: 'false',
                    maxZoom: 3,
                    minZoom: 3
                });
                vm.map = L.map('map')
                    .addLayer(mapboxTiles).setView([37.8, -96], 3);
            } else {
               
                var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
                    dragging: 'false',
                    maxZoom: 4,
                    minZoom: 4
                });
                vm.map = L.map('map')
                    .addLayer(mapboxTiles).setView([37.8, -96], 4);
                             
            }

            vm.mapInfo = statesRecallsService.getStateRecalls();


            geojson = L.geoJson(config.statesData, {
                style: style,
                onEachFeature: onEachFeature
            }).addTo(vm.map);
        });




    }


    function style(feature) {
        return {
            weight: 3,
            opacity: 1,
            color: '#9c0880',
            dashArray: '0',
            fillOpacity: 1,
            fillColor: utils.getColor(vm.mapInfo[feature.properties.name])
        };
        //setTimeout(style(), 60000);
    }

    function highlightFeature(e) {
        var layer = e.target;

        if (($(window).width() > 700)) {
            layer.setStyle({
                weight: 3,
                color: '#86036D',
                dashArray: '',
                fillOpacity: 1,
                fillColor: '#86036D'
            });
        }


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
            focus: resetHighlight,
            click: highlightFeature
        });
    }

}

