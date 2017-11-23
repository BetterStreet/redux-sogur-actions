'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ActionEvent = require('./ActionEvent');

var _ActionEvent2 = _interopRequireDefault(_ActionEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GOTO = 'GOTO';

var REQUEST = 'REQUEST';
var ATTEMPT = 'ATTEMPT';
var SUCCESS = 'SUCCESS';
var FAILURE = 'FAILURE';
var CLIENT_FAILURE = 'CLIENT_FAILURE';
var SERVER_FAILURE = 'SERVER_FAILURE';
var CANCEL = 'CANCEL';

var Types = {
    GOTO: GOTO,
    REQUEST: REQUEST,
    ATTEMPT: ATTEMPT,
    SUCCESS: SUCCESS,
    FAILURE: FAILURE,
    CLIENT_FAILURE: CLIENT_FAILURE,
    SERVER_FAILURE: SERVER_FAILURE,
    CANCEL: CANCEL
};

var ActionCreator = function () {
    function ActionCreator(type) {
        var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ms';
        (0, _classCallCheck3.default)(this, ActionCreator);

        this.type = type;
        this.domain = domain;

        this._constructType = this._constructType.bind(this);
    }

    (0, _createClass3.default)(ActionCreator, [{
        key: '_constructType',
        value: function _constructType(suffix) {
            return ((this.domain ? this.domain : '') + '_' + this.type + (suffix ? '_' : '') + (suffix || '')).toUpperCase();
        }
    }, {
        key: 'get',
        value: function get() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(GOTO), payload);
        }
    }, {
        key: 'request',
        value: function request() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(REQUEST), payload);
        }
    }, {
        key: 'attempt',
        value: function attempt() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(ATTEMPT), payload);
        }
    }, {
        key: 'success',
        value: function success() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(SUCCESS), payload);
        }
    }, {
        key: 'failure',
        value: function failure() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(FAILURE), payload);
        }
    }, {
        key: 'clientFailure',
        value: function clientFailure() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(CLIENT_FAILURE), payload);
        }
    }, {
        key: 'serverFailure',
        value: function serverFailure() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(SERVER_FAILURE), payload);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            return new _ActionEvent2.default(this._constructType(CANCEL), payload);
        }
    }, {
        key: 'getMethodByType',
        value: function getMethodByType(type) {
            switch (type) {
                case Types.GOTO:
                    return this.get;
                case Types.REQUEST:
                    return this.getRequest;
                case Types.ATTEMPT:
                    return this.getAttempt;
                case Types.SUCCESS:
                    return this.getSuccess;
                case Types.CANCEL:
                    return this.getCancel;
                case Types.FAILURE:
                    return this.getFailure;
                case Types.CLIENT_FAILURE:
                    return this.getClientFailure;
                case Types.SERVER_FAILURE:
                    return this.getServerFailure;
            }
        }
    }, {
        key: 'types',
        get: function get() {
            var _this = this;

            var types = {};
            (0, _keys2.default)(Types).forEach(function (type) {
                return types[type] = _this._constructType(type);
            });
            return types;
        }
    }]);
    return ActionCreator;
}();

exports.default = ActionCreator;