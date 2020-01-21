webpackHotUpdate("static/development/pages/article/[id].js",{

/***/ "./pages/article/[id].js":
/*!*******************************!*\
  !*** ./pages/article/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_utils_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/utils/query */ "./components/utils/query.js");
/* harmony import */ var _apollo_queries_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apollo/queries/article */ "./apollo/queries/article.js");
/* harmony import */ var _helpers_articles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/articles */ "./helpers/articles.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/article */ "./components/article.js");
var _jsxFileName = "/Users/J/Documents/Websites/JaphexBlog/frontend/pages/article/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ArticleSingle = function ArticleSingle() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_components_utils_query__WEBPACK_IMPORTED_MODULE_2__["default"], {
    query: _apollo_queries_article__WEBPACK_IMPORTED_MODULE_3__["default"],
    id: router.query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref) {
    var _ref$data$article = _ref.data.article,
        title = _ref$data$article.title,
        published_at = _ref$data$article.published_at,
        content = _ref$data$article.content,
        size = _ref$data$article.size;
    return __jsx(_components_article__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: title,
      publishedAt: published_at,
      content: content,
      fullPage: true,
      size: Object(_helpers_articles__WEBPACK_IMPORTED_MODULE_4__["getSize"])(size),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleSingle);

/***/ })

})
//# sourceMappingURL=[id].js.64e050b9e8f54ad575c5.hot-update.js.map