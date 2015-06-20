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

    it('should return url with proper substitution',function(){

        var exampleUrl = 'http://thisismyurls/${myVar1}/somemoretext/${myVar2}.json'

        var mySubs = {
            myVar1:'cool',
            myVar2:'beans'
        };

        var newUrl = _utilsFactory.subUrl(exampleUrl, mySubs);

        expect(newUrl).toBe('http://thisismyurls/cool/somemoretext/beans.json')


    })


});