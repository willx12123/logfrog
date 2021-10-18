"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToText = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var timestampFormat = "YYYY/MM/DD - HH/mm/ss";
function formatToText(log) {
    var ret = log.level + " [" + (0, dayjs_1.default)(log.timestamp).format(timestampFormat) + "] " + log.message;
    if (log.extraFields) {
        ret += Object.keys(log.extraFields)
            .map(function (key) { return key + ": " + log.extraFields[key]; })
            .join("; ");
    }
    return ret;
}
exports.formatToText = formatToText;
