var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([24],{

/***/ "../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/xuguodong/.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/COMP/c-loading/c-loading.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLoading = function () {
    function CLoading() {
        _classCallCheck(this, CLoading);

        this.data = {
            loading: true
        };
        this.computed = {};
        this.watch = {};
        this.methods = {
            changeLoading: function changeLoading() {
                this.loading = !this.loading;
            }
        };
    }

    _createClass(CLoading, [{
        key: 'beforeCreate',
        value: function beforeCreate() {}
    }, {
        key: 'created',
        value: function created() {}
    }, {
        key: 'beforeMount',
        value: function beforeMount() {}
    }, {
        key: 'beforeDestroy',
        value: function beforeDestroy() {}
    }, {
        key: 'destroyed',
        value: function destroyed() {}
    }]);

    return CLoading;
}();

exports.default = new CLoading();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/xuguodong/.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/COMP/c-loading/c-loading.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/COMP/c-loading/c-loading.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\"}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/xuguodong/.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/COMP/c-loading/c-loading.cml");
var __cml__script = __webpack_require__("../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/xuguodong/.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../../.nvm/versions/node/v8.11.2/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/COMP/c-loading/c-loading.cml");


/***/ })

},["./src/pages/COMP/c-loading/c-loading.cml"]);