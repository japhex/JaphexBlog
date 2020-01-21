webpackHotUpdate("static/development/pages/article/[id].js",{

/***/ "./apollo/queries/article.js":
/*!***********************************!*\
  !*** ./apollo/queries/article.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query Articles($id: ID!) {\n        article(id: $id) {\n          id\n          title\n          content\n          type\n          published_at\n          size\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ARTICLE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ARTICLE_QUERY);

/***/ })

})
//# sourceMappingURL=[id].js.c84aa518da73de2d13d4.hot-update.js.map