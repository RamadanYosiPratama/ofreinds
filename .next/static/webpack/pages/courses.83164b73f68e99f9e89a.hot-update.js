webpackHotUpdate_N_E("pages/courses",{

/***/ "./src/pages/courses/index.js":
/*!************************************!*\
  !*** ./src/pages/courses/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_constants_api_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constants/api/courses */ "./src/constants/api/courses.js");
/* harmony import */ var src_parts_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/parts/Header */ "./src/parts/Header.js");
/* harmony import */ var src_parts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/parts/Footer */ "./src/parts/Footer.js");
/* harmony import */ var src_parts_ListCourses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/parts/ListCourses */ "./src/parts/ListCourses/index.js");



var _jsxFileName = "C:\\Project\\Web\\Next\\FRONTEND\\frontpage\\src\\pages\\courses\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








function Courses(_ref) {
  _s();

  var _SearchResponse$data,
      _SearchResponse$data2,
      _SearchResponse$data3,
      _this = this;

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return "";
  }),
      Search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return false;
  }),
      SearchFocus = _useState2[0],
      setSearchFocus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(function () {
    return {
      isLoading: false,
      isError: false,
      data: []
    };
  }),
      SearchResponse = _useState3[0],
      setSearchResponse = _useState3[1];

  var selectWrapper = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch("");
    }
  }

  var timeoutSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  function handleSearch(e) {
    e.persist();
    setSearch(e.target.value);
    clearTimeout(timeoutSearch.current);
    timeoutSearch.current = setTimeout(function () {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null
      });
      src_constants_api_courses__WEBPACK_IMPORTED_MODULE_5__["default"].all({
        params: {
          q: e.target.value
        }
      }).then(function (res) {
        setSearchResponse({
          isLoading: false,
          isError: false,
          data: res.data
        });
      })["catch"](function (err) {
        setSearchResponse({
          isLoading: false,
          isError: true,
          data: null
        });
      });
    }, 1000);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("mousedown", clickOutside);
    return function () {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "O - Freind | Courses")), __jsx("section", {
    className: "pt-10 z-30 relative",
    style: {
      height: 360
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "absolute inset-0 z-0 w-full h-full bg-black opacity-75",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center",
    style: {
      marginBottom: "-25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "text-6xl text-center text-teal-500 font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Pelajaran"), __jsx("h4", {
    className: "text-lg text-center text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Jangan mau kalah update dengan yang lainnya. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 60
    }
  }), " Yuk Belajar dimana aja menjadi mudah ."), __jsx("div", {
    className: "flex flex-col relative",
    ref: selectWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "q",
    type: "text",
    onChange: handleSearch,
    onFocus: function onFocus() {
      return setSearchFocus(!SearchFocus);
    },
    onBlur: function onBlur() {
      return setSearchFocus(!SearchFocus);
    },
    value: Search,
    placeholder: SearchFocus ? "Ketik minimal 3 karakter untuk mencari" : "Lagi nyari kelas apa?",
    className: "bg-white focus:outline-none transition-all duration-200 focus:border-teal-500 border border-gray-600 px-4 py-3 w-full mt-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), Search.length >= 3 && __jsx("div", {
    className: "flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full",
    style: {
      top: 75
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, SearchResponse.isLoading ? "Loading..." : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, SearchResponse.isError && "Something is technically wrong", ((_SearchResponse$data = SearchResponse.data) === null || _SearchResponse$data === void 0 ? void 0 : _SearchResponse$data.length) > 0 ? (_SearchResponse$data2 = SearchResponse.data) === null || _SearchResponse$data2 === void 0 ? void 0 : (_SearchResponse$data3 = _SearchResponse$data2.map) === null || _SearchResponse$data3 === void 0 ? void 0 : _SearchResponse$data3.call(_SearchResponse$data2, function (item, index) {
    var _item$thumbnail, _item$name, _item$name2, _item$level;

    return __jsx("div", {
      key: index,
      className: "flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "w-auto px-4",
      style: {
        width: 150
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: (_item$thumbnail = item === null || item === void 0 ? void 0 : item.thumbnail) !== null && _item$thumbnail !== void 0 ? _item$thumbnail : "",
      alt: (_item$name = item === null || item === void 0 ? void 0 : item.name) !== null && _item$name !== void 0 ? _item$name : "Course Name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 35
      }
    })), __jsx("div", {
      className: "w-full px-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 33
      }
    }, __jsx("h6", {
      className: "text-gray-900 text-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 35
      }
    }, (_item$name2 = item === null || item === void 0 ? void 0 : item.name) !== null && _item$name2 !== void 0 ? _item$name2 : "Course Name"), __jsx("p", {
      className: "text-gray-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 35
      }
    }, (_item$level = item === null || item === void 0 ? void 0 : item.level) !== null && _item$level !== void 0 ? _item$level : "level"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/courses/[id]",
      as: "/courses/".concat(item.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 35
      }
    }, __jsx("a", {
      className: "link-wrapped",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 37
      }
    }))));
  }) : "No course found"))))), __jsx("div", {
    className: "container px-4 mx-auto z-10 relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(src_parts_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }))), __jsx("section", {
    className: "container px-4 mx-auto pt-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(src_parts_ListCourses__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  })), __jsx("section", {
    className: "mt-24 bg-indigo-1000 py-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(src_parts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  })));
}

_s(Courses, "bvVmvhJXH8ewWR/gtFfC2mdDqc4=");

_c = Courses;
Courses.getInitialProps = /*#__PURE__*/Object(C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return C_Project_Web_Next_FRONTEND_frontpage_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return src_constants_api_courses__WEBPACK_IMPORTED_MODULE_5__["default"].all();

        case 3:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data.data
          });

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 7]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (Courses);

var _c;

$RefreshReg$(_c, "Courses");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvdXJzZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ291cnNlcyIsImRhdGEiLCJ1c2VTdGF0ZSIsIlNlYXJjaCIsInNldFNlYXJjaCIsIlNlYXJjaEZvY3VzIiwic2V0U2VhcmNoRm9jdXMiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiU2VhcmNoUmVzcG9uc2UiLCJzZXRTZWFyY2hSZXNwb25zZSIsInNlbGVjdFdyYXBwZXIiLCJ1c2VSZWYiLCJjbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsInRpbWVvdXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJlIiwicGVyc2lzdCIsInZhbHVlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvdXJzZXMiLCJhbGwiLCJwYXJhbXMiLCJxIiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwibGVuZ3RoIiwidG9wIiwibWFwIiwiaXRlbSIsImluZGV4Iiwid2lkdGgiLCJ0aHVtYm5haWwiLCJuYW1lIiwibGV2ZWwiLCJpZCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUM7QUFBQSxXQUFNLEVBQU47QUFBQSxHQUFELENBRFg7QUFBQSxNQUNsQkMsTUFEa0I7QUFBQSxNQUNWQyxTQURVOztBQUFBLG1CQUVhRixzREFBUSxDQUFDO0FBQUEsV0FBTSxLQUFOO0FBQUEsR0FBRCxD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YkYsQ0FERjtBQThCRCxHQS9CRCxDQURILEdBaUNHLGlCQXBDTixDQVBKLENBaEJKLENBUkYsQ0FKRixDQUZGLEVBa0ZFO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxGRixDQUxGLEVBNEZFO0FBQVMsYUFBUyxFQUFDLDhCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFhLFFBQUksRUFBRTlDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTVGRixFQStGRTtBQUFTLGFBQVMsRUFBQyw0QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBL0ZGLENBREY7QUFxR0Q7O0dBM0pRRCxPOztLQUFBQSxPO0FBNkpUQSxPQUFPLENBQUNnRCxlQUFSLHFTQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUh2QixpRUFBTyxDQUFDQyxHQUFSLEVBRkc7O0FBQUE7QUFFaEJ6QixjQUZnQjtBQUFBLDJDQUlmO0FBQUVBLGdCQUFJLEVBQUVBLElBQUksQ0FBQ0E7QUFBYixXQUplOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUExQjtBQVFlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3Vyc2VzLjgzMTY0YjczZjY4ZTk5ZjllODlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBjb3Vyc2VzIGZyb20gXCJzcmMvY29uc3RhbnRzL2FwaS9jb3Vyc2VzXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcInNyYy9wYXJ0cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcInNyYy9wYXJ0cy9Gb290ZXJcIjtcbmltcG9ydCBMaXN0Q291cnNlcyBmcm9tIFwic3JjL3BhcnRzL0xpc3RDb3Vyc2VzXCI7XG5cbmZ1bmN0aW9uIENvdXJzZXMoeyBkYXRhIH0pIHtcbiAgY29uc3QgW1NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCgpID0+IFwiXCIpO1xuICBjb25zdCBbU2VhcmNoRm9jdXMsIHNldFNlYXJjaEZvY3VzXSA9IHVzZVN0YXRlKCgpID0+IGZhbHNlKTtcbiAgY29uc3QgW1NlYXJjaFJlc3BvbnNlLCBzZXRTZWFyY2hSZXNwb25zZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAgZGF0YTogW10sXG4gIH0pKTtcblxuICBjb25zdCBzZWxlY3RXcmFwcGVyID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIGNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmIChzZWxlY3RXcmFwcGVyICYmICFzZWxlY3RXcmFwcGVyLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgc2V0U2VhcmNoKFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGxldCB0aW1lb3V0U2VhcmNoID0gdXNlUmVmKG51bGwpO1xuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xuICAgIGUucGVyc2lzdCgpO1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRTZWFyY2guY3VycmVudCk7XG4gICAgdGltZW91dFNlYXJjaC5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTZWFyY2hSZXNwb25zZSh7XG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICAgIGRhdGE6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGNvdXJzZXNcbiAgICAgICAgLmFsbCh7IHBhcmFtczogeyBxOiBlLnRhcmdldC52YWx1ZSB9IH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hSZXNwb25zZSh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBzZXRTZWFyY2hSZXNwb25zZSh7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbGlja091dHNpZGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk8gLSBGcmVpbmQgfCBDb3Vyc2VzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtMTAgei0zMCByZWxhdGl2ZVwiIHN0eWxlPXt7IGhlaWdodDogMzYwIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgb3BhY2l0eS03NVwiPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWV0YS10aXRsZSBhYnNvbHV0ZSBib3R0b20tMCBvYmplY3QtZmlsbCB6LTAgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTI1cHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1jZW50ZXIgdGV4dC10ZWFsLTUwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIFBlbGFqYXJhblxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgSmFuZ2FuIG1hdSBrYWxhaCB1cGRhdGUgZGVuZ2FuIHlhbmcgbGFpbm55YS4gPGJyIC8+IFl1ayBCZWxhamFyIGRpbWFuYSBhamEgbWVuamFkaSBtdWRhaFxuICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcmVsYXRpdmVcIiByZWY9e3NlbGVjdFdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInFcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFNlYXJjaEZvY3VzKCFTZWFyY2hGb2N1cyl9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRTZWFyY2hGb2N1cyghU2VhcmNoRm9jdXMpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtTZWFyY2h9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgU2VhcmNoRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgPyBcIktldGlrIG1pbmltYWwgMyBrYXJha3RlciB1bnR1ayBtZW5jYXJpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkxhZ2kgbnlhcmkga2VsYXMgYXBhP1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZm9jdXM6Ym9yZGVyLXRlYWwtNTAwIGJvcmRlciBib3JkZXItZ3JheS02MDAgcHgtNCBweS0zIHctZnVsbCBtdC02XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge1NlYXJjaC5sZW5ndGggPj0gMyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSBweS0yIHB4LTQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiA3NSB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtTZWFyY2hSZXNwb25zZS5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIFwiTG9hZGluZy4uLlwiXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIHtTZWFyY2hSZXNwb25zZS5pc0Vycm9yICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlNvbWV0aGluZyBpcyB0ZWNobmljYWxseSB3cm9uZ1wifVxuICAgICAgICAgICAgICAgICAgICAgIHtTZWFyY2hSZXNwb25zZS5kYXRhPy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFNlYXJjaFJlc3BvbnNlLmRhdGE/Lm1hcD8uKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIC1teC00IHB5LTIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctZ3JheS0yMDAgcmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIHB4LTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8udGh1bWJuYWlsID8/IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0/Lm5hbWUgPz8gXCJDb3Vyc2UgTmFtZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/Lm5hbWUgPz8gXCJDb3Vyc2UgTmFtZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LmxldmVsID8/IFwibGV2ZWxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY291cnNlcy9baWRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2NvdXJzZXMvJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay13cmFwcGVkXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vIGNvdXJzZSBmb3VuZFwifVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIHotMTAgcmVsYXRpdmVcIj5cbiAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBwdC0yNFwiPlxuICAgICAgICA8TGlzdENvdXJzZXMgZGF0YT17ZGF0YX0+PC9MaXN0Q291cnNlcz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTI0IGJnLWluZGlnby0xMDAwIHB5LTEyXCI+XG4gICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG5cbkNvdXJzZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb3Vyc2VzLmFsbCgpO1xuXG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YS5kYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=