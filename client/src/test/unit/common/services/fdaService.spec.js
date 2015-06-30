/**
 * Created by alexbostic on 6/19/15.
 */

'use strict'

describe('fda Service', function () {

    var _$httpBackend, _$q, _$analytics, _fdaService, _recallModel, _toastr, _config;
    var analyticSpy;


    beforeEach(module('commonModule', 'configModule','toastr','ui.router','angulartics', 'angulartics.google.analytics'));

    beforeEach(inject(['$httpBackend','$q','$analytics','toastr','common.fdaService','config','common.recallModel',
        function (_$httpBackend_, _$q_,_$analytics_,_toastr_,_fdaService_,_config_,_recallModel_) {
            _$httpBackend = _$httpBackend_;
            _$q = _$q_;
            _toastr = _toastr_;
            _config = _config_;
            _recallModel = _recallModel_;
            _fdaService = _fdaService_;
            _$analytics = _$analytics_;

        }]));

    beforeEach(function () {
        analyticSpy = sinon.stub(_$analytics,'eventTrack',function(){
            return;
        });
    });

    afterEach(function () {
        _$httpBackend.verifyNoOutstandingExpectation();
        _$httpBackend.verifyNoOutstandingRequest();
        _$analytics.eventTrack.restore();
    });


    it('should be registered', function () {
        expect(_fdaService).toBeDefined();
    });

    it('should call getRecallInfo 50 times',function(){



        var rISpy = sinon.stub(_fdaService,'getRecallInfo',function(){
            var deferred = _$q.defer();
            deferred.resolve();
            return deferred.promise;
        });

        var url = 'http://api.fda.gov/food/enforcement.json?api_key=' + _config.fdaKey + '&limit=1';

        _$httpBackend.expectGET(url).respond(200, JSON.stringify(mockData.getRecallsResults()));

        _fdaService.getRecalls('food');
        _$httpBackend.flush();


        expect(rISpy.callCount).toBe(50);
        _fdaService.getRecallInfo.restore();

    });

    it('should show toast if request fails',function(){



        var url = 'http://api.fda.gov/food/enforcement.json?api_key=' + _config.fdaKey + '&limit=1';

        _$httpBackend.expectGET(url).respond(500, null);

        _fdaService.getRecalls('food');
        _$httpBackend.flush();


        expect(analyticSpy.called).toBeTruthy();


    });

    it('should populate recalls with 100 results',function(){



        var url = 'http://api.fda.gov/food/enforcement.json?api_key=' + _config.fdaKey + '&limit=100&skip=100';

        _$httpBackend.expectGET(url).respond(200, JSON.stringify(mockData.getRecallsInfoResults()));

        _fdaService.getRecallInfo('food',100);
        _$httpBackend.flush();


        expect(_fdaService.recalls.length).toBe(100);


    });

    it('should create 100 recalls',function(){

        var recallSpy = sinon.spy(_recallModel,'create');

        var url = 'http://api.fda.gov/food/enforcement.json?api_key=' + _config.fdaKey + '&limit=100&skip=100';

        _$httpBackend.expectGET(url).respond(200, JSON.stringify(mockData.getRecallsInfoResults()));

        _fdaService.getRecallInfo('food',100);
        _$httpBackend.flush();


        expect(recallSpy.callCount).toBe(100);
        _recallModel.create.restore();


    });

    it('should show toast if request for recall info fails',function(){

        //var toastSpy = sinon.spy(_$analytics,'eventTrack');

        var url = 'http://api.fda.gov/food/enforcement.json?api_key=' + _config.fdaKey + '&limit=100&skip=100';

        _$httpBackend.expectGET(url).respond(500, null);

        _fdaService.getRecallInfo('food',100);
        _$httpBackend.flush();


        expect(analyticSpy.called).toBeTruthy();
        //_toastr.error.restore();


    });

});