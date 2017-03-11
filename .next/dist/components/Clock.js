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

var _jsxFileName = '/Users/pablo/Documents/monstera/components/Clock.js';


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

      return _react2.default.createElement('div', { className: light ? 'light' : '', 'data-jsx': 3344993796,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
        styleId: 3344993796,
        css: 'div[data-jsx="3344993796"] {padding: 15px;display: inline-block;color: #82FA58;font: 50px menlo, monaco, monospace;background-color: #000;}.light[data-jsx="3344993796"] {background-color: #999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJvQixBQUNMLDRCQUNXLGNBQ1Esc0JBQ1AsZUFDcUIsb0NBQ2IsdUJBQ3hCLENBQ08sK0JBQ2lCLHVCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL0Nsb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYWJsby9Eb2N1bWVudHMvbW9uc3RlcmEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIENsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZm9ybWF0KHQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5wYWQodC5nZXRVVENIb3VycygpKX06JHt0aGlzLnBhZCh0LmdldFVUQ01pbnV0ZXMoKSl9OiR7dGhpcy5wYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcbiAgfVxuXG4gIHBhZChuKSB7XG4gICAgcmV0dXJuIG4gPCAxMCA/IGAwJHtufWAgOiBuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaWdodCwgbGFzdFVwZGF0ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XG4gICAgICAgIHt0aGlzLmZvcm1hdChuZXcgRGF0ZShsYXN0VXBkYXRlKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiAjODJGQTU4O1xuICAgICAgICAgICAgZm9udDogNTBweCBtZW5sbywgbW9uYWNvLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlnaHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5DbG9jay5wcm9wVHlwZXMgPSB7XG4gIGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFzdFVwZGF0ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9jayJdfQ== */\n/*@ sourceURL=components/Clock.js */'
      }));
    }
  }]);

  return Clock;
}(_react2.default.Component);

Clock.propTypes = {
  light: _react.PropTypes.bool,
  lastUpdate: _react.PropTypes.number
};

exports.default = Clock;