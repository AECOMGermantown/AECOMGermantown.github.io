/**
 * Created by alexbostic on 6/19/15.
 */

'use strict'

describe('utils Service', function () {

    var _utilsFactory;


    beforeEach(module('commonModule'));

    beforeEach(inject(['common.utils',
        function (_utilsFactory_) {


            _utilsFactory = _utilsFactory_;

        }]));




    it('should be registered', function () {
        expect(_utilsFactory).toBeDefined();
    });


});