'use strict';
module.exports = function (config) {
    config.set({

        basePath : '../',

        files : [
            'app/app.vendor.js',
            'app/app.openfda.js',
            'app/app.template.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'node_modules/sinon/pkg/sinon.js',
            'test/unit/lib/mockdata.js',
            'test/unit/**/*.spec.js'
        ],

        autoWatch : false,

        frameworks: ['jasmine', 'sinon'],

       //browsers : ['Chrome'],
       browsers : ['PhantomJS'],

        singleRun: false,

       // logLevel: 'LOG_DEBUG',

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-safari-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-sinon'
        ],

        junitReporter : {
            outputFile: 'client_test_results.xml',
            suite: 'unit'
        },

        preprocessors : {
            'app/**/*.js' : ['coverage'],
            'common/**/*.js' : ['coverage']

        },

        reporters : ['dots', 'junit', 'coverage'],


        coverageReporter : {
            type: 'html',
            dir : 'coverage/'
        }

    });

};