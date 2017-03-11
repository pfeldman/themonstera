'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clock = function (_React$Component) {
  (0, _inherits3.default)(Clock, _React$Component);

  function Clock() {
    (0, _classCallCheck3.default)(this, Clock);

    return (0, _possibleConstructorReturn3.default)(this, (Clock.__proto__ || (0, _getPrototypeOf2.default)(Clock)).apply(this, arguments));
  }

  (0, _createClass3.default)(Clock, [{
    key: 'format',
    value: function format(t) {
      return this.pad(t.getUTCHours()) + ':' + this.pad(t.getUTCMinutes()) + ':' + this.pad(t.getUTCSeconds());
    }
  }, {
    key: 'pad',
    value: function pad(n) {
      return n < 10 ? '0' + n : n;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          light = _props.light,
          lastUpdate = _props.lastUpdate;

      return _react2.default.createElement('div', { className: light ? 'light' : '', 'data-jsx': 3344993796
      }, this.format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
        styleId: 3344993796,
        css: 'div[data-jsx="3344993796"] {padding: 15px;display: inline-block;color: #82FA58;font: 50px menlo, monaco, monospace;background-color: #000;}.light[data-jsx="3344993796"] {background-color: #999;}'
      }));
    }
  }]);

  return Clock;
}(_react2.default.Component);

exports.default = Clock;