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
exports.getWeatherForecast = void 0;
const axios_1 = __importDefault(require("axios"));
const configuration_1 = require("src/configuration");
const getWeatherForecast = (lat_1, lng_1, ...args_1) => __awaiter(void 0, [lat_1, lng_1, ...args_1], void 0, function* (lat, lng, filter = 'daily') {
    try {
        const response = yield axios_1.default.request({
            method: 'GET',
            url: 'https://api.ambeedata.com/weather/forecast/by-lat-lng',
            params: { lat: lat.toString(10), lng: lng.toString(10), filter },
            headers: { 'x-api-key': configuration_1.AMBEE_API_KEY, 'Content-type': 'application/json' },
        });
        return response.data;
    }
    catch (error) {
        return {
            error,
            message: 'failed',
        };
    }
});
exports.getWeatherForecast = getWeatherForecast;
