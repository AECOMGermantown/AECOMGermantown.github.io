/**
 * Created by alexbostic on 6/20/15.
 */
'use strict'

describe('recalls Controller', function () {
    var controller, scope, _fdaService, _$analytics;
    var _$q, $rootScope, $controller;

    var getRecallsSpy;


    function createController() {
        controller = $controller('recallsController',
            {

                fdaService: _fdaService
            }
        );
    }

    beforeEach(module('commonModule', 'recallsModule','toastr','configModule','ui.router','angulartics', 'angulartics.google.analytics'));

    beforeEach(inject(['$q', '$controller','$analytics', '$rootScope', 'common.fdaService',
        function (_$q_, _$controller_, _$analytics_, _$rootScope_, _fdaService_) {
            _$q = _$q_;
            $controller = _$controller_;
            scope = _$rootScope_.$new();
            _$analytics = _$analytics_;
            _fdaService = _fdaService_;




            sinon.stub(_fdaService, "getRecallInfo", function (){
                var deferred = _$q.defer();
                deferred.resolve();
                return deferred.promise;
            });


            createController();
            _$rootScope_.$apply();
        }]));

    beforeEach(function () {
        sinon.stub(_$analytics,'eventTrack',function(){
            return;
        });
    });

    afterEach(function () {


        _fdaService.getRecallInfo.restore();
        _$analytics.eventTrack.restore();
    });

    it('should be defined', function () {
        expect(controller).toBeDefined();

    });

    it('should call getRecalls in fdaService', function (){

        getRecallsSpy = sinon.stub(_fdaService, "getRecalls", function () {
            var deferred = _$q.defer();
            _fdaService.recalls = [1,2,3,4,5];
            deferred.resolve();
            return deferred.promise;
        });
        controller.getRecalls('food');

        expect(getRecallsSpy.called).toBeTruthy();
        _fdaService.getRecalls.restore();
    });

    it('should set recalls', function (){

        _fdaService.recalls = [];
        controller.recalls = [4,5,6,7];
        getRecallsSpy = sinon.stub(_fdaService, "getRecalls", function () {
            var deferred = _$q.defer();
            _fdaService.recalls = [1,2,3,4,5];
            deferred.resolve([]);
            return deferred.promise;
        });

        controller.getRecalls('food');

        scope.$apply();

        expect(controller.recalls).toBe(_fdaService.recalls);
        _fdaService.getRecalls.restore();
    });

    it('should not set recalls', function (){


        _fdaService.recalls = controller.recalls = [4,5,6,7];
        getRecallsSpy = sinon.stub(_fdaService, "getRecalls", function () {
            var deferred = _$q.defer();
            _fdaService.recalls = [1,2,3,4,5];
            deferred.reject([]);
            return deferred.promise;
        });

        controller.getRecalls('food');

        scope.$apply();

        expect(controller.recalls).not.toBe( _fdaService.recalls);
        _fdaService.getRecalls.restore();
    });
});