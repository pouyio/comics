webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/base.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApiService = (function (_super) {
    __extends(ApiService, _super);
    function ApiService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.login = function (user) {
            return _this.http.post(_this.baseUrl + "/login", { user: user }).map(function (r) {
                _this.auth.setToken(r.text());
                return { ok: 1 };
            });
        };
        _this.logout = function () { return _this.auth.removeToken(); };
        return _this;
    }
    ApiService.prototype.getComic = function (id) {
        var _this = this;
        this.resolver.setState(true);
        return this.http.get(this.baseUrl + "/comic/" + id, this.getOptions())
            .map(function (res) { return res.json(); })
            .do(function (e) { return _this.resolver.setState(false); })
            .catch(this.handleError);
    };
    ApiService.prototype.getComicsRead = function () {
        var _this = this;
        this.resolver.setState(true);
        return this.http.get(this.baseUrl + "/comics/read", this.getOptions())
            .map(function (r) { return r.json(); })
            .do(function (e) { return _this.resolver.setState(false); })
            .catch(this.handleError);
    };
    ApiService.prototype.getComicIssue = function (id, issue) {
        var _this = this;
        this.resolver.setState(true);
        return this.http.get(this.baseUrl + "/comic/" + id + "/" + issue, this.getOptions())
            .map(function (res) { return res.json(); })
            .do(function (e) { return _this.resolver.setState(false); })
            .catch(this.handleError);
    };
    ApiService.prototype.getNews = function () {
        return this.http.get(this.baseUrl + "/comics/news", this.getOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.downloadComicIssue = function (id, issue) {
        return this.http.post(this.baseUrl + "/comic/" + id + "/" + issue, {}, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* ResponseContentType */].Blob }).map(function (res) {
            return new Blob([res.blob()], { type: 'application/pdf' });
        }).catch(this.handleError);
    };
    ApiService.prototype.markIssueRead = function (comic, issue, isRead) {
        return this.http.post(this.baseUrl + "/comic/" + comic, { issue: issue, read: isRead }, this.getOptions()).catch(this.handleError);
    };
    ApiService.prototype.search = function (query) {
        return (this.http.get(this.baseUrl + "/comics/search/" + encodeURI(query), this.getOptions()).map(function (res) { return res.json(); }).catch(this.handleError));
    };
    ApiService.prototype.getImage = function (url) {
        return this.http.post(this.baseUrl + "/encode", { url: url }, this.getOptions()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    return ApiService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row align-items-center\" *ngIf=\"logged\">\n    <nav class=\"col-sm-6\">\n      <ul class=\"p-0\">\n        <li class=\"d-inline-block\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"goBack()\">\n            <i class=\"fa fa-angle-left\"></i>\n            Back\n          </button>\n        </li>\n        <li class=\"d-inline-block btn-link\"><a (click)=\"logout()\">Logout</a></li>\n        <li class=\"d-inline-block\"><a routerLink=\"/comics\">Comics</a></li>\n      </ul>\n    </nav>\n    <div class=\"col-sm-6\">\n      <app-search></app-search>\n    </div>\n  </div>\n  <div *ngIf=\"resolving | async\" class=\"card fixed-top bg-faded\">\n    <h1 class=\"display-4 card-block text-center\">\n      Loading something...\n    </h1>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(location, router, api, auth, resolver, cdRef) {
        var _this = this;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.resolver = resolver;
        this.cdRef = cdRef;
        this.goBack = function () { return window.history.back(); };
        this.logout = function () {
            _this.logged = false;
            _this.api.logout();
        };
        router.events.subscribe(function (params) {
            _this.logged = params.url !== '/login';
        });
        this.logged = !!this.auth.getToken();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resolving = this.resolver.getState();
        this.cdRef.detectChanges();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["g" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resolve_service__["a" /* ResolveService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__comic_issue_resolve__ = __webpack_require__("../../../../../src/app/comic-issue-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comics_read_resolve__ = __webpack_require__("../../../../../src/app/comics-read-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comic_resolve__ = __webpack_require__("../../../../../src/app/comic-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__comic_comic_component__ = __webpack_require__("../../../../../src/app/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__comic_issue_comic_issue_component__ = __webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__image_viewer_image_viewer_component__ = __webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHammerConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, {
            touchAction: "auto",
        });
        // mc.get('pinch').set({enable: true});
        return mc;
    };
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* HammerGestureConfig */]));

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__comic_comic_component__["a" /* ComicComponent */],
            __WEBPACK_IMPORTED_MODULE_16__comic_issue_comic_issue_component__["a" /* ComicIssueComponent */],
            __WEBPACK_IMPORTED_MODULE_17__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__image_viewer_image_viewer_component__["a" /* ImageViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__["OrderModule"],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_routes__["a" /* AppRoutes */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_10__resolve_service__["a" /* ResolveService */],
            __WEBPACK_IMPORTED_MODULE_13__comic_resolve__["a" /* ComicResolve */],
            __WEBPACK_IMPORTED_MODULE_12__comics_read_resolve__["a" /* ComicsReadResolve */],
            __WEBPACK_IMPORTED_MODULE_11__comic_issue_resolve__["a" /* ComicIssueResolve */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */], useClass: MyHammerConfig }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comic_comic_component__ = __webpack_require__("../../../../../src/app/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comic_issue_comic_issue_component__ = __webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comic_issue_resolve__ = __webpack_require__("../../../../../src/app/comic-issue-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comics_read_resolve__ = __webpack_require__("../../../../../src/app/comics-read-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comic_resolve__ = __webpack_require__("../../../../../src/app/comic-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth-guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });








var AppRoutes = [
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'comics', pathMatch: 'full' },
            { path: 'comics', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], resolve: { comics: __WEBPACK_IMPORTED_MODULE_5__comics_read_resolve__["a" /* ComicsReadResolve */] } },
            { path: 'comic/:id', component: __WEBPACK_IMPORTED_MODULE_0__comic_comic_component__["a" /* ComicComponent */], resolve: { comic: __WEBPACK_IMPORTED_MODULE_6__comic_resolve__["a" /* ComicResolve */] } },
            { path: 'comic/:id/:issue', component: __WEBPACK_IMPORTED_MODULE_1__comic_issue_comic_issue_component__["a" /* ComicIssueComponent */], resolve: { issue: __WEBPACK_IMPORTED_MODULE_4__comic_issue_resolve__["a" /* ComicIssueResolve */] } },
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'comics' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.canActivate = function () {
            if (!!_this.auth.getToken())
                return true;
            _this.router.navigate(['/login']);
        };
    }
    return AuthGuard;
}());
AuthGuard = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */])), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.getToken = function () {
            if (_this.token)
                return _this.token;
            return localStorage.getItem('token');
        };
        this.setToken = function (tk) {
            localStorage.setItem('token', tk);
            _this.token = tk;
        };
        this.removeToken = function () {
            localStorage.removeItem('token');
            _this.token = '';
            _this.router.navigate(['login']);
        };
        this.token = localStorage.getItem('token');
    }
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BaseService = (function () {
    function BaseService(http, auth, resolver) {
        this.http = http;
        this.auth = auth;
        this.resolver = resolver;
        // protected baseUrl: string = 'http://192.168.1.33:8080';
        this.baseUrl = 'http://ec2-52-57-145-92.eu-central-1.compute.amazonaws.com:8080';
    }
    BaseService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('content-type', 'application/json; charset=utf-8');
        headers.append('Accept', 'application/json; charset=utf-8');
        headers.append('Authorization', this.auth.getToken());
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return opts;
    };
    BaseService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    BaseService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return BaseService;
}());
BaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__resolve_service__["a" /* ResolveService */]) === "function" && _c || Object])
], BaseService);

var _a, _b, _c;
//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/comic-issue-resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicIssueResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicIssueResolve = (function () {
    function ComicIssueResolve(api, resolver) {
        this.api = api;
        this.resolver = resolver;
    }
    ComicIssueResolve.prototype.resolve = function (route) {
        var id = route.paramMap.get('id');
        var iss = route.paramMap.get('issue');
        return this.api.getComicIssue(id, iss).map(function (i) { return i.data; });
    };
    return ComicIssueResolve;
}());
ComicIssueResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resolve_service__["a" /* ResolveService */]) === "function" && _b || Object])
], ComicIssueResolve);

var _a, _b;
//# sourceMappingURL=comic-issue-resolve.js.map

/***/ }),

/***/ "../../../../../src/app/comic-issue/comic-issue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comic-issue/comic-issue.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"\" style=\"width:80%\">\n  <app-image-viewer (onSwiped)=\"onSwiped($event)\" [img]=\"issue.attributes.pages[page]\"></app-image-viewer>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    <input style=\"width:100%\" type=\"range\" name=\"pages\" min=\"0\" max=\"{{issue.attributes.pages.length - 1}}\" [(ngModel)]=\"page\">\n  </div>\n\n  <div class=\"btn-group col-6\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"page = page-1\" [disabled]=\"page === 0\">prev</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"page = page+1\" [disabled]=\"page === lastPage\">next</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comic-issue/comic-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicIssueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicIssueComponent = (function () {
    function ComicIssueComponent(api, route) {
        this.api = api;
        this.route = route;
        this.page = 0;
    }
    ComicIssueComponent.prototype.ngOnInit = function () {
        this.issue = this.route.snapshot.data['issue'];
        this.lastPage = this.issue.attributes.pages.length - 1;
    };
    ComicIssueComponent.prototype.onSwiped = function (e) {
        if ((this.page > 0 && e < 0) || (this.page < this.lastPage && e > 0)) {
            this.page += e;
        }
    };
    return ComicIssueComponent;
}());
ComicIssueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comic-issue',
        template: __webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ComicIssueComponent);

var _a, _b;
//# sourceMappingURL=comic-issue.component.js.map

/***/ }),

/***/ "../../../../../src/app/comic-resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicResolve = (function () {
    function ComicResolve(api, resolver) {
        var _this = this;
        this.api = api;
        this.resolver = resolver;
        this.resolve = function (route) { return _this.api.getComic(route.paramMap.get('id')); };
    }
    return ComicResolve;
}());
ComicResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resolve_service__["a" /* ResolveService */]) === "function" && _b || Object])
], ComicResolve);

var _a, _b;
//# sourceMappingURL=comic-resolve.js.map

/***/ }),

/***/ "../../../../../src/app/comic/comic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5 {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comic/comic.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comic && comic.data; else noAvailable\">\n  <div class=\"row\">\n    <h1 class=\"col-12 display-4\">{{comic.data.attributes.title}}</h1>\n    <p class=\"col-12\"><mark>{{comic.data.attributes.status}}.</mark> {{comic.data.attributes.summary}}</p>\n\n    <div class=\"col-sm-4 col-6\">\n      <img class=\"img-fluid\" [src]=\"comic.data.links.cover\" alt=\"cover\">\n    </div>\n\n    <div class=\"col-sm-4 col-6\">\n      <h2>Info</h2>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n            <strong>Artist</strong>: {{comic.data.relationships.artist.id}}\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Publisher</strong>: {{comic.data.relationships.publisher.id}}\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Writer</strong>: {{comic.data.relationships.writer.id}}\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-6 col-sm-12\">\n          <h2>Genres</h2>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <span class=\"badge badge-default m-1\" *ngFor=\"let genre of genres\">{{genre.id}}</span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-6 col-sm-12\">\n          <h2>Publication</h2>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              {{comic.data.attributes.publication_date}}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 col-sm-10 offset-sm-1\">\n      <h2>Issues</h2>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between\" *ngFor=\"let issue of issues; let i = index\">\n          <a routerLink=\"/comic/{{comic.data.id}}/{{getIssueLink(issue.links.self)}}\">{{issue.attributes.title}}</a>\n          <div class=\"\">\n            <button (click)=\"downloadIssue(comic.data.id, getIssueLink(issue.links.self))\" type=\"button\" class=\"btn btn-sm btn-outline-warning\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\">\n            PDF\n          </button>\n            <button [class.active]=\"issuesRead[issue.id]\" type=\"button\" class=\"btn btn-outline-primary btn-sm\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\" (click)=\"markIssueRead(issue.id)\">\n            Read\n          </button>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n\n<ng-template #noAvailable>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    Comic not found.\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/comic/comic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComicComponent = (function () {
    function ComicComponent(api, route) {
        var _this = this;
        this.api = api;
        this.route = route;
        this._curateDate = function (comic) {
            _this.issues = comic.included.filter(function (inc) { return inc.type === 'issues'; }).sort(function (a, b) { return a.links.self.localeCompare(b.links.self, undefined, { numeric: true, sensitivity: 'base' }); });
            _this.issuesRead = _this.issues.reduce(function (acc, issue) {
                var found = !!_this.isRead(issue.id);
                acc[issue.id] = found;
                return acc;
            }, []);
            _this.genres = comic.data.relationships.genres;
        };
        this.route.data.subscribe(function (d) {
            _this.comic = d.comic;
            _this._curateDate(_this.comic);
        });
    }
    ComicComponent.prototype.markIssueRead = function (id) {
        var _this = this;
        var isRead = !this.issuesRead[id];
        this.api.markIssueRead(this.comic.data.id, id, isRead).subscribe(function (res) {
            if (res.ok)
                _this.issuesRead[id] = isRead;
        });
    };
    ComicComponent.prototype.getIssueLink = function (link) {
        var arr = link.split('/');
        return arr[arr.length - 1];
    };
    ComicComponent.prototype.downloadIssue = function (comicId, issueId) {
        this.api.downloadComicIssue(comicId, issueId).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](res, "comic.pdf");
        });
    };
    ComicComponent.prototype.isRead = function (issueId) {
        return this.comic.issuesRead.find(function (issue) { return issue === issueId; });
    };
    return ComicComponent;
}());
ComicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comic',
        template: __webpack_require__("../../../../../src/app/comic/comic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comic/comic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ComicComponent);

var _a, _b;
//# sourceMappingURL=comic.component.js.map

/***/ }),

/***/ "../../../../../src/app/comics-read-resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicsReadResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComicsReadResolve = (function () {
    function ComicsReadResolve(api) {
        var _this = this;
        this.api = api;
        this.resolve = function () {
            var readShared$ = _this.api.getComicsRead().share();
            var comics$ = readShared$.switchMap(function (cs) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"], cs.map(function (c) { return _this.api.getComic(c.comic); }));
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(readShared$, _this.api.getNews(), comics$);
        };
    }
    return ComicsReadResolve;
}());
ComicsReadResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ComicsReadResolve);

var _a;
//# sourceMappingURL=comics-read-resolve.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Read</h1>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let comic of comicsRead\">\n    <span>\n      <i class=\"fa\" [ngClass]=\"getCalendarIcon(comic.comic)\"> </i>\n      {{comicsMap[comic.comic].attributes.publication_date}}\n      <a routerLink=\"/comic/{{comic.comic}}\"> {{comicsMap[comic.comic].attributes.title}}</a>\n    </span>\n    <span class=\"badge badge-default m-1\" *ngFor=\"let issue of comic.issues | orderBy: issue\">\n      <a routerLink=\"/comic/{{getIssueLink(issuesMap[issue].links.self)}}\" class=\"text-white\">#{{issuesMap[issue].attributes.number === undefined? issuesMap[issue].attributes.title : issuesMap[issue].attributes.number}} </a>\n    </span>\n  </li>\n</ul>\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <h1 class=\"text-center\">News</h1>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let new of news.news\">\n          <a routerLink=\"/comic/{{new.id}}\">{{new.attributes.title}}\n          <img class=\"img-fluid\" style=\"max-height: 7em\" [src]=\"new.links.cover\" alt=\"cover\"></a>\n        </li>\n      </ul>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <h1 class=\"text-center\">Updated</h1>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let update of news.updated\">\n        <a routerLink=\"/comic/{{update.id}}\">{{update.attributes.title}}\n        <img class=\"img-fluid\" style=\"max-height: 7em\" [src]=\"update.links.cover\" alt=\"cover\"></a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(route) {
        var _this = this;
        this.route = route;
        this._map = function (acc, comic) {
            acc[comic.id] = comic;
            return acc;
        };
        this.getIssueLink = function (self) { return self.split('/').splice(self.split('/').length - 2).join('/'); };
        this.getCalendarIcon = function (comicId) {
            return _this.comicsMap[comicId].attributes.status == 'Completed' ? 'fa-calendar-plus-o' : 'fa-calendar-o';
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        _a = this.route.snapshot.data['comics'], this.comicsRead = _a[0], this.news = _a[1], this.fullComics = _a[2];
        this.issuesMap = this.fullComics
            .map(function (c) { return c.included; })
            .reduce(function (a, b) { return a.concat(b); }, [])
            .filter(function (c) { return c.type === 'issues'; })
            .reduce(this._map, {});
        this.comicsMap = this.fullComics
            .map(function (c) { return c.data; })
            .reduce(function (a, b) { return a.concat(b); }, [])
            .reduce(this._map, {});
        var _a;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  z-index: 10;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<img (swipeleft)=\"swipe(1)\" (swiperight)=\"swipe(-1)\" [class.full-screen]=\"fullScreen\" class=\"img-fluid\" [src]=\"img\" alt=\"comic image\" (click)=\"toggleFullScreen()\">\n"

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageViewerComponent = (function () {
    function ImageViewerComponent() {
        this.onSwiped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fullScreen = false;
    }
    ImageViewerComponent.prototype.toggleFullScreen = function () {
        this.fullScreen = !this.fullScreen;
    };
    ImageViewerComponent.prototype.swipe = function (e) {
        this.onSwiped.emit(e);
    };
    return ImageViewerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImageViewerComponent.prototype, "img", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageViewerComponent.prototype, "onSwiped", void 0);
ImageViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image-viewer',
        template: __webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ImageViewerComponent);

//# sourceMappingURL=image-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center my-5\">\n  <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n      <input type=\"text\" autocapitalize=\"none\" class=\"form-control\" (keyup.enter)=\"login(user)\" placeholder=\"User\" [(ngModel)]=\"user\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"login(user)\">Login</button>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this._success = function () { return _this.router.navigate(['comics']); };
        this._error = function (e) { return alert(e.text()); };
        this.login = function (user) { return _this.api.login(user).subscribe(_this._success, _this._error); };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResolveService = (function () {
    function ResolveService() {
        var _this = this;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.setState = function (state) { return _this.subject.next(state); };
        this.getState = function () { return _this.subject.asObservable(); };
    }
    return ResolveService;
}());
ResolveService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ResolveService);

//# sourceMappingURL=resolve.service.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div [class.has-danger]=\"searchForm.value && searchForm.value.length <= 3\" class=\"input-group\">\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-sm btn-secondary\" type=\"button\" (click)=\"searchForm.reset()\">Cancel</button>\n    </span>\n    <input [formControl]=\"searchForm\" type=\"text\" class=\"form-control\" (keyup.escape)=\"searchForm.reset()\" placeholder=\"Search comic\">\n  </div>\n  <ul class=\"list-group d-flex flex-row flex-wrap\" style=\"position:absolute; z-index:2; overflow-y: overlay; max-height: 90vh\">\n    <li *ngFor=\"let item of listed | async\" class=\"list-group-item d-flex justify-content-between\">\n      <a routerLink=\"/comic/{{item.id}}\">{{item.attributes.title}}</a>\n      <img style=\"width:4em\" class=\"img-fluid\" [src]=\"item.links.cover\" alt=\"cover\">\n      <div>\n        <span>{{item.attributes.completed ? 'Complete': 'Ongoing'}}</span>\n        <small>{{item.attributes.summary}}</small>\n      </div>\n    </li>\n    <li *ngIf=\"loading\" class=\"list-group-item d-flex justify-content-between\">\n      Loading ...\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */]();
        this.loading = false;
        this.routeChangeO = router.events.map(function (e) { return []; });
        this.typeAheadO = this.searchForm.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .do(function (e) { return _this.loading = true; })
            .switchMap(function (term) { return (term && term.length > 3) ? api.search(term) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of([]); })
            .do(function (e) { return _this.loading = false; });
        this.listed = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].merge(this.routeChangeO, this.typeAheadO);
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map