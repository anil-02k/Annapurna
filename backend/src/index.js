"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("src/configuration");
const app_1 = require("src/app");
const startServer = () => {
    try {
        const app = (0, app_1.getApp)();
        app.listen(configuration_1.PORT, () => {
            console.log(`server started at http://localhost:${configuration_1.PORT}`);
        });
    }
    catch (error) {
        console.error(error);
    }
};
startServer();
