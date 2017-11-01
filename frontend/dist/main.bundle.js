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

module.exports = "<!--<app-students></app-students>-->\r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__update_student_update_student_component__ = __webpack_require__("../../../../../src/app/update-student/update-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__update_student_update_student_component__["a" /* UpdateStudentComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */]
                },
                {
                    path: 'updateStudent/:id',
                    component: __WEBPACK_IMPORTED_MODULE_8__update_student_update_student_component__["a" /* UpdateStudentComponent */]
                },
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
    }
    // retrieving students
    StudentService.prototype.getStudents = function () {
        return this.http.get('api/students')
            .map(function (res) { return res.json(); });
    };
    // retrieve one student
    StudentService.prototype.getOneStudent = function (id) {
        return this.http.get('api/student/' + id)
            .map(function (res) { return res.json(); });
    };
    // add student
    StudentService.prototype.addStudent = function (newStudent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/student', newStudent, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // delete student
    StudentService.prototype.deleteStudent = function (id) {
        return this.http.delete('api/student/' + id)
            .map(function (res) { return res.json(); });
    };
    // update student
    StudentService.prototype.updateStudent = function (id) {
        return this.http.put('api/student/' + id, '', '')
            .map(function (res) { return res.json(); });
    };
    return StudentService;
}());
StudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container{\r\n  display: block;\r\n  width: 90%;\r\n  padding: 2em;\r\n  margin: 2em;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nh1{\r\n  margin-bottom: 2rem;\r\n  font-weight: bold;\r\n  font-family: 'Muli';\r\n  font-size: 2em;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n/*.matlist{*/\r\n  /*margin-left: 10px;*/\r\n  /*word-spacing: 30px;*/\r\n/*}*/\r\n\r\n/*.buttonlist{*/\r\n/*margin: 5px;*/\r\n/*}*/\r\n\r\n\r\n/*.matlistdesign{*/\r\n  /*background: white;*/\r\n  /*width: 90%;*/\r\n  /*margin: 10px auto 0px auto;*/\r\n  /*padding: 1em;*/\r\n  /*box-shadow: 1px 1px 0 lightgrey;*/\r\n/*}*/\r\n\r\ntable{\r\n  /*display: block;*/\r\n  width: 90%;\r\n  padding: 2em;\r\n  margin: 2em;\r\n  background: #fff;\r\n  /*display: flex;*/\r\n  /*flex-direction: column;*/\r\n\r\n}\r\n/*.th{*/\r\n  /*margin: 20px;*/\r\n  /*border: 2px black;*/\r\n/*}*/\r\nth{\r\n  color: #ffffff;\r\n  text-align: center;\r\n}\r\ntd{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span> School Information System</span>\r\n  <span class=\"spacer\"></span>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item disabled>\r\n      <mat-icon><i class=\"material-icons\">perm_identity</i></mat-icon>\r\n      <span>Profile</span>\r\n    </button>\r\n    <button mat-menu-item disabled>\r\n      <mat-icon>notifications_off</mat-icon>\r\n      <span>Notifications</span>\r\n    </button>\r\n    <button mat-menu-item disabled>\r\n      <mat-icon>fingerprint</mat-icon>\r\n      <span>Login</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n<mat-tab-group>\r\n  <mat-tab label=\"Create New Student\">\r\n<form (ngSubmit)=\"addStudent()\" name=\"studentForm\">\r\n<div class=\"form-container\">\r\n  <h1> Create New Student Resource</h1>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Surname\" [(ngModel)]=\"surname\" name=\"surname\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\" name=\"name\" required>\r\n    </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"Address\" [(ngModel)]=\"address\" name=\"address\" required>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"number\" placeholder=\"Phone\" [(ngModel)]=\"phone\" name=\"phone\" >\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Gender\" [(ngModel)]=\"gender\" name=\"gender\" required>\r\n      <mat-option value=\"Male\">Male </mat-option>\r\n      <mat-option value=\"Female\">Female </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"number\" placeholder=\"Age\" [(ngModel)]=\"age\" name=\"age\" required>\r\n  </mat-form-field>\r\n\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"Department\" [(ngModel)]=\"department\" name=\"department\" required>\r\n  </mat-form-field>\r\n\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"text\" placeholder=\"Course\" [(ngModel)]=\"course\" name=\"course\" required>\r\n  </mat-form-field>\r\n\r\n\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Level\" [(ngModel)]=\"level\" name=\"level\" required>\r\n      <mat-option value=\"100\">100</mat-option>\r\n      <mat-option value=\"200\">200</mat-option>\r\n      <mat-option value=\"300\">300</mat-option>\r\n      <mat-option value=\"400\">400</mat-option>\r\n      <mat-option value=\"500\">500</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input matInput type=\"number\" placeholder=\"Year Enrolled\" [(ngModel)]=\"year_enrolled\" name=\"year_enrolled\" required>\r\n  </mat-form-field>\r\n\r\n\r\n  <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"openSnackBar()\">Create</button>\r\n\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"View Students\">\r\n\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"bg-primary\">\r\n      <tr>\r\n        <!--<th scope=\"col\">#</th>-->\r\n        <th scope=\"col\">Surname</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Email</th>\r\n        <th scope=\"col\">Phone No</th>\r\n        <th scope=\"col\">Actions</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let student of students\">\r\n        <!--<th scope=\"row\">{{student.surname}}</th>-->\r\n        <td>{{student.surname}}</td>\r\n        <td>{{student.name}}</td>\r\n        <td>{{student.email}}</td>\r\n        <td>{{student.phone}}</td>\r\n        <td><button mat-raised-button class=\"buttonlist\" [routerLink] = \"['/updateStudent', student._id]\"><i class=\"material-icons\" >remove_red_eye</i></button>\r\n          <button mat-raised-button class=\"buttonlist\" color=\"warn\" (click)=\"deleteStudent(student._id)\"><i class=\"material-icons\" >delete</i></button></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    <!--<div>-->\r\n    <!--</div>-->\r\n   </mat-tab>\r\n  </mat-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("../../../../../src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsComponent = (function () {
    function StudentsComponent(snackBar, studentService) {
        this.snackBar = snackBar;
        this.studentService = studentService;
    }
    StudentsComponent.prototype.addStudent = function () {
        var _this = this;
        var newStudent = {
            surname: this.surname,
            name: this.name,
            age: this.age,
            email: this.email,
            address: this.address,
            gender: this.gender,
            phone: this.phone,
            department: this.department,
            course: this.course,
            level: this.level,
            year_enrolled: this.year_enrolled
        };
        this.studentService.addStudent(newStudent)
            .subscribe(function (student) { _this.students.push(student); });
        this.studentService.getStudents()
            .subscribe(function (students) { return _this.students = students; });
    };
    StudentsComponent.prototype.deleteStudent = function (id) {
        var students = this.students;
        this.studentService.deleteStudent(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < students.length; i++) {
                    if (students[i]._id == id) {
                        students.splice(i, 1);
                    }
                }
            }
        });
    };
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents()
            .subscribe(function (students) { return _this.students = students; });
    };
    StudentsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open('Student Added Successfully', 'OK', {
            duration: 4000,
        });
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-students',
        template: __webpack_require__("../../../../../src/app/students/students.component.html"),
        styles: [__webpack_require__("../../../../../src/app/students/students.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _b || Object])
], StudentsComponent);

var _a, _b;
//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ "../../../../../src/app/update-student/update-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container{\r\n  display: block;\r\n  width: 90%;\r\n  padding: 2em;\r\n  margin: 2em;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nh1{\r\n  margin-bottom: 2rem;\r\n  font-weight: bold;\r\n  font-family: 'Muli';\r\n  font-size: 2em;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-student/update-student.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span> School Information System</span>\r\n  <span class=\"spacer\"></span>\r\n\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item disabled>\r\n      <mat-icon><i class=\"material-icons\">perm_identity</i></mat-icon>\r\n      <span>Profile</span>\r\n    </button>\r\n    <button mat-menu-item disabled>\r\n      <mat-icon>notifications_off</mat-icon>\r\n      <span>Notifications</span>\r\n    </button>\r\n    <button mat-menu-item disabled>\r\n      <mat-icon>fingerprint</mat-icon>\r\n      <span>Login</span>\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-tab-group >\r\n<mat-tab label=\"Update Student\" >\r\n<form  (ngSubmit)=\"updateStudent(students._id)\" name=\"studentForm\">\r\n  <div class=\"form-container\">\r\n    <h1> Update Student</h1>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Surname\" [(ngModel)]=\"students.surname\" name=\"surname\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Name\" [(ngModel)]=\"students.name\" name=\"name\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"students.email\" name=\"email\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Address\" [(ngModel)]=\"students.address\" name=\"address\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" placeholder=\"Phone\" [(ngModel)]=\"students.phone\" name=\"phone\" >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Gender\" [(ngModel)]=\"students.gender\" name=\"gender\" required>\r\n    </mat-form-field>\r\n\r\n    <!--<mat-form-field>-->\r\n      <!--<mat-select placeholder=\"Gender\" [(ngModel)]=\"student.gender\" name=\"gender\" required>-->\r\n        <!--<mat-option value=\"Male\">Male </mat-option>-->\r\n        <!--<mat-option value=\"Female\">Female </mat-option>-->\r\n      <!--</mat-select>-->\r\n    <!--</mat-form-field>-->\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" placeholder=\"Age\" [(ngModel)]=\"students.age\" name=\"age\" required>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Department\" [(ngModel)]=\"students.department\" name=\"department\" required>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Course\" [(ngModel)]=\"students.course\" name=\"course\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder=\"Level\" [(ngModel)]=\"students.level\" name=\"level\" required>\r\n    </mat-form-field>\r\n\r\n    <!--<mat-form-field>-->\r\n      <!--<mat-select placeholder=\"Level\" [(ngModel)]=\"student.level\" name=\"level\" required>-->\r\n        <!--<mat-option value=\"100\">100</mat-option>-->\r\n        <!--<mat-option value=\"200\">200</mat-option>-->\r\n        <!--<mat-option value=\"300\">300</mat-option>-->\r\n        <!--<mat-option value=\"400\">400</mat-option>-->\r\n        <!--<mat-option value=\"500\">500</mat-option>-->\r\n      <!--</mat-select>-->\r\n    <!--</mat-form-field>-->\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" placeholder=\"Year Enrolled\" [(ngModel)]=\"students.year_enrolled\" name=\"year_enrolled\" required>\r\n    </mat-form-field>\r\n\r\n\r\n    <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"openSnackBar()\">Update</button>\r\n\r\n  </div>\r\n\r\n</form>\r\n</mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/update-student/update-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("../../../../../src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateStudentComponent = (function () {
    function UpdateStudentComponent(snackBar, studentService) {
        this.snackBar = snackBar;
        this.studentService = studentService;
        this.students = [];
        this.studentObj = {};
    }
    UpdateStudentComponent.prototype.updateStudent = function (id) {
        var updateStd = {
            surname: this.surname,
            name: this.name,
            age: this.age,
            email: this.email,
            address: this.address,
            gender: this.gender,
            phone: this.phone,
            department: this.department,
            course: this.course,
            level: this.level,
            year_enrolled: this.year_enrolled
        };
        var students = this.students;
        this.studentService.updateStudent(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < students.length; i++) {
                    if (students[i]._id == id) {
                        students.push(i, 1);
                    }
                }
            }
        });
    };
    UpdateStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getOneStudent(this._id)
            .subscribe(function (students) { return _this.students = students; });
    };
    UpdateStudentComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open('Student Updated Successfully', 'OK', {
            duration: 4000,
        });
    };
    return UpdateStudentComponent;
}());
UpdateStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-update-student',
        template: __webpack_require__("../../../../../src/app/update-student/update-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/update-student/update-student.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _b || Object])
], UpdateStudentComponent);

var _a, _b;
//# sourceMappingURL=update-student.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map