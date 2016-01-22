/**
 * angular-switchery v1.0.0
 * Natan Santolo <natan.santolo@gmail.com>
 * License: MIT
 */
(function(window, angular, undefined) {

    'use strict';

    if (!angular) {
        throw('angular-switchery: AngularJS not found.');
    }

    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback, element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    angular
        .module('angular.switchery', [])
        .directive('ngSwitchery', ['$timeout', '$parse',
            function switcheryDirective($timeout, $parse) {
                return {
                    'require': 'ngModel',
                    'restrict': 'AE',
                    'scope': {
                        'checked': '=ngModel'
                    },
                    'link': function switcheryLink($scope, $element, $attrs, ngModel) {
                        if (!ngModel) {
                            return false;
                        }
                        // switch instance
                        var _switch;
                        // switcher options
                        var options = ($attrs && $attrs.ngSwitchery) ? $parse($attrs.ngSwitchery)($scope) : {};
                        // switcher render function
                        function renderSwitch() {
                            window.requestAnimFrame(drawSwitch);
                        }
                        // switcher draw function
                        function drawSwitch() {
                            // if needed create new instance
                            if (!_switch) {
                                _switch = new window.Switchery($element[0], options);
                                // console.log('switcher created with options', options);
                            }
                            // save model state
                            _switch.element.checked = $scope.checked;
                            // reset handler
                            _switch.element.onchange = null;
                            // set switcher position
                            _switch.setPosition(false);
                            // when switcher change
                            _switch.element.onchange = function() {
                                $scope.$apply(function() {
                                    // update the model
                                    ngModel.$setViewValue(_switch.element.checked);
                                });
                            };
                        }
                        // when the model changes, render switcher
                        $scope.$watch('checked', function(state, oldState) {
                            if (state !== oldState) {
                                renderSwitch();
                            }
                        });
                        // render switch
                        renderSwitch();
                    }
                };
            }
        ]);

})(window, window.angular);