"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const insights_1 = __importDefault(require("./insights"));
const earthData_json_1 = __importDefault(require("./data/earthData.json"));
const getApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: "*",
        optionsSuccessStatus: 200
    }));
    // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
    app.all('*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    app.use('/insight', insights_1.default);
    app.get('/data/earth', (req, res) => {
        res.json(earthData_json_1.default);
    });
    return app;
};
exports.getApp = getApp;
