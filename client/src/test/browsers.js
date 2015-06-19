exports.chrome = {
    name: 'Chrome',
    browserName: 'chrome'
};

exports.firefox = {
    name: 'Firefox',
    browserName: 'firefox'
};

exports.safari = {
    name: 'Safari',
    browserName: 'safari'
};

exports.ie9 = {
    name: 'IE 9',
    browserName: 'internet explorer',
    version: '9.0',
    tags: ['ie']
};

exports.ie10 = {
    name: 'IE 10',
    browserName: 'internet explorer',
    version: '10.0',
    tags: ['ie']
};

exports.ie11 = {
    name: 'IE 11',
    browserName: 'internet explorer',
    version: '11.0',
    tags: ['ie']
};

//// iOS for local or Sauce Labs (via Appium)
exports.ios_8_ipad = {
    name: 'iOS 8 - iPad',
    platformName: 'iOS',
    platformVersion: '8.0',
    deviceName: 'iPad Simulator',
    browserName: 'Safari',
    orientation: 'landscape'
    //'appium-version': '1.2',
    //tags: ['ios']
}