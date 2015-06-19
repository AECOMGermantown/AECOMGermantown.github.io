//don't use NPM, use this command to pass in parameter
//node node_modules/.bin/protractor test/protractor-saucelab-conf.js [parameters]
//order is important
//first arg for url, --default to local: --local, --dev, --
//second arg for browser: --chrome, --all
//third arg for environment: --local, --saucelab
//forth arg is optional: --suite home(or other suite)
//command:
// for local: node node_modules/.bin/protractor test/protractor-saucelab-conf.js --local --all --saucelab
// for dev:


var browsers = require('./browsers'),
    creds = require('./saucelab_cred');

var suites = {
    security: 'e2e/security/**/*.spec.js',
    home: 'e2e/app/home/*.spec.js',
    header: 'e2e/app/header/*.spec.js',
    data: 'e2e/app/data/*.spec.js'
};

var config = {
    specs: [
        'e2e/**/*.js'
    ],

    framework: 'jasmine',
    allScriptsTimeout: 30000,
    getPageTimeout: 30000,
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 300000
    },

    onPrepare: function () {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
       require('jasmine-reporters');
        var capsPromise = browser.getCapabilities();

        //set browser screen
        browser.driver.manage().window().setSize(1280, 1024);

        capsPromise.then(function(caps) {
            var browserName = caps.caps_.browserName.toUpperCase();
            var browserVersion = caps.caps_.version;
            var prePendStr = browserName + "-" + browserVersion;
            jasmine.getEnv().addReporter(
                new jasmine.JUnitXmlReporter('e2e_test_report', true, true, prePendStr, true)
            );
        });
    }
};

//configure base url: local, dev
if (process.argv[3] === '--local') {
    config.baseUrl = 'http://blm.local.com';
} else if (process.argv[3] === '--dev') {
    console.log('done')
    config.baseUrl = 'https://blm-dev.gtntechsol.com';
} else {
    config.baseUrl = 'http://blm.local.com';
}

//configure browsers
if (process.argv[4] === '--chrome') {
    config.capabilities = browsers.chrome;
} else if (process.argv[4] === '--firefox') {
    config.capabilities = browsers.firefox;
} else if (process.argv[4] === '--safari') {
    config.capabilities = browsers.safari;
} else if (process.argv[4] === '--ie9') {
    config.capabilities = browsers.ie9;
} else if (process.argv[4] === '--ie10') {
    config.capabilities = browsers.ie10;
} else if (process.argv[4] === '--ie11') {
    config.capabilities = browsers.ie11;
} else if (process.argv[4] === '--ios_7_ipad') {
    config.capabilities = browsers.ios_7_ipad;
    if (process.argv[5] != '--saucelab') {
        config.seleniumAddress = 'http://localhost:4723/wd/hub';
    }
} else if (process.argv[4] === '--all') {
    config.multiCapabilities = [
        browsers.chrome,
        browsers.firefox,
        browsers.safari
        //browsers.ie9,
        //browsers.ie10
        //browsers.ie11
        // browsers.ios
    ];
}
    else if (process.argv[4] === '--ie') {
        config.multiCapabilities = [
            browsers.ie9,
            browsers.ie10,
            browsers.ie11];
}

//configure running location: local or on saucelab
if (process.argv[5] === '--saucelab') {
    //config sauce lab credentials
    config.sauceUser = process.env.SAUCE_USERNAME || creds.saucelab_cred.sauceUser;
    config.sauceKey = process.env.SAUCE_ACCESS_KEY || creds.saucelab_cred.sauceKey;
} else {
    //do nothing
}

if (process.argv[6] !== 'undefined' && process.argv[6] === '--suite') {
    config.suites = suites;
}

//print process.argv
//process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val);
//});
exports.config = config;