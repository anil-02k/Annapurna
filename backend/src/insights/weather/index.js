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
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const configuration_1 = require("src/configuration");
const parseDate_1 = require("src/utils/parseDate");
const weatherResponse_json_1 = __importDefault(require("src/data/weatherResponse.json"));
const router = (0, express_1.Router)();
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, express_validator_1.check)('from')
        .isString()
        .run(req);
    yield (0, express_validator_1.check)('to')
        .isString()
        .run(req);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Invalid Parameters',
            errors: errors.array(),
            parametersSent: req.body,
        });
    }
    else {
        const from = (0, parseDate_1.weatherDateParse)(req.body.from);
        const to = (0, parseDate_1.weatherDateParse)(req.body.to);
        try {
            if (!configuration_1.USE_API) {
                throw new Error("Problems");
            }
            const result = yield getWeatherForecast(from, to);
            return res.json({
                from,
                to,
                weather: "result",
            });
        }
        catch (err) {
            // return cached data
            console.log("Using cached response");
            return res.json(weatherResponse_json_1.default);
        }
    }
});
router.post('/', handler);
router.get('/', handler);
const getWeatherForecast = (from, to) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.request({
            url: `https://weatherplanner.azure-api.net/v1/Forecast/Des Moines/${from}/${to}`,
            params: { 'subscription-key': configuration_1.WEATHER_API_KEY },
            headers: { 'Content-type': 'application/json' },
        });
        return response.data;
    }
    catch (error) {
        return {
            status: 'failed',
            error: error,
        };
    }
});
exports.default = router;
