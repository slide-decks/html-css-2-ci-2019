webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/dot-prop/index.js":
false,

/***/ "./node_modules/indexes-of/index.js":
false,

/***/ "./node_modules/is-obj/index.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/index.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/parser.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/processor.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/attribute.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/className.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/combinator.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/comment.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/constructors.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/container.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/guards.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/id.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/index.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/nesting.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/node.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/pseudo.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/root.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/selector.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/string.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/tag.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/types.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/universal.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/sortAscending.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/tokenTypes.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/tokenize.js":
false,

/***/ "./node_modules/uniq/uniq.js":
false,

/***/ "./templates/main/components/BoxHeader.jsx":
/*!*************************************************!*\
  !*** ./templates/main/components/BoxHeader.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/BoxHeader.jsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BoxHeader__Container",
  componentId: "sc-1h36yeg-0"
})(["position:absolute;top:0;left:0;right:0;display:flex;justify-content:", ";"], function (props) {
  return ['all', 'center'].includes(props.align) ? 'center' : 'flex-start';
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BoxHeader__Box",
  componentId: "sc-1h36yeg-1"
})(["padding:16px 48px;background-color:var(--primary);border-bottom-right-radius:8px;border-bottom-left-radius:", ";border-top-right-radius:", ";border-top-left-radius:", ";> h1{text-align:", ";}"], function (props) {
  return ['all', 'center'].includes(props.align) ? '8px' : 0;
}, function (props) {
  return props.align === 'all' ? '8px' : 0;
}, function (props) {
  return props.align === 'all' ? '8px' : 0;
}, function (props) {
  return props.align;
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "BoxHeader__Header",
  componentId: "sc-1h36yeg-2"
})(["position:relative;top:-4px;color:var(--white);"]);

var LineHeader = function LineHeader(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    align: align,
    className: "box-header ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    align: align,
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, children)));
};

LineHeader.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  align: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['left', 'center', 'all'])
};
LineHeader.defaultProps = {
  align: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (LineHeader);

/***/ })

})
//# sourceMappingURL=index.js.1ac6c72a7e476adef283.hot-update.js.map