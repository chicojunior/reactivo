"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("/Users/cmilfont/projetos/reactivo/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("/Users/cmilfont/projetos/reactivo/node_modules/react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var onClick = _this.props.onClick;

      event.preventDefault();
      event.stopPropagation();
      if (onClick) {
        onClick();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Button, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          name = _props.name;

      return _react2.default.createElement(
        "div",
        { className: "reactivo-button" },
        _react2.default.createElement(
          "button",
          { onClick: this.onClick, name: name, className: "mdl-button mdl-button--raised mdl-button--colored" },
          label
        )
      );
    }
  }]);
  return Button;
}(_react2.default.Component);

Button.propTypes = {
  label: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func
};
exports.default = Button;