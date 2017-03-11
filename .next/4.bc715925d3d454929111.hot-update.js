webpackHotUpdate(4,{

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(49);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(593);

var _startClock = __webpack_require__(614);

var _nextReduxWrapper = __webpack_require__(589);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Page = __webpack_require__(592);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pablo/Documents/monstera/pages/index.js?entry';


var Counter = function (_React$Component) {
  (0, _inherits3.default)(Counter, _React$Component);

  function Counter() {
    (0, _classCallCheck3.default)(this, Counter);

    return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.dispatch((0, _startClock.startClock)());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Page2.default, { title: 'PRINCIPAL Page', linkTo: '/other', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() });
      return { isServer: isServer };
    }
  }]);

  return Counter;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Counter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pablo/Documents/monstera/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pablo/Documents/monstera/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDbUI7O0FBQ0M7O0FBQ3BCOzs7O0FBQ1U7Ozs7Ozs7OztJQUVYOzs7Ozs7Ozs7Ozt3Q0FPRjtXQUFLLFFBQVEsS0FBSyxNQUFNLFNBQ3pCOzs7OzJDQUdDO29CQUFjLEtBQ2Y7Ozs7NkJBR0M7NkJBQ0csZ0NBQUssT0FBTSxrQkFBaUIsUUFBTztvQkFBcEM7c0JBRUg7QUFGRztPQUFBOzs7OzBDQWZ5QztVQUFBO1VBQUEsZ0JBQzNDOztZQUFNLFNBQVMsRUFBRSxNQUFNLFFBQVEsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUNyRDthQUFPLEVBQUUsVUFDVjs7Ozs7RUFKbUIsZ0JBcUJ0Qjs7a0JBQXlCLGtEQUFXLFMiLCJmaWxlIjoiNC5iYzcxNTkyNWQzZDQ1NDkyOTExMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBzdGFydENsb2NrIH0gZnJvbSAnLi4vYWN0aW9ucy9zdGFydENsb2NrJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHN0b3JlLCBpc1NlcnZlciB9KSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnVElDSycsIGxpZ2h0OiAhaXNTZXJ2ZXIsIHRzOiBEYXRlLm5vdygpIH0pXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMudGltZXIgPSB0aGlzLnByb3BzLmRpc3BhdGNoKHN0YXJ0Q2xvY2soKSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSB0aXRsZT0nUFJJTkNJUEFMIFBhZ2UnIGxpbmtUbz0nL290aGVyJyAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShDb3VudGVyKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==