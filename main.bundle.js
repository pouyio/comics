webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n\n  <div class=\"content\" [formGroup]=\"rForm\">\n\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label\">\n        <label class=\"label\">Text</label>\n      </div>\n\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <div class=\"control\">\n            <input formControlName=\"text\" class=\"input\" type=\"text\" placeholder=\"Search text...\">\n          </div>\n        </div>\n        <div class=\"field\">\n          <div class=\"control\">\n            <input formControlName=\"number\" class=\"input\" type=\"number\" placeholder=\"Minimun n issues...\">\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <pou-entity-form formControlName=\"publishers\" type=\"publishers\" (toggleEntity)=\"toggleEntity($event)\" [selectedEntities]=\"getEntities('publishers')\"></pou-entity-form>\n    \n    <pou-entity-form formControlName=\"writers\" type=\"writers\" (toggleEntity)=\"toggleEntity($event)\" [selectedEntities]=\"getEntities('writers')\"></pou-entity-form>\n    \n    <pou-entity-form formControlName=\"artists\" type=\"artists\" (toggleEntity)=\"toggleEntity($event)\" [selectedEntities]=\"getEntities('artists')\"></pou-entity-form>\n\n    <div class=\"field is-horizontal\">\n      <div class=\"field-label\">\n        <label class=\"label\">\n          Genres\n        </label>\n      </div>\n      <div class=\"field-body\">\n        <div class=\"field\">\n          <div class=\"tags\" *ngIf=\"genres$ | async; let genres\">\n            <span [ngClass]=\"[queryParamsContains('genres', genre.id) ? 'is-white' : 'is-dark']\" class=\"tag is-rounded button\" *ngFor=\"let genre of genres\"\n              (click)=\"onSelect('genres', genre.id)\">\n              {{genre.name}} &nbsp;\n              <span> {{queryParamsContains('genres', genre.id) ? '𐄂' : '✔'}} </span>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"field is-horizontal is-grouped is-grouped-centered\">\n      <p class=\"control is-expanded\">\n        <button style=\"width: 100%\" class=\"button is-danger\" (click)=\"reset()\">\n          Reset\n        </button>\n      </p>\n    </div>\n\n    <h1>Results</h1>\n    <ul *ngIf=\"comics$ | async; let comics\">\n      <li *ngFor=\"let comic of comics\">\n        <a [routerLink]=\"['/comic', comic._id]\">\n          {{comic.title}}\n        </a>\n        <!-- {{comic | json}} -->\n      </li>\n    </ul>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries__ = __webpack_require__("./src/app/advanced-search/queries.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent(apollo, route, router, fb) {
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.rForm = this.fb.group({
            text: this.route.snapshot.queryParams.search,
            number: this.route.snapshot.queryParams.numberOfIssues,
            writers: '',
            artists: '',
            publishers: ''
        });
    }
    AdvancedSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genres$ = this.apollo.query({ query: Object(__WEBPACK_IMPORTED_MODULE_4__queries__["a" /* queryFactory */])('genres') }).pluck('data').pluck('genres');
        this.comics$ = this.route.queryParams.switchMap(function (params) {
            return _this.apollo.query({ query: __WEBPACK_IMPORTED_MODULE_4__queries__["b" /* searchQuery */], variables: params }).pluck('data').pluck('comics');
        });
    };
    AdvancedSearchComponent.prototype.onSelect = function (type, id) {
        var params = __assign({}, this.route.snapshot.queryParams);
        if (!params[type]) {
            params[type] = [];
        }
        if (typeof params[type] === 'string') {
            params[type] = [params[type]];
        }
        if (params[type].includes(id)) {
            params[type] = params[type].filter(function (element) { return element !== id; });
        }
        else {
            params[type] = params[type].concat(id);
        }
        this.router.navigate([], { relativeTo: this.route, queryParams: params });
    };
    AdvancedSearchComponent.prototype.queryParamsContains = function (type, id) {
        var params = this.route.snapshot.queryParams;
        if (!params[type])
            return false;
        if (params[type] === id)
            return true;
        return params[type].includes(id);
    };
    AdvancedSearchComponent.prototype.toggleEntity = function ($event) {
        this.rForm.patchValue((_a = {}, _a[$event.type] = '', _a));
        this.onSelect($event.type, $event.entityId);
        var _a;
    };
    AdvancedSearchComponent.prototype.getEntities = function (type) {
        var entities = this.route.snapshot.queryParams[type] || [];
        return Array.isArray(entities) ? entities : [entities];
    };
    AdvancedSearchComponent.prototype.reset = function () {
        this.rForm.reset();
        this.router.navigate([], { relativeTo: this.route, queryParams: {} });
    };
    AdvancedSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-advanced-search',
            template: __webpack_require__("./src/app/advanced-search/advanced-search.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
}());



/***/ }),

/***/ "./src/app/advanced-search/queries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queryFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var searchQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query search(\n      $numberOfIssues: Int,\n      $genres: [String!],\n      $writers: [String!],\n      $publishers: [String!],\n      $artists: [String!],\n      $search: String\n      ) {\n      comics(\n        numberOfIssues: $numberOfIssues,\n        search: $search,\n        genres: $genres,\n        writers: $writers,\n        publishers: $publishers,\n        artists: $artists,\n        limit: 20\n        ) {\n        _id\n        title\n      } \n    }\n  "], ["\n    query search(\n      $numberOfIssues: Int,\n      $genres: [String!],\n      $writers: [String!],\n      $publishers: [String!],\n      $artists: [String!],\n      $search: String\n      ) {\n      comics(\n        numberOfIssues: $numberOfIssues,\n        search: $search,\n        genres: $genres,\n        writers: $writers,\n        publishers: $publishers,\n        artists: $artists,\n        limit: 20\n        ) {\n        _id\n        title\n      } \n    }\n  "])));
var genresQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    {\n      genres(limit: 0) {\n        id\n        name\n      }\n    }\n  "], ["\n    {\n      genres(limit: 0) {\n        id\n        name\n      }\n    }\n  "])));
var genreQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query genreQuery($id: ID!) {\n    genre(id: $id) {\n      name\n    }\n  }\n"], ["\n  query genreQuery($id: ID!) {\n    genre(id: $id) {\n      name\n    }\n  }\n"])));
var writersQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query searchWriter($search: String){\n      writers(search: $search, limit: 20) {\n        id\n        first_name\n        last_name\n      }\n    }\n  "], ["\n    query searchWriter($search: String){\n      writers(search: $search, limit: 20) {\n        id\n        first_name\n        last_name\n      }\n    }\n  "])));
var writerQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query writerQuery($id: ID!) {\n    writer(id: $id) {\n      first_name\n      last_name\n    }\n  }\n"], ["\n  query writerQuery($id: ID!) {\n    writer(id: $id) {\n      first_name\n      last_name\n    }\n  }\n"])));
var artistsQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query searchArtist($search: String){\n      artists(search: $search, limit: 20) {\n        id\n        first_name\n        last_name\n      }\n    }\n  "], ["\n    query searchArtist($search: String){\n      artists(search: $search, limit: 20) {\n        id\n        first_name\n        last_name\n      }\n    }\n  "])));
var artistQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  query artistQuery($id: ID!) {\n    artist(id: $id) {\n      first_name\n      last_name\n    }\n  }\n"], ["\n  query artistQuery($id: ID!) {\n    artist(id: $id) {\n      first_name\n      last_name\n    }\n  }\n"])));
var publishersQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    query searchPublisher($search: String){\n      publishers(search: $search, limit: 20) {\n        id\n        name\n      }\n    }\n  "], ["\n    query searchPublisher($search: String){\n      publishers(search: $search, limit: 20) {\n        id\n        name\n      }\n    }\n  "])));
var publisherQuery = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  query publisherQuery($id: ID!) {\n    publisher(id: $id) {\n      name\n    }\n  }\n"], ["\n  query publisherQuery($id: ID!) {\n    publisher(id: $id) {\n      name\n    }\n  }\n"])));
var queryFactory = function (type) {
    if (type === 'genres') {
        return genresQuery;
    }
    if (type === 'genre') {
        return genreQuery;
    }
    if (type === 'writers') {
        return writersQuery;
    }
    if (type === 'writer') {
        return writerQuery;
    }
    if (type === 'artists') {
        return artistsQuery;
    }
    if (type === 'artist') {
        return artistQuery;
    }
    if (type === 'publishers') {
        return publishersQuery;
    }
    if (type === 'publisher') {
        return publisherQuery;
    }
};

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("./src/app/base.service.ts");
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



var ApiService = /** @class */ (function (_super) {
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
        _this.getLog = function () { return _this.http.get(_this.baseUrl + "/log", { responseType: 'text' }); };
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
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ApiService);
    return ApiService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar a {\n  font-size: .91em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"logged\" class=\"navbar is-dark is-fixed-top\" role=\"navigation\" aria-label=\"main navigation\">\n\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item is-size-4 has-text-weight-light\" (click)=\"goTo('/comics')\" [routerLinkActive]=\"['is-active']\">📚\n      <span class=\"is-hidden-mobile\"> Home </span>\n    </a>\n\n    <div style=\"display: flex; flex-direction: column; justify-content: center;\">\n      <pou-search></pou-search>\n    </div>\n\n    <div class=\"navbar-burger burger\" [ngClass]=\"{'is-active': isActive}\" (click)=\"toggleActive()\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n\n  <div [class.is-active]=\"isActive\" class=\"navbar-menu\">\n    <div class=\"navbar-start has-text-centered\">\n      <a class=\"navbar-item has-text-white\" (click)=\"goTo('/search')\"> 🔍 Advanced</a>\n      <a class=\"navbar-item has-text-white\" (click)=\"goTo('/info')\"> ️📶 Info</a>\n      <div *ngIf=\"getBreadcrumbs(breadcrumbs).length\" class=\"navbar-item\">\n        <nav class=\"breadcrumb\" aria-label=\"breadcrumbs\">\n          <ul>\n            <li *ngFor=\"let breadcrumb of getBreadcrumbs(breadcrumbs)\">\n              <a class=\"has-text-white\" (click)=\"goTo(breadcrumb.url)\">{{breadcrumb.title}}</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    <div class=\"navbar-end has-text-centered\">\n      <a class=\"navbar-item has-text-white\" (click)=\"logout()\"> ❌ Logout</a>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolve_service__ = __webpack_require__("./src/app/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(location, router, api, auth, resolver, cdRef) {
        var _this = this;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.resolver = resolver;
        this.cdRef = cdRef;
        this.breadcrumbs = [];
        this.getBreadcrumbs = function (breadcrumbs) {
            return breadcrumbs.reduce(function (acc, title) {
                var url = '';
                if (!acc.length) {
                    url = "/comic/" + title;
                }
                else {
                    url = acc[acc.length - 1].url + "/" + title;
                }
                var obj = { url: url, title: title };
                acc.push(obj);
                return acc;
            }, []);
        };
        this.logout = function () {
            _this.logged = false;
            _this.api.logout();
        };
        router.events.subscribe(function (params) {
            _this.logged = params.url !== '/login';
            if (!params.url)
                return;
            _this.breadcrumbs = params.url.split('/').slice(2);
        });
        this.logged = !!this.auth.getToken();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resolving = this.resolver.getState();
        this.cdRef.detectChanges();
    };
    AppComponent.prototype.toggleActive = function () {
        this.isActive = !this.isActive;
    };
    AppComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
        this.isActive = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__resolve_service__["a" /* ResolveService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interceptor__ = __webpack_require__("./src/app/interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("./src/app/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resolve_service__ = __webpack_require__("./src/app/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comic_comic_component__ = __webpack_require__("./src/app/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comic_issue_comic_issue_component__ = __webpack_require__("./src/app/comic-issue/comic-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__image_viewer_image_viewer_component__ = __webpack_require__("./src/app/image-viewer/image-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_item_home_item_component__ = __webpack_require__("./src/app/home/home-item/home-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__comic_comic_presentation_comic_presentation_component__ = __webpack_require__("./src/app/comic/comic-presentation/comic-presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__comic_issue_issue_presentation_issue_presentation_component__ = __webpack_require__("./src/app/comic-issue/issue-presentation/issue-presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_apollo_angular_link_http__ = __webpack_require__("./node_modules/apollo-angular-link-http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_apollo_cache_inmemory__ = __webpack_require__("./node_modules/apollo-cache-inmemory/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__search_search_item_search_item_component__ = __webpack_require__("./src/app/search/search-item/search-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__advanced_search_advanced_search_component__ = __webpack_require__("./src/app/advanced-search/advanced-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__info_info_component__ = __webpack_require__("./src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_typeahead_typeahead_component__ = __webpack_require__("./src/app/components/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_entity_resolver_pipe__ = __webpack_require__("./src/app/pipes/entity-resolver.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_entity_form_entity_form_component__ = __webpack_require__("./src/app/components/entity-form/entity-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
































var AppModule = /** @class */ (function () {
    function AppModule(apollo, httpLink) {
        apollo.create({
            link: httpLink.create({ uri: __WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].api_url }),
            cache: new __WEBPACK_IMPORTED_MODULE_25_apollo_cache_inmemory__["a" /* InMemoryCache */]()
        });
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__comic_comic_component__["a" /* ComicComponent */],
                __WEBPACK_IMPORTED_MODULE_13__comic_issue_comic_issue_component__["a" /* ComicIssueComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__image_viewer_image_viewer_component__["a" /* ImageViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_home_item_home_item_component__["a" /* HomeItemComponent */],
                __WEBPACK_IMPORTED_MODULE_20__comic_comic_presentation_comic_presentation_component__["a" /* ComicPresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__comic_issue_issue_presentation_issue_presentation_component__["a" /* IssuePresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_26__search_search_item_search_item_component__["a" /* SearchItemComponent */],
                __WEBPACK_IMPORTED_MODULE_27__advanced_search_advanced_search_component__["a" /* AdvancedSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_28__info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pipes_entity_resolver_pipe__["a" /* EntityResolverPipe */],
                __WEBPACK_IMPORTED_MODULE_31__components_entity_form_entity_form_component__["a" /* EntityFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_apollo_angular__["b" /* ApolloModule */],
                __WEBPACK_IMPORTED_MODULE_23_apollo_angular_link_http__["b" /* HttpLinkModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_routes__["a" /* AppRoutes */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_10__resolve_service__["a" /* ResolveService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__interceptor__["a" /* Interceptor */],
                    multi: true,
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_22_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_23_apollo_angular_link_http__["a" /* HttpLink */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comic_comic_component__ = __webpack_require__("./src/app/comic/comic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comic_issue_comic_issue_component__ = __webpack_require__("./src/app/comic-issue/comic-issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard__ = __webpack_require__("./src/app/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info_component__ = __webpack_require__("./src/app/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_advanced_search_advanced_search_component__ = __webpack_require__("./src/app/advanced-search/advanced-search.component.ts");







var AppRoutes = [
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'comics', pathMatch: 'full' },
            { path: 'comics', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'comic/:id', component: __WEBPACK_IMPORTED_MODULE_0__comic_comic_component__["a" /* ComicComponent */] },
            { path: 'comic/:id/:issue', component: __WEBPACK_IMPORTED_MODULE_1__comic_issue_comic_issue_component__["a" /* ComicIssueComponent */] },
            { path: 'info', component: __WEBPACK_IMPORTED_MODULE_5__info_info_component__["a" /* InfoComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6_app_advanced_search_advanced_search_component__["a" /* AdvancedSearchComponent */] },
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'comics' }
];


/***/ }),

/***/ "./src/app/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
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



var AuthGuard = /** @class */ (function () {
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
    AuthGuard = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */])), __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
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
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolve_service__ = __webpack_require__("./src/app/resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BaseService = /** @class */ (function () {
    function BaseService(http, auth, resolver) {
        this.http = http;
        this.auth = auth;
        this.resolver = resolver;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].rest_url;
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
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__resolve_service__["a" /* ResolveService */]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/comic-issue/comic-issue.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"issue$ | async; let issue\">\n    <pou-issue-presentation [issue]=\"issue\" (pageRead)=\"updatePage($event)\" (onGoComic)=\"goComic()\">\n    </pou-issue-presentation>\n</div>\n"

/***/ }),

/***/ "./src/app/comic-issue/comic-issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicIssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComicIssueComponent = /** @class */ (function () {
    function ComicIssueComponent(route, router, apollo) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.apollo = apollo;
        this.updateQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation ($comic: ID!, $issue: String!, $page: Int!) {\n    updateIssue(_id: $comic, issue: $issue, page: $page) {\n      _id\n      __typename\n      issues(id: $issue) {\n        id\n        __typename\n        page\n        percentage\n      } \n    }\n  }\n  "], ["\n  mutation ($comic: ID!, $issue: String!, $page: Int!) {\n    updateIssue(_id: $comic, issue: $issue, page: $page) {\n      _id\n      __typename\n      issues(id: $issue) {\n        id\n        __typename\n        page\n        percentage\n      } \n    }\n  }\n  "])));
        this.getIssue = function (params) { return _this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query IssueDetail($comic: ID!, $issue: String!) { \n      comic(_id: $comic) {\n        _id\n        __typename\n        issues(id: $issue) {\n          __typename\n          id\n          page\n          pages\n        }\n      }\n    }\n    "], ["\n    query IssueDetail($comic: ID!, $issue: String!) { \n      comic(_id: $comic) {\n        _id\n        __typename\n        issues(id: $issue) {\n          __typename\n          id\n          page\n          pages\n        }\n      }\n    }\n    "]))),
            variables: {
                comic: params.id,
                issue: params.issue
            }
        }).valueChanges.pluck('data', 'comic', 'issues').map(function (c) { return c[0]; }); };
        this.updatePage = function (page) {
            _this.apollo.mutate({
                mutation: _this.updateQuery,
                variables: {
                    comic: _this.route.snapshot.params.id,
                    issue: _this.route.snapshot.params.issue,
                    page: page
                }
            }).subscribe();
        };
        this.goComic = function () { return _this.router.navigate(['/comic', _this.id]); };
    }
    ComicIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issue$ = this.route.params.do(function (_a) {
            var id = _a.id;
            return _this.id = id;
        }).switchMap(this.getIssue);
    };
    ComicIssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-comic-issue',
            template: __webpack_require__("./src/app/comic-issue/comic-issue.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */]])
    ], ComicIssueComponent);
    return ComicIssueComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/comic-issue/issue-presentation/issue-presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-centered is-mobile level\" style=\"height: 75vh;\">\n  <div class=\"column is-2-tablet is-3-mobile is-narrow\">\n    <pou-image-viewer *ngIf=\"page - 1 >= 0\" (onToggle)=\"onPageChange(-1)\" (onSwiped)=\"onPageChange($event)\"\n      [img]=\"issue.pages[page - 1]\">\n    </pou-image-viewer>\n  </div>\n  <div class=\"column is-5-tablet is-6-mobile is-narrow\">\n    <pou-image-viewer (onToggle)=\"onFullscreen()\" [fullscreen]=\"isFullscreen\" (onSwiped)=\"onPageChange($event)\"\n      [img]=\"issue.pages[page]\">\n    </pou-image-viewer>\n  </div>\n  <div class=\"column is-2-tablet is-3-mobile is-narrow\">\n    <pou-image-viewer *ngIf=\"page + 1 <= issue.pages.length - 1\" (onToggle)=\"onPageChange(1)\" (onSwiped)=\"onPageChange($event)\"\n      [img]=\"issue.pages[page + 1]\">\n    </pou-image-viewer>\n  </div>\n</div>\n\n<div class=\"columns is-centered has-text-centered\">\n  <div class=\"column is-two-thirds is-narrow\">\n    <input class=\"slider is-fullwidth is-info is-small is-circle\" step=\"1\" min=\"0\" [max]=\"issue.pages.length - 1\" [(ngModel)]=\"page\"\n      (change)=\"onChange(page)\" type=\"range\">\n  </div>\n</div>\n\n<div class=\"columns is-centered has-text-centered\">\n  <div class=\"column is-half is-narrow\">\n    <button type=\"button\" class=\"button is-dark\" (click)=\"onGoComic.emit()\">Comic ↩️</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comic-issue/issue-presentation/issue-presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuePresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssuePresentationComponent = /** @class */ (function () {
    function IssuePresentationComponent() {
        var _this = this;
        this.pageRead = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onGoComic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.page = 0;
        this.lastPage = 0;
        this.onPageChange = function (advance) {
            _this.page += advance;
            _this._setPage(_this.page);
        };
        this.onChange = function (page) { return _this._setPage(page); };
        this.onFullscreen = function () { return _this.isFullscreen = !_this.isFullscreen; };
        this._setPage = function (page) {
            _this.page = page;
            _this.pageRead.emit(_this.page);
        };
    }
    IssuePresentationComponent.prototype.ngOnInit = function () {
        this.page = this.issue.page;
        this.lastPage = this.issue.pages.length - 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IssuePresentationComponent.prototype, "issue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], IssuePresentationComponent.prototype, "pageRead", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], IssuePresentationComponent.prototype, "onGoComic", void 0);
    IssuePresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-issue-presentation',
            template: __webpack_require__("./src/app/comic-issue/issue-presentation/issue-presentation.component.html")
        })
    ], IssuePresentationComponent);
    return IssuePresentationComponent;
}());



/***/ }),

/***/ "./src/app/comic/comic-presentation/comic-presentation.component.css":
/***/ (function(module, exports) {

module.exports = ".zoomable {\n  position: relative;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n}\n\n.zoomIn {\n  -webkit-transform: scale(3.5);\n          transform: scale(3.5);\n  z-index: 200;\n}\n\n.no-overflow {\n  overflow-y: auto;\n  max-height: 63vh;\n  -webkit-overflow-scrolling: touch;\n}\n"

/***/ }),

/***/ "./src/app/comic/comic-presentation/comic-presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n\n      <h1 class=\"title has-text-centered\">\n        {{comic.title}}\n      </h1>\n\n      <p class=\"tags is-centered\">\n        <span class=\"tag is-rounded\" *ngFor=\"let genre of comic.genres\">\n          <a [routerLink]=\"['/search']\" [queryParams]=\"{genres: genre.id}\">\n            {{ genre.name }}\n          </a>\n        </span>\n      </p>\n\n      <h2 class=\"is-flex\" style=\"justify-content: space-between; max-width: 70vw; margin: auto;\">\n        <div (click)=\"toggleWish.emit(comic)\">\n          <input type=\"checkbox\" name=\"switchRounded\" class=\"switch is-rounded\" [checked]=\"comic.wish\">\n          <label for=\"switchRounded\">{{comic.wish ? 'Following': 'Follow'}}</label>\n        </div>\n        <span class=\"tag is-rounded\" [ngClass]=\"comic.status === 'Completed' ? 'is-primary': 'is-warning'\">{{comic.status === 'Completed' ? '🏛' : '🏗'}} {{comic.status}}</span>\n      </h2>\n\n    </div>\n  </div>\n  <div class=\"hero-foot is-hidden-tablet\">\n    <nav class=\"tabs is-boxed is-fullwidth\">\n      <div class=\"container\">\n        <ul>\n          <li [ngClass]=\"{'is-active': selectedTab === 'general'}\" (click)=\"onSelectTab('general')\">\n            <a>General</a>\n          </li>\n          <li [ngClass]=\"{'is-active': selectedTab === 'issues'}\" (click)=\"onSelectTab('issues')\">\n            <a>Issues</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</section>\n\n<section class=\"section\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"columns is-tablet\">\n\n      <div class=\"column is-7\" *ngIf=\"isVisible('general')\">\n        <div class=\"tile is-ancestor\">\n          <div class=\"tile is-vertical\">\n            <div class=\"tile\">\n              <div class=\"tile is-parent is-vertical is-8\">\n\n                <article class=\"tile is-child notification is-warning\">\n                  <p class=\"title is-marginless\">Info</p>\n                  <ul>\n                    <li>\n                      <strong>Artists</strong>:\n                      <span *ngFor=\"let artist of comic.artists\">\n                        {{artist.first_name}} {{artist.last_name}}\n                      </span>\n                    </li>\n                    <li>\n                      <strong>Publishers</strong>:\n                      <span *ngFor=\"let publisher of comic.publishers\">\n                        {{publisher.name}}\n                      </span>\n                    </li>\n                    <li>\n                      <strong>Writers</strong>\n                      <span *ngFor=\"let writer of comic.writers\">\n                        {{writer.first_name}} {{writer.last_name}}\n                      </span>\n                    </li>\n                  </ul>\n                </article>\n\n              </div>\n              <div class=\"tile is-parent is-4\">\n\n                <article class=\"tile is-child\">\n                  <figure class=\"image\">\n                    <img (click)=\"toggleZoomIn()\" [ngClass]=\"{'zoomIn': zoomed}\" class=\"img-fluid zoomable\" [src]=\"comic.cover\" alt=\"cover\" style=\"border-radius: 3px\">\n                  </figure>\n                </article>\n\n              </div>\n            </div>\n            <div class=\"tile is-parent\">\n\n              <article class=\"tile is-child notification is-info\">\n                <p class=\"title is-marginless\"> 📅 {{comic.publication_date}} </p>\n                <p class=\"has-text-justified\"> {{comic.summary}}</p>\n              </article>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"column is-5\" *ngIf=\"isVisible('issues')\">\n        <div class=\"tile is-acenstor\">\n          <article class=\"tile is-child notification is-success\" style=\"padding-right: .6em\">\n            <p class=\"title is-marginless\">Issues ({{orderedIssues.length}})</p>\n            <small>Updated: {{comic.last_update | date: 'longDate'}}</small>\n            <ul [ngClass]=\"{'no-overflow': currentWidth > mobileWidth}\">\n              <li *ngFor=\"let issue of orderedIssues\" style=\"margin: .2em\">\n                <div class=\"is-flex\" style=\"align-items: center; justify-content: space-between\">\n\n                  <span>\n                    {{getPercentageIcon(issue.percentage)}}\n                  </span>\n\n                  <a [routerLink]=\"['/comic', comic._id, issue.id]\"> {{issue.title}}</a>\n\n                  <div class=\"is-inline\" (click)=\"markIssueRead.emit({comic: comic._id, issue: issue.id, val: !issue.read})\">\n                    <input type=\"checkbox\" name=\"switchRounded\" class=\"switch is-rounded\" [checked]=\"issue.read\">\n                    <label for=\"switchRounded\"></label>\n                  </div>\n\n                </div>\n              </li>\n            </ul>\n          </article>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/comic/comic-presentation/comic-presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicPresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicPresentationComponent = /** @class */ (function () {
    function ComicPresentationComponent() {
        var _this = this;
        this.toggleWish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.markIssueRead = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectTab = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.zoomed = false;
        this.currentWidth = window.innerWidth;
        this.mobileWidth = 600;
        this.getPercentageIcon = function (percentage) {
            return percentage < 20 ?
                '🌑' : percentage < 40 ?
                '🌘' : percentage < 60 ?
                '🌗' : percentage < 80 ?
                '🌖' : percentage < 100 ?
                '🌕' : '🌑';
        };
        this.toggleZoomIn = function () {
            if (_this.currentWidth > _this.mobileWidth) {
                _this.zoomed = !_this.zoomed;
            }
        };
        this.isVisible = function (tab) {
            if (_this.currentWidth > _this.mobileWidth)
                return true;
            if (tab === _this.selectedTab)
                return true;
        };
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .fromEvent(window, 'resize')
            .map(function () { return window.innerWidth; })
            .subscribe(function (w) {
            _this.currentWidth = w;
            _this.zoomed = false;
        });
    }
    ComicPresentationComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.comic)
            return;
        this.orderedIssues = this._sortIssues(changes.comic.currentValue.issues.slice());
    };
    ComicPresentationComponent.prototype._sortIssues = function (issues) {
        return issues.sort(function (a, b) {
            return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
        });
    };
    ComicPresentationComponent.prototype.onSelectTab = function (tab) {
        this.selectTab.emit(tab);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ComicPresentationComponent.prototype, "comic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ComicPresentationComponent.prototype, "selectedTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ComicPresentationComponent.prototype, "toggleWish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ComicPresentationComponent.prototype, "markIssueRead", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ComicPresentationComponent.prototype, "selectTab", void 0);
    ComicPresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-comic-presentation',
            template: __webpack_require__("./src/app/comic/comic-presentation/comic-presentation.component.html"),
            styles: [__webpack_require__("./src/app/comic/comic-presentation/comic-presentation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComicPresentationComponent);
    return ComicPresentationComponent;
}());



/***/ }),

/***/ "./src/app/comic/comic.component.html":
/***/ (function(module, exports) {

module.exports = "<pou-comic-presentation *ngIf=\"comic$ | async; let comic\" [comic]=\"comic | select: 'comic'\" [selectedTab]=\"selectedTab\" (toggleWish)=\"toggleWish($event)\" (markIssueRead)=\"markIssueRead($event)\" (selectTab)=\"onSelectTab($event)\"></pou-comic-presentation>"

/***/ }),

/***/ "./src/app/comic/comic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComicComponent = /** @class */ (function () {
    function ComicComponent(route, router, apollo) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.apollo = apollo;
        this.selectedTab = 'general';
        this.comicQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query comic($comicId: ID!) { \n    comic (_id: $comicId) { \n      _id\n      title\n      last_update\n      publication_date\n      status\n      summary\n      cover\n      wish\n      issues {\n        id\n        __typename\n        title\n        read\n        percentage\n        read\n      }\n      artists {\n        first_name\n        last_name\n      }\n      publishers {\n        name\n      }\n      writers {\n        first_name\n        last_name\n      }\n      genres {\n        id\n        name\n      }\n    }\n  }\n  "], ["\n  query comic($comicId: ID!) { \n    comic (_id: $comicId) { \n      _id\n      title\n      last_update\n      publication_date\n      status\n      summary\n      cover\n      wish\n      issues {\n        id\n        __typename\n        title\n        read\n        percentage\n        read\n      }\n      artists {\n        first_name\n        last_name\n      }\n      publishers {\n        name\n      }\n      writers {\n        first_name\n        last_name\n      }\n      genres {\n        id\n        name\n      }\n    }\n  }\n  "])));
        this.markComicWish = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation ($comicId: ID!, $wish: Boolean!) {\n    markComicWish(_id: $comicId, wish: $wish) {\n      _id\n      wish\n    }\n  }\n  "], ["\n  mutation ($comicId: ID!, $wish: Boolean!) {\n    markComicWish(_id: $comicId, wish: $wish) {\n      _id\n      wish\n    }\n  }\n  "])));
        this.updateIssueRead = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation ($comicId: ID!, $issueId: String!, $isRead: Boolean! ) {\n    updateIssue(_id: $comicId, issue: $issueId, isRead: $isRead) {\n      _id\n      __typename\n      issues(id: $issueId) {\n        id\n        __typename\n        read\n        percentage\n      }\n    }\n  }\n  "], ["\n  mutation ($comicId: ID!, $issueId: String!, $isRead: Boolean! ) {\n    updateIssue(_id: $comicId, issue: $issueId, isRead: $isRead) {\n      _id\n      __typename\n      issues(id: $issueId) {\n        id\n        __typename\n        read\n        percentage\n      }\n    }\n  }\n  "])));
        this.toggleWish = function (comic) {
            _this.apollo.mutate({
                mutation: _this.markComicWish,
                variables: {
                    comicId: comic._id,
                    wish: !comic.wish
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    markComicWish: {
                        __typename: 'Comic',
                        _id: comic._id,
                        wish: !comic.wish
                    },
                },
            }).subscribe();
        };
        this.markIssueRead = function (event) {
            _this.apollo.mutate({
                mutation: _this.updateIssueRead,
                variables: {
                    comicId: event.comic,
                    issueId: event.issue,
                    isRead: event.val
                }
            }).subscribe();
        };
        this.comic$ = this.route.params.switchMap(function (_a) {
            var id = _a.id;
            return _this.apollo.watchQuery({
                query: _this.comicQuery, variables: { comicId: id }
            }).valueChanges;
        });
    }
    ComicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.pluck('tab').filter(function (tab) { return !!tab; }).subscribe(function (tab) { return _this.selectedTab = tab; });
    };
    ComicComponent.prototype.onSelectTab = function (tab) {
        this.router.navigate([], { relativeTo: this.route, queryParams: { tab: tab } });
    };
    ComicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-comic',
            template: __webpack_require__("./src/app/comic/comic.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */]])
    ], ComicComponent);
    return ComicComponent;
}());

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/app/components/entity-form/entity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field is-horizontal\">\n\n  <div class=\"field-label\">\n    <label class=\"label is-capitalized\">{{type}}</label>\n  </div>\n\n  <div class=\"field-body\">\n    <div class=\"field\">\n      <input [(ngModel)]=\"_value\" (input)=\"onChange($event)\" class=\"input\" type=\"text\" [placeholder]=\"'Search ' + type + ' ...'\">\n      <pou-typeahead *ngIf=\"_value\" [source]=\"source$\" (onClicked)=\"onToggleEntity($event.id)\"></pou-typeahead>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"field is-horizontal\">\n  <div class=\"field-label\"></div>\n  <div class=\"field-body\">\n\n    <div class=\"field\">\n      <div class=\"tags\">\n        <span class=\"tag is-rounded button is-white\" *ngFor=\"let entityId of selectedEntities\" (click)=\"onToggleEntity(entityId)\">\n          {{ entityId | entityResolver: singleType | async}} &nbsp; 𐄂\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/entity-form/entity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__advanced_search_queries__ = __webpack_require__("./src/app/advanced-search/queries.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityFormComponent = /** @class */ (function () {
    function EntityFormComponent(apollo) {
        this.apollo = apollo;
        this.toggleEntity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.propagateChange = function () { };
    }
    EntityFormComponent_1 = EntityFormComponent;
    EntityFormComponent.prototype.ngOnInit = function () {
        this.singleType = this.type.slice(0, this.type.length - 1);
    };
    EntityFormComponent.prototype.writeValue = function (str) {
        this._value = str;
    };
    EntityFormComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    EntityFormComponent.prototype.registerOnTouched = function (fn) { };
    EntityFormComponent.prototype.onChange = function (event) {
        var search = event.target.value;
        this._value = search;
        this.propagateChange(this._value);
        this.source$ = this.apollo.query({ query: Object(__WEBPACK_IMPORTED_MODULE_3__advanced_search_queries__["a" /* queryFactory */])(this.type), variables: { search: search } }).pluck('data').pluck(this.type);
    };
    EntityFormComponent.prototype.onToggleEntity = function (entityId) {
        this._value = '';
        this.propagateChange(this._value);
        this.toggleEntity.emit({ type: this.type, entityId: entityId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EntityFormComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], EntityFormComponent.prototype, "selectedEntities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EntityFormComponent.prototype, "toggleEntity", void 0);
    EntityFormComponent = EntityFormComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-entity-form',
            template: __webpack_require__("./src/app/components/entity-form/entity-form.component.html"),
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EntityFormComponent_1; }),
                    multi: true,
                }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */]])
    ], EntityFormComponent);
    return EntityFormComponent;
    var EntityFormComponent_1;
}());



/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n    position: relative;\n}\n\n.vbta {\n    width: 100%;\n    position: relative;\n    display: inline-block;\n  }\n\n.vbta-menu {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    float: left;\n    min-width: 160px;\n    padding: 5px 0;\n    margin: 2px 0 0;\n    list-style: none;\n    font-size: 14px;\n    text-align: left;\n    background-color: #ffffff;\n    border: 1px solid #cccccc;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    border-radius: 4px;\n    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n    background-clip: padding-box;\n}\n\n.vbta-suggestion {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857143;\n    color: #333333;\n    white-space: nowrap;\n}\n\n.vbta-suggestion:hover,\n.vbta-suggestion:focus {\n    color: #ffffff;\n    text-decoration: none;\n    outline: 0;\n    background-color: #00d1b2;\n    cursor: pointer;\n}\n\n.vbta-hint {\n    color: #999;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    border-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    opacity: 1;\n    background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);\n}"

/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"source | async; let entities\">\n  <div class=\"vbta-menu\" *ngIf=\"entities.length\">\n    <ul class=\"is-marginless\">\n      <li class=\"vbta-suggestion\" *ngFor=\"let entity of entities\" (click)=\"onClick(entity)\">\n        <span *ngIf=\"entity.first_name\"><strong>{{entity.first_name}}</strong> {{entity.last_name}}</span>\n        <span *ngIf=\"entity.name\">{{entity.name}}</span>\n      </li>\n    </ul>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeaheadComponent = /** @class */ (function () {
    function TypeaheadComponent() {
        this.onClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TypeaheadComponent.prototype.onClick = function (writer) {
        this.onClicked.emit(writer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], TypeaheadComponent.prototype, "source", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TypeaheadComponent.prototype, "onClicked", void 0);
    TypeaheadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-typeahead',
            template: __webpack_require__("./src/app/components/typeahead/typeahead.component.html"),
            styles: [__webpack_require__("./src/app/components/typeahead/typeahead.component.css")]
        })
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());



/***/ }),

/***/ "./src/app/home/home-item/home-item.component.css":
/***/ (function(module, exports) {

module.exports = ".cover-background-parent {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.cover-background-child {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  color: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n\nh1 {\n  text-shadow: 0 0 5px black;\n}\n\n.flex-container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  position: relative;\n}\n\n.to-corner {\n  position: absolute;\n  top: 0.4em;\n  left: 0;\n  width: 100%;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.to-right {\n  right: 0;\n}\n\n.to-left {\n  left: 0;\n}\n"

/***/ }),

/***/ "./src/app/home/home-item/home-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div [routerLink]=\"['/comic', comic._id]\" style=\"min-height: 15.25rem\" class=\"box has-text-white is-flex flex-container relative\">\n\n  <div class=\"cover-background-parent\">\n    <div class=\"cover-background-child\" [style.backgroundImage]=\"'url('+ comic.cover +')'\"></div>\n  </div>\n\n  <div class=\"to-corner is-flex\">\n    <div class=\"tag is-rounded\" [ngClass]=\"[comic.status === 'Completed' ? 'is-black' : 'is-dark']\">{{comic.status === 'Completed' ? '🏛' : '🏗'}} {{comic.status}}</div>\n  \n    <div (click)=\"toggleButton.emit(comic); $event.stopPropagation()\">\n      <input id=\"switch\" type=\"checkbox\" name=\"switch\" class=\"switch is-rounded\" [checked]=\"comic.wish\">\n      <label for=\"switch\"></label>\n    </div>\n  </div>\n\n\n  <h1 style=\"font-size: 1.1em; z-index: 10\" class=\"has-text-weight-bold\">{{comic.title}}</h1>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home-item/home-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeItemComponent = /** @class */ (function () {
    function HomeItemComponent() {
        this.toggleButton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeItemComponent.prototype, "comic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], HomeItemComponent.prototype, "toggleButton", void 0);
    HomeItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-home-item',
            template: __webpack_require__("./src/app/home/home-item/home-item.component.html"),
            styles: [__webpack_require__("./src/app/home/home-item/home-item.component.css")]
        })
    ], HomeItemComponent);
    return HomeItemComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"$comics | async; let comics\">\n\n  <section class=\"hero is-primary is-bold\">\n    <div class=\"hero-body\">\n      <div class=\"container has-text-centered\">\n        <h1 class=\"title\">My Collection</h1>\n      </div>\n    </div>\n    <div class=\"hero-foot\">\n      <nav class=\"tabs is-boxed is-fullwidth\">\n        <div class=\"container\">\n          <ul>\n            <li [ngClass]=\"{'is-active': selectedTab === 'home'}\" (click)=\"selectTab('home')\">\n              <a>\n                Following &nbsp;\n                <span class=\"tag is-rounded is-info\"> {{comics.wished.length}}</span>\n              </a>\n            </li>\n            <li [ngClass]=\"{'is-active': selectedTab === 'new'}\" (click)=\"selectTab('new')\">\n              <a>New &nbsp;\n                <span class=\"tag is-rounded is-success\"> {{comics.lastUpdated.length}}</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </section>\n\n  <section class=\"section\">\n    <div class=\"container-fluid\">\n\n      <div *ngIf=\"selectedTab === 'home'\" class=\"columns is-mobile is-variable is-1 is-multiline is-centered\">\n        <div class=\"column is-one-quarter-tablet is-half-mobile\" *ngFor=\"let comic of comics.wished\">\n          <pou-home-item [comic]=\"comic\" (toggleButton)=\"toggleComicWish($event)\"></pou-home-item>\n        </div>\n      </div>\n\n      <div *ngIf=\"selectedTab === 'new'\" class=\"columns is-mobile is-variable is-1 is-multiline is-centered\">\n        <div class=\"column is-one-quarter-tablet is-half-mobile\" *ngFor=\"let comic of comics.lastUpdated\">\n          <pou-home-item [comic]=\"comic\" (toggleButton)=\"toggleComicWish($event)\"></pou-home-item>\n        </div>\n      </div>\n\n    </div>\n  </section>\n</ng-container>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(apollo, route, router) {
        var _this = this;
        this.apollo = apollo;
        this.route = route;
        this.router = router;
        this.selectedTab = 'home';
        this.comicsQuery = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{ \n    wished: comics (wish: true) { \n      _id\n      title\n      wish\n      cover\n      status\n    },\n    lastUpdated: comics (onlyNew: true) {\n      _id\n      title\n      wish\n      cover\n      status\n    }\n  }\n  "], ["{ \n    wished: comics (wish: true) { \n      _id\n      title\n      wish\n      cover\n      status\n    },\n    lastUpdated: comics (onlyNew: true) {\n      _id\n      title\n      wish\n      cover\n      status\n    }\n  }\n  "])));
        this.markComicWish = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation ($comicId: ID!, $wish: Boolean!) {\n    markComicWish(_id: $comicId, wish: $wish) {\n      _id\n      wish\n    }\n  }\n  "], ["\n  mutation ($comicId: ID!, $wish: Boolean!) {\n    markComicWish(_id: $comicId, wish: $wish) {\n      _id\n      wish\n    }\n  }\n  "])));
        this.toggleComicWish = function (comic) {
            var isWish = !comic.wish;
            _this.apollo.mutate({
                mutation: _this.markComicWish,
                variables: {
                    comicId: comic._id,
                    wish: !comic.wish
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    markComicWish: {
                        __typename: 'Comic',
                        _id: comic._id,
                        wish: !comic.wish,
                    },
                },
            }).subscribe();
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$comics = this.apollo.watchQuery({ query: this.comicsQuery })
            .valueChanges
            .pluck('data')
            .share();
        this.route.queryParams.pluck('tab').filter(function (tab) { return !!tab; }).subscribe(function (tab) { return _this.selectedTab = tab; });
    };
    HomeComponent.prototype.selectTab = function (tab) {
        this.router.navigate([], { relativeTo: this.route, queryParams: { tab: tab } });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: ["\n  li.is-active > a {\n    background-color: whitesmoke !important ;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.css":
/***/ (function(module, exports) {

module.exports = ".full-screen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  z-index: 100;\n}\n\n.button-hover {\n  outline: none !important;\n  position: fixed;\n  z-index: 200;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  width: 20vw;\n  top: 0;\n  background-color: rgba(0,0,0,0);\n  border: none;\n}\n\n.button-prev {\n  left: 0;\n}\n\n.button-next {\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<img [class.full-screen]=\"fullscreen\" [src]=\"img\" alt=\"comic image\" (click)=\"onClick()\" (load)=\"onLoaded()\">\n\n<div [hidden]=\"!fullscreen\">\n  <button class=\"button-hover button-prev\" (click)=\"swipe(-1)\"></button>\n  <button class=\"button-hover button-next\" (click)=\"swipe(1)\"></button>\n</div>\n"

/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this.onSwiped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ImageViewerComponent.prototype.swipe = function (e) {
        this.onSwiped.emit(e);
    };
    ImageViewerComponent.prototype.onClick = function () {
        this.onToggle.emit();
    };
    ImageViewerComponent.prototype.onLoaded = function () {
        window.scroll({ top: 0, behavior: 'smooth' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ImageViewerComponent.prototype, "img", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ImageViewerComponent.prototype, "fullscreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ImageViewerComponent.prototype, "onSwiped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ImageViewerComponent.prototype, "onToggle", void 0);
    ImageViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-image-viewer',
            template: __webpack_require__("./src/app/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__("./src/app/image-viewer/image-viewer.component.css")]
        })
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"$info | async | select: 'info'; let info\">\n\n  <section class=\"hero is-primary is-bold\">\n    <div class=\"hero-body\">\n      <div class=\"container has-text-centered\" (click)=\"showTime = !showTime\">\n        <h1 class=\"title\">Info {{showTime ? '🔽' : '🔼'}}</h1>\n        <h2 class=\"subtitle\">{{showTime ? '⏱' : '📅'}} Updated\n          <span *ngIf=\"showTime\">\n            {{daysSinceLastUpdate}} ago\n          </span>\n          <span *ngIf=\"!showTime\">\n            on {{info.last_update | date: 'medium'}}\n          </span>\n        </h2>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"section\">\n\n    <div class=\"container-fluid\">\n\n      <div class=\"columns is-tablet\">\n\n        <div class=\"column\">\n          <div class=\"tile is-ancestor\">\n            <div class=\"tile is-vertical\">\n              <div class=\"tile\">\n                <div class=\"tile is-parent is-vertical is-4\">\n\n                  <article class=\"tile is-child notification is-link content has-text-centered\" (click)=\"showTotal = !showTotal\">\n                    <p class=\"title is-marginless\">Comics {{showTotal ? '🔽' : '🔼'}}</p>\n                    <p class=\"big-text\" *ngIf=\"showTotal\"> {{info.comics.ongoing + info.comics.completed | number}} </p>\n                    <span *ngIf=\"!showTotal\">\n                      <p>Ongoing 🏗: {{info.comics.ongoing | number}}</p>\n                      <p>Completed 🏛: {{info.comics.completed | number}}</p>\n                    </span>\n                  </article>\n\n                </div>\n\n                <div class=\"tile is-parent is-4\">\n\n                  <article class=\"tile is-child notification is-white content has-text-centered\">\n                    <p class=\"title is-marginless\">Issues</p>\n                    <p class=\"big-text\">{{info.issues | number}}</p>\n                  </article>\n\n                </div>\n\n                <div class=\"tile is-parent is-4\">\n\n                  <article class=\"tile is-child notification is-success content has-text-centered\">\n                    <p class=\"title is-marginless\">Publishers</p>\n                    <p class=\"big-text\">{{info.publishers | number}}</p>\n                  </article>\n\n                </div>\n\n              </div>\n\n              <div class=\"tile\">\n                <div class=\"tile is-parent is-4\">\n\n                  <article class=\"tile is-child notification is-dark content has-text-centered\">\n                    <p class=\"title is-marginless\">Writers</p>\n                    <p class=\"big-text\">{{info.writers | number}}</p>\n                  </article>\n\n                </div>\n\n                <div class=\"tile is-parent is-4\">\n\n                  <article class=\"tile is-child notification is-warning content has-text-centered\">\n                    <p class=\"title is-marginless\">Artists</p>\n                    <p class=\"big-text\">{{info.artists | number}}</p>\n                  </article>\n\n                </div>\n                <div class=\"tile is-parent is-4\">\n\n                  <article class=\"tile is-child notification is-danger content has-text-centered\">\n                    <p class=\"title is-marginless\">Genres</p>\n                    <p class=\"big-text\">{{info.genres | number}}</p>\n                  </article>\n\n                </div>\n              </div>\n\n              <div class=\"tile is-parent\">\n                <article class=\"tile is-child notification is-dark content has-text-centered\" (click)=\"showLog = !showLog\">\n                  <p class=\"title is-marginless\">Log {{showLog ? '🔽' : '🔼'}}</p>\n                  <p *ngIf=\"showLog\" style=\"white-space: pre-wrap; max-height: 300px; overflow-y: scroll;     -webkit-overflow-scrolling: touch;\" class=\"has-text-left is-size-7\">{{log$ | async | select: 'log'}}</p>\n                </article>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoComponent = /** @class */ (function () {
    function InfoComponent(apollo, apiService) {
        this.apollo = apollo;
        this.apiService = apiService;
        this.showTotal = true;
        this.showTime = true;
        this.showLog = false;
        this.infoQuery = __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{\n    info {\n      last_update\n      genres\n      writers\n      publishers\n      artists\n      issues\n      comics {\n        completed\n        ongoing\n      }\n    }\n  }  \n  "], ["{\n    info {\n      last_update\n      genres\n      writers\n      publishers\n      artists\n      issues\n      comics {\n        completed\n        ongoing\n      }\n    }\n  }  \n  "])));
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$info = this.apollo.query({ query: this.infoQuery })
            .share()
            .do(function (_a) {
            var data = _a.data;
            return _this.setDaysSinceLastUpdate(data.info.last_update);
        });
        this.log$ = this.apollo.query({ query: __WEBPACK_IMPORTED_MODULE_1_graphql_tag___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{log}"], ["{log}"]))) }).shareReplay();
    };
    InfoComponent.prototype.setDaysSinceLastUpdate = function (date) {
        var duration = (new Date().getTime() - new Date(date).getTime());
        var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        var days = Math.floor((duration / (1000 * 60 * 60 * 24)));
        this.daysSinceLastUpdate = days ?
            days + " days and " + hours + " hours" :
            hours + " hours";
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-info',
            template: __webpack_require__("./src/app/info/info.component.html"),
            styles: [
                "\n    .big-text {\n      font-size: 2.8rem;\n    }\n    "
            ],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], InfoComponent);
    return InfoComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Interceptor = /** @class */ (function () {
    function Interceptor(auth) {
        this.auth = auth;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var authReq = req.clone({ headers: req.headers.set('Authorization', this.auth.getToken()) });
        return next.handle(authReq);
    };
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-dark is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n\n      <div class=\"field has-addons is-horizontal\">\n\n        <div style=\"width: 100%\" class=\"control\">\n          <input class=\"input\" type=\"password\" (keyup.enter)=\"login(user)\" placeholder=\"User\" [(ngModel)]=\"user\">\n        </div>\n        <div class=\"control\">\n          <a class=\"button is-white is-outlined\" (click)=\"login(user)\">Login</a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this._success = function () { return _this.router.navigate(['comics']); };
        this.login = function (user) { return _this.api.login(user).subscribe(_this._success, alert); };
    }
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-login',
            template: __webpack_require__("./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pipes/entity-resolver.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityResolverPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advanced_search_queries__ = __webpack_require__("./src/app/advanced-search/queries.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntityResolverPipe = /** @class */ (function () {
    function EntityResolverPipe(apollo) {
        this.apollo = apollo;
    }
    EntityResolverPipe.prototype.transform = function (value, type) {
        var query = Object(__WEBPACK_IMPORTED_MODULE_2__advanced_search_queries__["a" /* queryFactory */])(type);
        return this.apollo.query({ query: query, variables: { id: value } })
            .pluck('data')
            .pluck(type)
            .map(function (response) {
            if (response.name)
                return response.name;
            if (response.first_name)
                return response.first_name + " " + response.last_name;
            return 'not found';
        });
    };
    EntityResolverPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'entityResolver'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */]])
    ], EntityResolverPipe);
    return EntityResolverPipe;
}());



/***/ }),

/***/ "./src/app/resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ResolveService = /** @class */ (function () {
    function ResolveService() {
        var _this = this;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.setState = function (state) { return _this.subject.next(state); };
        this.getState = function () { return _this.subject.asObservable(); };
    }
    ResolveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ResolveService);
    return ResolveService;
}());



/***/ }),

/***/ "./src/app/search/search-item/search-item.component.css":
/***/ (function(module, exports) {

module.exports = ".to-corner {\n    position: absolute;\n    top: .4em;\n}\n\n.to-right {\n    right: 0;\n}\n\n.to-left {\n    left: 0;\n}"

/***/ }),

/***/ "./src/app/search/search-item/search-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-ancestor columns is-mobile\" style=\"border: 1px solid; border-radius: 3px; margin: .3em\">\n  <div class=\"tile is-vertical is-4\">\n    <div class=\"tile is-parent is-paddingless\">\n      <article class=\"tile is-child\">\n        <figure class=\"image\">\n          <img [src]=\"comic.cover\" alt=\"cover\">\n\n          <div class=\"field to-corner to-right\" (click)=\"onToggleWish.emit(comic)\">\n            <input id=\"switch\" type=\"checkbox\" name=\"switch\" class=\"switch is-rounded\" [checked]=\"comic.wish\">\n            <label for=\"switch\"></label>\n          </div>\n\n        </figure>\n      </article>\n    </div>\n  </div>\n\n  <div class=\"tile is-vertical is-parent\" (click)=\"goTo.emit(comic._id)\">\n\n    <div class=\"tile is-child has-text-centered\">\n      <p class=\"has-text-weight-bold is-size-4-tablet\" >{{comic.title}}</p>\n      <p class=\"is-size-7\">{{comic.status === 'Completed' ? '🏛' : '🏗'}} {{comic.status}}</p>\n    </div>\n    \n    <div class=\"tile is-child\">\n      <p class=\"has-text-centered is-size-7-mobile\">📅 {{comic.publication_date}}</p>\n      <p class=\"is-size-7 has-text-justified\">{{limit(comic.summary, 100)}}</p>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/search/search-item/search-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchItemComponent = /** @class */ (function () {
    function SearchItemComponent() {
        this.onToggleWish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.goTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchItemComponent.prototype.limit = function (text, limit) {
        if (text === void 0) { text = ''; }
        if (limit === void 0) { limit = 3; }
        return text.length > (limit - 3) ? text.substring(0, limit - 3).concat('...') : text;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchItemComponent.prototype, "comic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchItemComponent.prototype, "onToggleWish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchItemComponent.prototype, "goTo", void 0);
    SearchItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-search-item',
            template: __webpack_require__("./src/app/search/search-item/search-item.component.html"),
            styles: [__webpack_require__("./src/app/search/search-item/search-item.component.css")]
        })
    ], SearchItemComponent);
    return SearchItemComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field has-addons is-marginless\">\n  <div class=\"control\">\n    <input [formControl]=\"searchForm\" (keyup.escape)=\"searchForm.reset()\" [class.is-danger]=\"searchForm.value && searchForm.value.length <= 3\"\n      class=\"input is-small\" type=\"text\" placeholder=\"Search\">\n  </div>\n  <div class=\"control\">\n    <a [class.is-loading]=\"isLoading\" class=\"button is-small is-light is-outlined\" (click)=\"searchForm.reset()\">\n      <span class=\"is-hidden-mobile\"> Cancel &nbsp;</span> ❌\n    </a>\n  </div>\n</div>\n\n<ul *ngIf=\"listed | async; let comics\" class=\"container custom-container\">\n  <li *ngFor=\"let comic of comics\">\n    <pou-search-item [comic]=\"comic\" (goTo)=\"onGoTo($event)\" (onToggleWish)=\"toggleWish($event)\"></pou-search-item>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = "/*! bulma.io v0.6.2 | MIT License | github.com/jgthms/bulma */\n@-webkit-keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n@keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg); } }\n/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\nul {\n  list-style: none; }\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n* {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n*:before, *:after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit; }\nimg,\nembed,\nobject,\naudio,\nvideo {\n  max-width: 100%; }\niframe {\n  border: 0; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0;\n  text-align: left; }\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%; }\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\nbody {\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5; }\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none; }\na strong {\n    color: currentColor; }\na:hover {\n    color: #363636; }\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\nhr {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 1.5rem 0; }\nimg {\n  height: auto;\n  max-width: 100%; }\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\nsmall {\n  font-size: 0.875em; }\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\nstrong {\n  color: #363636;\n  font-weight: 700; }\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal; }\npre code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: 1em;\n    padding: 0; }\ntable td,\ntable th {\n  text-align: left;\n  vertical-align: top; }\ntable th {\n  color: #363636; }\n.is-clearfix:after {\n  clear: both;\n  content: \" \";\n  display: table; }\n.is-pulled-left {\n  float: left !important; }\n.is-pulled-right {\n  float: right !important; }\n.is-clipped {\n  overflow: hidden !important; }\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n.is-size-1 {\n  font-size: 3rem !important; }\n.is-size-2 {\n  font-size: 2.5rem !important; }\n.is-size-3 {\n  font-size: 2rem !important; }\n.is-size-4 {\n  font-size: 1.5rem !important; }\n.is-size-5 {\n  font-size: 1.25rem !important; }\n.is-size-6 {\n  font-size: 1rem !important; }\n.is-size-7 {\n  font-size: 0.75rem !important; }\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important; }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important; }\n  .is-size-3-mobile {\n    font-size: 2rem !important; }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important; }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important; }\n  .is-size-6-mobile {\n    font-size: 1rem !important; }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important; }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important; }\n  .is-size-3-tablet {\n    font-size: 2rem !important; }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important; }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important; }\n  .is-size-6-tablet {\n    font-size: 1rem !important; }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important; } }\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important; }\n  .is-size-2-touch {\n    font-size: 2.5rem !important; }\n  .is-size-3-touch {\n    font-size: 2rem !important; }\n  .is-size-4-touch {\n    font-size: 1.5rem !important; }\n  .is-size-5-touch {\n    font-size: 1.25rem !important; }\n  .is-size-6-touch {\n    font-size: 1rem !important; }\n  .is-size-7-touch {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important; }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important; }\n  .is-size-3-desktop {\n    font-size: 2rem !important; }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important; }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important; }\n  .is-size-6-desktop {\n    font-size: 1rem !important; }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important; }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important; }\n  .is-size-3-widescreen {\n    font-size: 2rem !important; }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important; }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important; }\n  .is-size-6-widescreen {\n    font-size: 1rem !important; }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important; } }\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important; }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important; }\n  .is-size-3-fullhd {\n    font-size: 2rem !important; }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important; }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important; }\n  .is-size-6-fullhd {\n    font-size: 1rem !important; }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important; } }\n.has-text-centered {\n  text-align: center !important; }\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important; } }\n.has-text-justified {\n  text-align: justify !important; }\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important; } }\n.has-text-left {\n  text-align: left !important; }\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important; } }\n.has-text-right {\n  text-align: right !important; }\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important; } }\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important; } }\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important; } }\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important; } }\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important; } }\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important; } }\n.is-capitalized {\n  text-transform: capitalize !important; }\n.is-lowercase {\n  text-transform: lowercase !important; }\n.is-uppercase {\n  text-transform: uppercase !important; }\n.is-italic {\n  font-style: italic !important; }\n.has-text-white {\n  color: white !important; }\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e5e5 !important; }\n.has-text-black {\n  color: #0a0a0a !important; }\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important; }\n.has-text-light {\n  color: whitesmoke !important; }\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important; }\n.has-text-dark {\n  color: #363636 !important; }\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important; }\n.has-text-primary {\n  color: #00d1b2 !important; }\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important; }\n.has-text-link {\n  color: #3273dc !important; }\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important; }\n.has-text-info {\n  color: #209cee !important; }\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important; }\n.has-text-success {\n  color: #23d160 !important; }\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important; }\n.has-text-warning {\n  color: #ffdd57 !important; }\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important; }\n.has-text-danger {\n  color: #ff3860 !important; }\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important; }\n.has-text-black-bis {\n  color: #121212 !important; }\n.has-text-black-ter {\n  color: #242424 !important; }\n.has-text-grey-darker {\n  color: #363636 !important; }\n.has-text-grey-dark {\n  color: #4a4a4a !important; }\n.has-text-grey {\n  color: #7a7a7a !important; }\n.has-text-grey-light {\n  color: #b5b5b5 !important; }\n.has-text-grey-lighter {\n  color: #dbdbdb !important; }\n.has-text-white-ter {\n  color: whitesmoke !important; }\n.has-text-white-bis {\n  color: #fafafa !important; }\n.has-text-weight-light {\n  font-weight: 300 !important; }\n.has-text-weight-normal {\n  font-weight: 400 !important; }\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n.is-block {\n  display: block !important; }\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important; } }\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important; } }\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important; } }\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important; } }\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important; } }\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important; } }\n.is-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n.is-inline {\n  display: inline !important; }\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important; } }\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important; } }\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important; } }\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important; } }\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important; } }\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important; } }\n.is-inline-block {\n  display: inline-block !important; }\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important; } }\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important; } }\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important; } }\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important; } }\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important; } }\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important; } }\n.is-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.is-hidden {\n  display: none !important; }\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important; } }\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important; } }\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important; } }\n.is-invisible {\n  visibility: hidden !important; }\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important; } }\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important; } }\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important; } }\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important; } }\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important; } }\n.is-marginless {\n  margin: 0 !important; }\n.is-paddingless {\n  padding: 0 !important; }\n.is-radiusless {\n  border-radius: 0 !important; }\n.is-shadowless {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n.is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.box {\n  background-color: white;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem; }\n.box:not(:last-child) {\n    margin-bottom: 1.5rem; }\na.box:hover, a.box:focus {\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc; }\na.box:active {\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc; }\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  cursor: pointer;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  text-align: center;\n  white-space: nowrap; }\n.button:focus, .button.is-focused, .button:active, .button.is-active {\n    outline: none; }\n.button[disabled] {\n    cursor: not-allowed; }\n.button strong {\n    color: inherit; }\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em; }\n.button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: 0.1875em; }\n.button .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.375em - 1px); }\n.button .icon:first-child:last-child {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: calc(-0.375em - 1px); }\n.button:hover, .button.is-hovered {\n    border-color: #b5b5b5;\n    color: #363636; }\n.button:focus, .button.is-focused {\n    border-color: #3273dc;\n    color: #363636; }\n.button:focus:not(:active), .button.is-focused:not(:active) {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.button:active, .button.is-active {\n    border-color: #4a4a4a;\n    color: #363636; }\n.button.is-text {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline; }\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n      background-color: whitesmoke;\n      color: #363636; }\n.button.is-text:active, .button.is-text.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n.button.is-text[disabled] {\n      background-color: transparent;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-white {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n.button.is-white:hover, .button.is-white.is-hovered {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a; }\n.button.is-white:focus, .button.is-white.is-focused {\n      border-color: transparent;\n      color: #0a0a0a; }\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n.button.is-white:active, .button.is-white.is-active {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      color: #0a0a0a; }\n.button.is-white[disabled] {\n      background-color: white;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-white.is-inverted {\n      background-color: #0a0a0a;\n      color: white; }\n.button.is-white.is-inverted:hover {\n        background-color: black; }\n.button.is-white.is-inverted[disabled] {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: white; }\n.button.is-white.is-loading:after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n.button.is-white.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a; }\n.button.is-white.is-outlined.is-loading:after {\n        border-color: transparent transparent white white !important; }\n.button.is-white.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: white;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: white; }\n.button.is-white.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined:focus {\n        background-color: #0a0a0a;\n        color: white; }\n.button.is-white.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #0a0a0a; }\n.button.is-black {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n.button.is-black:hover, .button.is-black.is-hovered {\n      background-color: #040404;\n      border-color: transparent;\n      color: white; }\n.button.is-black:focus, .button.is-black.is-focused {\n      border-color: transparent;\n      color: white; }\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n.button.is-black:active, .button.is-black.is-active {\n      background-color: black;\n      border-color: transparent;\n      color: white; }\n.button.is-black[disabled] {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-black.is-inverted {\n      background-color: white;\n      color: #0a0a0a; }\n.button.is-black.is-inverted:hover {\n        background-color: #f2f2f2; }\n.button.is-black.is-inverted[disabled] {\n        background-color: white;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #0a0a0a; }\n.button.is-black.is-loading:after {\n      border-color: transparent transparent white white !important; }\n.button.is-black.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white; }\n.button.is-black.is-outlined.is-loading:after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n.button.is-black.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #0a0a0a; }\n.button.is-black.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined:focus {\n        background-color: white;\n        color: #0a0a0a; }\n.button.is-black.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: white;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: white; }\n.button.is-light {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636; }\n.button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: #363636; }\n.button.is-light:focus, .button.is-light.is-focused {\n      border-color: transparent;\n      color: #363636; }\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n.button.is-light:active, .button.is-light.is-active {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      color: #363636; }\n.button.is-light[disabled] {\n      background-color: whitesmoke;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-light.is-inverted {\n      background-color: #363636;\n      color: whitesmoke; }\n.button.is-light.is-inverted:hover {\n        background-color: #292929; }\n.button.is-light.is-inverted[disabled] {\n        background-color: #363636;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: whitesmoke; }\n.button.is-light.is-loading:after {\n      border-color: transparent transparent #363636 #363636 !important; }\n.button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: #363636; }\n.button.is-light.is-outlined.is-loading:after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n.button.is-light.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: whitesmoke; }\n.button.is-light.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined:focus {\n        background-color: #363636;\n        color: whitesmoke; }\n.button.is-light.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #363636; }\n.button.is-dark {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke; }\n.button.is-dark:hover, .button.is-dark.is-hovered {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: whitesmoke; }\n.button.is-dark:focus, .button.is-dark.is-focused {\n      border-color: transparent;\n      color: whitesmoke; }\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n.button.is-dark:active, .button.is-dark.is-active {\n      background-color: #292929;\n      border-color: transparent;\n      color: whitesmoke; }\n.button.is-dark[disabled] {\n      background-color: #363636;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-dark.is-inverted {\n      background-color: whitesmoke;\n      color: #363636; }\n.button.is-dark.is-inverted:hover {\n        background-color: #e8e8e8; }\n.button.is-dark.is-inverted[disabled] {\n        background-color: whitesmoke;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #363636; }\n.button.is-dark.is-loading:after {\n      border-color: transparent transparent whitesmoke whitesmoke !important; }\n.button.is-dark.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {\n        background-color: #363636;\n        border-color: #363636;\n        color: whitesmoke; }\n.button.is-dark.is-outlined.is-loading:after {\n        border-color: transparent transparent #363636 #363636 !important; }\n.button.is-dark.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #363636; }\n.button.is-dark.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined:focus {\n        background-color: whitesmoke;\n        color: #363636; }\n.button.is-dark.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: whitesmoke; }\n.button.is-primary {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff; }\n.button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #00c4a7;\n      border-color: transparent;\n      color: #fff; }\n.button.is-primary:focus, .button.is-primary.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n.button.is-primary:active, .button.is-primary.is-active {\n      background-color: #00b89c;\n      border-color: transparent;\n      color: #fff; }\n.button.is-primary[disabled] {\n      background-color: #00d1b2;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-primary.is-inverted {\n      background-color: #fff;\n      color: #00d1b2; }\n.button.is-primary.is-inverted:hover {\n        background-color: #f2f2f2; }\n.button.is-primary.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #00d1b2; }\n.button.is-primary.is-loading:after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #00d1b2;\n      color: #00d1b2; }\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {\n        background-color: #00d1b2;\n        border-color: #00d1b2;\n        color: #fff; }\n.button.is-primary.is-outlined.is-loading:after {\n        border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n.button.is-primary.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #00d1b2;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #00d1b2; }\n.button.is-primary.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #00d1b2; }\n.button.is-primary.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #fff; }\n.button.is-link {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n.button.is-link:hover, .button.is-link.is-hovered {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff; }\n.button.is-link:focus, .button.is-link.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.button.is-link:active, .button.is-link.is-active {\n      background-color: #2366d1;\n      border-color: transparent;\n      color: #fff; }\n.button.is-link[disabled] {\n      background-color: #3273dc;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-link.is-inverted {\n      background-color: #fff;\n      color: #3273dc; }\n.button.is-link.is-inverted:hover {\n        background-color: #f2f2f2; }\n.button.is-link.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #3273dc; }\n.button.is-link.is-loading:after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-link.is-outlined {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc; }\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined:focus {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff; }\n.button.is-link.is-outlined.is-loading:after {\n        border-color: transparent transparent #3273dc #3273dc !important; }\n.button.is-link.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #3273dc;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #3273dc; }\n.button.is-link.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #3273dc; }\n.button.is-link.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #fff; }\n.button.is-info {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff; }\n.button.is-info:hover, .button.is-info.is-hovered {\n      background-color: #1496ed;\n      border-color: transparent;\n      color: #fff; }\n.button.is-info:focus, .button.is-info.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25); }\n.button.is-info:active, .button.is-info.is-active {\n      background-color: #118fe4;\n      border-color: transparent;\n      color: #fff; }\n.button.is-info[disabled] {\n      background-color: #209cee;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-info.is-inverted {\n      background-color: #fff;\n      color: #209cee; }\n.button.is-info.is-inverted:hover {\n        background-color: #f2f2f2; }\n.button.is-info.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #209cee; }\n.button.is-info.is-loading:after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-info.is-outlined {\n      background-color: transparent;\n      border-color: #209cee;\n      color: #209cee; }\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {\n        background-color: #209cee;\n        border-color: #209cee;\n        color: #fff; }\n.button.is-info.is-outlined.is-loading:after {\n        border-color: transparent transparent #209cee #209cee !important; }\n.button.is-info.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #209cee;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #209cee; }\n.button.is-info.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #209cee; }\n.button.is-info.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #fff; }\n.button.is-success {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff; }\n.button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #22c65b;\n      border-color: transparent;\n      color: #fff; }\n.button.is-success:focus, .button.is-success.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25); }\n.button.is-success:active, .button.is-success.is-active {\n      background-color: #20bc56;\n      border-color: transparent;\n      color: #fff; }\n.button.is-success[disabled] {\n      background-color: #23d160;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-success.is-inverted {\n      background-color: #fff;\n      color: #23d160; }\n.button.is-success.is-inverted:hover {\n        background-color: #f2f2f2; }\n.button.is-success.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #23d160; }\n.button.is-success.is-loading:after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #23d160;\n      color: #23d160; }\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {\n        background-color: #23d160;\n        border-color: #23d160;\n        color: #fff; }\n.button.is-success.is-outlined.is-loading:after {\n        border-color: transparent transparent #23d160 #23d160 !important; }\n.button.is-success.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #23d160;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #23d160; }\n.button.is-success.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #23d160; }\n.button.is-success.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #fff; }\n.button.is-warning {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning:focus, .button.is-warning.is-focused {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n.button.is-warning:active, .button.is-warning.is-active {\n      background-color: #ffd83d;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning[disabled] {\n      background-color: #ffdd57;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-warning.is-inverted {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n.button.is-warning.is-inverted:hover {\n        background-color: rgba(0, 0, 0, 0.7); }\n.button.is-warning.is-inverted[disabled] {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #ffdd57; }\n.button.is-warning.is-loading:after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n.button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57; }\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7); }\n.button.is-warning.is-outlined.is-loading:after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n.button.is-warning.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #ffdd57;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #ffdd57; }\n.button.is-warning.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7); }\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined:focus {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57; }\n.button.is-warning.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: rgba(0, 0, 0, 0.7); }\n.button.is-danger {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff; }\n.button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #ff2b56;\n      border-color: transparent;\n      color: #fff; }\n.button.is-danger:focus, .button.is-danger.is-focused {\n      border-color: transparent;\n      color: #fff; }\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n        -webkit-box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n                box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25); }\n.button.is-danger:active, .button.is-danger.is-active {\n      background-color: #ff1f4b;\n      border-color: transparent;\n      color: #fff; }\n.button.is-danger[disabled] {\n      background-color: #ff3860;\n      border-color: transparent;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.button.is-danger.is-inverted {\n      background-color: #fff;\n      color: #ff3860; }\n.button.is-danger.is-inverted:hover {\n        background-color: #f2f2f2; }\n.button.is-danger.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #ff3860; }\n.button.is-danger.is-loading:after {\n      border-color: transparent transparent #fff #fff !important; }\n.button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #ff3860;\n      color: #ff3860; }\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {\n        background-color: #ff3860;\n        border-color: #ff3860;\n        color: #fff; }\n.button.is-danger.is-outlined.is-loading:after {\n        border-color: transparent transparent #ff3860 #ff3860 !important; }\n.button.is-danger.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #ff3860;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #ff3860; }\n.button.is-danger.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #ff3860; }\n.button.is-danger.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        color: #fff; }\n.button.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.button.is-medium {\n    font-size: 1.25rem; }\n.button.is-large {\n    font-size: 1.5rem; }\n.button[disabled] {\n    background-color: white;\n    border-color: #dbdbdb;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    opacity: 0.5; }\n.button.is-fullwidth {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%; }\n.button.is-loading {\n    color: transparent !important;\n    pointer-events: none; }\n.button.is-loading:after {\n      -webkit-animation: spinAround 500ms infinite linear;\n              animation: spinAround 500ms infinite linear;\n      border: 2px solid #dbdbdb;\n      border-radius: 290486px;\n      border-right-color: transparent;\n      border-top-color: transparent;\n      content: \"\";\n      display: block;\n      height: 1em;\n      position: relative;\n      width: 1em;\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important; }\n.button.is-static {\n    background-color: whitesmoke;\n    border-color: #dbdbdb;\n    color: #7a7a7a;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    pointer-events: none; }\n.button.is-rounded {\n    border-radius: 290486px;\n    padding-left: 1em;\n    padding-right: 1em; }\n.buttons {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.buttons .button {\n    margin-bottom: 0.5rem; }\n.buttons .button:not(:last-child) {\n      margin-right: 0.5rem; }\n.buttons:last-child {\n    margin-bottom: -0.5rem; }\n.buttons:not(:last-child) {\n    margin-bottom: 1rem; }\n.buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n.buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px; }\n.buttons.has-addons .button:last-child {\n    margin-right: 0; }\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2; }\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n    z-index: 3; }\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n      z-index: 4; }\n.buttons.is-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.buttons.is-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.container {\n  margin: 0 auto;\n  position: relative; }\n@media screen and (min-width: 1024px) {\n    .container {\n      max-width: 960px;\n      width: 960px; }\n      .container.is-fluid {\n        margin-left: 32px;\n        margin-right: 32px;\n        max-width: none;\n        width: auto; } }\n@media screen and (max-width: 1215px) {\n    .container.is-widescreen {\n      max-width: 1152px;\n      width: auto; } }\n@media screen and (max-width: 1407px) {\n    .container.is-fullhd {\n      max-width: 1344px;\n      width: auto; } }\n@media screen and (min-width: 1216px) {\n    .container {\n      max-width: 1152px;\n      width: 1152px; } }\n@media screen and (min-width: 1408px) {\n    .container {\n      max-width: 1344px;\n      width: 1344px; } }\n.content:not(:last-child) {\n  margin-bottom: 1.5rem; }\n.content li + li {\n  margin-top: 0.25em; }\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em; }\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 400;\n  line-height: 1.125; }\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em; }\n.content h1:not(:first-child) {\n    margin-top: 1em; }\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em; }\n.content h2:not(:first-child) {\n    margin-top: 1.1428em; }\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em; }\n.content h3:not(:first-child) {\n    margin-top: 1.3333em; }\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em; }\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em; }\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em; }\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em; }\n.content ol {\n  list-style: decimal outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em; }\n.content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em; }\n.content ul ul ul {\n      list-style-type: square; }\n.content dd {\n  margin-left: 2em; }\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center; }\n.content figure:not(:first-child) {\n    margin-top: 2em; }\n.content figure:not(:last-child) {\n    margin-bottom: 2em; }\n.content figure img {\n    display: inline-block; }\n.content figure figcaption {\n    font-style: italic; }\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal; }\n.content sup,\n.content sub {\n  font-size: 75%; }\n.content table {\n  width: 100%; }\n.content table td,\n  .content table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n.content table th {\n    color: #363636;\n    text-align: left; }\n.content table tr:hover {\n    background-color: whitesmoke; }\n.content table thead td,\n  .content table thead th {\n    border-width: 0 0 2px;\n    color: #363636; }\n.content table tfoot td,\n  .content table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636; }\n.content table tbody tr:last-child td,\n  .content table tbody tr:last-child th {\n    border-bottom-width: 0; }\n.content.is-small {\n  font-size: 0.75rem; }\n.content.is-medium {\n  font-size: 1.25rem; }\n.content.is-large {\n  font-size: 1.5rem; }\n.input,\n.textarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n          box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%; }\n.input:focus, .input.is-focused, .input:active, .input.is-active,\n  .textarea:focus,\n  .textarea.is-focused,\n  .textarea:active,\n  .textarea.is-active {\n    outline: none; }\n.input[disabled],\n  .textarea[disabled] {\n    cursor: not-allowed; }\n.input::-moz-placeholder,\n  .textarea::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input::-webkit-input-placeholder,\n  .textarea::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input:-moz-placeholder,\n  .textarea:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input:-ms-input-placeholder,\n  .textarea:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n.input:hover, .input.is-hovered,\n  .textarea:hover,\n  .textarea.is-hovered {\n    border-color: #b5b5b5; }\n.input:focus, .input.is-focused, .input:active, .input.is-active,\n  .textarea:focus,\n  .textarea.is-focused,\n  .textarea:active,\n  .textarea.is-active {\n    border-color: #3273dc;\n    -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n            box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.input[disabled],\n  .textarea[disabled] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #7a7a7a; }\n.input[disabled]::-moz-placeholder,\n    .textarea[disabled]::-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[disabled]::-webkit-input-placeholder,\n    .textarea[disabled]::-webkit-input-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[disabled]:-moz-placeholder,\n    .textarea[disabled]:-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[disabled]:-ms-input-placeholder,\n    .textarea[disabled]:-ms-input-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n.input[readonly],\n  .textarea[readonly] {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.input.is-white,\n  .textarea.is-white {\n    border-color: white; }\n.input.is-white:focus, .input.is-white.is-focused, .input.is-white:active, .input.is-white.is-active,\n    .textarea.is-white:focus,\n    .textarea.is-white.is-focused,\n    .textarea.is-white:active,\n    .textarea.is-white.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n.input.is-black,\n  .textarea.is-black {\n    border-color: #0a0a0a; }\n.input.is-black:focus, .input.is-black.is-focused, .input.is-black:active, .input.is-black.is-active,\n    .textarea.is-black:focus,\n    .textarea.is-black.is-focused,\n    .textarea.is-black:active,\n    .textarea.is-black.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n.input.is-light,\n  .textarea.is-light {\n    border-color: whitesmoke; }\n.input.is-light:focus, .input.is-light.is-focused, .input.is-light:active, .input.is-light.is-active,\n    .textarea.is-light:focus,\n    .textarea.is-light.is-focused,\n    .textarea.is-light:active,\n    .textarea.is-light.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n.input.is-dark,\n  .textarea.is-dark {\n    border-color: #363636; }\n.input.is-dark:focus, .input.is-dark.is-focused, .input.is-dark:active, .input.is-dark.is-active,\n    .textarea.is-dark:focus,\n    .textarea.is-dark.is-focused,\n    .textarea.is-dark:active,\n    .textarea.is-dark.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n.input.is-primary,\n  .textarea.is-primary {\n    border-color: #00d1b2; }\n.input.is-primary:focus, .input.is-primary.is-focused, .input.is-primary:active, .input.is-primary.is-active,\n    .textarea.is-primary:focus,\n    .textarea.is-primary.is-focused,\n    .textarea.is-primary:active,\n    .textarea.is-primary.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n.input.is-link,\n  .textarea.is-link {\n    border-color: #3273dc; }\n.input.is-link:focus, .input.is-link.is-focused, .input.is-link:active, .input.is-link.is-active,\n    .textarea.is-link:focus,\n    .textarea.is-link.is-focused,\n    .textarea.is-link:active,\n    .textarea.is-link.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.input.is-info,\n  .textarea.is-info {\n    border-color: #209cee; }\n.input.is-info:focus, .input.is-info.is-focused, .input.is-info:active, .input.is-info.is-active,\n    .textarea.is-info:focus,\n    .textarea.is-info.is-focused,\n    .textarea.is-info:active,\n    .textarea.is-info.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25); }\n.input.is-success,\n  .textarea.is-success {\n    border-color: #23d160; }\n.input.is-success:focus, .input.is-success.is-focused, .input.is-success:active, .input.is-success.is-active,\n    .textarea.is-success:focus,\n    .textarea.is-success.is-focused,\n    .textarea.is-success:active,\n    .textarea.is-success.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25); }\n.input.is-warning,\n  .textarea.is-warning {\n    border-color: #ffdd57; }\n.input.is-warning:focus, .input.is-warning.is-focused, .input.is-warning:active, .input.is-warning.is-active,\n    .textarea.is-warning:focus,\n    .textarea.is-warning.is-focused,\n    .textarea.is-warning:active,\n    .textarea.is-warning.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n.input.is-danger,\n  .textarea.is-danger {\n    border-color: #ff3860; }\n.input.is-danger:focus, .input.is-danger.is-focused, .input.is-danger:active, .input.is-danger.is-active,\n    .textarea.is-danger:focus,\n    .textarea.is-danger.is-focused,\n    .textarea.is-danger:active,\n    .textarea.is-danger.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25); }\n.input.is-small,\n  .textarea.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.input.is-medium,\n  .textarea.is-medium {\n    font-size: 1.25rem; }\n.input.is-large,\n  .textarea.is-large {\n    font-size: 1.5rem; }\n.input.is-fullwidth,\n  .textarea.is-fullwidth {\n    display: block;\n    width: 100%; }\n.input.is-inline,\n  .textarea.is-inline {\n    display: inline;\n    width: auto; }\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em; }\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding-left: 0;\n  padding-right: 0; }\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical; }\n.textarea:not([rows]) {\n    max-height: 600px;\n    min-height: 120px; }\n.textarea[rows] {\n    height: unset; }\n.textarea.has-fixed-size {\n    resize: none; }\n.checkbox,\n.radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n.checkbox input,\n  .radio input {\n    cursor: pointer; }\n.checkbox:hover,\n  .radio:hover {\n    color: #363636; }\n.checkbox[disabled],\n  .radio[disabled] {\n    color: #7a7a7a;\n    cursor: not-allowed; }\n.radio + .radio {\n  margin-left: 0.5em; }\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top; }\n.select:not(.is-multiple) {\n    height: 2.25em; }\n.select:not(.is-multiple)::after {\n      border: 1px solid #3273dc;\n      border-right: 0;\n      border-top: 0;\n      content: \" \";\n      display: block;\n      height: 0.5em;\n      pointer-events: none;\n      position: absolute;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      -webkit-transform-origin: center;\n              transform-origin: center;\n      width: 0.5em;\n      margin-top: -0.375em;\n      right: 1.125em;\n      top: 50%;\n      z-index: 4; }\n.select.is-rounded select {\n    border-radius: 290486px;\n    padding-left: 1em; }\n.select select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    font-size: 1rem;\n    height: 2.25em;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    line-height: 1.5;\n    padding-bottom: calc(0.375em - 1px);\n    padding-left: calc(0.625em - 1px);\n    padding-right: calc(0.625em - 1px);\n    padding-top: calc(0.375em - 1px);\n    position: relative;\n    vertical-align: top;\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none; }\n.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {\n      outline: none; }\n.select select[disabled] {\n      cursor: not-allowed; }\n.select select::-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n.select select::-webkit-input-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n.select select:-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n.select select:-ms-input-placeholder {\n      color: rgba(54, 54, 54, 0.3); }\n.select select:hover, .select select.is-hovered {\n      border-color: #b5b5b5; }\n.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {\n      border-color: #3273dc;\n      -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.select select[disabled] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      color: #7a7a7a; }\n.select select[disabled]::-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3); }\n.select select[disabled]::-webkit-input-placeholder {\n        color: rgba(122, 122, 122, 0.3); }\n.select select[disabled]:-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3); }\n.select select[disabled]:-ms-input-placeholder {\n        color: rgba(122, 122, 122, 0.3); }\n.select select::-ms-expand {\n      display: none; }\n.select select[disabled]:hover {\n      border-color: whitesmoke; }\n.select select:not([multiple]) {\n      padding-right: 2.5em; }\n.select select[multiple] {\n      height: unset;\n      padding: 0; }\n.select select[multiple] option {\n        padding: 0.5em 1em; }\n.select:hover::after {\n    border-color: #363636; }\n.select.is-white select {\n    border-color: white; }\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n.select.is-black select {\n    border-color: #0a0a0a; }\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n.select.is-light select {\n    border-color: whitesmoke; }\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n.select.is-dark select {\n    border-color: #363636; }\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n.select.is-primary select {\n    border-color: #00d1b2; }\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n.select.is-link select {\n    border-color: #3273dc; }\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n.select.is-info select {\n    border-color: #209cee; }\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25); }\n.select.is-success select {\n    border-color: #23d160; }\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25); }\n.select.is-warning select {\n    border-color: #ffdd57; }\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n.select.is-danger select {\n    border-color: #ff3860; }\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n      -webkit-box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n              box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25); }\n.select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n.select.is-medium {\n    font-size: 1.25rem; }\n.select.is-large {\n    font-size: 1.5rem; }\n.select.is-disabled::after {\n    border-color: #7a7a7a; }\n.select.is-fullwidth {\n    width: 100%; }\n.select.is-fullwidth select {\n      width: 100%; }\n.select.is-loading::after {\n    -webkit-animation: spinAround 500ms infinite linear;\n            animation: spinAround 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    -webkit-transform: none;\n            transform: none; }\n.select.is-loading.is-small:after {\n    font-size: 0.75rem; }\n.select.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n.select.is-loading.is-large:after {\n    font-size: 1.5rem; }\n.file {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  position: relative; }\n.file.is-white .file-cta {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n    background-color: #f9f9f9;\n    border-color: transparent;\n    color: #0a0a0a; }\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n            box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n    color: #0a0a0a; }\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n    background-color: #f2f2f2;\n    border-color: transparent;\n    color: #0a0a0a; }\n.file.is-black .file-cta {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n    background-color: #040404;\n    border-color: transparent;\n    color: white; }\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n            box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n    color: white; }\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n    background-color: black;\n    border-color: transparent;\n    color: white; }\n.file.is-light .file-cta {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636; }\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n    background-color: #eeeeee;\n    border-color: transparent;\n    color: #363636; }\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n            box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n    color: #363636; }\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n    background-color: #e8e8e8;\n    border-color: transparent;\n    color: #363636; }\n.file.is-dark .file-cta {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke; }\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n    background-color: #2f2f2f;\n    border-color: transparent;\n    color: whitesmoke; }\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n            box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n    color: whitesmoke; }\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n    background-color: #292929;\n    border-color: transparent;\n    color: whitesmoke; }\n.file.is-primary .file-cta {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff; }\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n    background-color: #00c4a7;\n    border-color: transparent;\n    color: #fff; }\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n            box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n    color: #fff; }\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n    background-color: #00b89c;\n    border-color: transparent;\n    color: #fff; }\n.file.is-link .file-cta {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n    background-color: #276cda;\n    border-color: transparent;\n    color: #fff; }\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n            box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n    color: #fff; }\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n    background-color: #2366d1;\n    border-color: transparent;\n    color: #fff; }\n.file.is-info .file-cta {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff; }\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n    background-color: #1496ed;\n    border-color: transparent;\n    color: #fff; }\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n            box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n    color: #fff; }\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n    background-color: #118fe4;\n    border-color: transparent;\n    color: #fff; }\n.file.is-success .file-cta {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff; }\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n    background-color: #22c65b;\n    border-color: transparent;\n    color: #fff; }\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n            box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n    color: #fff; }\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n    background-color: #20bc56;\n    border-color: transparent;\n    color: #fff; }\n.file.is-warning .file-cta {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n    background-color: #ffdb4a;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n            box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n    background-color: #ffd83d;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n.file.is-danger .file-cta {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff; }\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n    background-color: #ff2b56;\n    border-color: transparent;\n    color: #fff; }\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n    border-color: transparent;\n    -webkit-box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n            box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n    color: #fff; }\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n    background-color: #ff1f4b;\n    border-color: transparent;\n    color: #fff; }\n.file.is-small {\n    font-size: 0.75rem; }\n.file.is-medium {\n    font-size: 1.25rem; }\n.file.is-medium .file-icon .fa {\n      font-size: 21px; }\n.file.is-large {\n    font-size: 1.5rem; }\n.file.is-large .file-icon .fa {\n      font-size: 28px; }\n.file.has-name .file-cta {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n.file.has-name .file-name {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n.file.has-name.is-empty .file-cta {\n    border-radius: 3px; }\n.file.has-name.is-empty .file-name {\n    display: none; }\n.file.is-boxed .file-label {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.file.is-boxed .file-cta {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: auto;\n    padding: 1em 3em; }\n.file.is-boxed .file-name {\n    border-width: 0 1px 1px; }\n.file.is-boxed .file-icon {\n    height: 1.5em;\n    width: 1.5em; }\n.file.is-boxed .file-icon .fa {\n      font-size: 21px; }\n.file.is-boxed.is-small .file-icon .fa {\n    font-size: 14px; }\n.file.is-boxed.is-medium .file-icon .fa {\n    font-size: 28px; }\n.file.is-boxed.is-large .file-icon .fa {\n    font-size: 35px; }\n.file.is-boxed.has-name .file-cta {\n    border-radius: 3px 3px 0 0; }\n.file.is-boxed.has-name .file-name {\n    border-radius: 0 0 3px 3px;\n    border-width: 0 1px 1px; }\n.file.is-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.file.is-fullwidth .file-label {\n    width: 100%; }\n.file.is-fullwidth .file-name {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: none; }\n.file.is-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.file.is-right .file-cta {\n      border-radius: 0 3px 3px 0; }\n.file.is-right .file-name {\n      border-radius: 3px 0 0 3px;\n      border-width: 1px 0 1px 1px;\n      -webkit-box-ordinal-group: 0;\n          -ms-flex-order: -1;\n              order: -1; }\n.file-label {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  overflow: hidden;\n  position: relative; }\n.file-label:hover .file-cta {\n    background-color: #eeeeee;\n    color: #363636; }\n.file-label:hover .file-name {\n    border-color: #d5d5d5; }\n.file-label:active .file-cta {\n    background-color: #e8e8e8;\n    color: #363636; }\n.file-label:active .file-name {\n    border-color: #cfcfcf; }\n.file-input {\n  height: 0.01em;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 0.01em; }\n.file-cta,\n.file-name {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  border-color: #dbdbdb;\n  border-radius: 3px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap; }\n.file-cta:focus, .file-cta.is-focused, .file-cta:active, .file-cta.is-active,\n  .file-name:focus,\n  .file-name.is-focused,\n  .file-name:active,\n  .file-name.is-active {\n    outline: none; }\n.file-cta[disabled],\n  .file-name[disabled] {\n    cursor: not-allowed; }\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a; }\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis; }\n.file-icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 0.5em;\n  width: 1em; }\n.file-icon .fa {\n    font-size: 14px; }\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n.label:not(:last-child) {\n    margin-bottom: 0.5em; }\n.label.is-small {\n    font-size: 0.75rem; }\n.label.is-medium {\n    font-size: 1.25rem; }\n.label.is-large {\n    font-size: 1.5rem; }\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n.help.is-white {\n    color: white; }\n.help.is-black {\n    color: #0a0a0a; }\n.help.is-light {\n    color: whitesmoke; }\n.help.is-dark {\n    color: #363636; }\n.help.is-primary {\n    color: #00d1b2; }\n.help.is-link {\n    color: #3273dc; }\n.help.is-info {\n    color: #209cee; }\n.help.is-success {\n    color: #23d160; }\n.help.is-warning {\n    color: #ffdd57; }\n.help.is-danger {\n    color: #ff3860; }\n.field:not(:last-child) {\n  margin-bottom: 0.75rem; }\n.field.has-addons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.field.has-addons .control:not(:last-child) {\n    margin-right: -1px; }\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0; }\n.field.has-addons .control:first-child .button,\n  .field.has-addons .control:first-child .input,\n  .field.has-addons .control:first-child .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n.field.has-addons .control:last-child .button,\n  .field.has-addons .control:last-child .input,\n  .field.has-addons .control:last-child .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n.field.has-addons .control .button:hover, .field.has-addons .control .button.is-hovered,\n  .field.has-addons .control .input:hover,\n  .field.has-addons .control .input.is-hovered,\n  .field.has-addons .control .select select:hover,\n  .field.has-addons .control .select select.is-hovered {\n    z-index: 2; }\n.field.has-addons .control .button:focus, .field.has-addons .control .button.is-focused, .field.has-addons .control .button:active, .field.has-addons .control .button.is-active,\n  .field.has-addons .control .input:focus,\n  .field.has-addons .control .input.is-focused,\n  .field.has-addons .control .input:active,\n  .field.has-addons .control .input.is-active,\n  .field.has-addons .control .select select:focus,\n  .field.has-addons .control .select select.is-focused,\n  .field.has-addons .control .select select:active,\n  .field.has-addons .control .select select.is-active {\n    z-index: 3; }\n.field.has-addons .control .button:focus:hover, .field.has-addons .control .button.is-focused:hover, .field.has-addons .control .button:active:hover, .field.has-addons .control .button.is-active:hover,\n    .field.has-addons .control .input:focus:hover,\n    .field.has-addons .control .input.is-focused:hover,\n    .field.has-addons .control .input:active:hover,\n    .field.has-addons .control .input.is-active:hover,\n    .field.has-addons .control .select select:focus:hover,\n    .field.has-addons .control .select select.is-focused:hover,\n    .field.has-addons .control .select select:active:hover,\n    .field.has-addons .control .select select.is-active:hover {\n      z-index: 4; }\n.field.has-addons .control.is-expanded {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n.field.has-addons.has-addons-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.field.has-addons.has-addons-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.field.has-addons.has-addons-fullwidth .control {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n.field.is-grouped {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.field.is-grouped > .control {\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n.field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n.field.is-grouped > .control.is-expanded {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n.field.is-grouped.is-grouped-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.field.is-grouped.is-grouped-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.field.is-grouped.is-grouped-multiline {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n      margin-bottom: 0.75rem; }\n.field.is-grouped.is-grouped-multiline:last-child {\n      margin-bottom: -0.75rem; }\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n      margin-bottom: 0; }\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; } }\n.field-label .label {\n  font-size: inherit; }\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem; } }\n@media screen and (min-width: 769px), print {\n  .field-label {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right; }\n    .field-label.is-small {\n      font-size: 0.75rem;\n      padding-top: 0.375em; }\n    .field-label.is-normal {\n      padding-top: 0.375em; }\n    .field-label.is-medium {\n      font-size: 1.25rem;\n      padding-top: 0.375em; }\n    .field-label.is-large {\n      font-size: 1.5rem;\n      padding-top: 0.375em; } }\n.field-body .field .field {\n  margin-bottom: 0; }\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 5;\n        -ms-flex-positive: 5;\n            flex-grow: 5;\n    -ms-flex-negative: 1;\n        flex-shrink: 1; }\n    .field-body .field {\n      margin-bottom: 0; }\n    .field-body > .field {\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n      .field-body > .field:not(.is-narrow) {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n      .field-body > .field:not(:last-child) {\n        margin-right: 0.75rem; } }\n.control {\n  font-size: 1rem;\n  position: relative;\n  text-align: left; }\n.control.has-icon .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4; }\n.control.has-icon .input:focus + .icon {\n    color: #7a7a7a; }\n.control.has-icon .input.is-small + .icon {\n    font-size: 0.75rem; }\n.control.has-icon .input.is-medium + .icon {\n    font-size: 1.25rem; }\n.control.has-icon .input.is-large + .icon {\n    font-size: 1.5rem; }\n.control.has-icon:not(.has-icon-right) .icon {\n    left: 0; }\n.control.has-icon:not(.has-icon-right) .input {\n    padding-left: 2.25em; }\n.control.has-icon.has-icon-right .icon {\n    right: 0; }\n.control.has-icon.has-icon-right .input {\n    padding-right: 2.25em; }\n.control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n  .control.has-icons-right .select:focus ~ .icon {\n    color: #7a7a7a; }\n.control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n  .control.has-icons-right .select.is-small ~ .icon {\n    font-size: 0.75rem; }\n.control.has-icons-left .input.is-medium ~ .icon,\n  .control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n  .control.has-icons-right .select.is-medium ~ .icon {\n    font-size: 1.25rem; }\n.control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n  .control.has-icons-right .select.is-large ~ .icon {\n    font-size: 1.5rem; }\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4; }\n.control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.25em; }\n.control.has-icons-left .icon.is-left {\n    left: 0; }\n.control.has-icons-right .input,\n  .control.has-icons-right .select select {\n    padding-right: 2.25em; }\n.control.has-icons-right .icon.is-right {\n    right: 0; }\n.control.is-loading::after {\n    -webkit-animation: spinAround 500ms infinite linear;\n            animation: spinAround 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: \"\";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4; }\n.control.is-loading.is-small:after {\n    font-size: 0.75rem; }\n.control.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n.control.is-loading.is-large:after {\n    font-size: 1.5rem; }\n.icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem; }\n.icon.is-small {\n    height: 1rem;\n    width: 1rem; }\n.icon.is-medium {\n    height: 2rem;\n    width: 2rem; }\n.icon.is-large {\n    height: 3rem;\n    width: 3rem; }\n.image {\n  display: block;\n  position: relative; }\n.image img {\n    display: block;\n    height: auto;\n    width: 100%; }\n.image img.is-rounded {\n      border-radius: 290486px; }\n.image.is-square img, .image.is-1by1 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-16by9 img, .image.is-2by1 img {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100%;\n    width: 100%; }\n.image.is-square, .image.is-1by1 {\n    padding-top: 100%; }\n.image.is-4by3 {\n    padding-top: 75%; }\n.image.is-3by2 {\n    padding-top: 66.6666%; }\n.image.is-16by9 {\n    padding-top: 56.25%; }\n.image.is-2by1 {\n    padding-top: 50%; }\n.image.is-16x16 {\n    height: 16px;\n    width: 16px; }\n.image.is-24x24 {\n    height: 24px;\n    width: 24px; }\n.image.is-32x32 {\n    height: 32px;\n    width: 32px; }\n.image.is-48x48 {\n    height: 48px;\n    width: 48px; }\n.image.is-64x64 {\n    height: 64px;\n    width: 64px; }\n.image.is-96x96 {\n    height: 96px;\n    width: 96px; }\n.image.is-128x128 {\n    height: 128px;\n    width: 128px; }\n.notification {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative; }\n.notification:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.notification a:not(.button) {\n    color: currentColor;\n    text-decoration: underline; }\n.notification strong {\n    color: currentColor; }\n.notification code,\n  .notification pre {\n    background: white; }\n.notification pre code {\n    background: transparent; }\n.notification > .delete {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem; }\n.notification .title,\n  .notification .subtitle,\n  .notification .content {\n    color: currentColor; }\n.notification.is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.notification.is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.notification.is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.notification.is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.notification.is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.notification.is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.notification.is-info {\n    background-color: #209cee;\n    color: #fff; }\n.notification.is-success {\n    background-color: #23d160;\n    color: #fff; }\n.notification.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.notification.is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%; }\n.progress:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.progress::-webkit-progress-bar {\n    background-color: #dbdbdb; }\n.progress::-webkit-progress-value {\n    background-color: #4a4a4a; }\n.progress::-moz-progress-bar {\n    background-color: #4a4a4a; }\n.progress::-ms-fill {\n    background-color: #4a4a4a;\n    border: none; }\n.progress.is-white::-webkit-progress-value {\n    background-color: white; }\n.progress.is-white::-moz-progress-bar {\n    background-color: white; }\n.progress.is-white::-ms-fill {\n    background-color: white; }\n.progress.is-black::-webkit-progress-value {\n    background-color: #0a0a0a; }\n.progress.is-black::-moz-progress-bar {\n    background-color: #0a0a0a; }\n.progress.is-black::-ms-fill {\n    background-color: #0a0a0a; }\n.progress.is-light::-webkit-progress-value {\n    background-color: whitesmoke; }\n.progress.is-light::-moz-progress-bar {\n    background-color: whitesmoke; }\n.progress.is-light::-ms-fill {\n    background-color: whitesmoke; }\n.progress.is-dark::-webkit-progress-value {\n    background-color: #363636; }\n.progress.is-dark::-moz-progress-bar {\n    background-color: #363636; }\n.progress.is-dark::-ms-fill {\n    background-color: #363636; }\n.progress.is-primary::-webkit-progress-value {\n    background-color: #00d1b2; }\n.progress.is-primary::-moz-progress-bar {\n    background-color: #00d1b2; }\n.progress.is-primary::-ms-fill {\n    background-color: #00d1b2; }\n.progress.is-link::-webkit-progress-value {\n    background-color: #3273dc; }\n.progress.is-link::-moz-progress-bar {\n    background-color: #3273dc; }\n.progress.is-link::-ms-fill {\n    background-color: #3273dc; }\n.progress.is-info::-webkit-progress-value {\n    background-color: #209cee; }\n.progress.is-info::-moz-progress-bar {\n    background-color: #209cee; }\n.progress.is-info::-ms-fill {\n    background-color: #209cee; }\n.progress.is-success::-webkit-progress-value {\n    background-color: #23d160; }\n.progress.is-success::-moz-progress-bar {\n    background-color: #23d160; }\n.progress.is-success::-ms-fill {\n    background-color: #23d160; }\n.progress.is-warning::-webkit-progress-value {\n    background-color: #ffdd57; }\n.progress.is-warning::-moz-progress-bar {\n    background-color: #ffdd57; }\n.progress.is-warning::-ms-fill {\n    background-color: #ffdd57; }\n.progress.is-danger::-webkit-progress-value {\n    background-color: #ff3860; }\n.progress.is-danger::-moz-progress-bar {\n    background-color: #ff3860; }\n.progress.is-danger::-ms-fill {\n    background-color: #ff3860; }\n.progress.is-small {\n    height: 0.75rem; }\n.progress.is-medium {\n    height: 1.25rem; }\n.progress.is-large {\n    height: 1.5rem; }\n.table {\n  background-color: white;\n  color: #363636;\n  margin-bottom: 1.5rem; }\n.table td,\n  .table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top; }\n.table td.is-white,\n    .table th.is-white {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a; }\n.table td.is-black,\n    .table th.is-black {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white; }\n.table td.is-light,\n    .table th.is-light {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636; }\n.table td.is-dark,\n    .table th.is-dark {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke; }\n.table td.is-primary,\n    .table th.is-primary {\n      background-color: #00d1b2;\n      border-color: #00d1b2;\n      color: #fff; }\n.table td.is-link,\n    .table th.is-link {\n      background-color: #3273dc;\n      border-color: #3273dc;\n      color: #fff; }\n.table td.is-info,\n    .table th.is-info {\n      background-color: #209cee;\n      border-color: #209cee;\n      color: #fff; }\n.table td.is-success,\n    .table th.is-success {\n      background-color: #23d160;\n      border-color: #23d160;\n      color: #fff; }\n.table td.is-warning,\n    .table th.is-warning {\n      background-color: #ffdd57;\n      border-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7); }\n.table td.is-danger,\n    .table th.is-danger {\n      background-color: #ff3860;\n      border-color: #ff3860;\n      color: #fff; }\n.table td.is-narrow,\n    .table th.is-narrow {\n      white-space: nowrap;\n      width: 1%; }\n.table td.is-selected,\n    .table th.is-selected {\n      background-color: #00d1b2;\n      color: #fff; }\n.table td.is-selected a,\n      .table td.is-selected strong,\n      .table th.is-selected a,\n      .table th.is-selected strong {\n        color: currentColor; }\n.table th {\n    color: #363636;\n    text-align: left; }\n.table tr.is-selected {\n    background-color: #00d1b2;\n    color: #fff; }\n.table tr.is-selected a,\n    .table tr.is-selected strong {\n      color: currentColor; }\n.table tr.is-selected td,\n    .table tr.is-selected th {\n      border-color: #fff;\n      color: currentColor; }\n.table thead td,\n  .table thead th {\n    border-width: 0 0 2px;\n    color: #363636; }\n.table tfoot td,\n  .table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636; }\n.table tbody tr:last-child td,\n  .table tbody tr:last-child th {\n    border-bottom-width: 0; }\n.table.is-bordered td,\n  .table.is-bordered th {\n    border-width: 1px; }\n.table.is-bordered tr:last-child td,\n  .table.is-bordered tr:last-child th {\n    border-bottom-width: 1px; }\n.table.is-fullwidth {\n    width: 100%; }\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n    background-color: #fafafa; }\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n    background-color: whitesmoke; }\n.table.is-narrow td,\n  .table.is-narrow th {\n    padding: 0.25em 0.5em; }\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n    background-color: #fafafa; }\n.tags {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.tags .tag {\n    margin-bottom: 0.5rem; }\n.tags .tag:not(:last-child) {\n      margin-right: 0.5rem; }\n.tags:last-child {\n    margin-bottom: -0.5rem; }\n.tags:not(:last-child) {\n    margin-bottom: 1rem; }\n.tags.has-addons .tag {\n    margin-right: 0; }\n.tags.has-addons .tag:not(:first-child) {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n.tags.has-addons .tag:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n.tags.is-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.tags.is-centered .tag {\n      margin-right: 0.25rem;\n      margin-left: 0.25rem; }\n.tags.is-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.tags.is-right .tag:not(:first-child) {\n      margin-left: 0.5rem; }\n.tags.is-right .tag:not(:last-child) {\n      margin-right: 0; }\n.tag:not(body) {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  border-radius: 3px;\n  color: #4a4a4a;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n.tag:not(body) .delete {\n    margin-left: 0.25em;\n    margin-right: -0.375em; }\n.tag:not(body).is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.tag:not(body).is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.tag:not(body).is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.tag:not(body).is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.tag:not(body).is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.tag:not(body).is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.tag:not(body).is-info {\n    background-color: #209cee;\n    color: #fff; }\n.tag:not(body).is-success {\n    background-color: #23d160;\n    color: #fff; }\n.tag:not(body).is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.tag:not(body).is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.tag:not(body).is-medium {\n    font-size: 1rem; }\n.tag:not(body).is-large {\n    font-size: 1.25rem; }\n.tag:not(body) .icon:first-child:not(:last-child) {\n    margin-left: -0.375em;\n    margin-right: 0.1875em; }\n.tag:not(body) .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: -0.375em; }\n.tag:not(body) .icon:first-child:last-child {\n    margin-left: -0.375em;\n    margin-right: -0.375em; }\n.tag:not(body).is-delete {\n    margin-left: 1px;\n    padding: 0;\n    position: relative;\n    width: 2em; }\n.tag:not(body).is-delete:before, .tag:not(body).is-delete:after {\n      background-color: currentColor;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n              transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      -webkit-transform-origin: center center;\n              transform-origin: center center; }\n.tag:not(body).is-delete:before {\n      height: 1px;\n      width: 50%; }\n.tag:not(body).is-delete:after {\n      height: 50%;\n      width: 1px; }\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n      background-color: #e8e8e8; }\n.tag:not(body).is-delete:active {\n      background-color: #dbdbdb; }\n.tag:not(body).is-rounded {\n    border-radius: 290486px; }\na.tag:hover {\n  text-decoration: underline; }\n.title,\n.subtitle {\n  word-break: break-word; }\n.title:not(:last-child),\n  .subtitle:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: inherit; }\n.title sub,\n  .subtitle sub {\n    font-size: 0.75em; }\n.title sup,\n  .subtitle sup {\n    font-size: 0.75em; }\n.title .tag,\n  .subtitle .tag {\n    vertical-align: middle; }\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n.title strong {\n    color: inherit;\n    font-weight: inherit; }\n.title + .highlight {\n    margin-top: -0.75rem; }\n.title:not(.is-spaced) + .subtitle {\n    margin-top: -1.5rem; }\n.title.is-1 {\n    font-size: 3rem; }\n.title.is-2 {\n    font-size: 2.5rem; }\n.title.is-3 {\n    font-size: 2rem; }\n.title.is-4 {\n    font-size: 1.5rem; }\n.title.is-5 {\n    font-size: 1.25rem; }\n.title.is-6 {\n    font-size: 1rem; }\n.title.is-7 {\n    font-size: 0.75rem; }\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n.subtitle strong {\n    color: #363636;\n    font-weight: 600; }\n.subtitle:not(.is-spaced) + .title {\n    margin-top: -1.5rem; }\n.subtitle.is-1 {\n    font-size: 3rem; }\n.subtitle.is-2 {\n    font-size: 2.5rem; }\n.subtitle.is-3 {\n    font-size: 2rem; }\n.subtitle.is-4 {\n    font-size: 1.5rem; }\n.subtitle.is-5 {\n    font-size: 1.25rem; }\n.subtitle.is-6 {\n    font-size: 1rem; }\n.subtitle.is-7 {\n    font-size: 0.75rem; }\n.block:not(:last-child) {\n  margin-bottom: 1.5rem; }\n.delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px; }\n.delete:before, .delete:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n            transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n.delete:before {\n    height: 2px;\n    width: 50%; }\n.delete:after {\n    height: 50%;\n    width: 2px; }\n.delete:hover, .delete:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n.delete:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n.delete.is-small {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n.delete.is-medium {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px; }\n.delete.is-large {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; }\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0; }\n.highlight:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.highlight pre {\n    overflow: auto;\n    max-width: 100%; }\n.loader {\n  -webkit-animation: spinAround 500ms infinite linear;\n          animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n.number {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top; }\n.breadcrumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n.breadcrumb:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.breadcrumb a {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #3273dc;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0.5em 0.75em; }\n.breadcrumb a:hover {\n      color: #363636; }\n.breadcrumb li {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.breadcrumb li:first-child a {\n      padding-left: 0; }\n.breadcrumb li.is-active a {\n      color: #363636;\n      cursor: default;\n      pointer-events: none; }\n.breadcrumb li + li::before {\n      color: #4a4a4a;\n      content: \"\\0002f\"; }\n.breadcrumb ul, .breadcrumb ol {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n.breadcrumb .icon:first-child {\n    margin-right: 0.5em; }\n.breadcrumb .icon:last-child {\n    margin-left: 0.5em; }\n.breadcrumb.is-centered ol, .breadcrumb.is-centered ul {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.breadcrumb.is-right ol, .breadcrumb.is-right ul {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.breadcrumb.is-small {\n    font-size: 0.75rem; }\n.breadcrumb.is-medium {\n    font-size: 1.25rem; }\n.breadcrumb.is-large {\n    font-size: 1.5rem; }\n.breadcrumb.has-arrow-separator li + li::before {\n    content: \"\\02192\"; }\n.breadcrumb.has-bullet-separator li + li::before {\n    content: \"\\02022\"; }\n.breadcrumb.has-dot-separator li + li::before {\n    content: \"\\000b7\"; }\n.breadcrumb.has-succeeds-separator li + li::before {\n    content: \"\\0227B\"; }\n.card {\n  background-color: white;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative; }\n.card-header {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.card-header-title {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #363636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem; }\n.card-header-title.is-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.card-header-icon {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem; }\n.card-image {\n  display: block;\n  position: relative; }\n.card-content {\n  padding: 1.5rem; }\n.card-footer {\n  border-top: 1px solid #dbdbdb;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.card-footer-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem; }\n.card-footer-item:not(:last-child) {\n    border-right: 1px solid #dbdbdb; }\n.card .media:not(:last-child) {\n  margin-bottom: 0.75rem; }\n.dropdown {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n  vertical-align: top; }\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n    display: block; }\n.dropdown.is-right .dropdown-menu {\n    left: auto;\n    right: 0; }\n.dropdown.is-up .dropdown-menu {\n    bottom: 100%;\n    padding-bottom: 4px;\n    padding-top: unset;\n    top: auto; }\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20; }\n.dropdown-content {\n  background-color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative; }\na.dropdown-item {\n  padding-right: 3rem;\n  white-space: nowrap; }\na.dropdown-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a; }\na.dropdown-item.is-active {\n    background-color: #3273dc;\n    color: #fff; }\n.dropdown-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0; }\n.level {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.level:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.level code {\n    border-radius: 3px; }\n.level img {\n    display: inline-block;\n    vertical-align: top; }\n.level.is-mobile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.level.is-mobile .level-left,\n    .level.is-mobile .level-right {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.level.is-mobile .level-left + .level-right {\n      margin-top: 0; }\n.level.is-mobile .level-item {\n      margin-right: 0.75rem; }\n.level.is-mobile .level-item:not(:last-child) {\n        margin-bottom: 0; }\n.level.is-mobile .level-item:not(.is-narrow) {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n@media screen and (min-width: 769px), print {\n    .level {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .level > .level-item:not(.is-narrow) {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; } }\n.level-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.level-item .title,\n  .level-item .subtitle {\n    margin-bottom: 0; }\n@media screen and (max-width: 768px) {\n    .level-item:not(:last-child) {\n      margin-bottom: 0.75rem; } }\n.level-left,\n.level-right {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n.level-left .level-item.is-flexible,\n  .level-right .level-item.is-flexible {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n@media screen and (min-width: 769px), print {\n    .level-left .level-item:not(:last-child),\n    .level-right .level-item:not(:last-child) {\n      margin-right: 0.75rem; } }\n.level-left {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n@media screen and (max-width: 768px) {\n    .level-left + .level-right {\n      margin-top: 1.5rem; } }\n@media screen and (min-width: 769px), print {\n    .level-left {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n.level-right {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n@media screen and (min-width: 769px), print {\n    .level-right {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n.media {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left; }\n.media .content:not(:last-child) {\n    margin-bottom: 0.75rem; }\n.media .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-top: 0.75rem; }\n.media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 0.5rem; }\n.media .media .media {\n      padding-top: 0.5rem; }\n.media .media .media + .media {\n        margin-top: 0.5rem; }\n.media + .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem; }\n.media.is-large + .media {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem; }\n.media-left,\n.media-right {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n.media-left {\n  margin-right: 1rem; }\n.media-right {\n  margin-left: 1rem; }\n.media-content {\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  overflow: auto;\n  text-align: left; }\n.menu {\n  font-size: 1rem; }\n.menu.is-small {\n    font-size: 0.75rem; }\n.menu.is-medium {\n    font-size: 1.25rem; }\n.menu.is-large {\n    font-size: 1.5rem; }\n.menu-list {\n  line-height: 1.25; }\n.menu-list a {\n    border-radius: 2px;\n    color: #4a4a4a;\n    display: block;\n    padding: 0.5em 0.75em; }\n.menu-list a:hover {\n      background-color: whitesmoke;\n      color: #363636; }\n.menu-list a.is-active {\n      background-color: #3273dc;\n      color: #fff; }\n.menu-list li ul {\n    border-left: 1px solid #dbdbdb;\n    margin: 0.75em;\n    padding-left: 0.75em; }\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase; }\n.menu-label:not(:first-child) {\n    margin-top: 1em; }\n.menu-label:not(:last-child) {\n    margin-bottom: 1em; }\n.message {\n  background-color: whitesmoke;\n  border-radius: 3px;\n  font-size: 1rem; }\n.message:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.message strong {\n    color: currentColor; }\n.message a:not(.button):not(.tag) {\n    color: currentColor;\n    text-decoration: underline; }\n.message.is-small {\n    font-size: 0.75rem; }\n.message.is-medium {\n    font-size: 1.25rem; }\n.message.is-large {\n    font-size: 1.5rem; }\n.message.is-white {\n    background-color: white; }\n.message.is-white .message-header {\n      background-color: white;\n      color: #0a0a0a; }\n.message.is-white .message-body {\n      border-color: white;\n      color: #4d4c4c; }\n.message.is-black {\n    background-color: #fafafa; }\n.message.is-black .message-header {\n      background-color: #0a0a0a;\n      color: white; }\n.message.is-black .message-body {\n      border-color: #0a0a0a;\n      color: #090909; }\n.message.is-light {\n    background-color: #fafafa; }\n.message.is-light .message-header {\n      background-color: whitesmoke;\n      color: #363636; }\n.message.is-light .message-body {\n      border-color: whitesmoke;\n      color: #505050; }\n.message.is-dark {\n    background-color: #fafafa; }\n.message.is-dark .message-header {\n      background-color: #363636;\n      color: whitesmoke; }\n.message.is-dark .message-body {\n      border-color: #363636;\n      color: #2a2a2a; }\n.message.is-primary {\n    background-color: #f5fffd; }\n.message.is-primary .message-header {\n      background-color: #00d1b2;\n      color: #fff; }\n.message.is-primary .message-body {\n      border-color: #00d1b2;\n      color: #021310; }\n.message.is-link {\n    background-color: #f6f9fe; }\n.message.is-link .message-header {\n      background-color: #3273dc;\n      color: #fff; }\n.message.is-link .message-body {\n      border-color: #3273dc;\n      color: #22509a; }\n.message.is-info {\n    background-color: #f6fbfe; }\n.message.is-info .message-header {\n      background-color: #209cee;\n      color: #fff; }\n.message.is-info .message-body {\n      border-color: #209cee;\n      color: #12537e; }\n.message.is-success {\n    background-color: #f6fef9; }\n.message.is-success .message-header {\n      background-color: #23d160;\n      color: #fff; }\n.message.is-success .message-body {\n      border-color: #23d160;\n      color: #0e301a; }\n.message.is-warning {\n    background-color: #fffdf5; }\n.message.is-warning .message-header {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7); }\n.message.is-warning .message-body {\n      border-color: #ffdd57;\n      color: #3b3108; }\n.message.is-danger {\n    background-color: #fff5f7; }\n.message.is-danger .message-header {\n      background-color: #ff3860;\n      color: #fff; }\n.message.is-danger .message-body {\n      border-color: #ff3860;\n      color: #cd0930; }\n.message-header {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 3px 3px 0 0;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n  position: relative; }\n.message-header .delete {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    margin-left: 0.75em; }\n.message-header + .message-body {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top: none; }\n.message-body {\n  border: 1px solid #dbdbdb;\n  border-radius: 3px;\n  color: #4a4a4a;\n  padding: 1em 1.25em; }\n.message-body code,\n  .message-body pre {\n    background-color: white; }\n.message-body pre code {\n    background-color: transparent; }\n.modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40; }\n.modal.is-active {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.modal-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: rgba(10, 10, 10, 0.86); }\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%; }\n@media screen and (min-width: 769px), print {\n    .modal-content,\n    .modal-card {\n      margin: 0 auto;\n      max-height: calc(100vh - 40px);\n      width: 640px; } }\n.modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px; }\n.modal-close:before, .modal-close:after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n            transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n.modal-close:before {\n    height: 2px;\n    width: 50%; }\n.modal-close:after {\n    height: 50%;\n    width: 2px; }\n.modal-close:hover, .modal-close:focus {\n    background-color: rgba(10, 10, 10, 0.3); }\n.modal-close:active {\n    background-color: rgba(10, 10, 10, 0.4); }\n.modal-close.is-small {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px; }\n.modal-close.is-medium {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px; }\n.modal-close.is-large {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px; }\n.modal-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden; }\n.modal-card-head,\n.modal-card-foot {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: whitesmoke;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 20px;\n  position: relative; }\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n.modal-card-title {\n  color: #363636;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1; }\n.modal-card-foot {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top: 1px solid #dbdbdb; }\n.modal-card-foot .button:not(:last-child) {\n    margin-right: 10px; }\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  overflow: auto;\n  padding: 20px; }\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative; }\n.navbar.is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.navbar.is-white .navbar-brand > .navbar-item,\n    .navbar.is-white .navbar-brand .navbar-link {\n      color: #0a0a0a; }\n.navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-white .navbar-brand .navbar-link:hover,\n    .navbar.is-white .navbar-brand .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a; }\n.navbar.is-white .navbar-brand .navbar-link::after {\n      border-color: #0a0a0a; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-white .navbar-start > .navbar-item,\n      .navbar.is-white .navbar-start .navbar-link,\n      .navbar.is-white .navbar-end > .navbar-item,\n      .navbar.is-white .navbar-end .navbar-link {\n        color: #0a0a0a; }\n      .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n      .navbar.is-white .navbar-start .navbar-link:hover,\n      .navbar.is-white .navbar-start .navbar-link.is-active,\n      .navbar.is-white .navbar-end > a.navbar-item:hover,\n      .navbar.is-white .navbar-end > a.navbar-item.is-active,\n      .navbar.is-white .navbar-end .navbar-link:hover,\n      .navbar.is-white .navbar-end .navbar-link.is-active {\n        background-color: #f2f2f2;\n        color: #0a0a0a; }\n      .navbar.is-white .navbar-start .navbar-link::after,\n      .navbar.is-white .navbar-end .navbar-link::after {\n        border-color: #0a0a0a; }\n      .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #f2f2f2;\n        color: #0a0a0a; }\n      .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n        background-color: white;\n        color: #0a0a0a; } }\n.navbar.is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.navbar.is-black .navbar-brand > .navbar-item,\n    .navbar.is-black .navbar-brand .navbar-link {\n      color: white; }\n.navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-black .navbar-brand .navbar-link:hover,\n    .navbar.is-black .navbar-brand .navbar-link.is-active {\n      background-color: black;\n      color: white; }\n.navbar.is-black .navbar-brand .navbar-link::after {\n      border-color: white; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-black .navbar-start > .navbar-item,\n      .navbar.is-black .navbar-start .navbar-link,\n      .navbar.is-black .navbar-end > .navbar-item,\n      .navbar.is-black .navbar-end .navbar-link {\n        color: white; }\n      .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n      .navbar.is-black .navbar-start .navbar-link:hover,\n      .navbar.is-black .navbar-start .navbar-link.is-active,\n      .navbar.is-black .navbar-end > a.navbar-item:hover,\n      .navbar.is-black .navbar-end > a.navbar-item.is-active,\n      .navbar.is-black .navbar-end .navbar-link:hover,\n      .navbar.is-black .navbar-end .navbar-link.is-active {\n        background-color: black;\n        color: white; }\n      .navbar.is-black .navbar-start .navbar-link::after,\n      .navbar.is-black .navbar-end .navbar-link::after {\n        border-color: white; }\n      .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: black;\n        color: white; }\n      .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n        background-color: #0a0a0a;\n        color: white; } }\n.navbar.is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.navbar.is-light .navbar-brand > .navbar-item,\n    .navbar.is-light .navbar-brand .navbar-link {\n      color: #363636; }\n.navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-light .navbar-brand .navbar-link:hover,\n    .navbar.is-light .navbar-brand .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n.navbar.is-light .navbar-brand .navbar-link::after {\n      border-color: #363636; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-light .navbar-start > .navbar-item,\n      .navbar.is-light .navbar-start .navbar-link,\n      .navbar.is-light .navbar-end > .navbar-item,\n      .navbar.is-light .navbar-end .navbar-link {\n        color: #363636; }\n      .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n      .navbar.is-light .navbar-start .navbar-link:hover,\n      .navbar.is-light .navbar-start .navbar-link.is-active,\n      .navbar.is-light .navbar-end > a.navbar-item:hover,\n      .navbar.is-light .navbar-end > a.navbar-item.is-active,\n      .navbar.is-light .navbar-end .navbar-link:hover,\n      .navbar.is-light .navbar-end .navbar-link.is-active {\n        background-color: #e8e8e8;\n        color: #363636; }\n      .navbar.is-light .navbar-start .navbar-link::after,\n      .navbar.is-light .navbar-end .navbar-link::after {\n        border-color: #363636; }\n      .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #e8e8e8;\n        color: #363636; }\n      .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #363636; } }\n.navbar.is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.navbar.is-dark .navbar-brand > .navbar-item,\n    .navbar.is-dark .navbar-brand .navbar-link {\n      color: whitesmoke; }\n.navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-dark .navbar-brand .navbar-link:hover,\n    .navbar.is-dark .navbar-brand .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke; }\n.navbar.is-dark .navbar-brand .navbar-link::after {\n      border-color: whitesmoke; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-dark .navbar-start > .navbar-item,\n      .navbar.is-dark .navbar-start .navbar-link,\n      .navbar.is-dark .navbar-end > .navbar-item,\n      .navbar.is-dark .navbar-end .navbar-link {\n        color: whitesmoke; }\n      .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-start .navbar-link:hover,\n      .navbar.is-dark .navbar-start .navbar-link.is-active,\n      .navbar.is-dark .navbar-end > a.navbar-item:hover,\n      .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-end .navbar-link:hover,\n      .navbar.is-dark .navbar-end .navbar-link.is-active {\n        background-color: #292929;\n        color: whitesmoke; }\n      .navbar.is-dark .navbar-start .navbar-link::after,\n      .navbar.is-dark .navbar-end .navbar-link::after {\n        border-color: whitesmoke; }\n      .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #292929;\n        color: whitesmoke; }\n      .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n        background-color: #363636;\n        color: whitesmoke; } }\n.navbar.is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.navbar.is-primary .navbar-brand > .navbar-item,\n    .navbar.is-primary .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-primary .navbar-brand .navbar-link:hover,\n    .navbar.is-primary .navbar-brand .navbar-link.is-active {\n      background-color: #00b89c;\n      color: #fff; }\n.navbar.is-primary .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-primary .navbar-start > .navbar-item,\n      .navbar.is-primary .navbar-start .navbar-link,\n      .navbar.is-primary .navbar-end > .navbar-item,\n      .navbar.is-primary .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-start .navbar-link:hover,\n      .navbar.is-primary .navbar-start .navbar-link.is-active,\n      .navbar.is-primary .navbar-end > a.navbar-item:hover,\n      .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-end .navbar-link:hover,\n      .navbar.is-primary .navbar-end .navbar-link.is-active {\n        background-color: #00b89c;\n        color: #fff; }\n      .navbar.is-primary .navbar-start .navbar-link::after,\n      .navbar.is-primary .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #00b89c;\n        color: #fff; }\n      .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n        background-color: #00d1b2;\n        color: #fff; } }\n.navbar.is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.navbar.is-link .navbar-brand > .navbar-item,\n    .navbar.is-link .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-link .navbar-brand .navbar-link:hover,\n    .navbar.is-link .navbar-brand .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff; }\n.navbar.is-link .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-link .navbar-start > .navbar-item,\n      .navbar.is-link .navbar-start .navbar-link,\n      .navbar.is-link .navbar-end > .navbar-item,\n      .navbar.is-link .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n      .navbar.is-link .navbar-start .navbar-link:hover,\n      .navbar.is-link .navbar-start .navbar-link.is-active,\n      .navbar.is-link .navbar-end > a.navbar-item:hover,\n      .navbar.is-link .navbar-end > a.navbar-item.is-active,\n      .navbar.is-link .navbar-end .navbar-link:hover,\n      .navbar.is-link .navbar-end .navbar-link.is-active {\n        background-color: #2366d1;\n        color: #fff; }\n      .navbar.is-link .navbar-start .navbar-link::after,\n      .navbar.is-link .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #2366d1;\n        color: #fff; }\n      .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n        background-color: #3273dc;\n        color: #fff; } }\n.navbar.is-info {\n    background-color: #209cee;\n    color: #fff; }\n.navbar.is-info .navbar-brand > .navbar-item,\n    .navbar.is-info .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-info .navbar-brand .navbar-link:hover,\n    .navbar.is-info .navbar-brand .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff; }\n.navbar.is-info .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-info .navbar-start > .navbar-item,\n      .navbar.is-info .navbar-start .navbar-link,\n      .navbar.is-info .navbar-end > .navbar-item,\n      .navbar.is-info .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n      .navbar.is-info .navbar-start .navbar-link:hover,\n      .navbar.is-info .navbar-start .navbar-link.is-active,\n      .navbar.is-info .navbar-end > a.navbar-item:hover,\n      .navbar.is-info .navbar-end > a.navbar-item.is-active,\n      .navbar.is-info .navbar-end .navbar-link:hover,\n      .navbar.is-info .navbar-end .navbar-link.is-active {\n        background-color: #118fe4;\n        color: #fff; }\n      .navbar.is-info .navbar-start .navbar-link::after,\n      .navbar.is-info .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #118fe4;\n        color: #fff; }\n      .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n        background-color: #209cee;\n        color: #fff; } }\n.navbar.is-success {\n    background-color: #23d160;\n    color: #fff; }\n.navbar.is-success .navbar-brand > .navbar-item,\n    .navbar.is-success .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-success .navbar-brand .navbar-link:hover,\n    .navbar.is-success .navbar-brand .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff; }\n.navbar.is-success .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-success .navbar-start > .navbar-item,\n      .navbar.is-success .navbar-start .navbar-link,\n      .navbar.is-success .navbar-end > .navbar-item,\n      .navbar.is-success .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n      .navbar.is-success .navbar-start .navbar-link:hover,\n      .navbar.is-success .navbar-start .navbar-link.is-active,\n      .navbar.is-success .navbar-end > a.navbar-item:hover,\n      .navbar.is-success .navbar-end > a.navbar-item.is-active,\n      .navbar.is-success .navbar-end .navbar-link:hover,\n      .navbar.is-success .navbar-end .navbar-link.is-active {\n        background-color: #20bc56;\n        color: #fff; }\n      .navbar.is-success .navbar-start .navbar-link::after,\n      .navbar.is-success .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #20bc56;\n        color: #fff; }\n      .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n        background-color: #23d160;\n        color: #fff; } }\n.navbar.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-brand > .navbar-item,\n    .navbar.is-warning .navbar-brand .navbar-link {\n      color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-warning .navbar-brand .navbar-link:hover,\n    .navbar.is-warning .navbar-brand .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7); }\n.navbar.is-warning .navbar-brand .navbar-link::after {\n      border-color: rgba(0, 0, 0, 0.7); }\n@media screen and (min-width: 1024px) {\n      .navbar.is-warning .navbar-start > .navbar-item,\n      .navbar.is-warning .navbar-start .navbar-link,\n      .navbar.is-warning .navbar-end > .navbar-item,\n      .navbar.is-warning .navbar-end .navbar-link {\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-start .navbar-link:hover,\n      .navbar.is-warning .navbar-start .navbar-link.is-active,\n      .navbar.is-warning .navbar-end > a.navbar-item:hover,\n      .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-end .navbar-link:hover,\n      .navbar.is-warning .navbar-end .navbar-link.is-active {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-start .navbar-link::after,\n      .navbar.is-warning .navbar-end .navbar-link::after {\n        border-color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7); }\n      .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7); } }\n.navbar.is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.navbar.is-danger .navbar-brand > .navbar-item,\n    .navbar.is-danger .navbar-brand .navbar-link {\n      color: #fff; }\n.navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-danger .navbar-brand .navbar-link:hover,\n    .navbar.is-danger .navbar-brand .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff; }\n.navbar.is-danger .navbar-brand .navbar-link::after {\n      border-color: #fff; }\n@media screen and (min-width: 1024px) {\n      .navbar.is-danger .navbar-start > .navbar-item,\n      .navbar.is-danger .navbar-start .navbar-link,\n      .navbar.is-danger .navbar-end > .navbar-item,\n      .navbar.is-danger .navbar-end .navbar-link {\n        color: #fff; }\n      .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-start .navbar-link:hover,\n      .navbar.is-danger .navbar-start .navbar-link.is-active,\n      .navbar.is-danger .navbar-end > a.navbar-item:hover,\n      .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-end .navbar-link:hover,\n      .navbar.is-danger .navbar-end .navbar-link.is-active {\n        background-color: #ff1f4b;\n        color: #fff; }\n      .navbar.is-danger .navbar-start .navbar-link::after,\n      .navbar.is-danger .navbar-end .navbar-link::after {\n        border-color: #fff; }\n      .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ff1f4b;\n        color: #fff; }\n      .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ff3860;\n        color: #fff; } }\n.navbar > .container {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%; }\n.navbar.has-shadow {\n    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1); }\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n.navbar.is-fixed-bottom {\n    bottom: 0; }\n.navbar.is-fixed-bottom.has-shadow {\n      -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n              box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n.navbar.is-fixed-top {\n    top: 0; }\nhtml.has-navbar-fixed-top {\n  padding-top: 3.25rem; }\nhtml.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem; }\n.navbar-brand,\n.navbar-tabs {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  min-height: 3.25rem; }\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden; }\n.navbar-burger {\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto; }\n.navbar-burger span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    -webkit-transition-duration: 86ms;\n            transition-duration: 86ms;\n    -webkit-transition-property: background-color, opacity, -webkit-transform;\n    transition-property: background-color, opacity, -webkit-transform;\n    transition-property: background-color, opacity, transform;\n    transition-property: background-color, opacity, transform, -webkit-transform;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    width: 16px; }\n.navbar-burger span:nth-child(1) {\n      top: calc(50% - 6px); }\n.navbar-burger span:nth-child(2) {\n      top: calc(50% - 1px); }\n.navbar-burger span:nth-child(3) {\n      top: calc(50% + 4px); }\n.navbar-burger:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n.navbar-burger.is-active span:nth-child(1) {\n    -webkit-transform: translateY(5px) rotate(45deg);\n            transform: translateY(5px) rotate(45deg); }\n.navbar-burger.is-active span:nth-child(2) {\n    opacity: 0; }\n.navbar-burger.is-active span:nth-child(3) {\n    -webkit-transform: translateY(-5px) rotate(-45deg);\n            transform: translateY(-5px) rotate(-45deg); }\n.navbar-menu {\n  display: none; }\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 1rem;\n  position: relative; }\na.navbar-item:hover, a.navbar-item.is-active,\na.navbar-link:hover,\na.navbar-link.is-active {\n  background-color: whitesmoke;\n  color: #3273dc; }\n.navbar-item {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n.navbar-item img {\n    max-height: 1.75rem; }\n.navbar-item.has-dropdown {\n    padding: 0; }\n.navbar-item.is-expanded {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1; }\n.navbar-item.is-tab {\n    border-bottom: 1px solid transparent;\n    min-height: 3.25rem;\n    padding-bottom: calc(0.5rem - 1px); }\n.navbar-item.is-tab:hover {\n      background-color: transparent;\n      border-bottom-color: #3273dc; }\n.navbar-item.is-tab.is-active {\n      background-color: transparent;\n      border-bottom-color: #3273dc;\n      border-bottom-style: solid;\n      border-bottom-width: 3px;\n      color: #3273dc;\n      padding-bottom: calc(0.5rem - 3px); }\n.navbar-content {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1; }\n.navbar-link {\n  padding-right: 2.5em; }\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n.navbar-dropdown .navbar-item {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n.navbar-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: none;\n  height: 1px;\n  margin: 0.5rem 0; }\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block; }\n  .navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .navbar-menu {\n    background-color: white;\n    -webkit-box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0; }\n    .navbar-menu.is-active {\n      display: block; }\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0; }\n    .navbar.is-fixed-bottom-touch.has-shadow {\n      -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n              box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n  .navbar.is-fixed-top-touch {\n    top: 0; }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto; }\n  html.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem; }\n  html.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem; } }\n@media screen and (min-width: 1024px) {\n  .navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .navbar {\n    min-height: 3.25rem; }\n    .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n    .navbar.is-transparent a.navbar-link:hover,\n    .navbar.is-transparent a.navbar-link.is-active {\n      background-color: transparent !important; }\n    .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n      background-color: transparent !important; }\n    .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n      background-color: whitesmoke;\n      color: #0a0a0a; }\n    .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n      background-color: whitesmoke;\n      color: #3273dc; }\n  .navbar-burger {\n    display: none; }\n  .navbar-item,\n  .navbar-link {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .navbar-item.has-dropdown {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    -webkit-transform: rotate(135deg) translate(0.25em, -0.25em);\n            transform: rotate(135deg) translate(0.25em, -0.25em); }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 1px solid #dbdbdb;\n    border-radius: 5px 5px 0 0;\n    border-top: none;\n    bottom: 100%;\n    -webkit-box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto; }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block; }\n    .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n      opacity: 1;\n      pointer-events: auto;\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n  .navbar-link::after {\n    border: 1px solid #3273dc;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.5em;\n    pointer-events: none;\n    position: absolute;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    width: 0.5em;\n    margin-top: -0.375em;\n    right: 1.125em;\n    top: 50%; }\n  .navbar-menu {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n  .navbar-start {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-right: auto; }\n  .navbar-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-left: auto; }\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-top: 1px solid #dbdbdb;\n    -webkit-box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n            box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20; }\n    .navbar-dropdown .navbar-item {\n      padding: 0.375rem 1rem;\n      white-space: nowrap; }\n    .navbar-dropdown a.navbar-item {\n      padding-right: 3rem; }\n      .navbar-dropdown a.navbar-item:hover {\n        background-color: whitesmoke;\n        color: #0a0a0a; }\n      .navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #3273dc; }\n    .navbar-dropdown.is-boxed {\n      border-radius: 5px;\n      border-top: none;\n      -webkit-box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n              box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n      display: block;\n      opacity: 0;\n      pointer-events: none;\n      top: calc(100% + (-4px));\n      -webkit-transform: translateY(-5px);\n              transform: translateY(-5px);\n      -webkit-transition-duration: 86ms;\n              transition-duration: 86ms;\n      -webkit-transition-property: opacity, -webkit-transform;\n      transition-property: opacity, -webkit-transform;\n      transition-property: opacity, transform;\n      transition-property: opacity, transform, -webkit-transform; }\n    .navbar-dropdown.is-right {\n      left: auto;\n      right: 0; }\n  .navbar-divider {\n    display: block; }\n  .navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -1rem; }\n  .navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -1rem; }\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30; }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0; }\n    .navbar.is-fixed-bottom-desktop.has-shadow {\n      -webkit-box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n              box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1); }\n  .navbar.is-fixed-top-desktop {\n    top: 0; }\n  html.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem; }\n  html.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem; }\n  a.navbar-item.is-active,\n  a.navbar-link.is-active {\n    color: #0a0a0a; }\n  a.navbar-item.is-active:not(:hover),\n  a.navbar-link.is-active:not(:hover) {\n    background-color: transparent; }\n  .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: whitesmoke; } }\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem; }\n.pagination.is-small {\n    font-size: 0.75rem; }\n.pagination.is-medium {\n    font-size: 1.25rem; }\n.pagination.is-large {\n    font-size: 1.5rem; }\n.pagination.is-rounded .pagination-previous,\n  .pagination.is-rounded .pagination-next {\n    padding-left: 1em;\n    padding-right: 1em;\n    border-radius: 290486px; }\n.pagination.is-rounded .pagination-link {\n    border-radius: 290486px; }\n.pagination,\n.pagination-list {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center; }\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0.25rem;\n  text-align: center; }\n.pagination-previous:focus, .pagination-previous.is-focused, .pagination-previous:active, .pagination-previous.is-active,\n  .pagination-next:focus,\n  .pagination-next.is-focused,\n  .pagination-next:active,\n  .pagination-next.is-active,\n  .pagination-link:focus,\n  .pagination-link.is-focused,\n  .pagination-link:active,\n  .pagination-link.is-active,\n  .pagination-ellipsis:focus,\n  .pagination-ellipsis.is-focused,\n  .pagination-ellipsis:active,\n  .pagination-ellipsis.is-active {\n    outline: none; }\n.pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled],\n  .pagination-ellipsis[disabled] {\n    cursor: not-allowed; }\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.25em; }\n.pagination-previous:hover,\n  .pagination-next:hover,\n  .pagination-link:hover {\n    border-color: #b5b5b5;\n    color: #363636; }\n.pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus {\n    border-color: #3273dc; }\n.pagination-previous:active,\n  .pagination-next:active,\n  .pagination-link:active {\n    -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n            box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2); }\n.pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled] {\n    background-color: #dbdbdb;\n    border-color: #dbdbdb;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #7a7a7a;\n    opacity: 0.5; }\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap; }\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff; }\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none; }\n.pagination-list {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n@media screen and (max-width: 768px) {\n  .pagination {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .pagination-previous,\n  .pagination-next {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1; }\n  .pagination-list li {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1; } }\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .pagination-previous {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .pagination-next {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .pagination {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .pagination.is-centered .pagination-previous {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .pagination.is-centered .pagination-list {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .pagination.is-centered .pagination-next {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .pagination.is-right .pagination-previous {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .pagination.is-right .pagination-next {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .pagination.is-right .pagination-list {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; } }\n.panel {\n  font-size: 1rem; }\n.panel:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb; }\n.panel-heading:first-child,\n  .panel-tabs:first-child,\n  .panel-block:first-child {\n    border-top: 1px solid #dbdbdb; }\n.panel-heading {\n  background-color: whitesmoke;\n  border-radius: 3px 3px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em; }\n.panel-tabs {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.875em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.panel-tabs a {\n    border-bottom: 1px solid #dbdbdb;\n    margin-bottom: -1px;\n    padding: 0.5em; }\n.panel-tabs a.is-active {\n      border-bottom-color: #4a4a4a;\n      color: #363636; }\n.panel-list a {\n  color: #4a4a4a; }\n.panel-list a:hover {\n    color: #3273dc; }\n.panel-block {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #363636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 0.5em 0.75em; }\n.panel-block input[type=\"checkbox\"] {\n    margin-right: 0.75em; }\n.panel-block > .control {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    width: 100%; }\n.panel-block.is-wrapped {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n.panel-block.is-active {\n    border-left-color: #3273dc;\n    color: #363636; }\n.panel-block.is-active .panel-icon {\n      color: #3273dc; }\na.panel-block,\nlabel.panel-block {\n  cursor: pointer; }\na.panel-block:hover,\n  label.panel-block:hover {\n    background-color: whitesmoke; }\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em; }\n.panel-icon .fa {\n    font-size: inherit;\n    line-height: inherit; }\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n.tabs:not(:last-child) {\n    margin-bottom: 1.5rem; }\n.tabs a {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    color: #4a4a4a;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-bottom: -1px;\n    padding: 0.5em 1em;\n    vertical-align: top; }\n.tabs a:hover {\n      border-bottom-color: #363636;\n      color: #363636; }\n.tabs li {\n    display: block; }\n.tabs li.is-active a {\n      border-bottom-color: #3273dc;\n      color: #3273dc; }\n.tabs ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n.tabs ul.is-left {\n      padding-right: 0.75em; }\n.tabs ul.is-center {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding-left: 0.75em;\n      padding-right: 0.75em; }\n.tabs ul.is-right {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      padding-left: 0.75em; }\n.tabs .icon:first-child {\n    margin-right: 0.5em; }\n.tabs .icon:last-child {\n    margin-left: 0.5em; }\n.tabs.is-centered ul {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.tabs.is-right ul {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.tabs.is-boxed a {\n    border: 1px solid transparent;\n    border-radius: 3px 3px 0 0; }\n.tabs.is-boxed a:hover {\n      background-color: whitesmoke;\n      border-bottom-color: #dbdbdb; }\n.tabs.is-boxed li.is-active a {\n    background-color: white;\n    border-color: #dbdbdb;\n    border-bottom-color: transparent !important; }\n.tabs.is-fullwidth li {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n.tabs.is-toggle a {\n    border-color: #dbdbdb;\n    border-style: solid;\n    border-width: 1px;\n    margin-bottom: 0;\n    position: relative; }\n.tabs.is-toggle a:hover {\n      background-color: whitesmoke;\n      border-color: #b5b5b5;\n      z-index: 2; }\n.tabs.is-toggle li + li {\n    margin-left: -1px; }\n.tabs.is-toggle li:first-child a {\n    border-radius: 3px 0 0 3px; }\n.tabs.is-toggle li:last-child a {\n    border-radius: 0 3px 3px 0; }\n.tabs.is-toggle li.is-active a {\n    background-color: #3273dc;\n    border-color: #3273dc;\n    color: #fff;\n    z-index: 1; }\n.tabs.is-toggle ul {\n    border-bottom: none; }\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n    border-bottom-left-radius: 290486px;\n    border-top-left-radius: 290486px;\n    padding-left: 1.25em; }\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n    border-bottom-right-radius: 290486px;\n    border-top-right-radius: 290486px;\n    padding-right: 1.25em; }\n.tabs.is-small {\n    font-size: 0.75rem; }\n.tabs.is-medium {\n    font-size: 1.25rem; }\n.tabs.is-large {\n    font-size: 1.5rem; }\n.column {\n  display: block;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  padding: 0.75rem; }\n.columns.is-mobile > .column.is-narrow {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none; }\n.columns.is-mobile > .column.is-full {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%; }\n.columns.is-mobile > .column.is-three-quarters {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%; }\n.columns.is-mobile > .column.is-two-thirds {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.6666%; }\n.columns.is-mobile > .column.is-half {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%; }\n.columns.is-mobile > .column.is-one-third {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.3333%; }\n.columns.is-mobile > .column.is-one-quarter {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%; }\n.columns.is-mobile > .column.is-one-fifth {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 20%; }\n.columns.is-mobile > .column.is-two-fifths {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 40%; }\n.columns.is-mobile > .column.is-three-fifths {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 60%; }\n.columns.is-mobile > .column.is-four-fifths {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 80%; }\n.columns.is-mobile > .column.is-offset-three-quarters {\n    margin-left: 75%; }\n.columns.is-mobile > .column.is-offset-two-thirds {\n    margin-left: 66.6666%; }\n.columns.is-mobile > .column.is-offset-half {\n    margin-left: 50%; }\n.columns.is-mobile > .column.is-offset-one-third {\n    margin-left: 33.3333%; }\n.columns.is-mobile > .column.is-offset-one-quarter {\n    margin-left: 25%; }\n.columns.is-mobile > .column.is-offset-one-fifth {\n    margin-left: 20%; }\n.columns.is-mobile > .column.is-offset-two-fifths {\n    margin-left: 40%; }\n.columns.is-mobile > .column.is-offset-three-fifths {\n    margin-left: 60%; }\n.columns.is-mobile > .column.is-offset-four-fifths {\n    margin-left: 80%; }\n.columns.is-mobile > .column.is-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 8.33333333%; }\n.columns.is-mobile > .column.is-offset-1 {\n    margin-left: 8.33333333%; }\n.columns.is-mobile > .column.is-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 16.66666667%; }\n.columns.is-mobile > .column.is-offset-2 {\n    margin-left: 16.66666667%; }\n.columns.is-mobile > .column.is-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 25%; }\n.columns.is-mobile > .column.is-offset-3 {\n    margin-left: 25%; }\n.columns.is-mobile > .column.is-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 33.33333333%; }\n.columns.is-mobile > .column.is-offset-4 {\n    margin-left: 33.33333333%; }\n.columns.is-mobile > .column.is-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 41.66666667%; }\n.columns.is-mobile > .column.is-offset-5 {\n    margin-left: 41.66666667%; }\n.columns.is-mobile > .column.is-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 50%; }\n.columns.is-mobile > .column.is-offset-6 {\n    margin-left: 50%; }\n.columns.is-mobile > .column.is-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 58.33333333%; }\n.columns.is-mobile > .column.is-offset-7 {\n    margin-left: 58.33333333%; }\n.columns.is-mobile > .column.is-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 66.66666667%; }\n.columns.is-mobile > .column.is-offset-8 {\n    margin-left: 66.66666667%; }\n.columns.is-mobile > .column.is-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 75%; }\n.columns.is-mobile > .column.is-offset-9 {\n    margin-left: 75%; }\n.columns.is-mobile > .column.is-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 83.33333333%; }\n.columns.is-mobile > .column.is-offset-10 {\n    margin-left: 83.33333333%; }\n.columns.is-mobile > .column.is-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 91.66666667%; }\n.columns.is-mobile > .column.is-offset-11 {\n    margin-left: 91.66666667%; }\n.columns.is-mobile > .column.is-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    width: 100%; }\n.columns.is-mobile > .column.is-offset-12 {\n    margin-left: 100%; }\n@media screen and (max-width: 768px) {\n    .column.is-narrow-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n    .column.is-full-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-three-quarters-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-two-thirds-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.6666%; }\n    .column.is-half-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-one-third-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-one-fifth-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 20%; }\n    .column.is-two-fifths-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 40%; }\n    .column.is-three-fifths-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 60%; }\n    .column.is-four-fifths-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-mobile {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-mobile {\n      margin-left: 50%; }\n    .column.is-offset-one-third-mobile {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-mobile {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-mobile {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-mobile {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-mobile {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-mobile {\n      margin-left: 80%; }\n    .column.is-1-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .column.is-offset-1-mobile {\n      margin-left: 8.33333333%; }\n    .column.is-2-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .column.is-offset-2-mobile {\n      margin-left: 16.66666667%; }\n    .column.is-3-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-offset-3-mobile {\n      margin-left: 25%; }\n    .column.is-4-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .column.is-offset-4-mobile {\n      margin-left: 33.33333333%; }\n    .column.is-5-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .column.is-offset-5-mobile {\n      margin-left: 41.66666667%; }\n    .column.is-6-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-offset-6-mobile {\n      margin-left: 50%; }\n    .column.is-7-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .column.is-offset-7-mobile {\n      margin-left: 58.33333333%; }\n    .column.is-8-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .column.is-offset-8-mobile {\n      margin-left: 66.66666667%; }\n    .column.is-9-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-offset-9-mobile {\n      margin-left: 75%; }\n    .column.is-10-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .column.is-offset-10-mobile {\n      margin-left: 83.33333333%; }\n    .column.is-11-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .column.is-offset-11-mobile {\n      margin-left: 91.66666667%; }\n    .column.is-12-mobile {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-offset-12-mobile {\n      margin-left: 100%; } }\n@media screen and (min-width: 769px), print {\n    .column.is-narrow, .column.is-narrow-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n    .column.is-full, .column.is-full-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-three-quarters, .column.is-three-quarters-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-two-thirds, .column.is-two-thirds-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.6666%; }\n    .column.is-half, .column.is-half-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-one-third, .column.is-one-third-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter, .column.is-one-quarter-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-one-fifth, .column.is-one-fifth-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 20%; }\n    .column.is-two-fifths, .column.is-two-fifths-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 40%; }\n    .column.is-three-fifths, .column.is-three-fifths-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 60%; }\n    .column.is-four-fifths, .column.is-four-fifths-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%; }\n    .column.is-offset-half, .column.is-offset-half-tablet {\n      margin-left: 50%; }\n    .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n      margin-left: 80%; }\n    .column.is-1, .column.is-1-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .column.is-offset-1, .column.is-offset-1-tablet {\n      margin-left: 8.33333333%; }\n    .column.is-2, .column.is-2-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .column.is-offset-2, .column.is-offset-2-tablet {\n      margin-left: 16.66666667%; }\n    .column.is-3, .column.is-3-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-offset-3, .column.is-offset-3-tablet {\n      margin-left: 25%; }\n    .column.is-4, .column.is-4-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .column.is-offset-4, .column.is-offset-4-tablet {\n      margin-left: 33.33333333%; }\n    .column.is-5, .column.is-5-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .column.is-offset-5, .column.is-offset-5-tablet {\n      margin-left: 41.66666667%; }\n    .column.is-6, .column.is-6-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-offset-6, .column.is-offset-6-tablet {\n      margin-left: 50%; }\n    .column.is-7, .column.is-7-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .column.is-offset-7, .column.is-offset-7-tablet {\n      margin-left: 58.33333333%; }\n    .column.is-8, .column.is-8-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .column.is-offset-8, .column.is-offset-8-tablet {\n      margin-left: 66.66666667%; }\n    .column.is-9, .column.is-9-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-offset-9, .column.is-offset-9-tablet {\n      margin-left: 75%; }\n    .column.is-10, .column.is-10-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .column.is-offset-10, .column.is-offset-10-tablet {\n      margin-left: 83.33333333%; }\n    .column.is-11, .column.is-11-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .column.is-offset-11, .column.is-offset-11-tablet {\n      margin-left: 91.66666667%; }\n    .column.is-12, .column.is-12-tablet {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-offset-12, .column.is-offset-12-tablet {\n      margin-left: 100%; } }\n@media screen and (max-width: 1023px) {\n    .column.is-narrow-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n    .column.is-full-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-three-quarters-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-two-thirds-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.6666%; }\n    .column.is-half-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-one-third-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-one-fifth-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 20%; }\n    .column.is-two-fifths-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 40%; }\n    .column.is-three-fifths-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 60%; }\n    .column.is-four-fifths-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-touch {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-touch {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-touch {\n      margin-left: 50%; }\n    .column.is-offset-one-third-touch {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-touch {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-touch {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-touch {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-touch {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-touch {\n      margin-left: 80%; }\n    .column.is-1-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .column.is-offset-1-touch {\n      margin-left: 8.33333333%; }\n    .column.is-2-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .column.is-offset-2-touch {\n      margin-left: 16.66666667%; }\n    .column.is-3-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-offset-3-touch {\n      margin-left: 25%; }\n    .column.is-4-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .column.is-offset-4-touch {\n      margin-left: 33.33333333%; }\n    .column.is-5-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .column.is-offset-5-touch {\n      margin-left: 41.66666667%; }\n    .column.is-6-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-offset-6-touch {\n      margin-left: 50%; }\n    .column.is-7-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .column.is-offset-7-touch {\n      margin-left: 58.33333333%; }\n    .column.is-8-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .column.is-offset-8-touch {\n      margin-left: 66.66666667%; }\n    .column.is-9-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-offset-9-touch {\n      margin-left: 75%; }\n    .column.is-10-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .column.is-offset-10-touch {\n      margin-left: 83.33333333%; }\n    .column.is-11-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .column.is-offset-11-touch {\n      margin-left: 91.66666667%; }\n    .column.is-12-touch {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-offset-12-touch {\n      margin-left: 100%; } }\n@media screen and (min-width: 1024px) {\n    .column.is-narrow-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n    .column.is-full-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-three-quarters-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-two-thirds-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.6666%; }\n    .column.is-half-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-one-third-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-one-fifth-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 20%; }\n    .column.is-two-fifths-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 40%; }\n    .column.is-three-fifths-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 60%; }\n    .column.is-four-fifths-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-desktop {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-desktop {\n      margin-left: 50%; }\n    .column.is-offset-one-third-desktop {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-desktop {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-desktop {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-desktop {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-desktop {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-desktop {\n      margin-left: 80%; }\n    .column.is-1-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .column.is-offset-1-desktop {\n      margin-left: 8.33333333%; }\n    .column.is-2-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .column.is-offset-2-desktop {\n      margin-left: 16.66666667%; }\n    .column.is-3-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-offset-3-desktop {\n      margin-left: 25%; }\n    .column.is-4-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .column.is-offset-4-desktop {\n      margin-left: 33.33333333%; }\n    .column.is-5-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .column.is-offset-5-desktop {\n      margin-left: 41.66666667%; }\n    .column.is-6-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-offset-6-desktop {\n      margin-left: 50%; }\n    .column.is-7-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .column.is-offset-7-desktop {\n      margin-left: 58.33333333%; }\n    .column.is-8-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .column.is-offset-8-desktop {\n      margin-left: 66.66666667%; }\n    .column.is-9-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-offset-9-desktop {\n      margin-left: 75%; }\n    .column.is-10-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .column.is-offset-10-desktop {\n      margin-left: 83.33333333%; }\n    .column.is-11-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .column.is-offset-11-desktop {\n      margin-left: 91.66666667%; }\n    .column.is-12-desktop {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-offset-12-desktop {\n      margin-left: 100%; } }\n@media screen and (min-width: 1216px) {\n    .column.is-narrow-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n    .column.is-full-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-three-quarters-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-two-thirds-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.6666%; }\n    .column.is-half-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-one-third-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-one-fifth-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 20%; }\n    .column.is-two-fifths-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 40%; }\n    .column.is-three-fifths-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 60%; }\n    .column.is-four-fifths-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-widescreen {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-widescreen {\n      margin-left: 50%; }\n    .column.is-offset-one-third-widescreen {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-widescreen {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-widescreen {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-widescreen {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-widescreen {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-widescreen {\n      margin-left: 80%; }\n    .column.is-1-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .column.is-offset-1-widescreen {\n      margin-left: 8.33333333%; }\n    .column.is-2-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .column.is-offset-2-widescreen {\n      margin-left: 16.66666667%; }\n    .column.is-3-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-offset-3-widescreen {\n      margin-left: 25%; }\n    .column.is-4-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .column.is-offset-4-widescreen {\n      margin-left: 33.33333333%; }\n    .column.is-5-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .column.is-offset-5-widescreen {\n      margin-left: 41.66666667%; }\n    .column.is-6-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-offset-6-widescreen {\n      margin-left: 50%; }\n    .column.is-7-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .column.is-offset-7-widescreen {\n      margin-left: 58.33333333%; }\n    .column.is-8-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .column.is-offset-8-widescreen {\n      margin-left: 66.66666667%; }\n    .column.is-9-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-offset-9-widescreen {\n      margin-left: 75%; }\n    .column.is-10-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .column.is-offset-10-widescreen {\n      margin-left: 83.33333333%; }\n    .column.is-11-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .column.is-offset-11-widescreen {\n      margin-left: 91.66666667%; }\n    .column.is-12-widescreen {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-offset-12-widescreen {\n      margin-left: 100%; } }\n@media screen and (min-width: 1408px) {\n    .column.is-narrow-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n    .column.is-full-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-three-quarters-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-two-thirds-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.6666%; }\n    .column.is-half-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-one-third-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-one-fifth-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 20%; }\n    .column.is-two-fifths-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 40%; }\n    .column.is-three-fifths-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 60%; }\n    .column.is-four-fifths-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-fullhd {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-fullhd {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-fullhd {\n      margin-left: 50%; }\n    .column.is-offset-one-third-fullhd {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-fullhd {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-fullhd {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-fullhd {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-fullhd {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-fullhd {\n      margin-left: 80%; }\n    .column.is-1-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .column.is-offset-1-fullhd {\n      margin-left: 8.33333333%; }\n    .column.is-2-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .column.is-offset-2-fullhd {\n      margin-left: 16.66666667%; }\n    .column.is-3-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .column.is-offset-3-fullhd {\n      margin-left: 25%; }\n    .column.is-4-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .column.is-offset-4-fullhd {\n      margin-left: 33.33333333%; }\n    .column.is-5-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .column.is-offset-5-fullhd {\n      margin-left: 41.66666667%; }\n    .column.is-6-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .column.is-offset-6-fullhd {\n      margin-left: 50%; }\n    .column.is-7-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .column.is-offset-7-fullhd {\n      margin-left: 58.33333333%; }\n    .column.is-8-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .column.is-offset-8-fullhd {\n      margin-left: 66.66666667%; }\n    .column.is-9-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .column.is-offset-9-fullhd {\n      margin-left: 75%; }\n    .column.is-10-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .column.is-offset-10-fullhd {\n      margin-left: 83.33333333%; }\n    .column.is-11-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .column.is-offset-11-fullhd {\n      margin-left: 91.66666667%; }\n    .column.is-12-fullhd {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; }\n    .column.is-offset-12-fullhd {\n      margin-left: 100%; } }\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n.columns:last-child {\n    margin-bottom: -0.75rem; }\n.columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem); }\n.columns.is-centered {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.columns.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0; }\n.columns.is-gapless > .column {\n      margin: 0;\n      padding: 0 !important; }\n.columns.is-gapless:not(:last-child) {\n      margin-bottom: 1.5rem; }\n.columns.is-gapless:last-child {\n      margin-bottom: 0; }\n.columns.is-mobile {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.columns.is-multiline {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n.columns.is-vcentered {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n@media screen and (min-width: 769px), print {\n    .columns:not(.is-desktop) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n@media screen and (min-width: 1024px) {\n    .columns.is-desktop {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap)); }\n.columns.is-variable .column {\n    padding-left: var(--columnGap);\n    padding-right: var(--columnGap); }\n.columns.is-variable.is-0 {\n    --columnGap: 0rem; }\n.columns.is-variable.is-1 {\n    --columnGap: 0.25rem; }\n.columns.is-variable.is-2 {\n    --columnGap: 0.5rem; }\n.columns.is-variable.is-3 {\n    --columnGap: 0.75rem; }\n.columns.is-variable.is-4 {\n    --columnGap: 1rem; }\n.columns.is-variable.is-5 {\n    --columnGap: 1.25rem; }\n.columns.is-variable.is-6 {\n    --columnGap: 1.5rem; }\n.columns.is-variable.is-7 {\n    --columnGap: 1.75rem; }\n.columns.is-variable.is-8 {\n    --columnGap: 2rem; }\n.tile {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: block;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content; }\n.tile.is-ancestor {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n    margin-top: -0.75rem; }\n.tile.is-ancestor:last-child {\n      margin-bottom: -0.75rem; }\n.tile.is-ancestor:not(:last-child) {\n      margin-bottom: 0.75rem; }\n.tile.is-child {\n    margin: 0 !important; }\n.tile.is-parent {\n    padding: 0.75rem; }\n.tile.is-vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n      margin-bottom: 1.5rem !important; }\n@media screen and (min-width: 769px), print {\n    .tile:not(.is-child) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .tile.is-1 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 8.33333333%; }\n    .tile.is-2 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 16.66666667%; }\n    .tile.is-3 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 25%; }\n    .tile.is-4 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 33.33333333%; }\n    .tile.is-5 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 41.66666667%; }\n    .tile.is-6 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 50%; }\n    .tile.is-7 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 58.33333333%; }\n    .tile.is-8 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 66.66666667%; }\n    .tile.is-9 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 75%; }\n    .tile.is-10 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 83.33333333%; }\n    .tile.is-11 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 91.66666667%; }\n    .tile.is-12 {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 100%; } }\n.hero {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.hero .navbar {\n    background: none; }\n.hero .tabs ul {\n    border-bottom: none; }\n.hero.is-white {\n    background-color: white;\n    color: #0a0a0a; }\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-white strong {\n      color: inherit; }\n.hero.is-white .title {\n      color: #0a0a0a; }\n.hero.is-white .subtitle {\n      color: rgba(10, 10, 10, 0.9); }\n.hero.is-white .subtitle a:not(.button),\n      .hero.is-white .subtitle strong {\n        color: #0a0a0a; }\n@media screen and (max-width: 1023px) {\n      .hero.is-white .navbar-menu {\n        background-color: white; } }\n.hero.is-white .navbar-item,\n    .hero.is-white .navbar-link {\n      color: rgba(10, 10, 10, 0.7); }\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n    .hero.is-white .navbar-link:hover,\n    .hero.is-white .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a; }\n.hero.is-white .tabs a {\n      color: #0a0a0a;\n      opacity: 0.9; }\n.hero.is-white .tabs a:hover {\n        opacity: 1; }\n.hero.is-white .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n      color: #0a0a0a; }\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white; }\n.hero.is-white.is-bold {\n      background-image: linear-gradient(141deg, #e6e5e5 0%, white 71%, white 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-white.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #e6e5e5 0%, white 71%, white 100%); } }\n.hero.is-black {\n    background-color: #0a0a0a;\n    color: white; }\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-black strong {\n      color: inherit; }\n.hero.is-black .title {\n      color: white; }\n.hero.is-black .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-black .subtitle a:not(.button),\n      .hero.is-black .subtitle strong {\n        color: white; }\n@media screen and (max-width: 1023px) {\n      .hero.is-black .navbar-menu {\n        background-color: #0a0a0a; } }\n.hero.is-black .navbar-item,\n    .hero.is-black .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n    .hero.is-black .navbar-link:hover,\n    .hero.is-black .navbar-link.is-active {\n      background-color: black;\n      color: white; }\n.hero.is-black .tabs a {\n      color: white;\n      opacity: 0.9; }\n.hero.is-black .tabs a:hover {\n        opacity: 1; }\n.hero.is-black .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n      color: white; }\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a; }\n.hero.is-black.is-bold {\n      background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-black.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%); } }\n.hero.is-light {\n    background-color: whitesmoke;\n    color: #363636; }\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-light strong {\n      color: inherit; }\n.hero.is-light .title {\n      color: #363636; }\n.hero.is-light .subtitle {\n      color: rgba(54, 54, 54, 0.9); }\n.hero.is-light .subtitle a:not(.button),\n      .hero.is-light .subtitle strong {\n        color: #363636; }\n@media screen and (max-width: 1023px) {\n      .hero.is-light .navbar-menu {\n        background-color: whitesmoke; } }\n.hero.is-light .navbar-item,\n    .hero.is-light .navbar-link {\n      color: rgba(54, 54, 54, 0.7); }\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n    .hero.is-light .navbar-link:hover,\n    .hero.is-light .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n.hero.is-light .tabs a {\n      color: #363636;\n      opacity: 0.9; }\n.hero.is-light .tabs a:hover {\n        opacity: 1; }\n.hero.is-light .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n      color: #363636; }\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke; }\n.hero.is-light.is-bold {\n      background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-light.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%); } }\n.hero.is-dark {\n    background-color: #363636;\n    color: whitesmoke; }\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-dark strong {\n      color: inherit; }\n.hero.is-dark .title {\n      color: whitesmoke; }\n.hero.is-dark .subtitle {\n      color: rgba(245, 245, 245, 0.9); }\n.hero.is-dark .subtitle a:not(.button),\n      .hero.is-dark .subtitle strong {\n        color: whitesmoke; }\n@media screen and (max-width: 1023px) {\n      .hero.is-dark .navbar-menu {\n        background-color: #363636; } }\n.hero.is-dark .navbar-item,\n    .hero.is-dark .navbar-link {\n      color: rgba(245, 245, 245, 0.7); }\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n    .hero.is-dark .navbar-link:hover,\n    .hero.is-dark .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke; }\n.hero.is-dark .tabs a {\n      color: whitesmoke;\n      opacity: 0.9; }\n.hero.is-dark .tabs a:hover {\n        opacity: 1; }\n.hero.is-dark .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n      color: whitesmoke; }\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636; }\n.hero.is-dark.is-bold {\n      background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-dark.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%); } }\n.hero.is-primary {\n    background-color: #00d1b2;\n    color: #fff; }\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-primary strong {\n      color: inherit; }\n.hero.is-primary .title {\n      color: #fff; }\n.hero.is-primary .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-primary .subtitle a:not(.button),\n      .hero.is-primary .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-primary .navbar-menu {\n        background-color: #00d1b2; } }\n.hero.is-primary .navbar-item,\n    .hero.is-primary .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n    .hero.is-primary .navbar-link:hover,\n    .hero.is-primary .navbar-link.is-active {\n      background-color: #00b89c;\n      color: #fff; }\n.hero.is-primary .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-primary .tabs a:hover {\n        opacity: 1; }\n.hero.is-primary .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #00d1b2; }\n.hero.is-primary.is-bold {\n      background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-primary.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%); } }\n.hero.is-link {\n    background-color: #3273dc;\n    color: #fff; }\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-link strong {\n      color: inherit; }\n.hero.is-link .title {\n      color: #fff; }\n.hero.is-link .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-link .subtitle a:not(.button),\n      .hero.is-link .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-link .navbar-menu {\n        background-color: #3273dc; } }\n.hero.is-link .navbar-item,\n    .hero.is-link .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n    .hero.is-link .navbar-link:hover,\n    .hero.is-link .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff; }\n.hero.is-link .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-link .tabs a:hover {\n        opacity: 1; }\n.hero.is-link .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #3273dc; }\n.hero.is-link.is-bold {\n      background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-link.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%); } }\n.hero.is-info {\n    background-color: #209cee;\n    color: #fff; }\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-info strong {\n      color: inherit; }\n.hero.is-info .title {\n      color: #fff; }\n.hero.is-info .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-info .subtitle a:not(.button),\n      .hero.is-info .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-info .navbar-menu {\n        background-color: #209cee; } }\n.hero.is-info .navbar-item,\n    .hero.is-info .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n    .hero.is-info .navbar-link:hover,\n    .hero.is-info .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff; }\n.hero.is-info .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-info .tabs a:hover {\n        opacity: 1; }\n.hero.is-info .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #209cee; }\n.hero.is-info.is-bold {\n      background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-info.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%); } }\n.hero.is-success {\n    background-color: #23d160;\n    color: #fff; }\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-success strong {\n      color: inherit; }\n.hero.is-success .title {\n      color: #fff; }\n.hero.is-success .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-success .subtitle a:not(.button),\n      .hero.is-success .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-success .navbar-menu {\n        background-color: #23d160; } }\n.hero.is-success .navbar-item,\n    .hero.is-success .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n    .hero.is-success .navbar-link:hover,\n    .hero.is-success .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff; }\n.hero.is-success .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-success .tabs a:hover {\n        opacity: 1; }\n.hero.is-success .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #23d160; }\n.hero.is-success.is-bold {\n      background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-success.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%); } }\n.hero.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-warning strong {\n      color: inherit; }\n.hero.is-warning .title {\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning .subtitle {\n      color: rgba(0, 0, 0, 0.9); }\n.hero.is-warning .subtitle a:not(.button),\n      .hero.is-warning .subtitle strong {\n        color: rgba(0, 0, 0, 0.7); }\n@media screen and (max-width: 1023px) {\n      .hero.is-warning .navbar-menu {\n        background-color: #ffdd57; } }\n.hero.is-warning .navbar-item,\n    .hero.is-warning .navbar-link {\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n    .hero.is-warning .navbar-link:hover,\n    .hero.is-warning .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning .tabs a {\n      color: rgba(0, 0, 0, 0.7);\n      opacity: 0.9; }\n.hero.is-warning .tabs a:hover {\n        opacity: 1; }\n.hero.is-warning .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n      color: rgba(0, 0, 0, 0.7); }\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n.hero.is-warning.is-bold {\n      background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-warning.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%); } }\n.hero.is-danger {\n    background-color: #ff3860;\n    color: #fff; }\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-danger strong {\n      color: inherit; }\n.hero.is-danger .title {\n      color: #fff; }\n.hero.is-danger .subtitle {\n      color: rgba(255, 255, 255, 0.9); }\n.hero.is-danger .subtitle a:not(.button),\n      .hero.is-danger .subtitle strong {\n        color: #fff; }\n@media screen and (max-width: 1023px) {\n      .hero.is-danger .navbar-menu {\n        background-color: #ff3860; } }\n.hero.is-danger .navbar-item,\n    .hero.is-danger .navbar-link {\n      color: rgba(255, 255, 255, 0.7); }\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n    .hero.is-danger .navbar-link:hover,\n    .hero.is-danger .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff; }\n.hero.is-danger .tabs a {\n      color: #fff;\n      opacity: 0.9; }\n.hero.is-danger .tabs a:hover {\n        opacity: 1; }\n.hero.is-danger .tabs li.is-active a {\n      opacity: 1; }\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n      color: #fff; }\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1); }\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #ff3860; }\n.hero.is-danger.is-bold {\n      background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%); }\n@media screen and (max-width: 768px) {\n        .hero.is-danger.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%); } }\n.hero.is-small .hero-body {\n    padding-bottom: 1.5rem;\n    padding-top: 1.5rem; }\n@media screen and (min-width: 769px), print {\n    .hero.is-medium .hero-body {\n      padding-bottom: 9rem;\n      padding-top: 9rem; } }\n@media screen and (min-width: 769px), print {\n    .hero.is-large .hero-body {\n      padding-bottom: 18rem;\n      padding-top: 18rem; } }\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n.hero.is-halfheight {\n    min-height: 50vh; }\n.hero.is-fullheight {\n    min-height: 100vh; }\n.hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden; }\n.hero-video video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0); }\n.hero-video.is-transparent {\n    opacity: 0.3; }\n@media screen and (max-width: 768px) {\n    .hero-video {\n      display: none; } }\n.hero-buttons {\n  margin-top: 1.5rem; }\n@media screen and (max-width: 768px) {\n    .hero-buttons .button {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .hero-buttons .button:not(:last-child) {\n        margin-bottom: 0.75rem; } }\n@media screen and (min-width: 769px), print {\n    .hero-buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .hero-buttons .button:not(:last-child) {\n        margin-right: 1.5rem; } }\n.hero-head,\n.hero-foot {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n.hero-body {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 3rem 1.5rem; }\n.section {\n  padding: 3rem 1.5rem; }\n@media screen and (min-width: 1024px) {\n    .section.is-medium {\n      padding: 9rem 1.5rem; }\n    .section.is-large {\n      padding: 18rem 1.5rem; } }\n.footer {\n  background-color: whitesmoke;\n  padding: 3rem 1.5rem 6rem; }\nul {\n  background: #363636; }\n.custom-container {\n  position: fixed;\n  max-height: 90vh;\n  z-index: 2;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_angular__ = __webpack_require__("./node_modules/apollo-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = /** @class */ (function () {
    function SearchComponent(apollo, router) {
        var _this = this;
        this.apollo = apollo;
        this.router = router;
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.isLoading = false;
        this.searchQuery = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query searchComics($search: String!) {\n    comics(search: $search){\n      _id\n      title\n      cover\n      wish\n      publication_date\n      status\n      summary\n    }\n  }\n  "], ["\n  query searchComics($search: String!) {\n    comics(search: $search){\n      _id\n      title\n      cover\n      wish\n      publication_date\n      status\n      summary\n    }\n  }\n  "])));
        this.markComicWish = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation ($comicId: ID!, $wish: Boolean!) {\n    markComicWish(_id: $comicId, wish: $wish) {\n      _id\n      wish\n    }\n  }\n  "], ["\n  mutation ($comicId: ID!, $wish: Boolean!) {\n    markComicWish(_id: $comicId, wish: $wish) {\n      _id\n      wish\n    }\n  }\n  "])));
        this.search$ = function (search) {
            return search ? _this.apollo.watchQuery({
                query: _this.searchQuery, variables: { search: search }
            }).valueChanges : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of({ data: { comics: [] } });
        };
        this.toggleWish = function (comic) {
            _this.apollo.mutate({
                mutation: _this.markComicWish,
                variables: {
                    comicId: comic._id,
                    wish: !comic.wish
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    markComicWish: {
                        __typename: 'Comic',
                        _id: comic._id,
                        wish: !comic.wish
                    },
                },
            }).subscribe();
        };
        this.onGoTo = function (comicId) {
            _this.searchForm.reset();
            _this.router.navigate(['/comic', comicId]);
        };
        this.listed = this.searchForm.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .do(function () { return _this.isLoading = true; })
            .switchMap(function (search) { return _this.search$(search); })
            .map(function (_a) {
            var data = _a.data;
            return data.comics;
        })
            .do(function () { return _this.isLoading = false; });
        // this.listed = Observable.of('spawn')
        //   .debounceTime(500)
        //   .distinctUntilChanged()
        //   .do(() => this.isLoading = true)
        //   .switchMap(search => this.search$(search))
        //   .map(({ data }) => data.comics)
        //   .do(() => this.isLoading = false);
    }
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pou-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_apollo_angular__["a" /* Apollo */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    api_url: 'https://aws.vicenteortiz.me:8084/graphql',
    rest_url: 'https://aws.vicenteortiz.me:8084'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map