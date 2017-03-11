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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          lastUpdate = _props.lastUpdate,
          light = _props.light,
          title = _props.title,
          linkTo = _props.linkTo;

      return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, title), _react2.default.createElement(_Clock2.default, { lastUpdate: lastUpdate, light: light }), _react2.default.createElement('nav', null, _react2.default.createElement(_link2.default, { href: linkTo }, _react2.default.createElement('a', null, 'Navigate'))));
    }
  }]);

  return Page;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    lastUpdate: state.tick.lastUpdate,
    light: state.tick.light
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Page);