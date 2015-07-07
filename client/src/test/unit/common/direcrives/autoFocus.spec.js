/**
 * Created by alexbostic on 4/6/15.
 */
'use strict';

describe('autoFocus directive', function () {

    var $rootScope, $scope,$compile, element;

    beforeEach(module('commonModule'));

    beforeEach(inject(['$compile','$rootScope',function(_$compile_, _$rootScope_){
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $scope = $rootScope.$new();

        element = angular.element('<div auto-focus></div>');
        $compile(element)($scope);
        $scope.$digest();

        sinon.spy(element[0],'focus');
    }]));

    it('should set element focus',function(){
       expect(element[0].focus.called);
    });
});