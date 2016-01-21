'use strict';

var app = angular.module('app', ['angular.switchery']);

app.directive('testDirective', function() {
    return {
        restrict: 'E',
        replace: true,
        template: ''
    };
});

describe("angular-switchery suite", function() {

    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    // beforeEach(module('app'));
    beforeEach(module('angular.switchery'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Switchery has insolated scope', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile('<div class="test"><input ng-switchery="{ size: \'large\', color: \'#3ab1bb\', secondaryColor: \'#eeeeee\' }" type="checkbox" name="isActive" ng-model="isActive"></div>')($rootScope);
        // fire all the watches
        $rootScope.$digest();
        // Check that the compiled element hast insolated scope
        expect(element.html()).toContain("ng-isolate-scope");
    });
});