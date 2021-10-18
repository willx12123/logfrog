"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
var level_1 = require("./level");
var Options = /** @class */ (function () {
    function Options() {
        this._level = level_1.Level.INFO;
        this._writer = "console";
        this._formatter = "text";
        this._requestUrl = "";
    }
    Object.defineProperty(Options.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: false,
        configurable: true
    });
    Options.prototype.setLevel = function (value) {
        this._level = value;
    };
    Object.defineProperty(Options.prototype, "writer", {
        get: function () {
            return this._writer;
        },
        enumerable: false,
        configurable: true
    });
    Options.prototype.setWriter = function (value) {
        this._writer = value;
    };
    Object.defineProperty(Options.prototype, "formatter", {
        get: function () {
            return this._formatter;
        },
        enumerable: false,
        configurable: true
    });
    Options.prototype.setFormatter = function (value) {
        this._formatter = value;
    };
    Object.defineProperty(Options.prototype, "requestUrl", {
        get: function () {
            return this._requestUrl;
        },
        enumerable: false,
        configurable: true
    });
    Options.prototype.setRequestUrl = function (url) {
        this._requestUrl = url;
    };
    return Options;
}());
exports.Options = Options;
