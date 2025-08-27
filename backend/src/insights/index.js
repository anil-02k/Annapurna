"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const parseDate_1 = require("src/utils/parseDate");
const airQuality_1 = require("./ambee/airQuality");
const airQualityHistory_1 = require("./ambee/airQualityHistory");
const fireLatest_1 = require("./ambee/fireLatest");
const pollenForecast_1 = require("./ambee/pollenForecast");
const pollenHistory_1 = require("./ambee/pollenHistory");
const soilLatest_1 = require("./ambee/soilLatest");
const soilHistory_1 = require("./ambee/soilHistory");
const waterVaporHistory_1 = require("./ambee/waterVaporHistory");
const waterVaporLatest_1 = require("./ambee/waterVaporLatest");
const weatherForecast_1 = require("./ambee/weatherForecast");
const weatherHistory_1 = require("./ambee/weatherHistory");
const weatherLatest_1 = require("./ambee/weatherLatest");
const pollenLatest_1 = require("./ambee/pollenLatest");
const weather_1 = __importDefault(require("./weather"));
const configuration_1 = require("src/configuration");
const perfectResponse_json_1 = __importDefault(require("../data/perfectResponse.json"));
const EnvironmentGrade = __importStar(require("../utils/getEnvGrade"));
const LocationGrade = __importStar(require("../utils/getLocGrade"));
const router = (0, express_1.Router)();
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, express_validator_1.check)('lat')
        .isFloat({ min: -90, max: 90 })
        .run(req);
    yield (0, express_validator_1.check)('lng')
        .isFloat({ min: -180, max: 180 })
        .run(req);
    yield (0, express_validator_1.check)('from')
        .isString()
        .optional({ checkFalsy: true })
        .run(req);
    yield (0, express_validator_1.check)('to')
        .isString()
        .optional({ checkFalsy: true })
        .run(req);
    const endpoints = [
        {
            name: 'airQuality',
            api: airQuality_1.getAirQuality,
        },
        {
            name: 'airQualityHistory',
            api: airQualityHistory_1.getAirQualityHistory,
        },
        {
            name: 'fireLatest',
            api: fireLatest_1.getFireLatest,
        },
        {
            name: 'pollenForecast',
            api: pollenForecast_1.getPollenForecast,
        },
        {
            name: 'pollenHistory',
            api: pollenHistory_1.getPollenHistory,
        },
        {
            name: 'soilLatest',
            api: soilLatest_1.getSoilLatest,
        },
        {
            name: 'soilHistory',
            api: soilHistory_1.getSoilHistory,
        },
        {
            name: 'waterVaporHistory',
            api: waterVaporHistory_1.getWaterVaporHistory,
        },
        {
            name: 'waterVaporLatest',
            api: waterVaporLatest_1.getWaterVaporLatest,
        },
        {
            name: 'weatherForecast',
            api: weatherForecast_1.getWeatherForecast,
        },
        {
            name: 'weatherHistory',
            api: weatherHistory_1.getWeatherHistory,
        },
        {
            name: 'weatherLatest',
            api: weatherLatest_1.getWeatherLatest,
        },
        {
            name: 'pollenLatest',
            api: pollenLatest_1.getPollenLatest,
        },
    ];
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Invalid Parameters',
            errors: errors.array(),
            parametersSent: req.body,
        });
    }
    else {
        try {
            const { lat, lng } = req.body;
            let from, to;
            const usingTimes = !!req.body.from && !!req.body.to;
            if (usingTimes) {
                from = (0, parseDate_1.ambeeDateParse)(from);
                to = (0, parseDate_1.ambeeDateParse)(to);
            }
            let data = {};
            // kyle do magic here
            let soilData;
            if (configuration_1.USE_API) {
                soilData = yield (0, soilLatest_1.getSoilLatest)(lat, lng);
            }
            else {
                // Generate realistic soil data based on location and time
                const baseTemp = 15 + (lat - 40) * 0.5; // Temperature varies with latitude
                const baseMoisture = 25 + Math.sin(Date.now() / 86400000) * 10; // Moisture varies with time
                const tempVariation = (Math.random() - 0.5) * 10; // Add some randomness
                const moistureVariation = (Math.random() - 0.5) * 15;
                soilData = {
                    message: "success",
                    data: [{
                            scantime: new Date().toISOString(),
                            soil_temperature: Math.max(0, Math.min(40, baseTemp + tempVariation)),
                            soil_moisture: Math.max(5, Math.min(80, baseMoisture + moistureVariation))
                        }]
                };
            }
            console.log('Soil data response:', JSON.stringify(soilData, null, 2));
            data["soilLatest"] = soilData;
            const aqi = (configuration_1.USE_API) ? yield (yield (0, airQuality_1.getAirQuality)(lat, lng)).stations[0].AQI : perfectResponse_json_1.default.insights.airQuality.stations[0].AQI;
            const locScore = LocationGrade.getGrade(aqi);
            const { score: locationGrade, description: locationDescription } = LocationGrade.numToGrade(locScore);
            const envgradeScore = EnvironmentGrade.getGrade(soilData.data[0].soil_moisture, soilData.data[0].soil_temperature);
            const { score: environmentGrade, description: environmentDescription } = EnvironmentGrade.numToGrade(envgradeScore);
            console.log(locationDescription);
            for (const endpoint of endpoints) {
                if (["soilLatest"].includes(endpoint.name)) {
                    // skip these since we already did the analysis
                    continue;
                }
                else if (configuration_1.USE_API && req.body[endpoint.name] == 'API') {
                    console.log(`requesting ${endpoint.name} using the api`);
                    const result = yield endpoint.api(lat, lng, from, to);
                    console.log(`${endpoint.name} API response:`, JSON.stringify(result, null, 2));
                    const success = !result.error;
                    if (success) {
                        data[endpoint.name] = result;
                        continue;
                    }
                    else {
                        console.log(`request for ${endpoint.name} failed — using cache`);
                    }
                }
                console.log(`using cached data from ${endpoint.name}`);
                // Generate realistic data for endpoints that have no data
                if (endpoint.name === 'waterVaporLatest') {
                    const humidity = 40 + Math.sin(Date.now() / 86400000) * 20 + (Math.random() - 0.5) * 10;
                    data[endpoint.name] = {
                        message: "success",
                        data: [{
                                _id: "generated",
                                createdAt: new Date().toISOString(),
                                water_vapor: Math.max(20, Math.min(90, humidity))
                            }]
                    };
                }
                else {
                    data[endpoint.name] = perfectResponse_json_1.default.insights[endpoint.name];
                }
            }
            const response = {
                lat,
                lng,
                environment: {
                    environmentGrade, environmentDescription
                },
                location: {
                    locationGrade, locationDescription
                },
                insights: data
            };
            console.log('Final response:', JSON.stringify(response, null, 2));
            return res.json(response);
        }
        catch (err) {
            return res.json(perfectResponse_json_1.default);
        }
    }
});
router.get('/', handler);
router.post('/', handler);
router.use('/weather', weather_1.default);
exports.default = router;
