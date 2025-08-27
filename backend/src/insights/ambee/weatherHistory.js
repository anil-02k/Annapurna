"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherHistory = void 0;
const axios_1 = __importDefault(require("axios"));
const configuration_1 = require("src/configuration");
const getWeatherHistory = (lat, lng, from, to) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.request({
            method: 'GET',
            url: 'https://api.ambeedata.com/weather/history/by-lat-lng',
            params: { lat: lat.toString(10), lng: lng.toString(10), from: from, to: to },
            headers: { 'x-api-key': configuration_1.AMBEE_API_KEY, 'Content-type': 'application/json' },
        });
        return response.data;
    }
    catch (error) {
        return {
            error,
            status: 'failed',
        };
    }
});
exports.getWeatherHistory = getWeatherHistory;
