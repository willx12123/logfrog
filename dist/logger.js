"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var formatter_1 = require("./formatter");
var level_1 = require("./level");
var consolersMap = new Map([
    [level_1.LevelStr.DEBUG, console.debug],
    [level_1.LevelStr.INFO, console.info],
    [level_1.LevelStr.WARN, console.warn],
    [level_1.LevelStr.ERROR, console.error],
]);
var levelStringsMap = new Map([
    [level_1.Level.DEBUG, level_1.LevelStr.DEBUG],
    [level_1.Level.INFO, level_1.LevelStr.INFO],
    [level_1.Level.WARN, level_1.LevelStr.WARN],
    [level_1.Level.ERROR, level_1.LevelStr.ERROR],
]);
var Logger = /** @class */ (function () {
    function Logger(options) {
        this.options = options;
    }
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options.level > level_1.Level.DEBUG) {
            return;
        }
        this.output.apply(this, __spreadArray([level_1.Level.DEBUG], args, false));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options.level > level_1.Level.INFO) {
            return;
        }
        this.output.apply(this, __spreadArray([level_1.Level.INFO], args, false));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options.level > level_1.Level.WARN) {
            return;
        }
        this.output.apply(this, __spreadArray([level_1.Level.WARN], args, false));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.options.level > level_1.Level.ERROR) {
            return;
        }
        this.output.apply(this, __spreadArray([level_1.Level.ERROR], args, false));
    };
    Logger.prototype.output = function (level) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var now = +new Date();
        var log = {
            timestamp: now,
            level: (_a = levelStringsMap.get(level)) !== null && _a !== void 0 ? _a : level_1.LevelStr.DEBUG,
            message: this.argsToMessage.apply(this, args),
        };
        switch (this.options.writer) {
            case "all":
                this.logToConsole(log);
                this.logToServer(log);
                break;
            case "server":
                this.logToServer(log);
                break;
            default:
                this.logToConsole(log);
                break;
        }
    };
    Logger.prototype.logToConsole = function (log) {
        var _a;
        var consoler = (_a = consolersMap.get(log.level)) !== null && _a !== void 0 ? _a : console.debug;
        this.options.formatter === "json" ? consoler(log) : consoler((0, formatter_1.formatToText)(log));
    };
    Logger.prototype.logToServer = function (log) { };
    Logger.prototype.argsToMessage = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args
            .map(function (m) {
            switch (typeof m) {
                case "bigint":
                case "number":
                case "string":
                case "symbol":
                    return m;
                case "boolean":
                    return m ? "true" : "false";
                case "function":
                case "undefined":
                    return "";
                case "object":
                    if (!m) {
                        return "";
                    }
                    if (m.toString) {
                        return m.toString();
                    }
                    try {
                        return JSON.stringify(m);
                    }
                    catch (_) {
                        return "";
                    }
            }
        })
            .filter(function (s) { return s !== ""; })
            .join(" ");
    };
    return Logger;
}());
exports.Logger = Logger;
