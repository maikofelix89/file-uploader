/**
 * ngx-file-uploader - Angular file uploader
 * @version v0.0.9
 * @author Emmanuel Nyachoke
 * @link https://github.com/enyachoke/ngx-file-uploader#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ticktock"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ticktock"] = factory(root["ng"]["core"], root["ng"]["forms"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(14);
var forms_1 = __webpack_require__(3);
var components_1 = __webpack_require__(1);
var services_1 = __webpack_require__(2);
var FileUploaderModule = (function () {
    function FileUploaderModule() {
    }
    return FileUploaderModule;
}());
FileUploaderModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        providers: [
            services_1.FileUploaderService,
        ],
        declarations: [
            components_1.FileUploderComponent,
        ],
        exports: [
            components_1.FileUploderComponent,
        ]
    })
], FileUploaderModule);
exports.FileUploaderModule = FileUploaderModule;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var noop = function () {
};
var FileUploderComponent = FileUploderComponent_1 = (function () {
    function FileUploderComponent() {
        this.fileChanged = new core_1.EventEmitter();
        this.onClear = new core_1.EventEmitter();
        this.uploading = false;
        // The internal data model
        this.innerValue = '';
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(FileUploderComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Current time string.
    FileUploderComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    FileUploderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    FileUploderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FileUploderComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    FileUploderComponent.prototype.onChange = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        this.uploading = true;
        var fileToLoad = files[0];
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            var data = fileReader.result;
            var fileType = data.substring('data:image/'.length, data.indexOf(';base64'));
            var payload = {
                data: data,
                extension: fileType
            };
            _this.fileChanged.emit(payload);
        };
        fileReader.readAsDataURL(fileToLoad);
    };
    FileUploderComponent.prototype.clear = function () {
        this.value = null;
        this.onClear.emit();
    };
    return FileUploderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FileUploderComponent.prototype, "source", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileUploderComponent.prototype, "fileChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileUploderComponent.prototype, "onClear", void 0);
FileUploderComponent = FileUploderComponent_1 = __decorate([
    core_1.Component({
        selector: 'file-uploader',
        styles: [__webpack_require__(13)],
        template: __webpack_require__(12),
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return FileUploderComponent_1; }), multi: true
            }
        ]
    })
], FileUploderComponent);
exports.FileUploderComponent = FileUploderComponent;
var FileUploderComponent_1;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = __webpack_require__(2);
exports.FileUploaderService = services_1.FileUploaderService;
var components_1 = __webpack_require__(1);
exports.FileUploderComponent = components_1.FileUploderComponent;
var file_uploader_module_1 = __webpack_require__(4);
exports.FileUploaderModule = file_uploader_module_1.FileUploaderModule;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * TickTockService class.
 */
var FileUploaderService = (function () {
    function FileUploaderService() {
    }
    return FileUploaderService;
}());
FileUploaderService = __decorate([
    core_1.Injectable()
], FileUploaderService);
exports.FileUploaderService = FileUploaderService;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".btn-file {\n  position: relative;\n  overflow: hidden; }\n\n.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block; }\n\n#img-upload {\n  width: 100%; }\n\n.image-preview-input input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" readonly [(ngModel)]=\"value\">\n    <div class=\"input-group-btn\">\n\n      <div class=\"btn btn-default image-preview-input\">\n        <span class=\"glyphicon glyphicon-folder-open\"></span>\n        <span class=\"image-preview-input-title\">Take Photo</span>\n        <input type=\"file\" accept=\"image/png, image/jpeg, image/gif\" (blur)=\"onBlur()\" name=\"input-file-preview\" (change)=\"onChange($event)\"\n        />\n        <!-- rename it -->\n      </div>\n      <button *ngIf=\"value\" type=\"button\" (click)=\"clear()\" class=\"btn btn-default image-preview-clear\">\n                        <span class=\"glyphicon glyphicon-remove\"></span> Clear\n    </button>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(10);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map