(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./node_modules/@sendbird/chat/lib/__bundle-7085bddf.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"xmlHttpRequest",(function(){return i}));var _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@sendbird/chat/lib/__bundle-fc36cb86.js"),i=function(i,u){return new Promise((function(p,c){if("undefined"!=typeof XMLHttpRequest){var f=_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.w.of(i),l=f.dispatcher,h=f.logger,q=u.requestId,v=u.method,g=u.url,w=u.headers,b=void 0===w?{}:w,m=u.data,E=void 0===m?"":m,H=u.uploadProgressHandler,S=!1,x=new XMLHttpRequest;for(var y in x.open(v,g),b)x.setRequestHeader(y,b[y]);H&&x.upload.addEventListener("progress",(function(e){e.lengthComputable?H(q,e.loaded,e.total):h.debug("Progress computing failed: `Content-Length` header is not given.")})),x.onabort=function(){c(_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc.requestCanceled)},x.onerror=function(e){c(_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc.networkError)},x.onreadystatechange=function(){if(x.readyState===XMLHttpRequest.DONE&&!S)if(0===x.status||x.status>=200&&x.status<400)try{var e=JSON.parse(x.responseText);p(new _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.ec(i,e))}catch(u){c(_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc.networkError)}else try{var d=JSON.parse(x.responseText);if(d){var u=new _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc(d);if(u.isSessionExpiredError){if(l.dispatch(new _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.l({reason:u.code})),!(x instanceof _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.Xb)){var f=new _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.zb;return l.dispatch(new _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.Yb({request:x,deferred:f,error:u})),f.promise}}else u.isSessionInvalidatedError&&l.dispatch(new _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.l({reason:u.code}));c(u)}else c(_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc.requestFailed)}catch(u){c(_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc.requestFailed)}},l.on((function(e){e instanceof _bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.xb&&(e.requestId&&e.requestId!==q||(S=!0,x.abort()))})),x.send(E)}else c(_bundle_fc36cb86_js__WEBPACK_IMPORTED_MODULE_0__.oc.xmlHttpRequestNotSupported)}))}}}]);