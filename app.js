'use strict';
// include a third-party async loader library
/*!
 * $script.js v1.3
 * https://github.com/ded/script.js
 * Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011
 * Follow our software http://twitter.com/dedfat
 * License: MIT
 */
!function(a,b,c){function t(a,c){var e=b.createElement("script"),f=j;e.onload=e.onerror=e[o]=function(){e[m]&&!/^c|loade/.test(e[m])||f||(e.onload=e[o]=null,f=1,c())},e.async=1,e.src=a,d.insertBefore(e,d.firstChild)}function q(a,b){p(a,function(a){return!b(a)})}var d=b.getElementsByTagName("head")[0],e={},f={},g={},h={},i="string",j=!1,k="push",l="DOMContentLoaded",m="readyState",n="addEventListener",o="onreadystatechange",p=function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1};!b[m]&&b[n]&&(b[n](l,function r(){b.removeEventListener(l,r,j),b[m]="complete"},j),b[m]="loading");var s=function(a,b,d){function o(){if(!--m){e[l]=1,j&&j();for(var a in g)p(a.split("|"),n)&&!q(g[a],n)&&(g[a]=[])}}function n(a){return a.call?a():e[a]}a=a[k]?a:[a];var i=b&&b.call,j=i?b:d,l=i?a.join(""):b,m=a.length;c(function(){q(a,function(a){h[a]?(l&&(f[l]=1),o()):(h[a]=1,l&&(f[l]=1),t(s.path?s.path+a+".js":a,o))})},0);return s};s.get=t,s.ready=function(a,b,c){a=a[k]?a:[a];var d=[];!q(a,function(a){e[a]||d[k](a)})&&p(a,function(a){return e[a]})?b():!function(a){g[a]=g[a]||[],g[a][k](b),c&&c(d)}(a.join("|"));return s};var u=a.$script;s.noConflict=function(){a.$script=u;return this},typeof module!="undefined"&&module.exports?module.exports=s:a.$script=s}(this,document,setTimeout)
// load all of the dependencies asynchronously.
$script([
    "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"
], 'angular-bundle');

$script.ready('angular-bundle', function() {
    $script([
            "https://raw.githubusercontent.com/natos/angular-switchery/master/dist/angular-switchery.min.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.min.js"
    ], 'angular-switchery');
});

$script.ready('angular-switchery', function() {

    angular.module('switcher.examples', [
        // 'ngModel',
        'ngRoute',
        'angular.switchery'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'examples.html',
            controller: 'ExamplesController'
        })
        .otherwise({ redirectTo:'/' });
    }])
    .controller('ExamplesController', ['$scope',
        function($scope) {
            console.log('$scope', $scope);
        }
    ]);
    // when all is done, execute bootstrap angular application
    angular.bootstrap(document, ['switcher.examples']);
});