/**
 * Created by alexbostic on 6/19/15.
 */

'use strict'

describe('fda Service', function () {

    var _$httpBackend, _fdaService;


    beforeEach(module('commonModule', 'configModule'));

    beforeEach(inject(['$httpBackend','common.fdaService','config',
        function (_$httpBackend_, _fdaService_,_config_) {
            _$httpBackend = _$httpBackend_;

            _fdaService = _fdaService_;

        }]));

    afterEach(function () {
        _$httpBackend.verifyNoOutstandingExpectation();
        _$httpBackend.verifyNoOutstandingRequest();
    });


    it('should be registered', function () {
        expect(_fdaService).toBeDefined();
    });

    xit('should return call food end point',function(){


        _fdaService.triggerFetch('food').then(function(response){
            expect(response).not.toBeNull()
        })
    })


});