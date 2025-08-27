"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherDateParse = exports.ambeeDateParse = void 0;
const moment_1 = __importDefault(require("moment"));
/**
 * Converts the date to a ambee readable date
 * @param date In a format parsable by moment
 */
const ambeeDateParse = (date) => {
    return (0, moment_1.default)(date).format('YYYY-MM-DD hh:mm:ss');
};
exports.ambeeDateParse = ambeeDateParse;
const weatherDateParse = (date) => {
    return (0, moment_1.default)(date).format('MM/DD/YYYY');
};
exports.weatherDateParse = weatherDateParse;
