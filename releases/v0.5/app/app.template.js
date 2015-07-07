(function(module) {
try {
  module = angular.module('template.app');
} catch (e) {
  module = angular.module('template.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('body/body.tpl.html',
    '<div id="body-nav"  >\n' +
    '\n' +
    '    <div class="container" >\n' +
    '    	<h4>About food recalls and enforcement reports</h4>\n' +
    '    	<p>Recalls are an appropriate alternative method for removing or correcting marketed consumer products, their labeling, and/or promotional literature that violates laws administered by the Food and Drug Administration (FDA). Recalls afford equal consumer protection but generally are more efficient and timely than formal administrative or civil actions, especially when the product has been widely distributed.</p>\n' +
    '    	<p>Manufacturers and/or distributors may initiate a recall at any time to fulfill their responsibility to protect the public health from products that present a risk or injury or gross deception, or are otherwise defective. Firms may also initiate a recall following notification of a problem by FDA or a state agency, in response to a formal request by FDA, or as ordered by FDA.</p>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '');
}]);
})();


(function(module) {
try {
  module = angular.module('template.app');
} catch (e) {
  module = angular.module('template.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('header/header.tpl.html',
    '<nav id="header-nav" class="navbar navbar-app navbar-absolute-top" role="navigation" ng-controller="headerController as headerCtrl"\n' +
    '     role="navigation" >\n' +
    '    <div id="topbar"></div>\n' +
    '    <div class="container" >\n' +
    '        <div id="navbar">\n' +
    '            <div id="logo"></div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template.app');
} catch (e) {
  module = angular.module('template.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('footer/footer.tpl.html',
    '<div id="footer-nav"  >\n' +
    '\n' +
    '    <div class="container" >\n' +
    '    	<p>&copy; AECOM 2015</p>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template.app');
} catch (e) {
  module = angular.module('template.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('map/map.tpl.html',
    '<div ng-controller="mapController as mapCtrl">\n' +
    '    <div id="mapDiv">\n' +
    '        <div id="map"\n' +
    '             style="width:100%; height: 480px;">\n' +
    '            <div data-ng-if="mapCtrl.map !== null">\n' +
    '                <div map-legend="" map="mapCtrl.map"></div>\n' +
    '            </div>\n' +
    '            <div data-ng-if="mapCtrl.map !== null">\n' +
    '                <div map-info="mapCtrl.mapInfo" map="mapCtrl.map" ></div>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('template.app');
} catch (e) {
  module = angular.module('template.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('recalls/recalls.tpl.html',
    '<div ng-controller="recallsController as recallsCtrl" >\n' +
    '\n' +
    '    <div class="input-group">\n' +
    '        <button type="button" data-ng-click="recallsCtrl.getRecalls(\'food\')" analytics-on="click"\n' +
    '                analytics-event="GetFoodRecalls" analytics-category="ViewActions" analytics-label="Get Food Recalls">Get Food Recalls</button>\n' +
    '        <button type="button" data-ng-click="recallsCtrl.getRecalls(\'drug\')" analytics-on="click"\n' +
    '                analytics-event="GetDrugRecalls" analytics-category="ViewActions" analytics-label="Get Drug Recalls">Get Drug Recalls</button>\n' +
    '        <button type="button" data-ng-click="recallsCtrl.getRecalls(\'device\')" analytics-on="click"\n' +
    '                analytics-event="GetDeviceRecalls" analytics-category="ViewActions" analytics-label="Get Device Recalls">Get Device Recalls</button>\n' +
    '\n' +
    '        <div class="search-result" >\n' +
    '            <ul ng-repeat="recall in recallsCtrl.recalls">\n' +
    '                <li>{{recall.recall_number}}</li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);
})();
