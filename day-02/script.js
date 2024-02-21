"use strict";

var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var container = document.getElementsByClassName("hamada")[0];
var btnGroup = /*#__PURE__*/_react["default"].createElement("div", {
  className: "group"
}, /*#__PURE__*/_react["default"].createElement("button", null, "Increase"), /*#__PURE__*/_react["default"].createElement("button", null, "Decrease"));
ReactDom.render(btnGroup, container);
