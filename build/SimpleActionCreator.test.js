'use strict';

var _SimpleActionCreator = require('./SimpleActionCreator');

var _SimpleActionCreator2 = _interopRequireDefault(_SimpleActionCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SimpleActionCreator', function () {
    test('SimpleActionCreator to have types', function () {
        var ac = new _SimpleActionCreator2.default(['TEST', 'PLUT'], 'jest');
        expect(ac.types.TEST).toBeDefined();
        expect(ac.types.TEST).toBe('JEST_TEST');
        expect(ac.types.PLUT).toBe('JEST_PLUT');
    });
    test('SimpleActionCreator to have methods', function () {
        var ac = new _SimpleActionCreator2.default(['TEST', 'PLUT', 'ACTION_EVENT'], 'jest');
        expect(ac.getTest).toBeDefined();
        expect(ac.getActionEvent).toBeDefined();
    });
});