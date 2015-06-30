/**
 * Created by alexbostic on 6/30/15.
 */
'use strict'

describe('recall Model', function () {

    var _recallModel;


    beforeEach(module('commonModule'));

    beforeEach(inject(['common.recallModel',
        function (_recallModel_) {


            _recallModel = _recallModel_;

        }]));




    it('should be registered', function () {
        expect(_recallModel).toBeDefined();
    });

    it('should create a recall',function(){

        var data = {};
        data.recall_number = '509';
        data.reason_for_recall = 'dsadasdas';
        data.status = 'grgwgwegw';
        data.recall_initiation_date = '6/15/2015';
        data.state = 'NY';
        data.product_type = 'dasasdsad';
        data.product_description = 'hheergergre';
        data.country = 'US';
        data.city = 'Yonkers';
        data.recalling_firm = 'sdadasdas';
        data.report_date = '5/4/2015'
        data.classification = 'dsadasdsadsa';

        var rc = _recallModel.create(data);

        expect(rc.recall_number).toBe(data.recall_number);
        expect(rc.reason_for_recall).toBe(data.reason_for_recall);
        expect(rc.status).toBe(data.status);
        expect(rc.recall_initiation_date).toBe(data.recall_initiation_date);
        expect(rc.state).toBe(data.state);
        expect(rc.product_type).toBe(data.product_type);
        expect(rc.product_description).toBe(data.product_description);
        expect(rc.country).toBe(data.country);
        expect(rc.city).toBe(data.city);
        expect(rc.recalling_firm).toBe(data.recalling_firm);
        expect(rc.report_date).toBe(data.report_date);
        expect(rc.classification).toBe(data.classification);


    })


});