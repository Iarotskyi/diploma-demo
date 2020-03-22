function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'diploma-angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "app-title"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Angular Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product-list");
        }
      },
      directives: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]],
      styles: [".app-title[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/services/data.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 14,
      vars: 0,
      consts: [[1, "loader"], [1, "loader-container"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@-webkit-keyframes appearance {\r\n  0% { opacity: 1 }\r\n  100% { opacity: 0 }\r\n}\r\n\r\n@keyframes appearance {\r\n  0% { opacity: 1 }\r\n  100% { opacity: 0 }\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  left: 94px;\r\n  top: 48px;\r\n  position: absolute;\r\n  -webkit-animation: appearance linear 1s infinite;\r\n          animation: appearance linear 1s infinite;\r\n  background: #1d3f72;\r\n  width: 12px;\r\n  height: 24px;\r\n  border-radius: 6px / 12px;\r\n  -webkit-transform-origin: 6px 52px;\r\n          transform-origin: 6px 52px;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n  -webkit-animation-delay: -0.9166666666666666s;\r\n          animation-delay: -0.9166666666666666s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  -webkit-transform: rotate(30deg);\r\n          transform: rotate(30deg);\r\n  -webkit-animation-delay: -0.8333333333333334s;\r\n          animation-delay: -0.8333333333333334s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  -webkit-transform: rotate(60deg);\r\n          transform: rotate(60deg);\r\n  -webkit-animation-delay: -0.75s;\r\n          animation-delay: -0.75s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n  -webkit-animation-delay: -0.6666666666666666s;\r\n          animation-delay: -0.6666666666666666s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n  -webkit-transform: rotate(120deg);\r\n          transform: rotate(120deg);\r\n  -webkit-animation-delay: -0.5833333333333334s;\r\n          animation-delay: -0.5833333333333334s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n  -webkit-transform: rotate(150deg);\r\n          transform: rotate(150deg);\r\n  -webkit-animation-delay: -0.5s;\r\n          animation-delay: -0.5s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  -webkit-animation-delay: -0.4166666666666667s;\r\n          animation-delay: -0.4166666666666667s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n  -webkit-transform: rotate(210deg);\r\n          transform: rotate(210deg);\r\n  -webkit-animation-delay: -0.3333333333333333s;\r\n          animation-delay: -0.3333333333333333s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\r\n  -webkit-transform: rotate(240deg);\r\n          transform: rotate(240deg);\r\n  -webkit-animation-delay: -0.25s;\r\n          animation-delay: -0.25s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\r\n  -webkit-transform: rotate(270deg);\r\n          transform: rotate(270deg);\r\n  -webkit-animation-delay: -0.16666666666666666s;\r\n          animation-delay: -0.16666666666666666s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\r\n  -webkit-transform: rotate(300deg);\r\n          transform: rotate(300deg);\r\n  -webkit-animation-delay: -0.08333333333333333s;\r\n          animation-delay: -0.08333333333333333s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\r\n  -webkit-transform: rotate(330deg);\r\n          transform: rotate(330deg);\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s;\r\n  background: #1d3f72;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  -webkit-transform: translateZ(0) scale(1);\r\n          transform: translateZ(0) scale(1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-transform-origin: 0 0;\r\n          transform-origin: 0 0; \r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsS0FBSyxXQUFXO0VBQ2hCLE9BQU8sV0FBVztBQUNwQjs7QUFIQTtFQUNFLEtBQUssV0FBVztFQUNoQixPQUFPLFdBQVc7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qiw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qiw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDZCQUFxQjtVQUFyQixxQkFBcUIsRUFBRSxtQkFBbUI7QUFDNUM7O0FBRUEsd0JBQXdCLHVCQUF1QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBhcHBlYXJhbmNlIHtcclxuICAwJSB7IG9wYWNpdHk6IDEgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwIH1cclxufVxyXG5cclxuLmxvYWRlci1jb250YWluZXIgZGl2IHtcclxuICBsZWZ0OiA5NHB4O1xyXG4gIHRvcDogNDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYW5pbWF0aW9uOiBhcHBlYXJhbmNlIGxpbmVhciAxcyBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHggLyAxMnB4O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDZweCA1MnB4O1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjkxNjY2NjY2NjY2NjY2NjZzO1xyXG4gIGJhY2tncm91bmQ6ICMxZDNmNzI7XHJcbn1cclxuXHJcbi5sb2FkZXItY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjgzMzMzMzMzMzMzMzMzMzRzO1xyXG4gIGJhY2tncm91bmQ6ICMxZDNmNzI7XHJcbn1cclxuXHJcbi5sb2FkZXItY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42NjY2NjY2NjY2NjY2NjY2cztcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNTgzMzMzMzMzMzMzMzMzNHM7XHJcbiAgYmFja2dyb3VuZDogIzFkM2Y3MjtcclxufVxyXG5cclxuLmxvYWRlci1jb250YWluZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gIGJhY2tncm91bmQ6ICMxZDNmNzI7XHJcbn1cclxuXHJcbi5sb2FkZXItY29udGFpbmVyIGRpdjpudGgtY2hpbGQoNykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40MTY2NjY2NjY2NjY2NjY3cztcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzMzMzMzMzMzMzMzMzMzM3M7XHJcbiAgYmFja2dyb3VuZDogIzFkM2Y3MjtcclxufVxyXG5cclxuLmxvYWRlci1jb250YWluZXIgZGl2Om50aC1jaGlsZCg5KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cztcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEwKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2NjY2NjY2NjY2NjY2NjY2cztcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDExKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjA4MzMzMzMzMzMzMzMzMzMzcztcclxuICBiYWNrZ3JvdW5kOiAjMWQzZjcyO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEyKSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gIGJhY2tncm91bmQ6ICMxZDNmNzI7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9hZGVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgLyogc2VlIG5vdGUgYWJvdmUgKi9cclxufVxyXG5cclxuLmxvYWRlci1jb250YWluZXIgZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductListComponent_tr_26_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](index_r4);
      }
    }

    function ProductListComponent_tr_26_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r2.timeDifference);
      }
    }

    function ProductListComponent_tr_26_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var log_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](log_r2.productAmount);
      }
    }

    function ProductListComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductListComponent_tr_26_td_1_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductListComponent_tr_26_td_2_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductListComponent_tr_26_td_3_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var first_r3 = ctx.first;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !first_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !first_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !first_r3);
      }
    }

    function ProductListComponent_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Product ID:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Product Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Product Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r13.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r13.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r13.description);
      }
    }

    function ProductListComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductListComponent_div_31_div_2_Template, 17, 4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r11 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r11.products);
      }
    }

    var ProductListComponent =
    /*#__PURE__*/
    function () {
      function ProductListComponent(dataService, cd) {
        _classCallCheck(this, ProductListComponent);

        this.dataService = dataService;
        this.cd = cd;
        this.iteration = 0;
        this.logs = [{
          timeDifference: 0
        }];
        this.initData_();
      }

      _createClass(ProductListComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var timeDifference = performance.now() - this.logs[this.iteration].startTime;
          this.logs[this.iteration].timeDifference = Math.ceil(timeDifference) / 1000;
          this.logs[this.iteration].productAmount = this.productAmount;
          this.cd.detectChanges();
        }
      }, {
        key: "getProducts",
        value: function getProducts(productAmount) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.productAmount = productAmount;
                    this.iteration++;
                    this.logs[this.iteration] = {
                      startTime: performance.now()
                    };
                    _context.next = 5;
                    return this.dataService.getData(productAmount.toString());

                  case 5:
                    this.dataObserver = _context.sent;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "clearLogs",
        value: function clearLogs() {
          this.initData_();
        }
      }, {
        key: "initData_",
        value: function initData_() {
          this.iteration = 0;
          this.logs = [{
            timeDifference: 0
          }];
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 33,
      vars: 4,
      consts: [[1, "actions"], [1, "btn", "btn-standard", 3, "click"], [1, "divider"], [1, "logs"], [1, "title", "logs-title"], [1, "btn", "btn-additional", 3, "click"], [1, "logs-table"], ["class", "logs-row", 4, "ngFor", "ngForOf"], [1, "products"], [1, "title", "products-title"], [4, "ngIf"], [1, "logs-row"], [1, "products-container"], ["class", "product", 4, "ngFor", "ngForOf"], [1, "product"], ["alt", "product-image", 1, "product-image", 3, "src"], [1, "product-id"], [1, "product-title"], [1, "product-content"], [1, "product-name"], [1, "product-description"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_2_listener() {
            return ctx.getProducts(50);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Load 50 products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_4_listener() {
            return ctx.getProducts(200);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Load 200 products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_6_listener() {
            return ctx.getProducts(1000);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Load 1000 products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_8_listener() {
            return ctx.getProducts(5000);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Load 5000 products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Time Logs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductListComponent_Template_button_click_14_listener() {
            return ctx.clearLogs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Clear Logs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Time spent for request (in seconds)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Requested quantity of products");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProductListComponent_tr_26_Template, 4, 3, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Product List");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProductListComponent_div_31_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 2, ctx.dataObserver));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".actions[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin: 0 20px;\r\n}\r\n\r\n.logs[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.logs-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.logs-table[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  margin: 20px auto 0 auto;\r\n}\r\n\r\n.logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .logs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n  border: 1px solid #919191;\r\n}\r\n\r\n.products-container[_ngcontent-%COMP%] {\r\n  padding: 40px 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.product[_ngcontent-%COMP%] {\r\n  border: 1px solid #919191;\r\n  margin: 0 20px 20px 20px;\r\n  max-width: 300px;\r\n  overflow: hidden;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.product-image[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n.product-id[_ngcontent-%COMP%], .product-name[_ngcontent-%COMP%], .product-description[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  padding: 5px;\r\n}\r\n\r\n.product-content[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.product-title[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  color: #913030;\r\n}\r\n\r\n.product-id[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\r\n  padding-left: 5px;\r\n}\r\n\r\n.product-description[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding-top: 5px;\r\n  font-weight: 300;\r\n}\r\n\r\n.loader-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbnMgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5sb2dzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dzLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubG9ncy10YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XHJcbn1cclxuXHJcbi5sb2dzLXRhYmxlIHRoLFxyXG4ubG9ncy10YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTkxOTE7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3Qge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTkxOTE7XHJcbiAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3QtaWQsXHJcbi5wcm9kdWN0LW5hbWUsXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250ZW50IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzkxMzAzMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaWQgLnByb2R1Y3QtY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uIC5wcm9kdWN0LWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5sb2FkZXItY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/services/data.service.ts":
  /*!**************************************!*\
    !*** ./src/services/data.service.ts ***!
    \**************************************/

  /*! exports provided: DataService */

  /***/
  function srcServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
      }

      _createClass(DataService, [{
        key: "getData",
        value: function getData(amount) {
          return this.http.get("./assets/json/data-".concat(amount, ".json"));
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Admin\WebstormProjects\diploma-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map