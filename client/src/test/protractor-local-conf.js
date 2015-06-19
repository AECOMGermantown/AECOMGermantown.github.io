
var config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/**/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,

    baseUrl: 'http://blm.local.com',

    framework: 'jasmine',

    suites:{
        security: 'e2e/security/**/*.spec.js',
        home: 'e2e/app/home/*.spec.js',
        header: 'e2e/app/header/*.spec.js',
        account: 'e2e/security/useraccount/*.spec.js',
        data: 'e2e/app/data/*.spec.js'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
exports.config = config;