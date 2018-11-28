(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pay_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pay/pay.component */ "./src/app/pay/pay.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Cottage on Blair' } },
    { path: 'pay', component: _pay_pay_component__WEBPACK_IMPORTED_MODULE_2__["PayComponent"], data: { title: 'Make payment' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--routed pages and universal footer-->\n<router-outlet></router-outlet>\n<app-footer>Loading...</app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'property';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _mailer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mailer.service */ "./src/app/mailer.service.ts");
/* harmony import */ var _stripe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe.service */ "./src/app/stripe.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _pics_pics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pics/pics.component */ "./src/app/pics/pics.component.ts");
/* harmony import */ var _prices_prices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prices/prices.component */ "./src/app/prices/prices.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _availability_availability_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./availability/availability.component */ "./src/app/availability/availability.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _stripe_stripe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stripe/stripe.component */ "./src/app/stripe/stripe.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pay_pay_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pay/pay.component */ "./src/app/pay/pay.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _splash_splash_component__WEBPACK_IMPORTED_MODULE_8__["SplashComponent"],
                _pics_pics_component__WEBPACK_IMPORTED_MODULE_9__["PicsComponent"],
                _prices_prices_component__WEBPACK_IMPORTED_MODULE_10__["PricesComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _availability_availability_component__WEBPACK_IMPORTED_MODULE_12__["AvailabilityComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _stripe_stripe_component__WEBPACK_IMPORTED_MODULE_14__["StripeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _pay_pay_component__WEBPACK_IMPORTED_MODULE_16__["PayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_mailer_service__WEBPACK_IMPORTED_MODULE_5__["MailerService"], _stripe_service__WEBPACK_IMPORTED_MODULE_6__["StripeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/availability/availability.component.css":
/*!*********************************************************!*\
  !*** ./src/app/availability/availability.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#calendar-bg{\n  border: 1px solid #000;\n  margin: 20px 0 20px 0;\n  border-radius: 10px;\n  padding: 1em;\n}\np{\n\n}\niframe{\n  width: 100%;\n  height: 520px;\n}\n"

/***/ }),

/***/ "./src/app/availability/availability.component.html":
/*!**********************************************************!*\
  !*** ./src/app/availability/availability.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"availability\" class=\"container\">\n  <h2>Availability</h2>\n  <p>Open dates will be blank.  Leased dates are visible.<br>Use the arrows below to see future dates.</p>\n  <div id=\"calendar-bg\">\n    <iframe src=\"https://calendar.google.com/calendar/embed?src=882jpkmmrktiplvqr9p38h3k6c%40group.calendar.google.com&ctz=America%2FNew_York\" frameborder=\"0\" scrolling=\"no\"></iframe>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/availability/availability.component.ts":
/*!********************************************************!*\
  !*** ./src/app/availability/availability.component.ts ***!
  \********************************************************/
/*! exports provided: AvailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityComponent", function() { return AvailabilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvailabilityComponent = /** @class */ (function () {
    function AvailabilityComponent() {
    }
    AvailabilityComponent.prototype.ngOnInit = function () {
    };
    AvailabilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-availability',
            template: __webpack_require__(/*! ./availability.component.html */ "./src/app/availability/availability.component.html"),
            styles: [__webpack_require__(/*! ./availability.component.css */ "./src/app/availability/availability.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AvailabilityComponent);
    return AvailabilityComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n  padding-bottom: 50px;\n}\nform label,form input, form textarea{\n  display: block;\n  padding-left: 5px;\n  width: calc(100% - 10px);\n  border: none;\n  font-size: 1em;\n}\nform label{\n  text-align: center;\n  font-size: 1.5em;\n  margin-top: 10px;\n}\nform input{\n  height: 30px;\n  border: none;\n  margin-bottom: 2px;\n  overflow: hidden;\n}\nform textarea{\n  height: 60px;\n  max-width: calc(100% - 10px);\n  min-width: calc(100% - 10px);\n  padding-top: 5px;\n}\n.error-message{\n  color: white;\n}\nform button{\n  width: 100px;\n  height: 50px;\n  margin-left: calc(50% - 50px);\n  font-size: 1.5em;\n  margin-top: 10px;\n}\nform button:hover{\n  border-radius: 20px;\n  background-color: #99badd;\n  cursor: pointer;\n}\n#contact-bg{\n  position: relative;\n}\n.mail-message{\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 90%;\n  width: 100%;\n  background-color: #99badd;\n  color: #fff;\n  text-align: center;\n  font-size: 2em;\n}\n.mail-message p{\n  margin-top: 100px;\n}\n.message-error{\n  background-color: #e23d3d;\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"gray-bg\">\n  <div class=\"container\">\n      <h2>Contact</h2>\n      <div id=\"contact-bg\">\n        <form id=\"contact-form\"\n        [formGroup]=\"contactForm\"\n        (ngSubmit)=\"onSubmit(contactForm.value)\"\n        >\n          <div class=\"form-group\">\n            <label for=\"name-input\">Name</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"contactForm.controls['name']\" [class.error]=\"!contactForm.controls['name'].valid\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['name'].valid\">Please type your full name</div>\n\n            <label for=\"email-input\">Email</label>\n            <input type=\"email\" class=\"form-control\" [formControl]=\"contactForm.controls['email']\" [class.error]=\"!contactForm.controls['email'].valid\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['email'].valid\">Please provide a valid email (email@something.com)</div>\n            <label for=\"phone-input\">Phone</label>\n            <input type=\"tel\" class=\"form-control\" [formControl]=\"contactForm.controls['phone']\" [class.error]=\"!contactForm.controls['phone'].valid\">\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['phone'].valid\">Please provide a valid phone number (111-222-3333)</div>\n\n            <label for=\"message\">Message</label>\n            <textarea type=\"text\" class=\"form-control\" rows=\"2\" cols=\"50\" [formControl]=\"contactForm.controls['message']\" [class.error]=\"!contactForm.controls['message'].valid\"></textarea>\n            <div class=\"error-message\" *ngIf=\"!contactForm.controls['message'].valid\">Tell me what you need</div>\n          </div>\n          <button type=\"submit\" id=\"contact-submit\" *ngIf=\"contactForm.valid\"><strong>Send</strong></button>\n        </form>\n        <!--message for email sent-->\n        <div *ngIf=\"received\" class=\"mail-message\">\n          <p>Thank you for sending me your information.  <br>I will be in touch soon!</p>\n        </div>\n        <!--message for email sent-->\n        <div *ngIf=\"error\" class=\"mail-message message-error\">\n          <p>There seems to be an issue with the email server.  Please try again soon.</p>\n        </div>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mailer.service */ "./src/app/mailer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, mail) {
        this.fb = fb;
        this.mail = mail;
        this.received = false;
        this.error = false;
        this.contactForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\w+@\w+/)])],
            'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[[\D]?\d[\D]?/)])],
            'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])],
        });
    }
    ContactComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.mail.sendMail(formData)
            .then(function (success) {
            // console.log(success);
            _this.received = true;
        })
            .catch(function (error) {
            console.log(error);
            _this.error = true;
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _mailer_service__WEBPACK_IMPORTED_MODULE_2__["MailerService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\n  list-style: none;\n  text-align: center;\n  padding: 0;\n}\nli{\n  display: inline-block;\n  margin: 0 20px 10px 20px;\n}\nli a{\n  font-size: 1em;\n  color: #000;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n}\nli a:hover{\n  background-color: #99badd;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <nav>\n    <ul>\n      <li><a href=\"#prices\">Prices</a></li>\n      <li><a href=\"#pics\">Pics</a></li>\n      <li><a href=\"#contact\">Contact</a></li>\n      <li><a href=\"#availability\">Availability</a></li>\n    </ul>\n  </nav>\n</section>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Cottage on Blair</title>\n\n<app-splash>Loading...</app-splash>\n<app-prices>Loading...</app-prices>\n<app-pics>Loading...</app-pics>\n\n<app-availability>Loading...</app-availability>\n<app-contact>Loading...</app-contact>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mailer.service.ts":
/*!***********************************!*\
  !*** ./src/app/mailer.service.ts ***!
  \***********************************/
/*! exports provided: MailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailerService", function() { return MailerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailerService = /** @class */ (function () {
    function MailerService(http) {
        this.http = http;
    }
    MailerService.prototype.sendMail = function (formData) {
        return this.http.post('api/contact', formData).toPromise();
    };
    MailerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MailerService);
    return MailerService;
}());



/***/ }),

/***/ "./src/app/pay/pay.component.css":
/*!***************************************!*\
  !*** ./src/app/pay/pay.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  font-size: 3.5em;\n  text-shadow: 1px 1px 0 #000;\n}\nh2{\n  font-size: 2em;\n  color: #000;\n  text-shadow: none;\n  padding: 0 0.5em 0 0.5em;\n}\n#pay-bg{\n  position: relative;\n}\n#pay-online{\n  margin-bottom: 20px;\n}\n#pay-form{\n  margin: 0 auto;\n  padding: 10px;\n}\n#pay-form label, #pay-form input, #pay-form div, #pay-form textarea{\n  display: block;\n  width: 80%;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 5px;\n}\nlabel{\n  font-size: 1.8em;\n  color: #99badd;\n  text-shadow: 1px 1px 0 #000;\n  text-align: right;\n}\n.error-message{\n  color: #fff;\n}\n#amount{\n  height: 50px;\n  font-size: 2em;\n}\ninput{\n  height: 40px;\n  font-size: 1.8em;\n  border-radius: 10px;\n  border: none;\n}\ntextarea{\n  font-size: 1.2em;\n  max-width: 80%;\n  max-height: 400px;\n  min-height: 50px;\n  min-width: 80%;\n}\np{\n  text-align: center;\n  font-size: 1.2em;\n  padding: 1em;\n}\n#pay-submit{\n  display: block;\n  margin: 0 auto;\n  padding: 10px;\n  font-size: 1.2em;\n  color: #000;\n  background-color: #99badd;\n  border-radius: 5px;\n}\n#pay-submit:hover{\n  color: #99badd;\n  background-color: #fff;\n  cursor: pointer;\n}\n#billing-container{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: #619b68;\n  top: 0px;\n  left: 0px;\n}\n#disclaimer{\n  padding: 5px 2em 0 2em;\n  font-size: 0.9em;\n  color: #000;\n}\n#disclaimer span{\n  color: #fff;\n  background-color:\n}\n#billing-container p{\n  color: #fff;\n  text-shadow: 1px 1px 0px #000;\n}\n#billing-container a{\n  text-decoration: none;\n}\n#billing-container button{\n  display: block;\n  margin: 10px auto 0 auto;\n  font-size: 1.5em;\n  padding: 5px;\n  width: 185px;\n  height: 60px;\n}\n#billing-container button:hover{\n  cursor: pointer;\n  background-color: #99badd;\n  color: #fff;\n}\n#stripe-button{\n  width: 185px;\n  margin: 10px auto 10px auto;\n  margin-top: 30px;\n}\n.payment-types{\n  min-height: 25%;\n  padding-top: 10px;\n}\n#paypal{\n  background-color: lightgray;\n}\n#paypal a{\n  display: block;\n  margin: 30px auto 0 auto;\n  width: 185px;\n}\n@media screen and (max-width: 767px){\n  #pay-form label, #pay-form input, #pay-form div, #pay-form textarea{\n    width: 95%;\n    max-width: 95%;\n    min-width: 95%;\n  }\n  h2{\n    font-size: 1.5em;\n  }\n}\n"

/***/ }),

/***/ "./src/app/pay/pay.component.html":
/*!****************************************!*\
  !*** ./src/app/pay/pay.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Make Payment - Cottage on Blair</title>\n<section id=\"pay-online\">\n  <h1>Make Payment</h1>\n  <div id=\"pay-bg\" class=\"container gray-bg\">\n    <form id=\"pay-form\"\n        [formGroup]=\"payForm\"\n        (ngSubmit)=\"onSubmit(payForm.value)\"\n        >\n          <div class=\"form-group\">\n\n            <label for=\"amount-input\">Amount</label>\n            <input id=\"amount\" type=\"number\" class=\"form-control\" [formControl]=\"payForm.controls['amount']\" [class.error]=\"!payForm.controls['amount'].valid\" placeholder=\"$\">\n            <div class=\"error-message\" *ngIf=\"!payForm.controls['amount'].valid\">$ 0000.00</div>\n\n            <label for=\"name-input\">Name</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"payForm.controls['name']\" [class.error]=\"!payForm.controls['name'].valid\">\n            <div class=\"error-message\" *ngIf=\"!payForm.controls['name'].valid\">Please type your full name</div>\n\n            <label for=\"email-input\">Email</label>\n            <input type=\"email\" class=\"form-control\" [formControl]=\"payForm.controls['email']\" [class.error]=\"!payForm.controls['email'].valid\">\n            <div class=\"error-message\" *ngIf=\"!payForm.controls['email'].valid\">Please provide a valid email (email@something.com)</div>\n\n            <label for=\"reason-input\">Reason for Payment</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"payForm.controls['reason']\" [class.error]=\"!payForm.controls['reason'].valid\">\n            <div class=\"error-message\" *ngIf=\"!payForm.controls['reason'].valid\">Payment Reason (ie: rent, utilites, deposit)</div>\n\n            <label for=\"unit-input\">Unit</label>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"payForm.controls['unit']\" [class.error]=\"!payForm.controls['unit'].valid\">\n            <div class=\"error-message\" *ngIf=\"!payForm.controls['unit'].valid\">Room #, House address, etc..</div>\n\n            <label for=\"message\">Message</label>\n            <textarea type=\"text\" class=\"form-control\" rows=\"2\" cols=\"50\" [formControl]=\"payForm.controls['message']\" [class.error]=\"!payForm.controls['message'].valid\" placeholder=\"Optional\"></textarea>\n            <div class=\"error-message\" >Special Instructions, requests?</div>\n\n          </div>\n          <p>Is everything filled out correctly?</p>\n          <button type=\"submit\" id=\"pay-submit\" ><strong>Go to Billing Info</strong></button>\n      </form>\n      <div id=\"billing-container\" *ngIf=\"billingReady\">\n          <div id=\"disclaimer\"><span>Disclaimer:</span> Both of the payment types below charge a <span>2.9%</span> convenience fee that will be added to your transaction.  If you wish to avoid this fee, use the contact button at the bottom to make other arrangments. Payments still must be on time, and any late fees for rent, etc... will be applied no matter what payment method you use.  Please only make one payment request or you may be charged more than once.</div>\n\n        <div class=\"payment-types\">\n          <h2>Use Google Pay or Apple Pay in your browser</h2>\n          <p>This may have limited support on your browser or phone as it is a new feature.  If you see the button, though, you are good!</p>\n          <div id=\"stripe-button\"><app-stripe  [formData]=\"formData\">Loading...</app-stripe></div>\n        </div>\n\n         <div id=\"paypal\" class=\"payment-types\">\n          <h2>If that doesn't suit you, go directly to PayPal</h2>\n          <a href=\"{{paypalUrl}}\" target=\"_blank\"><div id=\"paypal\">\n              <!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n              <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n              <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                 width=\"185px\" height=\"60px\" viewBox=\"0 0 185 60\" enable-background=\"new 0 0 185 60\" xml:space=\"preserve\">\n              <image overflow=\"visible\" width=\"185\" height=\"60\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAA8CAIAAAC1soxgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ\n              bWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp\n              bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6\n              eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1\n              Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo\n              dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw\n              dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv\n              IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS\n              ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD\n              cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOklu\n              c3RhbmNlSUQ9InhtcC5paWQ6RjgyMTcyNDg3MzU5MTFFNkJCOUVDRjYyNEEwOEY2NDQiIHhtcE1N\n              OkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgyMTcyNDk3MzU5MTFFNkJCOUVDRjYyNEEwOEY2NDQiPiA8\n              eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODIxNzI0NjczNTkx\n              MUU2QkI5RUNGNjI0QTA4RjY0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODIxNzI0Nzcz\n              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\">\n              </image>\n              </svg>\n\n          </div></a>\n          <div id=\"venmo\">\n\n          </div>\n        </div>\n\n        <div class=\"payment-types\">\n          <h2>Still can't find what you need?</h2>\n          <p>You can mail a check or possibly make other arrangements.  Please use the contact form for further information.</p>\n          <a href=\"/home#contact\"><button>Contact</button></a>\n        </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pay/pay.component.ts":
/*!**************************************!*\
  !*** ./src/app/pay/pay.component.ts ***!
  \**************************************/
/*! exports provided: PayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayComponent", function() { return PayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mailer.service */ "./src/app/mailer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayComponent = /** @class */ (function () {
    function PayComponent(fb, mail) {
        this.fb = fb;
        this.mail = mail;
        this.received = false;
        this.error = false;
        this.billingReady = false;
        this.payForm = fb.group({
            'amount': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\w+@\w+/)])],
            'reason': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])],
            'unit': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])],
        });
    }
    PayComponent.prototype.ngOnInit = function () {
    };
    PayComponent.prototype.onSubmit = function (formValue) {
        this.formData = formValue;
        this.formData.label = formValue.unit + formValue.reason;
        this.formData.amount = (formValue.amount * 0.029) + formValue.amount;
        this.formData.stripeAmount = this.formData.amount * 100;
        this.paypalUrl = 'https://www.paypal.me/LarryHastings/' + this.formData.amount;
        this.billingReady = true;
        window.scrollTo(0, 0);
    };
    PayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay',
            template: __webpack_require__(/*! ./pay.component.html */ "./src/app/pay/pay.component.html"),
            styles: [__webpack_require__(/*! ./pay.component.css */ "./src/app/pay/pay.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _mailer_service__WEBPACK_IMPORTED_MODULE_2__["MailerService"]])
    ], PayComponent);
    return PayComponent;
}());



/***/ }),

/***/ "./src/app/pics/pics.component.css":
/*!*****************************************!*\
  !*** ./src/app/pics/pics.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/pics/pics.component.html":
/*!******************************************!*\
  !*** ./src/app/pics/pics.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pics\" class=\"gray-bg\">\n  <h2>Pictures</h2>\n</section>\n"

/***/ }),

/***/ "./src/app/pics/pics.component.ts":
/*!****************************************!*\
  !*** ./src/app/pics/pics.component.ts ***!
  \****************************************/
/*! exports provided: PicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicsComponent", function() { return PicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PicsComponent = /** @class */ (function () {
    function PicsComponent() {
    }
    PicsComponent.prototype.ngOnInit = function () {
    };
    PicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pics',
            template: __webpack_require__(/*! ./pics.component.html */ "./src/app/pics/pics.component.html"),
            styles: [__webpack_require__(/*! ./pics.component.css */ "./src/app/pics/pics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PicsComponent);
    return PicsComponent;
}());



/***/ }),

/***/ "./src/app/prices/prices.component.css":
/*!*********************************************!*\
  !*** ./src/app/prices/prices.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-item{\n  width: 50%;\n  float: left;\n}\nh3{\n  text-align: center;\n  font-size: 2em;\n}\n.item ul{\n  padding: 0;\n}\n.item ul li{\n  list-style: none;\n  background-color: #38a608;\n  margin-left: 5px;\n  padding: 5px;\n  font-size: 1.5em;\n  text-align: center;\n}\n.item ul li::first-letter{\n  color: #fff;\n}\n.item p{\n  font-size: 1.3em;\n}\n@media screen and (max-width: 1000px){\n  .col-item{\n    width: 100%;\n  }\n  .item ul li{\n    margin-left: 0px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/prices/prices.component.html":
/*!**********************************************!*\
  !*** ./src/app/prices/prices.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"prices\" class=\"container\">\n  <h2>Prices</h2>\n  <div>\n    <div class=\"col-item item\">\n      <h3>Whole House</h3>\n      <ul>\n        <li>$ 1500.00</li>\n      </ul>\n      <p>The is for the whole house, all for you. Both rooms.</p>\n    </div>\n    <div class=\"col-item item\">\n      <h3>Single Room</h3>\n      <ul>\n        <li>$ 800.00</li>\n      </ul>\n      <p>This is for a single room. There may be another person already present in the other room, but you will need to meet them and you must\n        both agree to live together before you are approved. If the house is empty, then you get the approval authority for anyone new.</p>\n    </div>\n  </div>\n  <div class=\"item\">\n    <h3>Description</h3>\n    <p>This is a smallish house, but it is right downtown, walking/biking distance to all of Savannah and especially all SCAD locations. The house is furnished, except for the bedrooms, so all you need is a bed (full-size max) and maybe a dresser and desk. Furnishings include dishes, living room furniture, breakfast table, and 40 inch smart tv. If you need a lot of space in your bedroom, this is not the place for you, but the location and convenience outweigh any negatives. The internet, water and trash are paid for. The electric is alloted up to $70 a month. Anything over that will be split amongst the tenants or tenant. There is no cable, but you can get all local channels with the antenna and use you favorite apps on the smart tv or, even hook up your own media/gaming system.</p>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/prices/prices.component.ts":
/*!********************************************!*\
  !*** ./src/app/prices/prices.component.ts ***!
  \********************************************/
/*! exports provided: PricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricesComponent", function() { return PricesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricesComponent = /** @class */ (function () {
    function PricesComponent() {
    }
    PricesComponent.prototype.ngOnInit = function () {
    };
    PricesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prices',
            template: __webpack_require__(/*! ./prices.component.html */ "./src/app/prices/prices.component.html"),
            styles: [__webpack_require__(/*! ./prices.component.css */ "./src/app/prices/prices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricesComponent);
    return PricesComponent;
}());



/***/ }),

/***/ "./src/app/splash/splash.component.css":
/*!*********************************************!*\
  !*** ./src/app/splash/splash.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#splash-bg{\n  height: 100vh;\n  background: #a3a3a3 url('pigeon-atop-skyscraper.jpeg') no-repeat 80% 80%/cover;\n}\nnav{\n  padding-top: 50px;\n  text-align: center;\n}\nul{\n  width: 70%;\n  margin: 0 15% 100px 15%;\n  padding: 0;\n}\nnav li{\n  display: inline-block;\n  height: 100px;\n  width: 33.333%;\n}\nli a{\n  text-decoration: none;\n  color: #fff;\n  text-shadow: 1px 1px 0 #000;\n  font-size: 2em;\n}\nli a:hover span{\n  color: #bc0600;\n}\n.icons{\n  height: 100%;\n  width: 100px;\n  box-shadow: 5px 5px 5px #000;\n  border-radius: 100%;\n}\nspan{\n  display: block;\n}\n#rec-icon{\n  text-decoration: none;\n  color: #fff;\n  text-shadow: 1px 1px 0 #000;\n  font-size: 2em;\n}\n#rec-icon:hover span{\n  color: #bc0600;\n}\n#rec-icon img{\n  box-shadow: 0 0 10px 2px #000;\n  border-radius: 10px;\n}\n#pay-online{\n  text-align: center;\n}\n#pay-online a{\n  text-decoration: none;\n  font-size: 2em;\n  color: #fff;\n  border-radius: 5px;\n  background-color: #00000099;\n  padding: 10px;\n}\n#pay-online a:hover{\n  color: #000;\n  background-color: #ffffff99;\n}\n#scroller{\n  position: absolute;\n  bottom: 5px;\n  left: calc(50% - 40px);\n  border-left: 40px solid transparent;\n  border-right: 40px solid transparent;\n  border-top: 40px solid #8b8f96;\n  opacity: 0.5;\n  -webkit-animation-name: blinker;\n          animation-name: blinker;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n#scroller:hover{\n  border-top: 40px solid #bc0600;\n}\n@-webkit-keyframes blinker{\n    0%   {opacity: 0.5;}\n    50%  {opacity: 1;}\n    100%  {opacity: 0.5;}\n}\n@keyframes blinker{\n    0%   {opacity: 0.5;}\n    50%  {opacity: 1;}\n    100%  {opacity: 0.5;}\n}\n@media screen and (max-width: 767px){\n  ul{\n    margin-bottom: 20px;\n  }\n  .icons{\n    height: 80%;\n    width: 80px;\n    box-shadow: 5px 5px 5px #000;\n    border-radius: 100%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/splash/splash.component.html":
/*!**********************************************!*\
  !*** ./src/app/splash/splash.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"splash-bg\">\n  <nav>\n    <ul>\n      <li><a href=\"#prices\"><img class=\"icons\" src=\"../../assets/svgs/prices-icon.svg\" alt=\"prices icon\"><span>Prices</span></a></li>\n      <li><a href=\"#pics\"><img class=\"icons\" src=\"../../assets/svgs/pics-icon.svg\" alt=\"prices icon\"><span>Pics</span></a></li>\n      <li><a href=\"#contact\"><img class=\"icons\" src=\"../../assets/svgs/contact-icon.svg\" alt=\"prices icon\"><span>Contact</span></a></li>\n    </ul>\n    <div><a id=\"rec-icon\" href=\"#availability\"><img src=\"../../assets/svgs/availability-icon.svg\" alt=\"prices icon\"><span>Availability</span></a></div>\n  </nav>\n  <h1>Cottage on Blair</h1>\n  <div id=\"pay-online\"><a [routerLink]=\"['/pay']\">Online Payments</a></div>\n\n  <a href=\"#prices\"><div id=\"scroller\"></div></a>\n</section>\n"

/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/app/stripe.service.ts":
/*!***********************************!*\
  !*** ./src/app/stripe.service.ts ***!
  \***********************************/
/*! exports provided: StripeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeService", function() { return StripeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StripeService = /** @class */ (function () {
    function StripeService() {
        this.stripe = new Stripe(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].publicKey);
    }
    StripeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StripeService);
    return StripeService;
}());



/***/ }),

/***/ "./src/app/stripe/stripe.component.css":
/*!*********************************************!*\
  !*** ./src/app/stripe/stripe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stripe/stripe.component.html":
/*!**********************************************!*\
  !*** ./src/app/stripe/stripe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #payElement><!--Stripe will be inserted--></div>\n\n\n"

/***/ }),

/***/ "./src/app/stripe/stripe.component.ts":
/*!********************************************!*\
  !*** ./src/app/stripe/stripe.component.ts ***!
  \********************************************/
/*! exports provided: StripeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeComponent", function() { return StripeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stripe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stripe.service */ "./src/app/stripe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StripeComponent = /** @class */ (function () {
    function StripeComponent(pmt) {
        this.pmt = pmt;
    }
    StripeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // 1. Instantiate payment object
        this.paymentRequest = this.pmt.stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                amount: this.formData.stripeAmount,
                label: this.formData.label
            },
            requestPayerName: true
        });
        // 2. Init elements - UI
        this.elements = this.pmt.stripe.elements();
        // 3. Create button
        this.prButton = this.elements.create('paymentRequestButton', {
            paymentRequest: this.paymentRequest,
            style: {
                paymentRequestButton: {
                    type: 'buy',
                    theme: 'dark' // 'dark' | 'light' | 'light-outline'
                }
            }
        });
        // 4. Create listener
        this.paymentRequest.on('token', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(event);
                // server side http needs to go here
                setTimeout(function () {
                    event.complete('success');
                }, 1000);
                return [2 /*return*/];
            });
        }); });
        // 5. Mount button async
        this.mountButton();
    };
    StripeComponent.prototype.mountButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRequest.canMakePayment()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.prButton.mount(this.payElement.nativeElement);
                        }
                        else {
                            console.error('your browser does not support this new feature!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StripeComponent.prototype, "formData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('payElement'),
        __metadata("design:type", Object)
    ], StripeComponent.prototype, "payElement", void 0);
    StripeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stripe',
            template: __webpack_require__(/*! ./stripe.component.html */ "./src/app/stripe/stripe.component.html"),
            styles: [__webpack_require__(/*! ./stripe.component.css */ "./src/app/stripe/stripe.component.css")]
        }),
        __metadata("design:paramtypes", [_stripe_service__WEBPACK_IMPORTED_MODULE_1__["StripeService"]])
    ], StripeComponent);
    return StripeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    publicKey: 'pk_test_BVAPdPJyYRewGuDZ3IXncoVB'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hastingsl/Documents/Web_Sites/property/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map