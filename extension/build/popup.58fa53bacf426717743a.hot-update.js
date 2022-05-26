self["webpackHotUpdatewerkit_chrome_extension"]("popup",{

/***/ "./src/components/context/AuthContext.jsx":
/*!************************************************!*\
  !*** ./src/components/context/AuthContext.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "axiosJWT": () => (/* binding */ axiosJWT),
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-cookie */ "./node_modules/react-use-cookie/dist/index.js");
/* harmony import */ var _hooks_useStickyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useStickyState */ "./src/hooks/useStickyState.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const api = 'http://localhost:5000';
(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.withCredentials) = true;
const axiosJWT = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
  }
});
const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const AuthProvider = props => {
  // Props
  const {
    children
  } = props; // State

  const [user, setUser] = (0,_hooks_useStickyState__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'user', true);
  const [token, setToken] = (0,_hooks_useStickyState__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'token', true);
  const [expire, setExpire] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false, 'expire', true);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const setError = error => console.log(error);

  axiosJWT.interceptors.request.use(async config => {
    config.headers.Authorization = `Bearer ${token}`;
    const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
    setExpire(decoded.exp);
    return config;
  }, error => {
    return Promise.reject(error);
  });

  const register = async newUser => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${api}/signup`, newUser);
      const {
        email,
        password
      } = newUser;
      login({
        email,
        password
      });
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  const login = async credential => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${api}/login`, credential);
      setToken(res.data.refreshToken);
      const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(res.data.refreshToken);
      console.log(decoded);
      setUser(decoded?.user);
    } catch (err) {
      setError(err);
    } // refreshToken();


    setLoading(false);
  };

  const logout = async () => {
    if (loading) return;

    try {
      setToken(false);
      setUser(false);
      await axios__WEBPACK_IMPORTED_MODULE_2___default()["delete"](`${api}/logout`);
    } catch (err) {
      setError(err);
    }
  };

  const refreshToken = async () => {
    if (loading || !(0,react_use_cookie__WEBPACK_IMPORTED_MODULE_3__.getCookie)('refreshToken')) return;
    setLoading(true);

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${api}/token`);
      setToken(response.data.accessToken);
      const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(response.data.accessToken);
      setUser(decoded?.user);
      setExpire(decoded?.exp);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }; //   useEffect(() => {
  //     if (!token) refreshToken();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  // Return


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthContext.Provider, {
    value: {
      user,
      token,
      expire,
      register,
      login,
      logout,
      axiosJWT
    }
  }, children);
};

__signature__(AuthProvider, "useStickyState{[user, setUser]}\nuseStickyState{[token, setToken]}\nuseState{[expire, setExpire](false)}\nuseState{[loading, setLoading](false)}", () => [_hooks_useStickyState__WEBPACK_IMPORTED_MODULE_4__["default"], _hooks_useStickyState__WEBPACK_IMPORTED_MODULE_4__["default"]]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(api, "api", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\components\\context\\AuthContext.jsx");
  reactHotLoader.register(axiosJWT, "axiosJWT", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\components\\context\\AuthContext.jsx");
  reactHotLoader.register(AuthContext, "AuthContext", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\components\\context\\AuthContext.jsx");
  reactHotLoader.register(AuthProvider, "AuthProvider", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\components\\context\\AuthContext.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\pages\\Popup\\Popup.jsx: Unexpected token, expected \",\" (47:60)\n\n\u001b[0m \u001b[90m 45 |\u001b[39m       }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 |\u001b[39m       console\u001b[33m.\u001b[39mlog(newJob)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 47 |\u001b[39m       \u001b[36mconst\u001b[39m res \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m axios\u001b[33m.\u001b[39mpost(\u001b[32m`${wishlistApi}`\u001b[39m\u001b[33m,\u001b[39m newJob {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 |\u001b[39m         config\u001b[33m.\u001b[39mheaders\u001b[33m.\u001b[39m\u001b[33mAuthorization\u001b[39m \u001b[33m=\u001b[39m \u001b[32m`Bearer ${token}`\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 |\u001b[39m       })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 50 |\u001b[39m       console\u001b[33m.\u001b[39mlog(res)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:476:17)\n    at Object.raiseWithData (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:469:17)\n    at Object.raise (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:430:17)\n    at Object.unexpected (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:3789:16)\n    at Object.expect (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:3773:28)\n    at Object.parseCallExpressionArguments (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:12356:14)\n    at Object.parseCoverCallAndAsyncArrowHead (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:12272:29)\n    at Object.parseSubscript (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:12197:19)\n    at Object.parseSubscripts (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:12166:19)\n    at Object.parseExprSubscripts (D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\node_modules\\@babel\\parser\\lib\\index.js:12155:17)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a45cda9426e5b227058")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.58fa53bacf426717743a.hot-update.js.map