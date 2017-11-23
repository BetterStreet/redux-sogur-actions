'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _ActionEvent = require('./ActionEvent');

var _ActionEvent2 = _interopRequireDefault(_ActionEvent);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleActionCreator = function () {
    function SimpleActionCreator(types) {
        var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ms';
        (0, _classCallCheck3.default)(this, SimpleActionCreator);

        this.baseTypes = types;
        this.domain = domain;

        this._constructType = this._constructType.bind(this);
        this._constructMethods = this._constructMethods.bind(this);

        this._constructMethods();
    }

    (0, _createClass3.default)(SimpleActionCreator, [{
        key: '_constructMethods',
        value: function _constructMethods() {
            var _this = this;

            this.baseTypes.forEach(function (type) {
                var methodName = 'get' + (0, _lodash.upperFirst)((0, _lodash.camelCase)(type));
                _this[methodName] = function () {
                    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    return new _ActionEvent2.default(_this._constructType(type), payload);
                };
            });
        }
    }, {
        key: '_constructType',
        value: function _constructType(type) {
            return ((this.domain ? this.domain : '') + '_' + type).toUpperCase();
        }
    }, {
        key: 'types',
        get: function get() {
            var _this2 = this;

            var types = {};
            this.baseTypes.forEach(function (type) {
                types[type.toUpperCase()] = _this2._constructType(type);
            });
            return types;
        }
    }]);
    return SimpleActionCreator;
}();

exports.default = SimpleActionCreator;