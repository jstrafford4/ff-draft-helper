webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContestService = (function () {
    function ContestService(http) {
        this.http = http;
    }
    ContestService.prototype.getPlayersForContest = function (position, contestName) {
        return this.http.get("/api/salaries/" + position + "/contest/" + contestName)
            .map(function (res) {
            return res.json();
        });
    };
    ContestService.prototype.assignScoreToSalary = function (position, playerId, contest, score) {
        var body = {
            'position': position,
            'playerId': playerId,
            'contest': contest,
            'score': score
        };
        return this.http.put('/api/scoreSalary', body)
            .map(function (res) {
            console.log("pService result", res);
            return res.json();
        });
    };
    ContestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ContestService);
    return ContestService;
    var _a;
}());
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/contest.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersService = (function () {
    function PlayersService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PlayersService.prototype.getQBs = function () {
        return this.http.get('/api/quarterbacks')
            .map(function (res) {
            return res.json();
        });
    };
    PlayersService.prototype.getRBs = function () {
        return this.http.get('/api/runningbacks')
            .map(function (res) {
            return res.json();
        });
    };
    PlayersService.prototype.getWRs = function () {
        return this.http.get('/api/widereceivers')
            .map(function (res) {
            return res.json();
        });
    };
    PlayersService.prototype.getTEs = function () {
        return this.http.get('/api/tightends')
            .map(function (res) {
            return res.json();
        });
    };
    PlayersService.prototype.draftPlayer = function (position, playerId, wasDrafted) {
        var body = {
            'position': position,
            'playerId': playerId,
            'drafted': wasDrafted
        };
        return this.http.put('/api/draft', body)
            .map(function (res) {
            console.log("pService result", res);
            return res.json();
        });
    };
    PlayersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PlayersService);
    return PlayersService;
    var _a;
}());
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/players.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'Draft Board 2017 Fuck Yeah';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(669),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_players_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_draft_board_draft_board_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contest_contest_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_contest_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'draft',
        pathMatch: 'full'
    },
    {
        path: 'draft',
        component: __WEBPACK_IMPORTED_MODULE_7__components_draft_board_draft_board_component__["a" /* DraftBoardComponent */]
    },
    {
        path: 'contest/:contestName',
        component: __WEBPACK_IMPORTED_MODULE_8__components_contest_contest_component__["a" /* ContestComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_draft_board_draft_board_component__["a" /* DraftBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contest_contest_component__["a" /* ContestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES) // Add routes to the app
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_players_service__["a" /* PlayersService */], __WEBPACK_IMPORTED_MODULE_9__services_contest_service__["a" /* ContestService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contest_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContestComponent = (function () {
    function ContestComponent(route, contestService) {
        this.route = route;
        this.contestService = contestService;
        this.positions = [];
    }
    ContestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.name = params['contestName'];
            _this.getPlayers('qb');
            _this.getPlayers('rb');
            _this.getPlayers('wr');
            _this.getPlayers('te');
            _this.getPlayers('def');
        });
    };
    ContestComponent.prototype.getPlayers = function (position) {
        var _this = this;
        this.contestService.getPlayersForContest(position, this.name).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var player = data_1[_i];
                if (player[_this.name]) {
                    if (player[_this.name]['gameInfo']) {
                        player[_this.name]['gameInfo'] = player[_this.name]['gameInfo'].split(' ')[0];
                    }
                }
            }
            _this.positions.push(data);
        });
    };
    ContestComponent.prototype.saveScore = function (player) {
        if (player.position == 'dst') {
            player.position = 'def';
        }
        this.contestService.assignScoreToSalary(player.position, player.playerId, this.name, player[this.name].score)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ContestComponent.prototype.tierColor = function (player) {
        return 'black';
    };
    ContestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contest',
            template: __webpack_require__(670),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contest_service__["a" /* ContestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_contest_service__["a" /* ContestService */]) === 'function' && _b) || Object])
    ], ContestComponent);
    return ContestComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/contest.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_players_service__ = __webpack_require__(332);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraftBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraftBoardComponent = (function () {
    function DraftBoardComponent(playersService) {
        this.playersService = playersService;
        this.qbs = [];
        this.rbs = [];
        this.wrs = [];
        this.tes = [];
        this.colorClasses = [
            "bg-navy blue",
            "bg-blue aqua",
            "bg-aqua navy",
            "bg-teal",
            "bg-olive silver",
            "bg-maroon white",
            "bg-orange black",
            "bg-black silver",
            "bg-yellow black",
        ];
    }
    DraftBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playersService.getQBs().subscribe(function (data) {
            console.log("QBS!");
            _this.qbs = data;
        });
        this.playersService.getRBs().subscribe(function (data) {
            console.log("RBS!");
            _this.rbs = data;
        });
        this.playersService.getWRs().subscribe(function (data) {
            console.log("WRS!");
            _this.wrs = data;
        });
        this.playersService.getTEs().subscribe(function (data) {
            console.log("TES!");
            _this.tes = data;
        });
    };
    DraftBoardComponent.prototype.draft = function (player) {
        // connect to db
        //player.wasDrafted = !player.wasDrafted;
        //console.log(player);
        this.playersService.draftPlayer(player.position, player.playerId, !player.wasDrafted)
            .subscribe(function (data) {
            console.log("draft results in dbC", data);
            player.wasDrafted = !player.wasDrafted;
        });
    };
    DraftBoardComponent.prototype.tierColor = function (player, tier) {
        if (player.wasDrafted)
            return "strikeout";
        return this.colorClasses[parseInt(tier) % 9];
    };
    DraftBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-draft-board',
            template: __webpack_require__(671),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_players_service__["a" /* PlayersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_players_service__["a" /* PlayersService */]) === 'function' && _a) || Object])
    ], DraftBoardComponent);
    return DraftBoardComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/draft-board.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Jacob/node/display/draft-app/src/environment.js.map

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ".right {\n    max-width:20px;\n}"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ".qb, .te {\n    max-height: 600px;\n    overflow-y:scroll;\n}\n\n.rb, .wr {\n    max-height: 1200px;\n    overflow-y:scroll;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\ntr.strikeout {\n  opacity:.4;\n  text-decoration: line-through;\n}\n\n\n.colorExempt {\n    max-width:20px;\n}"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<h4>{{name}}</h4>\n  <div class=\"col-xs-11\" *ngFor=\"let players of positions\">\n    <hr>\n    <h6>{{players[0].position}}</h6>\n    <hr>\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let player of players\" [ngClass]=\"tierColor(player)\" > \n          <td>{{player.displayName}}</td>\n          <td>{{player[name].gameInfo}}\n          <td>{{player[name].ppg}}</td>\n          <td>{{player[name].salary}}</td>\n          <td class=\"right\"><input (focusout)=\"saveScore(player)\" [(ngModel)]=\"player[name].score\" /></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-3\">\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let qb of qbs\" (click)=\"draft(qb)\" [ngClass]=\"tierColor(qb, qb.rankings.koerner.tier)\" > \n          <td class=\"colorExempt\">{{qb.rankings.koerner.posRank}}</td>\n          <td>{{qb.displayName}}</td>\n          <td>{{qb.ratio}}</td>\n          <td class=\"right\">{{qb.rankings.koerner.tier}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-xs-3 rb\">\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let rb of rbs\" (click)=\"draft(rb)\" [ngClass]=\"tierColor(rb, rb.rankings.koerner.tier)\" > \n          <td class=\"colorExempt\">{{rb.rankings.koerner.posRank}}</td>\n          <td>{{rb.displayName}}</td>\n          <td>{{rb.ratio}}</td>\n          <td class=\"right\">{{rb.rankings.koerner.tier}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-xs-3 wr\">\n    <table class=\"table\">\n      <tbody class=\"colorExempt\">\n        <tr *ngFor=\"let wr of wrs\" (click)=\"draft(wr)\" [ngClass]=\"tierColor(wr, wr.rankings.koerner.tier)\" >\n          <td>{{wr.rankings.koerner.posRank}}</td>\n          <td>{{wr.displayName}}</td>\n          <td>{{wr.ratio}}</td>\n          <td class=\"right\">{{wr.rankings.koerner.tier}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-xs-3\">\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let te of tes\" (click)=\"draft(te)\" [ngClass]=\"tierColor(te, te.rankings.koerner.tier)\" > \n          <td class=\"colorExempt\">{{te.rankings.koerner.posRank}}</td>\n          <td>{{te.displayName}}</td>\n          <td>{{te.ratio}}</td>\n          <td class=\"right\">{{te.rankings.koerner.tier}}</td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[689]);
//# sourceMappingURL=main.bundle.map