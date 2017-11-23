'use strict';

var _ActionCreator = require('./ActionCreator');

var _ActionCreator2 = _interopRequireDefault(_ActionCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('actionCreator', function () {
    test('ActionCreator to have a domain', function () {
        var ac = new _ActionCreator2.default('test', 'jest');
        expect(ac.get().type).toBe('JEST_TEST_GOTO');
        expect(ac.getRequest().type).toBe('JEST_TEST_REQUEST');
        expect(ac.getAttempt().type).toBe('JEST_TEST_ATTEMPT');
        expect(ac.getSuccess().type).toBe('JEST_TEST_SUCCESS');
        expect(ac.getFailure().type).toBe('JEST_TEST_FAILURE');
        expect(ac.getCancel().type).toBe('JEST_TEST_CANCEL');
    });

    test('ActionCreator to have a default domain', function () {
        var ac = new _ActionCreator2.default('test');
        expect(ac.get().type).toBe('MS_TEST_GOTO');
        expect(ac.getRequest().type).toBe('MS_TEST_REQUEST');
        expect(ac.getAttempt().type).toBe('MS_TEST_ATTEMPT');
        expect(ac.getSuccess().type).toBe('MS_TEST_SUCCESS');
        expect(ac.getFailure().type).toBe('MS_TEST_FAILURE');
        expect(ac.getCancel().type).toBe('MS_TEST_CANCEL');
    });

    test('payload get passed down', function () {
        var ac = new _ActionCreator2.default('test');
        expect(ac.get('MS_TEST').payload).toBe('MS_TEST');
        expect(ac.getRequest('MS_TEST_REQUEST').payload).toBe('MS_TEST_REQUEST');
        expect(ac.getAttempt('MS_TEST_ATTEMPT').payload).toBe('MS_TEST_ATTEMPT');
        expect(ac.getSuccess('MS_TEST_SUCCESS').payload).toBe('MS_TEST_SUCCESS');
        expect(ac.getFailure('MS_TEST_FAILURE').payload).toBe('MS_TEST_FAILURE');
        expect(ac.getCancel('MS_TEST_CANCEL').payload).toBe('MS_TEST_CANCEL');
    });

    test('get types', function () {
        var ac = new _ActionCreator2.default('test');
        expect(ac.types.REQUEST).toBe('MS_TEST_REQUEST');
    });

    test('getMethodByType', function () {
        var ac = new _ActionCreator2.default('test');
        expect(ac.getMethodByType('SUCCESS')).toBe(ac.getSuccess);
        expect(ac.getMethodByType('FAILURE')).toBe(ac.getFailure);
        expect(ac.getMethodByType('CANCEL')).toBe(ac.getCancel);
        expect(ac.getMethodByType('ATTEMPT')).toBe(ac.getAttempt);
    });
});