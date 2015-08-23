/*globals define, module, exports*/
/*! PublicEvent v0.0.0 - MIT license */
(function (global) {
    'use strict';
    function moduleDefinition() {

        var PublicEvent = function () {
            this.listeners = [];
        };
        
        PublicEvent.prototype.addListener = function (listener, thisBinding) {
            var i;
            thisBinding = thisBinding || {};
            if (typeof listener === 'function') {
                for (i = 0; i < this.listeners.length; i += 1) {
                    if (this.listeners[i][0] === listener && this.listeners[i][1] === thisBinding) {
                        break;
                    }
                }
                if (i === this.listeners.length) {
                    this.listeners.push([listener, thisBinding]);
                }
            }
        };

        PublicEvent.prototype.removeListener = function (listener) {
            var i;
            for (i = 0; i < this.listeners.length; i += 1) {
                if (this.listeners[i][0] === listener) {
                    break;
                }
            }
            if (i < this.listeners.length) {
                this.listeners.splice(i, 1);
            }
        };

        PublicEvent.prototype.callListeners = function () {
            var i, l, t;
            for (i = 0; i < this.listeners.length; i += 1) {
                l = this.listeners[i][0];
                t = this.listeners[i][1];
                l.apply(t, arguments);
            }
        };

        PublicEvent.prototype.clear = function () {
            this.listeners = [];
        };

        PublicEvent.prototype.clearListeners = function () {
            this.listeners = [];
        };

        PublicEvent.prototype.trigger = PublicEvent.prototype.callListeners;

        PublicEvent.prototype.fire = PublicEvent.prototype.callListeners;

        return PublicEvent;
    }

    if (typeof exports === 'object') {
        // node export
        module.exports = moduleDefinition();
    } else if (typeof define === 'function' && define.amd) {
        // amd anonymous module registration
        define([], moduleDefinition);
    } else {
        // browser global
        global.PublicEvent = moduleDefinition();
    }
} ());