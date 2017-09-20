webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/base.service.ts");
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
            return _this.http.post(_this.baseUrl + "/login", { user: user }, { responseType: 'text' }).map(function (token) {
                _this.auth.setToken(token);
                return { ok: 1 };
            });
        };
        _this.logout = function () { return _this.auth.removeToken(); };
        return _this;
    }
    ApiService.prototype.getComic = function (id) {
        var _this = this;
        this.resolver.setState(true);
        return this.http.get(this.baseUrl + "/comic/" + id)
            .do(function (e) { return _this.resolver.setState(false); })
            .catch(this.handleError);
    };
    ApiService.prototype.getComicsRead = function () {
        var _this = this;
        this.resolver.setState(true);
        return this.http.get(this.baseUrl + "/comics/read")
            .do(function (e) { return _this.resolver.setState(false); })
            .catch(this.handleError);
    };
    ApiService.prototype.getComicIssue = function (id, issue) {
        var _this = this;
        this.resolver.setState(true);
        return this.http.get(this.baseUrl + "/comic/" + id + "/" + issue)
            .do(function (e) { return _this.resolver.setState(false); })
            .catch(this.handleError);
    };
    ApiService.prototype.getNews = function () {
        return this.http.get(this.baseUrl + "/comics/news")
            .catch(this.handleError);
    };
    // downloadComicIssue(id: string, issue: string): Observable<any> {
    //
    //   return this.http.post(`${this.baseUrl}/comic/${id}/${issue}`,{}, {responseType : ResponseContentType.Blob}).map((res: any) => {
    //     return new Blob([res.blob()], {type: 'application/pdf'});
    //     }).catch(this.handleError);
    // }
    ApiService.prototype.updateIssue = function (comic, issue, status) {
        return this.http.post(this.baseUrl + "/comic/" + comic + "/" + issue, status).catch(this.handleError);
    };
    ApiService.prototype.markComicWish = function (comic, wish) {
        return this.http.post(this.baseUrl + "/comic/" + comic, { wish: wish }).catch(this.handleError);
    };
    ApiService.prototype.search = function (query, exact) {
        if (exact === void 0) { exact = false; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('query', encodeURI(query));
        if (exact)
            params.set('exact', '1');
        return (this.http.get(this.baseUrl + "/comics/search", { params: params }).catch(this.handleError));
    };
    ApiService.prototype.getImage = function (url) {
        return this.http.post(this.baseUrl + "/encode", { url: url }).catch(this.handleError);
    };
    return ApiService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resolve_service__["a" /* ResolveService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interceptor__ = __webpack_require__("../../../../../src/app/interceptor.ts");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_item_home_item_component__ = __webpack_require__("../../../../../src/app/home/home-item/home-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__comic_comic_presentation_comic_presentation_component__ = __webpack_require__("../../../../../src/app/comic/comic-presentation/comic-presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__comic_issue_issue_presentation_issue_presentation_component__ = __webpack_require__("../../../../../src/app/comic-issue/issue-presentation/issue-presentation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__comic_comic_component__["a" /* ComicComponent */],
            __WEBPACK_IMPORTED_MODULE_16__comic_issue_comic_issue_component__["a" /* ComicIssueComponent */],
            __WEBPACK_IMPORTED_MODULE_17__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__image_viewer_image_viewer_component__["a" /* ImageViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_home_item_home_item_component__["a" /* HomeItemComponent */],
            __WEBPACK_IMPORTED_MODULE_23__comic_comic_presentation_comic_presentation_component__["a" /* ComicPresentationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__comic_issue_issue_presentation_issue_presentation_component__["a" /* IssuePresentationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["OrderModule"],
            // NgbModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_routes__["a" /* AppRoutes */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_10__resolve_service__["a" /* ResolveService */],
            __WEBPACK_IMPORTED_MODULE_13__comic_resolve__["a" /* ComicResolve */],
            __WEBPACK_IMPORTED_MODULE_12__comics_read_resolve__["a" /* ComicsReadResolve */],
            __WEBPACK_IMPORTED_MODULE_11__comic_issue_resolve__["a" /* ComicIssueResolve */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_6__interceptor__["a" /* Interceptor */],
                multi: true,
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comic_comic_component__ = __webpack_require__("../../../../../src/app/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comic_issue_comic_issue_component__ = __webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comic_issue_resolve__ = __webpack_require__("../../../../../src/app/comic-issue-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comics_read_resolve__ = __webpack_require__("../../../../../src/app/comics-read-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comic_resolve__ = __webpack_require__("../../../../../src/app/comic-resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth-guard.ts");








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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
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
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
            return localStorage.getItem('token') || '';
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
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
        // protected baseUrl: string = 'http://localhost:8080';
        this.baseUrl = 'http://ec2-52-57-163-72.eu-central-1.compute.amazonaws.com:8080';
    }
    BaseService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return BaseService;
}());
BaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__resolve_service__["a" /* ResolveService */]) === "function" && _c || Object])
], BaseService);

var _a, _b, _c;
//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/comic-issue-resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicIssueResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
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
        return this.api.getComicIssue(route.paramMap.get('id'), route.paramMap.get('issue'));
    };
    return ComicIssueResolve;
}());
ComicIssueResolve = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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

module.exports = "<app-issue-presentation [issue]=\"issue\" (pageRead)=\"updatePage($event)\"><app-issue-presentation>\n"

/***/ }),

/***/ "../../../../../src/app/comic-issue/comic-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicIssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
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
        var _this = this;
        this.api = api;
        this.route = route;
        this.updatePage = function (page) {
            _this.api.updateIssue(_this.route.snapshot.params.id, _this.route.snapshot.params.issue, { page: page }).subscribe(null);
        };
    }
    ComicIssueComponent.prototype.ngOnInit = function () {
        this.issue = this.route.snapshot.data['issue'];
    };
    return ComicIssueComponent;
}());
ComicIssueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comic-issue',
        template: __webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comic-issue/comic-issue.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ComicIssueComponent);

var _a, _b;
//# sourceMappingURL=comic-issue.component.js.map

/***/ }),

/***/ "../../../../../src/app/comic-issue/issue-presentation/issue-presentation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comic-issue/issue-presentation/issue-presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"issue\">\n\n<div class=\"m-auto\" style=\"width:60%\">\n  <app-image-viewer (onSwiped)=\"onPageChange($event)\" [img]=\"issue.pages[page]\"></app-image-viewer>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    <input style=\"width:100%\" type=\"range\" name=\"pages\" min=\"0\" [max]=\"issue.pages.length - 1\" [(ngModel)]=\"page\" (change)=\"onChange(page)\">\n  </div>\n\n  <div class=\"btn-group col-6\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onPageChange(-1)\" [disabled]=\"page === 0\">prev</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onPageChange(+1)\" [disabled]=\"page === lastPage\">next</button>\n  </div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comic-issue/issue-presentation/issue-presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuePresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuePresentationComponent = (function () {
    function IssuePresentationComponent() {
        var _this = this;
        this.pageRead = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.page = 0;
        this.lastPage = 0;
        this.setPage = function (page) {
            _this.page = page;
            _this.pageRead.emit(_this.page);
        };
        this.onPageChange = function (advance) {
            _this.page += advance;
            _this.setPage(_this.page);
        };
        this.onChange = function (page) { return _this.setPage(page); };
    }
    IssuePresentationComponent.prototype.ngOnInit = function () {
        if (this.issue) {
            this.page = this.issue.info.page | 0;
            this.lastPage = this.issue.pages.length - 1;
        }
    };
    return IssuePresentationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], IssuePresentationComponent.prototype, "issue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IssuePresentationComponent.prototype, "pageRead", void 0);
IssuePresentationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issue-presentation',
        template: __webpack_require__("../../../../../src/app/comic-issue/issue-presentation/issue-presentation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comic-issue/issue-presentation/issue-presentation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IssuePresentationComponent);

//# sourceMappingURL=issue-presentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/comic-resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolve_service__ = __webpack_require__("../../../../../src/app/resolve.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resolve_service__["a" /* ResolveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resolve_service__["a" /* ResolveService */]) === "function" && _b || Object])
], ComicResolve);

var _a, _b;
//# sourceMappingURL=comic-resolve.js.map

/***/ }),

/***/ "../../../../../src/app/comic/comic-presentation/comic-presentation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5%;\n  color: #0063a6;\n  -webkit-appearance: none;\n}\n\nprogress::-webkit-progress-bar {\n  background-color: hsla(0, 0%, 100%, 0);\n}\n\nprogress::-webkit-progress-value {\n  background-color: hsla(120, 75%, 40%, 0.77);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comic/comic-presentation/comic-presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 class=\"col-12 display-4 text-center\">{{comic.attributes.title}}\n    <button type=\"button\" class=\"btn btn-sm\" [ngClass]=\"comic.wish? 'btn-dark': 'btn-outline-dark'\" (click)=\"toggleWish.emit()\">Following <i class=\"fa\" [ngClass]=\"[comic.wish ? 'fa-clock-o': '']\"></i></button>\n  </h1>\n  <p class=\"col-12\"><mark>{{comic.attributes.status}}.</mark> {{comic.attributes.summary}}</p>\n\n  <div class=\"col-sm-4 col-6\">\n    <img class=\"img-fluid\" [src]=\"comic.cover\" alt=\"cover\">\n  </div>\n\n  <div class=\"col-sm-4 col-6\">\n    <h2 class=\"text-center\">Info</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <strong>Artist</strong>: {{extractInfo('artists')}}\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Publisher</strong>: {{extractInfo('publishers')}}\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Writer</strong>: {{extractInfo('writers')}}\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-4\">\n    <div class=\"row\">\n      <div class=\"col-6 col-sm-12\">\n        <h2 class=\"text-center\">Genres</h2>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">\n            <span class=\"badge badge-secondary m-1\" *ngFor=\"let genre of filterInfo('genres')\">{{genre.id}}</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-6 col-sm-12\">\n        <h2 class=\"text-center\">Publication</h2>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">\n            {{comic.attributes.publication_date}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h2 class=\"text-center\">Issues</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item d-flex justify-content-between\" *ngFor=\"let issue of getIssues()\">\n        <a [routerLink]=\"['/comic', comic._id, issue.id]\">{{issue.attributes.title}}</a>\n        <button [class.active]=\"issue.read\" type=\"button\" class=\"btn btn-outline-primary btn-sm\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\" (click)=\"markIssueRead.emit({issue: issue.id, val: !issue.read})\">\n          Read <i class=\"fa\" [ngClass]=\"issue.read ? 'fa-check': ''\"></i>\n        </button>\n        <progress [value]=\"getPercentagePages(issue)\" max=\"100\"></progress>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comic/comic-presentation/comic-presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicPresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComicPresentationComponent = (function () {
    function ComicPresentationComponent() {
        var _this = this;
        this.toggleWish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.markIssueRead = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.extractInfo = function (type) {
            var info = _this.filterInfo(type);
            if (info.length && info[0].attributes.name) {
                return info.map(function (i) { return i.attributes.name; }).join(', ');
            }
            if (info.length && info[0].attributes.first_name) {
                return info.map(function (i) { return i.attributes.first_name + " " + i.attributes.last_name; }).join(', ');
            }
            return info.map(function (i) { return i.id; }).join(', ');
        };
        this.getIssues = function () {
            return _this.filterInfo('issues').sort(function (a, b) { return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' }); });
        };
        this.getPercentagePages = function (issue) { return Math.round((_this.comic.included.find(function (i) { return i.id === issue.id; }).page / _this.getTotalPages(issue)) * 100); };
        this.filterInfo = function (type) { return _this.comic.included.filter(function (i) { return i.type === type; }); };
        this.getTotalPages = function (issue) {
            var a = _this.comic.included.find(function (i) { return i.id === issue.id; }).pages;
            return a ? a.length - 1 : 0.01;
        };
    }
    ComicPresentationComponent.prototype.ngOnInit = function () { };
    return ComicPresentationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ComicPresentationComponent.prototype, "comic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ComicPresentationComponent.prototype, "toggleWish", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ComicPresentationComponent.prototype, "markIssueRead", void 0);
ComicPresentationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comic-presentation',
        template: __webpack_require__("../../../../../src/app/comic/comic-presentation/comic-presentation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comic/comic-presentation/comic-presentation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ComicPresentationComponent);

//# sourceMappingURL=comic-presentation.component.js.map

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

module.exports = "<app-comic-presentation [comic]=\"comic\" (toggleWish)=\"toggleWish()\" (markIssueRead)=\"markIssueRead($event)\"></app-comic-presentation>\n"

/***/ }),

/***/ "../../../../../src/app/comic/comic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        this.toggleWish = function () {
            var isWish = !_this.comic.wish;
            _this.api.markComicWish(_this.comic._id, isWish).subscribe(function (res) {
                if (res.ok)
                    _this.comic.wish = isWish;
            });
        };
        this.markIssueRead = function (e) {
            _this.api.updateIssue(_this.comic._id, e.issue, { read: e.val }).subscribe(function (res) {
                if (res.ok) {
                    var ix = _this.comic.included.findIndex(function (i) { return i.id === e.issue; });
                    _this.comic.included[ix].read = e.val;
                }
            });
        };
        this.route.data.subscribe(function (d) { return _this.comic = d.comic; });
    }
    return ComicComponent;
}());
ComicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comic',
        template: __webpack_require__("../../../../../src/app/comic/comic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comic/comic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ComicComponent);

var _a, _b;
//# sourceMappingURL=comic.component.js.map

/***/ }),

/***/ "../../../../../src/app/comics-read-resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicsReadResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
                return cs.length ? __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"], cs.map(function (c) { return _this.api.getComic(c._id); })) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of([]);
            });
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin(readShared$, comics$);
        };
    }
    return ComicsReadResolve;
}());
ComicsReadResolve = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ComicsReadResolve);

var _a;
//# sourceMappingURL=comics-read-resolve.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-item/home-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-item/home-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class=\"btn btn-sm btn-outline-primary\" [routerLink]=\"['/comic', comic._id]\">{{comicsMap.get(comic._id).attributes.title}} </button>\n  <button type=\"button\" class=\"btn btn-sm\" [ngClass]=\"comic.wish? 'btn-dark': 'btn-outline-dark'\" (click)=\"toggleButton.emit(comic)\">Following <i class=\"fa\" [ngClass]=\"[comic.wish ? 'fa-clock-o': '']\"></i></button>\n  <span>\n    <i class=\"fa\" [ngClass]=\"getCalendarIcon(comic._id)\"> </i>\n    <span class=\"small\">{{comicsMap.get(comic._id).attributes.publication_date}}</span>\n  </span>\n</div>\n<div>\n  <span *ngFor=\"let issue of getIssues(comic)\">\n    <a [routerLink]=\"['/comic', comic._id, issue]\" *ngIf=\"getPercentagePages(comic, issue) || comic[issue].read\">\n      <span class=\"badge m-1\" [ngClass]=\"[comic[issue].read ? 'badge-primary': 'badge-secondary']\">\n        <a class=\"text-white\">#{{getIssueNumber(comic._id, issue)}} </a>\n        <span *ngIf=\"!comic[issue].read; else completed\">{{getPercentagePages(comic, issue)}}%</span>\n        <ng-template #completed>\n          <i class=\"fa fa-check-circle\"></i>\n        </ng-template>\n      </span>\n    </a>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home-item/home-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeItemComponent = (function () {
    function HomeItemComponent() {
        var _this = this;
        this.toggleButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getIssues = function (comic) { return Object.keys(comic).filter(function (k) { return k !== '_id' && k !== 'wish'; }); };
        this.getIssue = function (comic, issue) { return _this.comicsMap.get(comic).included.find(function (i) { return i.id === issue; }); };
        this.getPercentagePages = function (comic, issue) { return Math.round((comic[issue].page / _this._getTotalPages(comic, issue)) * 100); };
        this.getCalendarIcon = function (comicId) {
            return _this.comicsMap.get(comicId).attributes.status == 'Completed' ? 'fa-calendar-plus-o' : 'fa-calendar-o';
        };
        this.getIssueNumber = function (comicId, issue) {
            var attr = _this.getIssue(comicId, issue).attributes;
            return attr.number ? attr.number : attr.title;
        };
        this._getTotalPages = function (comic, issue) {
            var a = _this.getIssue(comic._id, issue).pages;
            return a ? a.length - 1 : 0.01;
        };
    }
    return HomeItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HomeItemComponent.prototype, "comic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HomeItemComponent.prototype, "comicsMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HomeItemComponent.prototype, "toggleButton", void 0);
HomeItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-item',
        template: __webpack_require__("../../../../../src/app/home/home-item/home-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home-item/home-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeItemComponent);

//# sourceMappingURL=home-item.component.js.map

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

module.exports = "<h1 class=\"text-center\">My Collection</h1>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let comic of comicsRead\">\n    <app-home-item [comic]=\"comic\" [comicsMap]=\"issuesMap\" (toggleButton)=\"toggleComicWish($event)\"></app-home-item>\n  </li>\n</ul>\n\n<!-- <div class=\"row\">\n  <div class=\"col-sm-6\">\n      <h1 class=\"text-center\">News</h1>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let new of news.news\">\n          <button class=\"btn btn-sm btn-outline-primary\" routerLink=\"/comic/{{new.id}}\">\n            <img class=\"img-fluid\" style=\"max-height: 7em\" [src]=\"new.links.cover\" alt=\"cover\"> {{new.attributes.title}}\n          </button>\n          <button type=\"button\" class=\"btn btn-sm\" [ngClass]=\"new.wish? 'btn-dark': 'btn-outline-dark'\" (click)=\"toggleComicWish(new)\">Wish</button>\n        </li>\n      </ul>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <h1 class=\"text-center\">Updated</h1>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let update of news.updated\">\n        <button class=\"btn btn-sm btn-outline-primary\" routerLink=\"/comic/{{update.id}}\">\n          <img class=\"img-fluid\" style=\"max-height: 7em\" [src]=\"update.links.cover\" alt=\"cover\"> {{update.attributes.title}}\n        </button>\n        <button type=\"button\" class=\"btn btn-sm\" [ngClass]=\"update.wish? 'btn-dark': 'btn-outline-dark'\" (click)=\"toggleComicWish(update)\">Wish</button>\n      </li>\n    </ul>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
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
    function HomeComponent(route, api) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.toggleComicWish = function (comic) {
            var isWish = !comic.wish;
            _this.api.markComicWish(comic._id, isWish).subscribe(function (res) {
                if (res.ok)
                    comic.wish = isWish;
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        _a = this.route.snapshot.data['comics'], this.comicsRead = _a[0], this.fullComics = _a[1];
        var a = this.fullComics.map(function (c) { return [c._id, c]; });
        this.issuesMap = new Map(a);
        var _a;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  z-index: 10;\n}\n\n.button-hover {\n  outline: none !important;\n  position: fixed;\n  z-index: 20;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  width: 20vw;\n  top: 0;\n  background-color: rgba(0,0,0,0);\n  border: none;\n}\n\n.button-prev {\n  left: 0;\n}\n.button-next {\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<img [class.full-screen]=\"fullScreen\" class=\"img-fluid\" [src]=\"img\" alt=\"comic image\" (click)=\"toggleFullScreen()\">\n\n<div [hidden]=\"!fullScreen\">\n  <button class=\"button-hover button-prev\" (click)=\"swipe(-1)\"></button>\n  <button class=\"button-hover button-next\" (click)=\"swipe(1)\"></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImageViewerComponent.prototype, "img", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageViewerComponent.prototype, "onSwiped", void 0);
ImageViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-image-viewer',
        template: __webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ImageViewerComponent);

//# sourceMappingURL=image-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Interceptor = (function () {
    function Interceptor(auth) {
        this.auth = auth;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({ headers: req.headers.set('Authorization', this.auth.getToken()) });
        return next.handle(authReq);
    };
    return Interceptor;
}());
Interceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], Interceptor);

var _a;
//# sourceMappingURL=interceptor.js.map

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

module.exports = "<div class=\"row justify-content-center my-5\">\n  <div class=\"col-sm-6\">\n    <div class=\"input-group\">\n      <input type=\"password\" autocapitalize=\"none\" class=\"form-control\" (keyup.enter)=\"login(user)\" placeholder=\"User\" [(ngModel)]=\"user\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"login(user)\">Login</button>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
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
        this.login = function (user) { return _this.api.login(user).subscribe(_this._success, alert); };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
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

module.exports = "<div class=\"form-group\">\n  <div [class.has-danger]=\"searchForm.value && searchForm.value.length <= 3\" class=\"input-group\">\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-sm btn-secondary\" type=\"button\" (click)=\"searchForm.reset()\">Cancel</button>\n    </span>\n    <input [formControl]=\"searchForm\" type=\"text\" class=\"form-control-label\" (keyup.escape)=\"searchForm.reset()\" placeholder=\"Search comic\">\n  </div>\n  <ul class=\"list-group d-flex flex-row flex-wrap\" style=\"position:absolute; z-index:2; overflow-y: overlay; max-height: 90vh\">\n    <li *ngFor=\"let item of listed | async\" class=\"list-group-item d-flex justify-content-between\">\n      <img style=\"width:4em; max-height: 6em\" class=\"img-fluid\" [src]=\"item.cover\" alt=\"cover\">\n      <a [routerLink]=\"['/comic', item._id]\">{{item.attributes.title}}</a>\n      <button type=\"button\" class=\"btn btn-sm\" [ngClass]=\"item.wish? 'btn-dark': 'btn-outline-dark'\" (click)=\"toggleComicWish(item)\">Wish</button>\n      <div>\n        <span>{{item.attributes.completed ? 'Complete': 'Ongoing'}}</span>\n        <small>{{item.attributes.summary}}</small>\n      </div>\n    </li>\n    <li *ngIf=\"loading\" class=\"list-group-item d-flex justify-content-between\">\n      Loading ...\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
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
    SearchComponent.prototype.toggleComicWish = function (comic) {
        var isWish = !comic.wish;
        this.api.markComicWish(comic._id, isWish).subscribe(function (res) {
            if (res.ok)
                comic.wish = isWish;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map