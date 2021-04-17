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
  }, "Library"), __jsx("h4", {
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
  }), " Yuk ikuti perkembangan teknologi."), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvdXJzZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ291cnNlcyIsImRhdGEiLCJ1c2VTdGF0ZSIsIlNlYXJjaCIsInNldFNlYXJjaCIsIlNlYXJjaEZvY3VzIiwic2V0U2VhcmNoRm9jdXMiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiU2VhcmNoUmVzcG9uc2UiLCJzZXRTZWFyY2hSZXNwb25zZSIsInNlbGVjdFdyYXBwZXIiLCJ1c2VSZWYiLCJjbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsInRpbWVvdXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJlIiwicGVyc2lzdCIsInZhbHVlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvdXJzZXMiLCJhbGwiLCJwYXJhbXMiLCJxIiwidGhlbiIsInJlcyIsImVyciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwibGVuZ3RoIiwidG9wIiwibWFwIiwiaXRlbSIsImluZGV4Iiwid2lkdGgiLCJ0aHVtYm5haWwiLCJuYW1lIiwibGV2ZWwiLCJpZCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUM7QUFBQSxXQUFNLEVBQU47QUFBQSxHQUFELENBRFg7QUFBQSxNQUNsQkMsTUFEa0I7QUFBQSxNQUNWQyxTQURVOztBQUFBLG1CQUVhRixzREFBUSxDQUFDO0FBQUEsV0FBTSxLQUFOO0FBQUEsR0FBRCxD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RixDQURGO0FBOEJELEdBL0JELENBREgsR0FpQ0csaUJBcENOLENBUEosQ0FoQkosQ0FSRixDQUpGLENBRkYsRUFrRkU7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbEZGLENBTEYsRUE0RkU7QUFBUyxhQUFTLEVBQUMsOEJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWEsUUFBSSxFQUFFOUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBNUZGLEVBK0ZFO0FBQVMsYUFBUyxFQUFDLDRCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EvRkYsQ0FERjtBQXFHRDs7R0EzSlFELE87O0tBQUFBLE87QUE2SlRBLE9BQU8sQ0FBQ2dELGVBQVIscVNBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFSHZCLGlFQUFPLENBQUNDLEdBQVIsRUFGRzs7QUFBQTtBQUVoQnpCLGNBRmdCO0FBQUEsMkNBSWY7QUFBRUEsZ0JBQUksRUFBRUEsSUFBSSxDQUFDQTtBQUFiLFdBSmU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTFCO0FBUWVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvdXJzZXMuOWYzMTJhMzk1ODhiZGZlMWIyNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IGNvdXJzZXMgZnJvbSBcInNyYy9jb25zdGFudHMvYXBpL2NvdXJzZXNcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwic3JjL3BhcnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwic3JjL3BhcnRzL0Zvb3RlclwiO1xuaW1wb3J0IExpc3RDb3Vyc2VzIGZyb20gXCJzcmMvcGFydHMvTGlzdENvdXJzZXNcIjtcblxuZnVuY3Rpb24gQ291cnNlcyh7IGRhdGEgfSkge1xuICBjb25zdCBbU2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoKCkgPT4gXCJcIik7XG4gIGNvbnN0IFtTZWFyY2hGb2N1cywgc2V0U2VhcmNoRm9jdXNdID0gdXNlU3RhdGUoKCkgPT4gZmFsc2UpO1xuICBjb25zdCBbU2VhcmNoUmVzcG9uc2UsIHNldFNlYXJjaFJlc3BvbnNlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICBkYXRhOiBbXSxcbiAgfSkpO1xuXG4gIGNvbnN0IHNlbGVjdFdyYXBwZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gY2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKHNlbGVjdFdyYXBwZXIgJiYgIXNlbGVjdFdyYXBwZXIuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRTZWFyY2goXCJcIik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHRpbWVvdXRTZWFyY2ggPSB1c2VSZWYobnVsbCk7XG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XG4gICAgZS5wZXJzaXN0KCk7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dFNlYXJjaC5jdXJyZW50KTtcbiAgICB0aW1lb3V0U2VhcmNoLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNlYXJjaFJlc3BvbnNlKHtcbiAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgY291cnNlc1xuICAgICAgICAuYWxsKHsgcGFyYW1zOiB7IHE6IGUudGFyZ2V0LnZhbHVlIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHNldFNlYXJjaFJlc3BvbnNlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHNldFNlYXJjaFJlc3BvbnNlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBpc0Vycm9yOiB0cnVlLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TyAtIEZyZWluZCB8IENvdXJzZXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwdC0xMCB6LTMwIHJlbGF0aXZlXCIgc3R5bGU9e3sgaGVpZ2h0OiAzNjAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjayBvcGFjaXR5LTc1XCI+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhLXRpdGxlIGFic29sdXRlIGJvdHRvbS0wIG9iamVjdC1maWxsIHotMCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCItMjVweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCB0ZXh0LWNlbnRlciB0ZXh0LXRlYWwtNTAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgTGlicmFyeVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgSmFuZ2FuIG1hdSBrYWxhaCB1cGRhdGUgZGVuZ2FuIHlhbmcgbGFpbm55YS4gPGJyIC8+IFl1ayBpa3V0aVxuICAgICAgICAgICAgICBwZXJrZW1iYW5nYW4gdGVrbm9sb2dpLlxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByZWxhdGl2ZVwiIHJlZj17c2VsZWN0V3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwicVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0U2VhcmNoRm9jdXMoIVNlYXJjaEZvY3VzKX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFNlYXJjaEZvY3VzKCFTZWFyY2hGb2N1cyl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e1NlYXJjaH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICBTZWFyY2hGb2N1c1xuICAgICAgICAgICAgICAgICAgICA/IFwiS2V0aWsgbWluaW1hbCAzIGthcmFrdGVyIHVudHVrIG1lbmNhcmlcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiTGFnaSBueWFyaSBrZWxhcyBhcGE/XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmb2N1czpib3JkZXItdGVhbC01MDAgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCBweC00IHB5LTMgdy1mdWxsIG10LTZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7U2VhcmNoLmxlbmd0aCA+PSAzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFic29sdXRlIHB5LTIgcHgtNCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0b3A6IDc1IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1NlYXJjaFJlc3BvbnNlLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgXCJMb2FkaW5nLi4uXCJcbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAge1NlYXJjaFJlc3BvbnNlLmlzRXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU29tZXRoaW5nIGlzIHRlY2huaWNhbGx5IHdyb25nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge1NlYXJjaFJlc3BvbnNlLmRhdGE/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gU2VhcmNoUmVzcG9uc2UuZGF0YT8ubWFwPy4oKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgLW14LTQgcHktMiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTIwMCByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gcHgtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDE1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtPy50aHVtYm5haWwgPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbT8ubmFtZSA/PyBcIkNvdXJzZSBOYW1lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8ubmFtZSA/PyBcIkNvdXJzZSBOYW1lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8ubGV2ZWwgPz8gXCJsZXZlbFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb3Vyc2VzL1tpZF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvY291cnNlcy8ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rLXdyYXBwZWRcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiTm8gY291cnNlIGZvdW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IG14LWF1dG8gei0xMCByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIHB0LTI0XCI+XG4gICAgICAgIDxMaXN0Q291cnNlcyBkYXRhPXtkYXRhfT48L0xpc3RDb3Vyc2VzPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMjQgYmctaW5kaWdvLTEwMDAgcHktMTJcIj5cbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuQ291cnNlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvdXJzZXMuYWxsKCk7XG5cbiAgICByZXR1cm4geyBkYXRhOiBkYXRhLmRhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==