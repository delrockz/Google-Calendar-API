(this.webpackJsonpgcapi=this.webpackJsonpgcapi||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),axios__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(17),axios__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__),GoogleLogin=function(_Component){Object(C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(GoogleLogin,_Component);var _super=Object(C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(GoogleLogin);function GoogleLogin(props){var _this;return Object(C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,GoogleLogin),_this=_super.call(this,props),_this.displayEvents=function(){axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/fetchEvents").then((function(response){var calData=Object(C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_this.state.calData),resData=eval(response.data[0]);for(var i in resData.events)calData.push({eventName:resData.events[i],recurrence:resData.recurrence[i]});_this.setState({calData:calData})})).catch((function(_){return console.log("dataE",_)}))},_this.state={calData:[]},_this.displayEvents.bind(Object(C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_this)),_this}return Object(C_Users_dxdel_Documents_GitHub_Google_Calendar_API_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(GoogleLogin,[{key:"render",value:function(){var _=this.state.calData.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:[_.eventName," : ",_.recurrence]})}));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form",{method:"GET",action:"/gauth",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.getPermission,children:"Login to Google"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br",{})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:this.displayEvents,children:"Show Google Calendar Events"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Events:"}),_]})}}]),GoogleLogin}(react__WEBPACK_IMPORTED_MODULE_7__.Component);__webpack_exports__.a=GoogleLogin},26:function(_,e,t){},44:function(_,e,t){"use strict";t.r(e);var a=t(0),s=t(2),r=t.n(s),n=t(13),o=t.n(n),l=(t(26),t(14));var i=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(l.a,{})})},c=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,n=e.getTTFB;t(_),a(_),s(_),r(_),n(_)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(i,{})}),document.getElementById("root")),c()}},[[44,1,2]]]);
//# sourceMappingURL=main.d39a4a15.chunk.js.map