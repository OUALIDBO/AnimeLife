webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_animapi_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_animapi_global_model__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = (function () {
    function EditPage(navCtrl, navParams, animApiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animApiService = animApiService;
        this.data = new Array();
        this.collectedanims = new __WEBPACK_IMPORTED_MODULE_3__models_animapi_global_model__["a" /* AnimApiGlobal */]();
        this.EditAnimTitle = "Edit anime";
        this.getAnim();
    }
    EditPage.prototype.getAnim = function () {
        var _this = this;
        this.animApiService.getAnimService()
            .then(function (animFetched) {
            _this.collectedanims = animFetched;
        });
    };
    EditPage.prototype.ionViewDidLoad = function () {
        this.label_id = "ID";
        this.label_title = "Title";
        this.label_author = "Author";
        this.label_image = "Image URL";
        this.label_date = "date";
        this.button_label_save = "Save";
        this.button_label_cancel = "Cancel";
        var id = this.navParams.get('id');
        var title = this.navParams.get('title');
        var author = this.navParams.get('author');
        var image = this.navParams.get('image');
        var date = this.navParams.get('date');
        this.data.push({ id: id, title: title, author: author, image: image, date: date });
        console.log('edit.ts data', this.data);
        this.getAnim();
    };
    EditPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    EditPage.prototype.EditAnim = function (id, title, author, image, date) {
        console.log('EditAnim ', title);
        this.animApiService.EditAnimService(id, title, author, image, date);
        this.getAnim();
        this.navCtrl.pop();
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"/Users/oualid/Desktop/AnimeLife/src/pages/edit/edit.html"*/'<!--\n  Generated template for the NewAnimPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{EditAnimTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content *ngFor="let data of data">\n\n  <ion-list >\n\n    <ion-item >\n          <ion-label fixed>{{label_title}}</ion-label>\n          <ion-input [(ngModel)]="title" type="text" value={{data.title}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n          <ion-label fixed>{{label_author}}</ion-label>\n          <ion-input [(ngModel)]="author" type="text" value={{data.author}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n          <ion-label fixed>{{label_image}}</ion-label>\n          <ion-input [(ngModel)]="image" type="text" value={{data.image}}></ion-input>\n    </ion-item>\n\n    <ion-item>\n          <ion-label fixed>{{label_date}}</ion-label>\n          <ion-input [(ngModel)]="date" type="text" value={{data.date}}></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button (click)="EditAnim(data.id,title,author,image,date)" ion-button color="dark">\n    {{button_label_save}}\n\n  </button>\n\n  <button (click)="cancel()" ion-button color="light">\n    {{button_label_cancel}}\n\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/oualid/Desktop/AnimeLife/src/pages/edit/edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_animapi_service__["a" /* AnimApiService */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAnimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_animapi_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAnimPage = (function () {
    //public collectedanims: AnimApiGlobal = new AnimApiGlobal();
    function NewAnimPage(navCtrl, navParams, animApiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animApiService = animApiService;
        this.NewAnimTitle = "Create new anime";
    }
    NewAnimPage.prototype.ionViewDidLoad = function () {
        this.label_title = "Title";
        this.label_author = "Author";
        this.label_image = "Image URL";
        this.label_date = "date";
        this.button_label_save = "Save";
        this.button_label_cancel = "Cancel";
        //this.getAnim();
    };
    /*getAnim(){
  
      this.animApiService.getAnimService()
      .then(animFetched => {
        this.collectedanims = animFetched;
      });
  
  
    }*/
    NewAnimPage.prototype.addAnim = function (title, author, image, date) {
        this.animApiService.addAnimService(title, author, image, date);
        //this.getAnim();
        console.log('addAnim', title);
        this.navCtrl.pop();
    };
    NewAnimPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    NewAnimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-anim',template:/*ion-inline-start:"/Users/oualid/Desktop/AnimeLife/src/pages/new-anim/new-anim.html"*/'<!--\n  Generated template for the NewAnimPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{NewAnimTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n          <ion-label fixed>{{label_title}}</ion-label>\n          <ion-input [(ngModel)]="title" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n          <ion-label fixed>{{label_author}}</ion-label>\n          <ion-input [(ngModel)]="author" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n          <ion-label fixed>{{label_image}}</ion-label>\n          <ion-input [(ngModel)]="image" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n          <ion-label fixed>{{label_date}}</ion-label>\n          <ion-input [(ngModel)]="date" type="text" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button (click)="addAnim(title,author,image,date)" ion-button color="dark">\n    {{button_label_save}}\n\n  </button>\n\n  <button (click)="cancel()" ion-button color="light">\n    {{button_label_cancel}}\n\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/oualid/Desktop/AnimeLife/src/pages/new-anim/new-anim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_animapi_service__["a" /* AnimApiService */]])
    ], NewAnimPage);
    return NewAnimPage;
}());

//# sourceMappingURL=new-anim.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowOnePage = (function () {
    function ShowOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = new Array();
        this.ShowOneTitle = "ShowOne";
    }
    ShowOnePage.prototype.ionViewDidLoad = function () {
        var id = this.navParams.get('id');
        var title = this.navParams.get('title');
        var author = this.navParams.get('author');
        var image = this.navParams.get('image');
        var date = this.navParams.get('date');
        this.data.push({ id: id, title: title, author: author, image: image, date: date });
        console.log('in view show one', this.data);
    };
    ShowOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-one',template:/*ion-inline-start:"/Users/oualid/Desktop/AnimeLife/src/pages/show-one/show-one.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n          {{ShowOneTitle}}\n        </ion-title>\n\n    </ion-navbar>\n\n\n</ion-header>\n\n<ion-content *ngFor="let data1 of data">\n\n\n\n  <ion-item >\n\n      <img src={{data1.image}}/>\n\n      <p>Title: {{data1.title}}</p>\n\n      <p>Author: {{data1.author}} </p>\n\n      <p>Date: {{data1.date}}</p>\n\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/oualid/Desktop/AnimeLife/src/pages/show-one/show-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ShowOnePage);
    return ShowOnePage;
}());

//# sourceMappingURL=show-one.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit/edit.module": [
		279,
		2
	],
	"../pages/new-anim/new-anim.module": [
		280,
		1
	],
	"../pages/show-one/show-one.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimApiGlobal; });
var AnimApiGlobal = (function () {
    function AnimApiGlobal() {
    }
    return AnimApiGlobal;
}());

//# sourceMappingURL=animapi-global.model.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_anim_new_anim__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_one_show_one__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_animapi_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_animapi_global_model__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, animApiService) {
        this.navCtrl = navCtrl;
        this.animApiService = animApiService;
        this.collectedanims = new __WEBPACK_IMPORTED_MODULE_6__models_animapi_global_model__["a" /* AnimApiGlobal */]();
        this.HomeTitle = "Life is Anime";
        this.getAnim();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getAnim();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getAnim();
    };
    HomePage.prototype.getAnim = function () {
        var _this = this;
        this.animApiService.getAnimService()
            .then(function (animFetched) {
            _this.collectedanims = animFetched;
        });
    };
    HomePage.prototype.createNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_anim_new_anim__["a" /* NewAnimPage */]);
    };
    HomePage.prototype.ShowOne = function (clickedID) {
        var id = this.collectedanims.anime[clickedID - 1].id;
        var title = this.collectedanims.anime[clickedID - 1].title;
        var author = this.collectedanims.anime[clickedID - 1].author;
        var image = this.collectedanims.anime[clickedID - 1].image;
        var date = this.collectedanims.anime[clickedID - 1].date;
        var data = {
            id: id,
            title: title,
            author: author,
            image: image,
            date: date
        };
        console.log('showone id', data.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_one_show_one__["a" /* ShowOnePage */], data);
    };
    HomePage.prototype.delete = function (clickedID) {
        this.animApiService.deleteAnimService(clickedID);
        this.getAnim();
    };
    HomePage.prototype.edit = function (id, title, author, image, date) {
        var data = {
            id: id,
            title: title,
            author: author,
            image: image,
            date: date
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_edit__["a" /* EditPage */], data);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/oualid/Desktop/AnimeLife/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Life is Anime\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button (click)= "createNew()" ion-button color="secondary">\n        <ion-icon name="add"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor = "let anim of collectedanims.anime">\n\n\n\n\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n                  <img src={{anim.image}}/>\n                </ion-thumbnail>\n                  <p>{{anim.title}} • {{anim.date}} </p>\n\n                  <p>{{anim.author}}</p>\n                <button (click)="ShowOne(anim.id)" ion-button clear item-end>View</button>\n\n            </ion-item>\n\n        <ion-item-options side="left">\n              <button (click)="edit(anim.id,anim.title,anim.author,anim.image,anim.date)" ion-button color="secondary">\n                <ion-icon name="create"></ion-icon>\n                Edit\n              </button>\n              <button (click)="delete(anim.id)" ion-button color="danger">\n                <ion-icon name="trash"></ion-icon>\n                Delete\n              </button>\n            </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/oualid/Desktop/AnimeLife/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_animapi_service__["a" /* AnimApiService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_anim_new_anim__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_show_one_show_one__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_edit__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_animapi_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_new_anim_new_anim__["a" /* NewAnimPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_show_one_show_one__["a" /* ShowOnePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_edit__["a" /* EditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-anim/new-anim.module#NewAnimPageModule', name: 'NewAnimPage', segment: 'new-anim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-one/show-one.module#ShowOnePageModule', name: 'ShowOnePage', segment: 'show-one', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_new_anim_new_anim__["a" /* NewAnimPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_show_one_show_one__["a" /* ShowOnePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_edit__["a" /* EditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_animapi_service__["a" /* AnimApiService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/oualid/Desktop/AnimeLife/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/oualid/Desktop/AnimeLife/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Core components



// RxJS


var AnimApiService = (function () {
    function AnimApiService(http) {
        this.http = http;
        console.log('Hello anim api service');
    }
    AnimApiService.prototype.getAnimService = function () {
        return this.http.get('https://kidsprofiler.esiea.fr/api/anime')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('error hapened with the get ' + error); });
    };
    AnimApiService.prototype.deleteAnimService = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            id: id
        };
        this.http.delete('https://kidsprofiler.esiea.fr/api/delete_anime/id=' + data.id, options)
            .subscribe(this.getAnimService());
    };
    AnimApiService.prototype.addAnimService = function (title, author, image, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            title: title,
            author: author,
            image: image,
            date: date
        };
        console.log('add begin');
        this.http.put('https://kidsprofiler.esiea.fr/api/add_anime', data, options)
            .subscribe(this.getAnimService());
        console.log('add finished');
    };
    AnimApiService.prototype.EditAnimService = function (id, title, author, image, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            id: id,
            title: title,
            author: author,
            image: image,
            date: date
        };
        var dataTosend = {
            title: title,
            author: author,
            image: image,
            date: date
        };
        console.log('edit service data', data.id);
        console.log('edit begin');
        this.http.put('https://kidsprofiler.esiea.fr/api/edit_anime/id=' + data.id, dataTosend, options)
            .subscribe(this.getAnimService());
        console.log('edit finished');
    };
    AnimApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AnimApiService);
    return AnimApiService;
}());

//# sourceMappingURL=animapi.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map