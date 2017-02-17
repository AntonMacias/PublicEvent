var expect = require('chai').expect,
	assert = require('chai').assert,
	PublicEvent = require('../PublicEvent');

var listener = function () {
	'use strict';
	var calledTimes = 0;
	
	var getCalledTimes = function () {
		return calledTimes;
	};

	var listener = function () {
		calledTimes += 1;
	};

	return {
		listener: listener,
		getCalledTimes: getCalledTimes
	};

};

describe('PublicEvent()', function () {
    it('Adds listener', function () {
        var l = new listener();
        var p = new PublicEvent();
        
        var initialValue = l.getCalledTimes();

        p.addListener(l.listener);
        p.callListeners();

        assert((initialValue + 1) === l.getCalledTimes());
    });

    it('Removes listener', function () {
        var l = new listener();
        var l2 = new listener();
        var p = new PublicEvent();
        

        var initialValueL1 = l.getCalledTimes();
		var initialValueL2 = l2.getCalledTimes();

        p.addListener(l.listener);
        p.addListener(l2.listener);
        p.callListeners();

        assert((initialValueL1 + 1) === l.getCalledTimes());
        assert((initialValueL2 + 1) === l2.getCalledTimes());

        p.removeListener(l.listener);

        p.callListeners();

        assert((initialValueL1 + 1) === l.getCalledTimes());
        assert((initialValueL2 + 2) === l2.getCalledTimes());
    });
});
