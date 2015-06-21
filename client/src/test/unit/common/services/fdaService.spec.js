/**
 * Created by alexbostic on 6/19/15.
 */

'use strict'

describe('fda Service', function () {

    var _$httpBackend, _$q, _fdaService, _recallModel, _toastr;


    beforeEach(module('commonModule', 'configModule','toastr','ui.router'));

    beforeEach(inject(['$httpBackend','$q','toastr','common.fdaService','config','common.recallModel',
        function (_$httpBackend_, _$q_,_toastr_,_fdaService_,_config_,_recallModel_) {
            _$httpBackend = _$httpBackend_;
            _$q = _$q_;
            _toastr = _toastr_;
            _recallModel = _recallModel_;
            _fdaService = _fdaService_;

        }]));

    afterEach(function () {
        _$httpBackend.verifyNoOutstandingExpectation();
        _$httpBackend.verifyNoOutstandingRequest();
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

        var url = 'http://api.fda.gov/food/enforcement.json?&limit=1';

        _$httpBackend.expectGET(url).respond(200, JSON.stringify(mockData.getRecallsResults()));

        _fdaService.getRecalls('food');
        _$httpBackend.flush();


        expect(rISpy.callCount).toBe(50);
        _fdaService.getRecallInfo.restore();

    });

    it('should show toast if request fails',function(){

        var toastSpy = sinon.spy(_toastr,'error');

        var url = 'http://api.fda.gov/food/enforcement.json?&limit=1';

        _$httpBackend.expectGET(url).respond(500, null);

        _fdaService.getRecalls('food');
        _$httpBackend.flush();


        expect(toastSpy.called).toBeTruthy();
        _toastr.error.restore();


    });

    it('should populate recalls with 100 results',function(){



        var url = 'http://api.fda.gov/food/enforcement.json?&limit=100&skip=100';

        _$httpBackend.expectGET(url).respond(200, JSON.stringify(mockData.getRecallsInfoResults()));

        _fdaService.getRecallInfo('food',100);
        _$httpBackend.flush();


        expect(_fdaService.recalls.length).toBe(100);


    });

    it('should create 100 recalls',function(){

        var recallSpy = sinon.spy(_recallModel,'create');

        var url = 'http://api.fda.gov/food/enforcement.json?&limit=100&skip=100';

        _$httpBackend.expectGET(url).respond(200, JSON.stringify(mockData.getRecallsInfoResults()));

        _fdaService.getRecallInfo('food',100);
        _$httpBackend.flush();


        expect(recallSpy.callCount).toBe(100);
        _recallModel.create.restore();


    });

    it('should show toast if request for recall info fails',function(){

        var toastSpy = sinon.spy(_toastr,'error');

        var url = 'http://api.fda.gov/food/enforcement.json?&limit=100&skip=100';

        _$httpBackend.expectGET(url).respond(500, null);

        _fdaService.getRecallInfo('food',100);
        _$httpBackend.flush();


        expect(toastSpy.called).toBeTruthy();
        _toastr.error.restore();


    });


});