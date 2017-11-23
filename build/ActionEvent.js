"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Event = function Event(type) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck3.default)(this, Event);

    this.type = type;
    this.payload = payload;

    if (payload && payload.payload) {
        return (0, _extends3.default)({
            type: this.type
        }, payload);
    }

    return {
        type: this.type,
        payload: this.payload
    };
};

exports.default = Event;